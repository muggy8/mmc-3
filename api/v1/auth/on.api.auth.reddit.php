<?php
	// check to see if the user is already logged in and doesn't have a reddit authentication then ya we dont need to relog so we dont send them to get reddit to authorize us
	if (request("user")->auth->reddit){
		response::addHeader("location", "/");
	}

	// if the user is not logged in or doesn't have a reddit authentication, we should ask reddit to identify this guy for us
	else {
		response::addHeader("location", "https://www.reddit.com/api/v1/authorize?client_id=" . reddit_app_id . "&response_type=code&state=" . storage::generateId() . "&redirect_uri=http://mmc-3.mugdev.com/api/auth/reddit/callback&duration=temporary&scope=identity");
	}
