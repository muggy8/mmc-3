<?php
	include_once("globals.php");
	include_once(api_root . "/api/v1/init.php");

	$workspace = event("request");

	if ($workspace->errors){
		response::setHeader("Status", "400 Bad Request");
		response::write(json_encode($workspace->errors));
	}

	response::send();
