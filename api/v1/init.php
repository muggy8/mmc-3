<?php
	include_once("globals.php");
	define(api_version, basename(__DIR__));

	include_once(api_root . "/actions/data-store.php");
	include_once(api_root . "/actions/request.php");
	include_once(api_root . "/actions/response.php");
	include_once(api_root . "/actions/event.php");
	event(api_root . "/api/" . api_version);

	storage::connect(db_server, db_user, db_pass, db_name, "mmc_3");

	$query = (object)$_GET;
	$headers = (object)apache_request_headers();
	$input = file_get_contents("php://input");
	if (!$body = json_decode($input)) {
		$body = (object)parse_str($input);
	}

	request("vars", $query);
	request("headers", $headers);
	request("body", $body);
	request("method", $_SERVER['REQUEST_METHOD']);
	request("url", (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
	request("uri",  $_SERVER["REQUEST_URI"]);
	request("cookies", (object)$_COOKIE);
