<?php
	$workspace->errors = $workspace->errors ?: [];
	if (!request("query")->code && request("query")->error){
		// we weren't granted permission sad life oh well :/
		response::addHeader("location", "/");
		array_push($workspace->errors, "auth not accepted");
	}
	else {
		// fetch an access token from reddit
		$curl = curl_init("https://www.reddit.com/api/v1/access_token");
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_HTTPHEADER, [
			"Authorization: Basic " . base64_encode(reddit_app_id . ":" . reddit_app_secret)
		]);
		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query([
			"grant_type" => "authorization_code",
			"code" => $query->code,
			"redirect_uri" => "https://mmc-3.mugdev.com/api/auth/reddit/callback"
		]));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$res = json_decode(curl_exec($curl));
		curl_close($curl);

		// if we can get an access token from reddit, we can then ask the API for the user's identity
		if ($res->access_token){
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
		else {
			array_push($workspace->errors, $res);
		}
		// if reddit gives us the user's identity, we can look in our own database with a matching identity and give the user the headers we need to make sure the user is authorized to make future requests
		if ($redditUser){
			// there's 3 cases we want this endpoint to support:
			// A: the user is logging in,
			// B: the user is creating a new account
			// C: the user is adding a new authentication method to their existing account
			if (!request("user")){ // case A or B
				if (request()->userId = storage::index("user.identity.reddit", $redditUser->id)){
					request()->userId = request()->userId[0];
					request()->user = storage::get(request()->userId);
				}
				else {
					request()->user = (object)[
						"name" => $redditUser->name,
						"identity" => (object)[
							"reddit" => $redditUser->id
						]
					];
					request()->userId = storage::storeObject("user", request("user"));
				}
			}
			else { // case C
				request("user")->identity->reddit = $redditUser->id;
			}

			// ok we stored everything and now we can just set the user's cookies whee
			$soloId = storage::parseCompoundId($userId)->id;
			$validDuration = (86400 * 30); // 30 days
			$sessionExpires = time() + $validDuration;
			$sessionId = request("cookies")->session ?: storage::generateId(32);

			// we set 2 cookies here, the user ID and the session ID. both will have the same valid duration but only the user ID is visable to the browser because that's important to whatever endpoints we need to get at in the clinet script. the session ID is not and it works as a password of sorts for validating future requests
			response::addHeader("Set-Cookie", "user=$soloId; Max-Age=$validDuration; Secure; Path='/';");
			response::addHeader("Set-Cookie", "session=$sessionId; Max-Age=$validDuration; Secure; HttpOnly; Path='/';");
			//header("Set-Cookie: " . implode(",", $headerCookies));

			request("user")->sessions = (array)request("user")->sessions ?: (object)[];
			request("user")->sessions->{$sessionId} = $sessionExpires;
			storage::storeObject(request("userId"), request("user"));

			// cleaning up old sessions is handled by the api._ event
		}
		else {
			array_push($workspace->errors, $redditUser);
		}

		if (count($workspace->errors)){
			response::write(json_encode($workspace->errors));
		}
	}
