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
		foreach($incoming as $key => $val){
			if (
				(is_object($original->{$key}) && is_object($val)) || (is_array($original->{$key}) && is_array($val))
			){
				if (is_array($original)){
					$original[$key] = patch($original->{$key}, $val);
				}
				else{
					$original->{$key} = patch($original->{$key}, $val);
				}
			}
			else if (is_array($original)){
				$original[$key] = $val;
			}
			else{
				$original->{$key} = $val;
			}
		}
		return $original;
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
	//
	// $output = patch((object)[
	// 	"name" => "abc123",
	// 	"obj" => (object)[
	// 		"abc" => 123
	// 	],
	// 	"arr" => [
	// 		(object)[
	// 			"foo" => 123,
	// 			"bar" => 456
	// 		],
	// 		(object)[
	// 			"foo" => 888,
	// 			"bar" => 999
	// 		]
	// 	]
	// ], (object)[
	// 	"name" => "muggy8",
	// 	"arr" => [
	// 		(object)[
	// 			"foo" => 15,
	// 			"bar" => 22
	// 		],
	// 		99,
	// 	],
	// 	"junk" => true
	// ]);
	// var_dump($output);
