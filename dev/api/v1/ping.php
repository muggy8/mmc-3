<?php
	include_once("globals.php");
	include_once(api_root . "/api/v1/init.php");

	echo "<pre>";
	print_r($query);

	print_r($headers);

	print_r($body);

	event("request");

	echo "</pre>";
