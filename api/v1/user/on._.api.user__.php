<?php
	$workspace->publicUserSchema = (object)[
		"name" => true,
		"email" => true,
		"songs" => true,
		"website" => true
	];

	$workspace->updateUserSchema = (object)[
		"name" => "string",
		"email" => "string",
		"songs" => "string",
		"website" => "string"
	];
