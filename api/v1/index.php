<?php
	include_once("globals.php");
	include_once(api_root . "/api/v1/init.php");

	$workspace = event("request");

	if (substr(response::readHeader("Status")[0], 0, 3) == "404" ){
		response::write(json_encode((object)[
			"error" => "Endpoint not found"
		]));
	}

	if ($workspace->errors){
		response::setHeader("Status", "400 Bad Request");
		response::write(json_encode($workspace->errors));
	}

	response::send();
