<?php
	if (request("headers")->Cookie){
		// figure out the user from the cookies if we have any
		// this will fill in the request()->user and request()->userId variables

		// clean up the user's authed sessions
		$needsToUpdateData = false;
		foreach(request("user")->sessions as $sessionId => $expiryTime){

		}

		// if we made any changes to the user's authed sessions, we need to store the changes but we dont want to do this if we dont have to
		if ($needsToUpdateData){
			storage::storeObject(request("userId"), request("user"));
		}
	}
