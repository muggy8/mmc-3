<?php
	if (request("user")->auth->reddit){
		response::addHeader("location": "/");
		return;
	}

	if (!request("query")->code && !request("query")->error){
		responce::addHeader("location", "https://www.reddit.com/api/v1/authorize?client_id=" . reddit_app_id . "&response_type=code&state=" . storage::generateId() . "&redirect_uri=http://mugdev.com/mmc-3/dev/api/v1/auth-reddit.php&duration=temporary&scope=identity");
	}
	else {
		$curl = curl_init("https://www.reddit.com/api/v1/access_token");
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_HTTPHEADER, [
			"Authorization: Basic " . base64_encode(reddit_app_id . ":" . reddit_app_secret)
		]);
		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query([
			"grant_type" => "authorization_code",
			"code" => $query->code,
			"redirect_uri" => "http://mugdev.com/mmc-3/dev/api/v1/auth-reddit.php"
		]));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$res = json_decode(curl_exec($curl));
		curl_close($curl);

		if ($res){
			// var_dump($res);

			$curl = curl_init("https://oauth.reddit.com/api/v1/me");
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curl, CURLOPT_USERAGENT, "PHP/5.7 (Linux, en-US)");
			curl_setopt($curl, CURLOPT_HTTPHEADER, [
				"Authorization: $res->token_type $res->access_token"
			]);
			$redditUser = json_decode(curl_exec($curl));
			curl_close($curl);

			// var_dump($redditUser);
		}

		if ($redditUser){
			if (!request("user")){ // create new user
				request()->user = (object)[
					"name" => $redditUser->name,
					"identity" => (object)[
						"reddit" => $redditUser->id
					]
				];
				request()->userId = storage::storeObject("user", request("user"));
			}

			$soloId = storage::parseCompoundId($userId)->id;
			$validDuration = (86400 * 30); // 30 days
			$sessionExpires = time() + $validDuration;
			$sessionId = storage::generateId(32);

			response::addHeader("Set-Cookie", "user=$soloId; Max-Age=$validDuration; Secure; HttpOnly; Path='/';");
			response::addHeader("Set-Cookie", "session=$sessionId; Max-Age=$validDuration; Secure; HttpOnly; Path='/';");
			//header("Set-Cookie: " . implode(",", $headerCookies));

			request("user")->sessions = (array)request("user")->sessions ?: [];
			array_push(request("user")->sessions, (object)[
				"id" => $sessionId,
				"expires" => $sessionExpires
			]);
			request("user")->sessions = array_filter(request("user")->sessions, function($item){
				return $item->expires > time();
			});

			storage::storeObject(request("userId"), request("user"));
		}
	}
