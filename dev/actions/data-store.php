<?php
	include_once("./configs.php"); // defines db settings
	include_once("./polyfills.php"); // defines db settings

	$conn = new mysqli($db_server, $db_user, $db_pass, $db_name);

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	function generateId($length = 32){
		$allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
    	$id = $allowedCharacters[random_int(0, 51)];
    	for($i = 1; $i < $length; $i++){
        	$id = $id . $allowedCharacters[random_int(0, 62)];
    	}
    	return $id;
	}

	//print_r($allowedCharacters[random_int(0, 51)]);
	print_r(generateId());
