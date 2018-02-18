<?php
	include_once("../../configs.php"); // defines db settings
	include_once("./polyfills.php"); // defines db settings

	class storage {
		protected static $conn = null;

		protected function __construct(){}

	    protected function __clone(){}

		public static function connect($db_server, $db_user, $db_pass, $db_name){
			if (self::$conn){
				return;
			}
			self::$conn = new mysqli($db_server, $db_user, $db_pass, $db_name);
			if (self::$conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
		}

		public static function generateId($length = 32){
			$allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
	    	$id = $allowedCharacters[random_int(0, 51)];
	    	for($i = 1; $i < $length; $i++){
	        	$id = $id . $allowedCharacters[random_int(0, 62)];
	    	}
	    	return $id;
		}

		// utility functions
		protected static function validTypeName($type){
			if (preg_match("/(\[|\]|:|\.)/i", $type)){
				throw new Exception("The characters ( [, ], :, . ) cannot be used in object types. Type was: $type");
			}
		}

		public static function parseCompoundId($compoundId){
			if (preg_match('/^(([^:]+):)?(\w[\w\d_]{63})$/', $compoundId, $matches)){
				return (object)[
					"id" => $matches[3],
					"type" => $matches[2]
				];
			}
			return false;
		}

		// Object Definition Functions
		protected static function getObjectDefinition($type){
			$statement = self::$conn->prepare("Select * from `mmc_3_types` where `mmc_3_types`.`type` = ?");
			$statement->bind_param("s", $type);
			if (!$statement->execute()){
				die("failed to get object definition");
			}
			$res = $statement->get_result();
			$resRows = mysqli_fetch_all($res, MYSQLI_ASSOC);
			$resRowsCount = count($resRows);
			mysqli_free_result($res);
			if (!$resRowsCount){
				return null;
			}
			if ($resRowsCount === 1){
				return (object)$resRows[0];
			}
			return null;
		}

		protected static function createObjectDefinition($type){
			$statement = self::$conn->prepare("Insert into `mmc_3_types` (id, name, type, begins) values (?, ?, ?, ?)");
			$newId = self::generateId(64);
			$statement->bind_param("ssss", $newId, $type, $type, $type);
			if (!$statement->execute()){
				die("failed to create object definition");
			}
		}

		// Storing Object Functions
		protected static function saveKeyVal($id, $key, &$val){
			if (is_string($val)){
				if ($parsedId = self::parseCompoundId($val)){
					$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_link`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $parsedId->id);
				}
				else {
					$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_string`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $val);
				}
			}
			else if (is_int($val)){
				$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_num`) values (?, ?, ?)");
				$statement->bind_param("ssi", $id, $key, $val);
			}
			else if (is_float($val)){
				$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_num`) values (?, ?, ?)");
				$statement->bind_param("ssd", $id, $key, $val);
			}
			else if (is_bool($val)){
				$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_bool`) values (?, ?, ?)");
				$statement->bind_param("ssi", $id, $key, $val);
			} else {
				return $val; // item is an object so we return it and let the store object function handle what to do with it
			}

			// by the time we get here we already have a statement that's prepaired
			if (!$statement->execute()){
				die("failed to store $id: $key");
			}
		}

		protected static function stubSave($id, $key, &$val){
			if (is_object($val) || is_array($val)){
				return $val;
			}
			echo "id = $id, key = $key, val = $val\n\n";
		}

		protected static function storeObjectInternally($type, $objToStore){
			$objectDefinition = self::getObjectDefinition($type);
			if (!$objectDefinition){
				self::createObjectDefinition($type);
				$objectDefinition = self::getObjectDefinition($type);
			}

			$instanceId = self::generateId(64);

			foreach($objToStore as $key => &$val){
				self::validTypeName($key);
				if ($didNotStoreSuccessfully = self::saveKeyVal($instanceId, "$type.$key", $val)) {
					if (is_array($didNotStoreSuccessfully)){
						$objType = $type.".[$key]";
					}
					else {
						$objType = "$type.$key";
					}

					$subObjectLink = self::storeObjectInternally($objType, $didNotStoreSuccessfully);
					self::saveKeyVal($instanceId, "$type.$key", $subObjectLink);
				}
			}
			return "$type:$instanceId";
		}

		public static function storeObject($type, $objToStore){
			// we only need to validate this onece when the user calls the function
			self::validTypeName($type);
			return self::parseCompoundId(
				self::storeObjectInternally($type, $objToStore)
			)->id;
		}

		// retrieving Objct Functions
		public static function getObject($id, $depth = -1){
			if (!$depth || !($idObj = self::parseCompoundId($id))){
				return;
			}
			$id = $idObj->id;
			$type = $idObj->type;

			$statement = self::$conn->prepare("SELECT * FROM `mmc_3` WHERE `id` = ?");
			$statement->bind_param("s", $id);

			if (!$statement->execute()){
				die("failed to store $id: $key");
			}
			$rows = $statement->get_result();

			$retrievedObject = []; // set the default object
			while($row = $rows->fetch_assoc()){ // one row represents a property in an object so we loop over the rows (properties) to rebuild the source object and retreiving sub-objects as we go.
				$row = (object)$row;
				preg_match('/(\[(.+)])?\.([^\.]+)$/', $row->data_key, $propMatch);
				$propertyName = $propMatch[3];

				if (!$propMatch[2]){ // if the paturn doesn't hold. this value would be null which means that this isn't an array so we cast it here
					$isObject = true;
				}

				if ($type && !preg_match('/^'.$type.'/', $row->data_key)) {
					preg_match('/^[^\.]+/', $row->data_key, $typeName);
					return "$typeName[0]:$id";
				}

				// set the property value to the approprite value
				if (!is_null($row->data_bool)){
					$propertyValue = $row->data_bool ? true : false;
				}
				else {
					$propertyValue = $row->data_string ?: $row->data_num;
				}

				// the last case is that the value is a link and if so we recursively get the child object
				if (!$propertyValue && $row->data_link){

					$propertyValue = $type
						? self::getObject("$type:$row->data_link", $depth - 1)
						: self::getObject($row->data_link, $depth - 1);

					if (!$propertyValue){
						$propertyValue = $row->data_key . ":" . $row->data_link;
					}
				}

				$retrievedObject[$propertyName] = $propertyValue;
			}

			if ($isObject){
				return (object)$retrievedObject;
			}

			return $retrievedObject;
		}

		// delete Object Functions
		public static function deleteObject($id, $depth = -1){
			if ($depth && $currentLair = self::getObject($id, 1)){
				// we do head recursion because we want to delete stuff that's the depest in the object first
				foreach($currentLair as &$potentialSubItem){
					if ($subObjectId = self::parseCompoundId($potentialSubItem)->id){
						self::deleteObject($potentialSubItem, $depth-1);
					}
				}

				$idObj = self::parseCompoundId($id);
				$deleteTargetId = $idObj->id;
				$deleteType = $idObj->type;
				$statement = self::$conn->prepare("DELETE FROM `mmc_3` WHERE `id` = ?");
				$statement->bind_param("s", $deleteTargetId);

				if (!$statement->execute()){
					die("failed to delete $id");
				}
			};

		}

		// update Object Functions
		public static function updateObject($id, $object){

		}
	}

	storage::connect(db_server, db_user, db_pass, db_name);

	$demoObject = (object)[
		"name" => "muggy8",
		"nextLevelUp" => 48.22,
		"accountActivated" => true,
		"exp" => 48.22,
		"auth" => (object)[
			"reddit" => storage::generateId(32),
			"facebook" => "",
			"google" => storage::generateId(32)
		],
		"array" => [
			storage::generateId(32),
			storage::generateId(32),
			storage::generateId(32)
		],
		"tasks" => [
			storage::storeObject("task", (object)[
				"name" => "task 1",
				"description" => "This is some worthelss description",
				"random" => storage::generateId(32)
			]),
			storage::storeObject("task", (object)[
				"name" => "task 2",
				"description" => "Null is acceptable?",
				"random" => storage::generateId(32)
			]),
			storage::storeObject("task", (object)[
				"name" => "task 3",
				"description" => "I really need something better to generate demo data",
				"random" => storage::generateId(32)
			])
		]
	];
	// $newId = storage::storeObject("user", $demoObject);
	// print_r($newId);
	// echo json_encode(storage::getObject($newId), JSON_PRETTY_PRINT);

	// now testing attempts to retrieve data
	$previousItem = "user:IeeDltvhj8MHl3TQSqPflkGhmHCoYtiMMMQRdJF0Aabk_xhBUwklf54PpokzkMXY";
	echo json_encode(storage::getObject($previousItem), JSON_PRETTY_PRINT);
	// echo json_encode(storage::getObject($previousItem, 1), JSON_PRETTY_PRINT);
	// echo json_encode($demoObject, JSON_PRETTY_PRINT);
	// storage::deleteObject($previousItem);

	// $uname = "muggy8";
	// print_r(storage::saveKeyVal("123abc", "user.name", $uname));
	// $num = 158;
	// print_r(storage::saveKeyVal("123abc", "user.int", $num));
	// $num2 = 15.2;
	// print_r(storage::saveKeyVal("123abc", "user.float", $num2));
	// $bool = true;
	// print_r(storage::saveKeyVal("123abc", "user.bool", $bool));
	//print_r(storage::getObjectDefinition("user"));
