<?php
	include_once("globals.php");
	include_once(api_root . "/api/v1/init.php");

	if (!$query->code && !$query->error){
		header("location: https://www.reddit.com/api/v1/authorize?client_id=" . reddit_app_id . "&response_type=code&state=" . storage::generateId() . "&redirect_uri=http://mugdev.com/mmc-3/dev/api/v1/auth-reddit.php&duration=temporary&scope=identity");
	}
	else if (!$query->error) {
		// var_dump($query);

		// echo "Authorization: Basic" . base64_encode(reddit_app_id . ":" . reddit_app_secret);

		// get the bearer key from reddit
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
			$userIds = storage::index("user.identity.reddit", $redditUser->id);
			if (count($userIds) === 1){ // user exists in our system
				$userId = $userIds[0];
				$user = storage::get($userId);
			}
			else { // create new user
				$user = (object)[
					"name" => $redditUser->name,
					"identity" => (object)[
						"reddit" => $redditUser->id
					]
				];
				$userId = storage::storeObject("user", $user);
			}

			$userId = storage::parseCompoundId($userId);
			$sessionExpires = time() + (86400 * 30) // 30 days
			setcookie("user", $userId, $sessionExpires, "/", $_SERVER["HTTP_HOST"], true, true);
			setcookie("session", $sessionId = storage::generateId(32), $sessionExpires, "/", $_SERVER["HTTP_HOST"], true, true);

			$sessionList = $user->sessions = $user->sessions ?: [];
			array_push($sessionList, (object)[
				"id" => $sessionId,
				"expires" => $sessionExpires
			]);
			array_filter($sessionList, function($item){
				return $item->expires > time();
			});

			storage:storeObject($userId, $user);
		}
	}
