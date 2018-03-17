<?php
	preg_match(
		'/api\/' . api_version . '\/(.+)?$/',
		request("url"),
		$matchRes
	);
	request("endPoint", str_replace('api/' . api_version . '/', '', $matchRes[0]));

	var_dump(request("method"));
	var_dump(request("method") . "." . str_replace('/', ".", request("endPoint")));
	var_dump(str_replace('/', ".", request("endPoint")));
