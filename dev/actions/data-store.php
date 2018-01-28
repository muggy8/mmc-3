<?php
	include_once("./configs.php"); // defines db settings
	include_once("./polyfills.php"); // defines db settings

	class storage {
		protected static $conn = null;

		protected function __construct(){}

	    protected function __clone(){}

		public static function connect(&$db_server, &$db_user, &$db_pass, &$db_name){
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

		protected static function getObjectDefinition($type){
			$statement = self::$conn->prepare("Select * from `mmc_3_types` where `mmc_3_types`.`type` = ?");
			$statement->bind_param("s", $type);
			if (!$statement->execute()){
				die("failed to get object definition");
			}
			$res = $statement->get_result();
			$resRows = mysqli_fetch_all($res);
			$resRowsCount = count($resRows);
			mysqli_free_result($res);
			if (!$resRowsCount){
				return null;
			}
			if ($resRowsCount === 1){
				return $resRows[0];
			}
			return null;
		}

		public static function createObjectDefinition($type){
			self::$conn
		}

		public static function storeObject($type, $obj){
			self::$conn;
			$objectDefinition = self::getObjectDefinition($type);
			if (!$objectDefinition){
				self::createObjectDefinition($type);
				$objectDefinition = self::getObjectDefinition($type);
			}
		}
	}

	storage::connect(db_server, db_user, db_pass, db_name);
	print_r(storage::createObjectDefinition("user"));
