<?php
	include_once("globals.php"); // defines db settings
	include_once("polyfills.php"); // defines db settings

	class storage {
		protected static $conn = null;
		protected static $table = null;
		protected static $allowedOpperators = [
			"between",
			"=",
			"!=",
			"<=>",
			">",
			">=",
			"in",
			"not in",
			"<",
			"<=",
			"like",
			"not between",
			"not like"
		];

		protected function __construct(){}

	    protected function __clone(){}

		public static function connect($db_server, $db_user, $db_pass, $db_name, $table_name){
			if (self::$conn){
				return;
			}
			self::$conn = new mysqli($db_server, $db_user, $db_pass, $db_name);
			if (self::$conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
			self::$table = $table_name;
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
				throw new Exception("The characters ( [, ], :, . ) cannot be used in object types. Type was: $idObj->type");
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

		// Storing Object Functions
		protected static function saveKeyVal($id, $key, &$val){
			return self::stubSave($id, $key, $val);
			if (is_string($val)){
				$parsedId = self::parseCompoundId($val);
				if ($parsedId && $parsedId->id && $parsedId->type){
					$statement = self::$conn->prepare("replace into `" . self::$table . "` (`id`, `data_key`, `data_link`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $parsedId->id);
				}
				else {
					$statement = self::$conn->prepare("replace into `" . self::$table . "` (`id`, `data_key`, `data_string`) values (?, ?, ?)");
					$statement->bind_param("sss", $id, $key, $val);
				}
			}
			else if (is_int($val)){
				$statement = self::$conn->prepare("replace into `" . self::$table . "` (`id`, `data_key`, `data_num`) values (?, ?, ?)");
				$statement->bind_param("ssi", $id, $key, $val);
			}
			else if (is_float($val)){
				$statement = self::$conn->prepare("replace into `" . self::$table . "` (`id`, `data_key`, `data_num`) values (?, ?, ?)");
				$statement->bind_param("ssd", $id, $key, $val);
			}
			else if (is_bool($val)){
				$statement = self::$conn->prepare("replace into `" . self::$table . "` (`id`, `data_key`, `data_bool`) values (?, ?, ?)");
				$statement->bind_param("ssi", $id, $key, $val);
			} else {
				return $val; // item is an object so we return it and let the store object function handle what to do with it
			}

			// by the time we get here we already have a statement that's prepaired
			if (!$statement->execute()){
				die("failed to store $id: $key = $val");
			}
		}

		protected static function stubSave($id, $key, &$val){
			if (is_object($val) || is_array($val)){
				return $val;
			}
			echo "\n\nid = $id, key = $key, val = $val\n\n";
		}

		protected static function storeObjectInternally($id, $objToStore){
			$idObj = self::parseCompoundId($id);
			$type = $idObj->type;
			if (!$type){
				throw new Exception("Type not provided");
			}
			$instanceId = $idObj->id ?: self::generateId(64);

			if ($idObj->id){ // we know we can get here because type is required or we error so we just need to check there's an id and we'd know that the compound id has a type and id
				$currentLair = self::internallyConsistantGet($id, 1, true);
			}

			foreach($objToStore as $key => &$val){
				self::validTypeName($key);
				$storageKey = is_array($objToStore) ? "$type.[$key]" : "$type.$key";
				if (!is_null(
					$didNotStoreSuccessfully = self::saveKeyVal(
						$instanceId,
						$storageKey,
						$val
					)
				)){
					if ($currentLair){
						$currentLairTarget = is_array($currentLair) ? $currentLair[$key] : $currentLair->{$key};
						$overwriteId = $currentLairTarget->key . ":" . $currentLairTarget->id;
					}

					$subObjectLink = self::storeObjectInternally(
						$overwriteId ?: $storageKey,
						$didNotStoreSuccessfully
					);

					self::saveKeyVal(
						$instanceId,
						$storageKey,
						$subObjectLink
					);
				}
				// keep track of what we dont need to delete at the end
				if ($currentLair){
					is_array($currentLair) ? ($currentLair[$key] = null) : ($currentLair->{$key} = null);
				}
			}

			if ($idObj->id){
				foreach($currentLair as &$toDelete){
					$deletedExtras = $toDelete ? self::deleteObject($toDelete->key . ":" . $toDelete->id) : true;

					if (!$deletedExtras){
						// must mean that this isn't a object to delete and instead it is a property so we have to sql query to delete it
						$statement = self::$conn->prepare("DELETE FROM `" . self::$table . "` WHERE `id` = ? and data_key = ?");
						$statement->bind_param("ss", $toDelete->id, $toDelete->key);

						if (!$statement->execute()){
							die("failed to delete $id");
						}
					}
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
		protected static function getObject(&$requestCache, $recursionBranchHistory, &$id, $depth = -1, $identify = false){
			if (!$depth || !($idObj = self::parseCompoundId($id))){
				return;
			}
			$id = $idObj->id;
			$type = $idObj->type;

			if ($recursionBranchHistory->{$id}) {
				return $recursionBranchHistory->{$id} . ":" . $id;
			}

			$recursionBranchHistory->{$id} = true;

			if ($requestCache->{$id}){
				return $requestCache->{$id};
			}

			$statement = self::$conn->prepare("SELECT * FROM `" . self::$table . "` WHERE `id` = ?");
			$statement->bind_param("s", $id);

			if (!$statement->execute()){
				die("failed to store $id: $key");
			}
			$rows = $statement->get_result();

			$retrievedObject = [];
			while($row = $rows->fetch_assoc()){ // one row represents a property in an object so we loop over the rows (properties) to rebuild the source object and retreiving sub-objects as we go.
				$row = (object)$row;

				preg_match('/^[^\.]+/', $row->data_key, $baseNameMatch);
				$currentBaseType = $baseNameMatch[0];
				$recursionBranchHistory->{$id} = $currentBaseType;

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
					$requestCache->{$id} = "$currentBaseType:$row->id";
					return $requestCache->{$id};
				}

				if (!is_null($row->data_bool)){
					$propertyValue = $row->data_bool ? true : false;
				}
				else {
					$propertyValue = $row->data_string ?: $row->data_num;
				}

				// the last case is that the value is a link and if so we recursively get the child object
				if (!$propertyValue && $row->data_link){
					$childId = $type ? "$row->data_key:$row->data_link" : $row->data_link;
					$propertyValue = self::getObject($requestCache, $recursionBranchHistory, $childId , $depth - 1, $identify, $currentBaseType);

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
				$requestCache->{$id} = (object)$retrievedObject;
			}
			else {
				$requestCache->{$id} = $retrievedObject;
			}

			return $requestCache->{$id};

		}

		protected static function internallyConsistantGet($id, $depth = -1, $identify = false){
			$requestCache = (object)[];
			return self::getObject($requestCache, (object)[], $id, $depth, $identify);
		}

		public static function get($id, $depth = -1, $identify = false){
			self::validTypeName($id);
			return self::internallyConsistantGet($id, $depth, $identify);
		}

		// delete Object Functions
		public static function deleteObject($id, $depth = -1){

			if ($depth && $currentLair = self::internallyConsistantGet($id, 1)){
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
					$statement = self::$conn->prepare("DELETE FROM `" . self::$table . "` WHERE `id` = ?");
					$statement->bind_param("s", $id);

					if (!$statement->execute()){
						die("failed to delete $id");
					}
					return true;
				}
				return false;
			}
			else {
				return false;
			}
		}

		// search methods
		protected static function findInputType(&$input){
			if (is_string($input)){
				return 's';
			}
			if (is_int($input)){
				return 'i';
			}
			if (is_float($input)){
				return 'd';
			}
			if (is_bool($input)){
				return 'i';
			}

			throw new Exception("This type of data cannot be used safely with this sytem. Try using traditional SQL");
		}

		protected static function getRootObjectIdFrom(&$res, &$addTo = []){
			if (preg_match('/^([^\.]+)\.[^\.]+$/', $res->data_key, $matches)) {
				array_push($addTo, "$matches[1]:$res->id");
			}
			else {
				preg_match('/^([^\.]+)/', $res->data_key, $matches);
				$keyLike = "$matches[0].%";
				$link = $res->id;
				$statement = self::$conn->prepare("SELECT * from `" . self::$table . "` where `data_key` like ? and `data_link` = ? ;");
				$statement->bind_param('ss', $keyLike, $link);

				$statement->execute();

				$rows = $statement->get_result();
				while ($row = $rows->fetch_assoc()){
					$row = (object)$row;

					self::getRootObjectIdFrom($row, $addTo);
				}
				return $addTo;
			}
		}

		public static function index($type, $value, $opperator = '='){
			$lowerCaseOpperator = strtolower($opperator);
			if (!in_array($lowerCaseOpperator, self::$allowedOpperators)){
				echo "Allowed Opperators are " . implode(", ", self::$allowedOpperators);
				throw new Exception("$opperator is an Invalid Search Opperator");
			}

			$dbType = preg_replace('/([^\.])\[/', '$1.[', $type);
			$dbType = preg_replace('/\[\*\]/', '[%]', $dbType);

			// for between / not between queries
			if (($lowerCaseOpperator == "between" || $lowerCaseOpperator == "not between") && is_array($value) && count($value) == 2) {
				if (!is_numeric($value[0]) || !is_numeric($value[1])){
					throw new Exception("Cannot use non numarics for between. Try using standard SQL instead");
				}
				$statement = self::$conn->prepare("SELECT * from `" . self::$table . "` where `data_key` like ? and ( `data_num` $lowerCaseOpperator ? and ? ) ;");
				// if (!$statement){
				// 	die("Connection failed: " . htmlspecialchars(self::$conn->error));
				// }
				$statement->bind_param("s" . self::findInputType($value[0]) . self::findInputType($value[1]), $dbType, $value[0], $value[1]);
			}

			// for in / not in queries
			else if (($lowerCaseOpperator == "=" || $lowerCaseOpperator == "!=" || $lowerCaseOpperator == "in" || $lowerCaseOpperator == "not in") && is_array($value)){
				if ($lowerCaseOpperator == "="){
					$lowerCaseOpperator = "in";
				}
				if ($lowerCaseOpperator == "!="){
					$lowerCaseOpperator = "not in";
				}

				throw new Exeption("Range query is currently not supported");
				$statement = self::$conn->prepare("SELECT * from `" . self::$table . "` `data_key` like ? and ...");
			}

			// the every other case
			else if (!is_array($value)){
				$inputType = self::findInputType($value);
				if ($inputType === 's'){
					$maybeId = self::parseCompoundId($value)->id;
				}
				$statement = self::$conn->prepare("SELECT * from `" . self::$table . "` where `data_key` like ? and (`data_string` $lowerCaseOpperator ? or `data_bool` $lowerCaseOpperator ? or `data_num` $lowerCaseOpperator ? or `data_link` $lowerCaseOpperator ?)");
				// if (!$statement){
				// 	die("Connection failed: " . htmlspecialchars(self::$conn->error));
				// }
				$queryTypes = "s$inputType$inputType$inputType";
				if ($maybeId){
					$statement->bind_param($queryTypes . 's', $dbType, $value, $value, $value, $maybeId);
				}
				else {
					$statement->bind_param($queryTypes . $inputType, $dbType, $value, $value, $value, $value);
				}
			}

			$statement->execute();

			$rows = $statement->get_result();

			$foundIds = [];
			while($row = $rows->fetch_assoc()){
				$row = (object)$row;

				self::getRootObjectIdFrom($row, $foundIds);
			}

			return array_unique($foundIds);
		}

		public static function search($type, $value, $opperator = '='){
			$items = self::index($type, $value, $opperator);
			return array_map(function(&$id){
				return self::internallyConsistantGet($id);
			}, $items);
		}
	}
