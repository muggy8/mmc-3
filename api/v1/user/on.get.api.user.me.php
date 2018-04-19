<?php
	if (request("user")){
		response::setHeader("Status", "200 OK");
		response::write(json_encode(stripTo(request("user"), $workspace->publicUserSchema)));
	}
	// the 403 is handled by the get user api
