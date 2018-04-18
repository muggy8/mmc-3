<?php
	if (request("user")){
		response::setHeader("Status": "200 OK");
		response::write(json_encode(public_user(request("user"))));
	}
	else {
		response::setHeader("Status": "403 Forbidden");
		response::write(json_encode((object)[
			"error": "Not Authenticated"
		]))
	}
