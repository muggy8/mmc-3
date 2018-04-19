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
		if (is_object($schema)){
			if (is_array($data)){
				foreach($data as $item){
					$assumption = $assumption
						? withinSchema($item, $schema)
						: false;
				}
			}
			else if (is_object($data)){
				foreach($data as $key => $val){
					// echo $key;
					// var_dump($val);
					if (!isset($schema->{$key})){
						$assumption = false;
					}
					else if (isset($schema->{$key}) && (is_object($val) || is_array($val)) ){
						$assumption = $assumption
							? withinSchema($val, $schema->{$key})
							: false;
					}
					else if (isset($schema->{$key}) && gettype($val) !== $schema->{$key}){
						$assumption = false;
					}
				}
			}
		}
		else if (is_string($schema)){ // we only expect to get here if we are testing an array of single value types
			foreach($data as $val){
				if (gettype($val) !== $schema){
					$assumption = false;
				}
			}
		}

		var_dump($data);
		var_dump($schema);
		var_dump($assumption);

		return $assumption;
	}

	// $output = withinSchema((object)[
	// 	"name" => "abc123",
	// 	"arr" => [
	// 		(object)[
	// 			"foo" => 123,
	// 			"bar" => 456
	// 		],
	// 		(object)[
	// 			"foo" => 888,
	// 			"bar" => 999,
	// 			"baz" => "bleh"
	// 		]
	// 	]
	// ], (object)[
	// 	"name" => "string",
	// 	"arr" => (object)[
	// 		"foo" => "integer",
	// 		"bar" => "integer"
	// 	],
	// 	"junk" => "boolean"
	// ]);
	// var_dump($output);
