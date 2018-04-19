<?php
	if (request("user")){
		preg_match('/^user\/([^\/]*)$/i', request("endPoint"), $userMatch);
		$potentialId = "user:" . $userMatch[1];
		if ($user = storage::get($potentialId)){
			response::setHeader("Status", "200 OK");
			response::write(json_encode(stripTo($user, $workspace->publicUserSchema)));
		}
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
