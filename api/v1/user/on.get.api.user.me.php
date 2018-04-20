<?php
    include_once "on._.api.user__.php"; // it's not like we cant just include this normally anyways
	if (request("user")){
		response::setHeader("Status", "200 OK");
		response::write(json_encode(stripTo(request("user"), $workspace->publicUserSchema)));
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
