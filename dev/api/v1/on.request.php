<?php
	preg_match(
		'/api\/' . api_version . '\/(.+)?$/',
		request("url"),
		$matchRes
	);
	request("endPoint", str_replace('api/' . api_version . '/', '', $matchRes[0]));

	event(request("method"));
	event(request("method") . "." . str_replace('/', ".", request("endPoint")));
	event(str_replace('/', ".", request("endPoint")));
