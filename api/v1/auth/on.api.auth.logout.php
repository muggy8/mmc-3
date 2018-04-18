<?php
	setcookie("user", null, 0, "/", $_SERVER["HTTP_HOST"]);
	setcookie("session", null, 0, "/", $_SERVER["HTTP_HOST"]);
	if (request("user") && request("sessionId")){
		storage::deleteObject(request("sessionId"));
		response::setHeader("Status", "204 No Content");
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
