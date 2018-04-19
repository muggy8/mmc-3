<?php
	if (request("user")){
		$stripped = stripTo(
			request("body"),
			$workspace->publicUserSchema
		);
		if (withinSchema($stripped, $workspace->updateUserSchema)){
			response::setHeader("Status", "202 Accepted");
			storage::storeObject(request("userId"), patch(request("user"), $stripped));
		}
		else {
			response::setHeader("Status", "400 Bad Request");
			$workspace->errors = $workspace->errors ?: [];
			array_push($workspace->errors, "Malformed patch");
		}
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
