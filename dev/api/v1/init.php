<?php
	include_once("globals.php");
	include_once(api_root . "/actions/data-store.php");

	$query = (object)$_GET;
	$headers = "";
	$input = file_get_contents("php://input");
	if (!$body = json_decode($input)) {
		$body = (object)parse_str($input);
	}
