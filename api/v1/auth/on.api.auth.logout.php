<?php
	if (request("user") && request("cookies")){
		request("user")->sessions = (object)request("user")->sessions; // make this an object from an array if it's not already for whatever reason and keep the reference to each other
		unset(request("user")->sessions->{request("cookies")->session});
		storage::storeObject(request("userId"), request("user"));
		setcookie("user", null, 0, "/", $_SERVER["HTTP_HOST"]);
		setcookie("session", null, 0, "/", $_SERVER["HTTP_HOST"]);
		response::setHeader("Status", "204 No Content");
	}
	else {
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
