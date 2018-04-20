<?php
	if (request("user")){
		response::setHeader("Status", "200 OK");
		response::write(json_encode(stripTo(request("user"), $workspace->publicUserSchema)));
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
