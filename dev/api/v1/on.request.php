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

	$requestPath = explode("/", request("endPoint"));

	var_dump(request("method"));
	if ($requestPath){
		for ($i = 1, $requestPathLen = count($requestPath); $i <= $requestPathLen; $i++){
			$eventPath = implode(".", array_slice($requestPath, 0, $i));
			var_dump(request("method") . ".$eventPath" );
			var_dump("$eventPath");
		}
	}
