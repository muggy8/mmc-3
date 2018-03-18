<?php
	preg_match(
		'/api\/' . api_version . '\/(.+)?$/',
		request("url"),
		$matchRes
	);
	request("endPoint", str_replace('api/' . api_version . '/', '', $matchRes[0]));
	if(subStr(request("endPoint"), -1 ) === "/"){
		request("endPoint", subStr(request("endPoint"), 0, -1 ));
	}

	event(request("method") . ".api");	
	// var_dump(request("method") . ".api");
	event(request("method") . ".api." . str_replace('/', ".", request("endPoint")));
	// var_dump(request("method") . ".api." . str_replace('/', ".", request("endPoint")));
	event("api." . str_replace('/', ".", request("endPoint")));
	// var_dump("api." . str_replace('/', ".", request("endPoint")));
