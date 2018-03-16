<?php
	function request($var = null, $val = null){
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
			$storage->{$var} = &$val;
			return $var;
		}
	}

	// var_dump(request());
	//
	// request()->data = "abc123";
	//
	// var_dump(request());
	//
	// $a = (object)[];
	// request("something", $a);
	// $a->baz = 123;
	//
	// var_dump(request());
	//
	// request("something")->foo = "bar";
	//
	// var_dump(request());
