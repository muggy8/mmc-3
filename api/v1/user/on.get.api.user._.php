<?php
	response::setHeader("Status", "200 OK");
	preg_match('/^\/user\/([^\/]*)$/', request("endpoint"), $userMatch);
	$potentialId = "user:" . $userMatch[1];
	if ($user = storage::get($potentialId)){
		response::setHeader("Status", "200 OK");
		response::setHeader("x-user-id", $potentialId);
		response::write(json_encode(public_user($user)));
	}