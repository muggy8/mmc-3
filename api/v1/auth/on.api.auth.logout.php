<?php
	if (request("user") && request("cookies")){
		unset(request("user")->sessions->{request("cookies")->session});
		setcookie("user", "__", -1, "/", $_SERVER["HTTP_HOST"], true, false);
		setcookie("session", "__", -1, "/", $_SERVER["HTTP_HOST"], true, true);

		storage::storeObject(request("userId"), request("user"));
	}
	else {
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
	}
