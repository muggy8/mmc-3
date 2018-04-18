<?php
	if (request("user")){
		response::setHeader("Status", "200 OK");
		response::write(json_encode(public_user(request("user"))));
	}
	else {
		response::setHeader("Status", "403 Forbidden");
		$workspace->errors = $workspace->errors ?: [];
		array_push($workspace->errors, "Not currently authenticated");
		// response::write(json_encode((object)[
		// 	"error" => "Not Authenticated"
		// ]));
	}
