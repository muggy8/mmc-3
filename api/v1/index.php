<?php
	include_once("globals.php");
	include_once(http_root . "/api/v1/init.php");

	response::setHeader("Status", "404 Not Found");
	response::setHeader("Content-Type", "application/json;charset=UTF-8");

	$workspace = event("request");

	if (substr(response::readHeader("Status")[0], 0, 3) == "404" ){
		response::write(json_encode([
			"Not found"
		]));
	}

	if ($workspace->errors && substr(response::readHeader("Status")[0], 0, 1) == "4"){
		response::setHeader("Status", "400 Bad Request");
		response::write(json_encode($workspace->errors));
	}

	response::send();
