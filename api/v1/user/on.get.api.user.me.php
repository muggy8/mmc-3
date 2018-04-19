<?php
	if (request("user")){
		response::setHeader("Status", "200 OK");
		response::write(json_encode(public_user(request("user"))));
	}
	// the 403 is handled by the get user api
