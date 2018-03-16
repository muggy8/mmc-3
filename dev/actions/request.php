<?php
	function &request($var = null, &$val = null){
		static $storage = null;

		if ($storage === null){
			$storage = (object)[];
		}

		if (!$var && !$val){
			return $storage;
		}

		if ($var && $val === null){
			return $storage->{$var};
		}

		if ($var && $val !== null){
			$storage->{$var} = &$var;
			return $var;
		}
	}
