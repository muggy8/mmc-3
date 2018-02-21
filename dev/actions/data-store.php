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
		protected static function validTypeName($id){
			$idObj = self::parseCompoundId($id);
			if ($idObj->type && preg_match("/(\[|\]|:|\.)/i", $idObj->type)){
				throw new Exception("The characters ( [, ], :, . ) cannot be used in object types. Type was: $type");
			}
		}

		public static function parseCompoundId($compoundId){
			$idObj = (object)[];
			if ($idGroup = preg_match('/^([^:]+:)?(\w[\w\d_]{63})$/', $compoundId, $idMatches)){
				$idObj->id = $idMatches[2];
			}
			if ($typeGroup = preg_match('/^(([^:]+):?)?(\w[\w\d_]{63})?$/', $compoundId, $matches)){
				$idObj->type = $matches[2];
				if ($idObj->type == $idObj->id) {
					unset($idObj->type);
				}
			}
			if ($idObj->type || $idObj->id) {
				return $idObj;
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
			// return self::stubSave($id, $key, $val);
			if (is_string($val)){
				$parsedId = self::parseCompoundId($val);
				if ($parsedId && $parsedId->id && $parsedId->type){
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

		protected static function storeObjectInternally($id, $objToStore){
			$idObj = self::parseCompoundId($id);
			$type = $idObj->type;
			if (!$type){
				throw new Exception("Type not provided");
			}
			$instanceId = $idObj->id ?: self::generateId(64);

			if ($idObj->id){
				$currentLair = self::getObject($id, 1, true);
				print_r($currentLair);
			}

			foreach($objToStore as $key => &$val){
				self::validTypeName($key);
				if (!is_null(
					$didNotStoreSuccessfully = self::saveKeyVal(
						$instanceId,
						is_array($objToStore) ? "$type.[$key]" : "$type.$key",
						$val
					)
				)){
					$subObjectLink = self::storeObjectInternally("$type.$key", $didNotStoreSuccessfully);

					self::saveKeyVal(
						$instanceId,
						is_array($objToStore) ? "$type.[$key]" : "$type.$key",
						$subObjectLink
					);
				}
				if ($currentLair){
					unset($currentLair->{$key});
				}
			}
			return "$type:$instanceId";
		}

		public static function storeObject($type, $objToStore){
			// we only need to validate this onece when the user calls the function
			self::validTypeName($type);
			return self::storeObjectInternally($type, $objToStore);
		}

		// retrieving Objct Functions
		public static function getObject($id, $depth = -1, $identify = false){
			if (!$depth || !($idObj = self::parseCompoundId($id))){
				return;
			}
			$id = $idObj->id;
			$type = $idObj->type;

			// todo: caching results from DB so we dont overwhelm the db with hundreds of db calls per user reqeust

			$statement = self::$conn->prepare("SELECT * FROM `mmc_3` WHERE `id` = ?");
			$statement->bind_param("s", $id);

			if (!$statement->execute()){
				die("failed to store $id: $key");
			}
			$rows = $statement->get_result();

			$retrievedObject = [];
			while($row = $rows->fetch_assoc()){ // one row represents a property in an object so we loop over the rows (properties) to rebuild the source object and retreiving sub-objects as we go.
				$row = (object)$row;

				// regex to match the ending name and the item before it to find out if the current object we are assembeling is an array or an object
				preg_match('/\.(([^\.\[\]]+)|([^\.]+))$/', $row->data_key, $propMatch);
				$propertyName = $propMatch[2] ?: preg_replace('/\[|\]/', "", $propMatch[3]);
				$expectedObjKey = "$type.$propertyName";
				$expectedArrayKey = "$type.[$propertyName]";

				if ($propMatch[2]){ // if the property matches ....propname then it's not an array so we note it down here for future reference. because this is in a while loop. any instance of missmatch will trigger this flag for later
					$isObject = true;
				}

				// if this object has a type, we expect a certain key name and if it isn't then this value isn't a part of the selected object so out liers are just noted down by their complexId instead
				if ($type && $row->data_key != $expectedObjKey && $row->data_key != $expectedArrayKey) {
					preg_match('/^[^\.]+/', $row->data_key, $typeName);
					return "$typeName[0]:$id";
				}

				if (!is_null($row->data_bool)){
					$propertyValue = $row->data_bool ? true : false;
				}
				else {
					$propertyValue = $row->data_string ?: $row->data_num;
				}

				// the last case is that the value is a link and if so we recursively get the child object
				if (!$propertyValue && $row->data_link){
					$propertyValue =
						$type
						? self::getObject("$row->data_key:$row->data_link", $depth - 1)
						: self::getObject($row->data_link, $depth - 1);

					if (!$propertyValue){
						$propertyValue = $row->data_key . ":" . $row->data_link;
					}
				}

				if ($identify){
					$propertyValue = (object)[
						"id" => $row->id,
						"key" => $row->data_key,
						"value" => $propertyValue
					];
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
				$idObj = self::parseCompoundId($id);
				$id = $idObj->id;
				$type = $idObj->type;

				if (!is_string($currentLair)){
					foreach($currentLair as &$potentialSubItem){
						$subItemIdObj = self::parseCompoundId($potentialSubItem);
						if ($subItemIdObj){
							$type
								? self::deleteObject($potentialSubItem, $depth-1)
								: self::deleteObject($subItemIdObj->id, $depth-1);
						}
					}
					$statement = self::$conn->prepare("DELETE FROM `mmc_3` WHERE `id` = ?");
					$statement->bind_param("s", $id);

					if (!$statement->execute()){
						die("failed to delete $id");
					}
					// echo "select * from `mmc_3` WHERE `id` = '$id' union \n";
				}
			};
		}

		// update Object Functions
		// public static function updateObject($id, $object){
		// 	$idObj = self::parseCompoundId($id);
		// 	$currentLair = self::getObject($id, 1, true);
        //
		// 	print_r($currentLair);
        //
		// 	foreach($object as $prop => &$val){
		// 		if ($object->{$prop} !== $currentLair->{$prop}->value){
		// 			// sql query to update the prop
        //
		// 			$propName = $currentLair->{$prop}->key;
		// 			$propId = $currentLair->{$prop}->id ?: self::generateId(64);
		// 			$newVal = $object->{$prop};
		// 			if (!is_null($didNotStoreSuccessfully = self::saveKeyVal($propId, $propName, $newVal))){
		// 				self::updateObject($currentLair->{$prop}->id, $didNotStoreSuccessfully);
		// 			}
		// 			// remove prop from the currentLair
		// 		}
		// 	}
		// 	//loop through the remaining props in current lair and delete them cuz the new one doesn't have them
		// 	foreach($currentLair as $prop => &$val){
		// 		self::deleteObject("$val->key:$val->id");
		// 	}
		// }
	}

	storage::connect(db_server, db_user, db_pass, db_name);

	// $demoObject = (object)[
	// 	"name" => "muggy8",
	// 	"nextLevelUp" => 48.22,
	// 	"accountActivated" => true,
	// 	"exp" => 48.22,
	// 	"auth" => (object)[
	// 		"reddit" => storage::generateId(32),
	// 		"facebook" => "",
	// 		"google" => storage::generateId(32)
	// 	],
	// 	"array" => [
	// 		storage::generateId(32),
	// 		storage::generateId(32),
	// 		storage::generateId(32)
	// 	],
	// 	"tasks" => [
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 1",
	// 			"description" => "This is some worthelss description",
	// 			"random" => storage::generateId(32)
	// 		]),
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 2",
	// 			"description" => "Null is acceptable?",
	// 			"random" => storage::generateId(32)
	// 		]),
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 3",
	// 			"description" => "I really need something better to generate demo data",
	// 			"random" => storage::generateId(32)
	// 		])
	// 	]
	// ];
	// $newId = storage::storeObject("user", $demoObject);
	// echo "$newId\n";
	// $clone = storage::getObject($newId);
	// $clone->name = "clone";
	// $clone->original = $newId;
	// $cloneId = storage::storeObject("user", $clone);
	// echo "$cloneId\n";


	// now testing attempts to retrieve data
	$previousNew = "user:ofWCneCprHonHv3sdr0_nAjUeNRMUJg9F1cAnWzwLLjmQ9lig5udbeGPpb3U9oln";
	$previousClone = "S68a5qAaTaKoaKc9RSUe6gK5VAfJPjYDMf9ywpC16vn4nwhGegaBGfkv7ISkhUef";
	// $user = storage::getObject($previousNew);
	// echo json_encode($user, JSON_PRETTY_PRINT);
	// $user->auth->facebook = storage::generateId(32);
	// array_splice($user->tasks, 1);
	// $user->nextLevelUp = 18.22;
	// $user->weapon = storage::generateId(32);
	// echo json_encode($user, JSON_PRETTY_PRINT);
	// storage::storeObject($previousNew, $user);

	// storage::deleteObject($previousClone);
	// echo json_encode($src = storage::getObject($previousNew), JSON_PRETTY_PRINT);
	// echo json_encode($clone = storage::getObject($previousClone), JSON_PRETTY_PRINT);

	// $clone->original = storage::storeObject("user", $src);
	// storage::storeObject("user", $clone);
	// echo json_encode($demoObject, JSON_PRETTY_PRINT);

	// $uname = "muggy8";
	// print_r(storage::saveKeyVal("123abc", "user.name", $uname));
	// $num = 158;
	// print_r(storage::saveKeyVal("123abc", "user.int", $num));
	// $num2 = 15.2;
	// print_r(storage::saveKeyVal("123abc", "user.float", $num2));
	// $bool = true;
	// print_r(storage::saveKeyVal("123abc", "user.bool", $bool));
	//print_r(storage::getObjectDefinition("user"));
