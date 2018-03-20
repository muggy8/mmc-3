<?php
	preg_match(
		'/api\/(v\d+\/)?([^\?\#]+)?/',
		request("url"),
		$matchRes
	);
	request("endPoint", $matchRes[2]);
	if(subStr(request("endPoint"), -1 ) === "/"){
		request("endPoint", subStr(request("endPoint"), 0, -1 ));
	}

	event(request("method") . ".api");
	// var_dump(request("method") . ".api");
	event(request("method") . ".api." . str_replace('/', ".", request("endPoint")));
	// var_dump(request("method") . ".api." . str_replace('/', ".", request("endPoint")));
	event("api." . str_replace('/', ".", request("endPoint")));
	// var_dump("api." . str_replace('/', ".", request("endPoint")));
