<?php
	if (request("cookies")->user && request("cookies")->session){
		// this will fill in the request()->user and request()->userId variables

		// incase in the future we decide to store user:the id instead of just the id
		$userIdObj = storage::parseCompoundId(request("cookies")->user);
		$userId = "user:" . $userIdObj->id;
		$user = storage::get($userId);
		if ($user && $user->sessions->{request("cookies")->session}){
			foreach($user->sessions as $sessionId => $expireTime){
				if ($expireTime < request("time")){
					unset($user->sessions->{$sessionId});
				}
			}

			// give the user another month for their session to expire
			$validDuration = 86400 * 30; // 30 days
			$user->sessions->{request("cookies")->session} = $sessionExpires = time() + $validDuration;
			setcookie("user", $userIdObj->id, $sessionExpires, "/", $_SERVER["HTTP_HOST"], true, false);
			setcookie("session", request("cookies")->session, $sessionExpires, "/", $_SERVER["HTTP_HOST"], true, true);

			request("userId", $userId);
			request("user", $user);
			storage::storeObject(request("userId"), request("user"));
		}
	}
