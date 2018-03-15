<?php
	include_once("globals.php");
	include_once(api_root . "/actions/data-store.php");

	storage::connect(db_server, db_user, db_pass, db_name, "mmc_3");

	$query = (object)$_GET;
	$headers = (object)apache_request_headers();
	$input = file_get_contents("php://input");
	if (!$body = json_decode($input)) {
		$body = (object)parse_str($input);
	}
