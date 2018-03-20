<?php
	if (request("cookies")->user && request("cookies")->session){
		// this will fill in the request()->user and request()->userId variables

		// incase in the future we decide to store user:the id instead of just the id
		$userIdObj = storage::parseCompoundId(request("cookies")->user);
		$userId = "user:" . $userIdObj->id;
		$user = storage::get($userId);
		if ($user && $user->sessions->{request("cookies")->session}){
			request("userId", $userId);
			request("user", $user);
		}
		if (!request("user")){ // it's possiable to have a cookie but not a user attached
			return;
		}
		// clean up the user's authed sessions
		$needsToUpdateData = false;
		foreach(request("user")->sessions as $sessionId => $expiryTime){

		}

		// if we made any changes to the user's authed sessions, we need to store the changes but we dont want to do this if we dont have to
		if ($needsToUpdateData){
			storage::storeObject(request("userId"), request("user"));
		}
	}
