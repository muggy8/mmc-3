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

	$output = withinSchema((object)[
