<?php
	include_once("globals.php");
	include_once(api_root . "/actions/data-store.php");

	if (!$_GET["code"]){
		header("location: https://www.reddit.com/api/v1/authorize?client_id=" . reddit_app_id . "&response_type=code&state=" . storage::generateId() . "&redirect_uri=http://mugdev.com/mmc-3/dev/api/v1/auth-reddit.php&duration=temporary&scope=identity");
	}
