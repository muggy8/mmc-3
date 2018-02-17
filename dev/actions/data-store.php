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
				$idRegex = '/^([^:]+):(\w[\w\d_]{63})$/';
				preg_match($idRegex, $val, $matched);
				if (!$matched || !$matched[0]){
					$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_string`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $val);
				}
				else {
					$statement = self::$conn->prepare("Insert into `mmc_3` (`id`, `data_key`, `data_link`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $matched[2]);
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

		protected static function validTypeName($type){
			if (preg_match("/(\[|\]|:|\.)/i", $type)){
				throw new Exception("The characters ( [, ], :, . ) cannot be used in object types. Type was: $type");
			}
		}

		public static function storeObject($type, $objToStore){
			// we only need to validate this onece when the user calls the function
			self::validTypeName($type);
			self::storeObjectInternally($type, $objToStore);
		}

		// retrieving Objct Functions
		public static function getObject($id){
			$statement = self::$conn->prepare("SELECT * FROM `mmc_3` WHERE `id` = ?");
			$statement->bind_param("s", $id);

			if (!$statement->execute()){
				die("failed to store $id: $key");
			}
			$rows = $statement->get_result();

			$retrievedObject = []; // set the default object
			while($row = $rows->fetch_assoc()){
				$row = (object)$row;
				preg_match('/(\[(.+)])?\.([^\.]+)$/', $row->data_key, $propMatch);
				$propertyName = $propMatch[3];

				if (!$propMatch[2]){ // if the paturn doesn't hold. this value would be null which means that this isn't an array so we cast it here
					$isObject = true;
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
					$propertyValue = self::getObject($row->data_link);
				}

				$retrievedObject[$propertyName] = $propertyValue;
			}

			if ($isObject){
				return (object)$retrievedObject;
			}

			return $retrievedObject;
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
		"MatchHistory" => [
			storage::generateId(32),
			storage::generateId(32),
			storage::generateId(32),
			storage::generateId(32)
		],
		"friends" => [

		],
		"teammates" => [
			(object)[
				"name" => "user-name",
				"age" => 200,
				"accountActivated" => true
			],
			(object)[
				"name" => "other-user-name",
				"age" => 581,
				"accountActivated" => true
			]
		]
	];
	// storage::storeObject("user", $demoObject);

	// now testing attempts to retrieve data
	var_dump(storage::getObject("jxOq61itie1oVQLeTdbyrokAm2bgoVmYE5vFyMMpdhvxHPqmEzRZBj4EvjxcLZPE"), JSON_PRETTY_PRINT);
	var_dump($demoObject, JSON_PRETTY_PRINT);

	// $uname = "muggy8";
	// print_r(storage::saveKeyVal("123abc", "user.name", $uname));
	// $num = 158;
	// print_r(storage::saveKeyVal("123abc", "user.int", $num));
	// $num2 = 15.2;
	// print_r(storage::saveKeyVal("123abc", "user.float", $num2));
	// $bool = true;
	// print_r(storage::saveKeyVal("123abc", "user.bool", $bool));
	//print_r(storage::getObjectDefinition("user"));
