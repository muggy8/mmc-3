<?php
	function stripTo($data, $schema){
		foreach($data as $key => $val){
			if (isset($schema->{$key})){
				if (is_object($val) && is_object($schema->{$key})){
					$data->{$key} = stripTo($val, $schema->{$key});
				}
				else if (is_array($val) && is_object($schema->{$key})){
					foreach($val as &$item){
						$item = stripTo($item, $schema->{$key});
					}
				}
			}
			else {
				unset($data->{$key});
			}
		}
		return $data;
	}

	function patch($original, $incoming){

	}

	function withinSchema($data, $schema){
		$assumption = true;
		foreach($data as $key => $val){
			if (isset($schema->{$key})){
				if (is_object($val) && is_object($schema->{$key})){
					$assumption = $assumption
						? withinSchema($val, $schema->{$key})
						: false ;
				}
				else if (is_array($val) && is_object($schema->{$key})){
					foreach($val as $item){
						$assumption = $assumption
							? withinSchema($item, $schema->{$key})
							: false ;
					}
				}
			}
			else {
				$assumption = false;
			}
		}
		return $assumption;
	}


	$output = withinSchema((object)[
		"name" => "abc123",
		"arr" => [
			(object)[
				"foo" => 123,
				"bar" => 456
			],
			(object)[
				"foo" => 888,
				"bar" => 999
			]
		],
		"junk" => "1234567890"
	], (object)[
		"name" => true,
		"arr" => (object)[
			"foo" => true,
			"bar" => true
		],
		"junk" => true
	]);
	var_dump($output);
