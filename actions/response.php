<?php
	class response {
		protected static $body = "";
		protected static $headers = null;
		protected static $streaming = false;

		protected static function initOnce(){
			static $init = false;
			if (!$init){
				$init = true;
				self::$headers = (object)[];
			}
		}

		public static function addHeader($name, $val){
			self::initOnce();
			// add the header or initialize it if it's not set
			self::$headers->{$name} = self::$headers->{$name} ?: [];
			array_push(self::$headers->{$name}, $val);

		}
		public static function setHeader($name, $val){
			self::initOnce();
			// ovewrite the current header and set it's value
			self::$headers->{$name} = [$val];
		}

		public static function stream(){
			self::initOnce();
			if (!self::$streaming){ // stream will only activate once and will start streaming the output
				$streaming = true;
				// send the headers and when future write chunks comes in, immediately echo it

				foreach(self::$headers as $key => $val){
					$val = implode(", ", $val);
					header("$key: $val");
				}

				echo self::$body;
			}
		}
		public static function write($chunk = ""){
			self::initOnce();
			if (self::$streaming){
				echo $chunk;
			}
			else {
				self::$body .= $chunk;
			}
		}

		public static function send($chunk = ""){
			self::initOnce();
			if (self::$streaming){
				echo $chunk;
				exit;
			}
			else {
				self::stream();
				echo $chunk;
				exit;
			}
		}
	}

    // response::addHeader("foo", "bar");
    // response::addHeader("foo", "baz");
    // response::setHeader("foo", "writeOver");
    // response::write("abc123");
    // response::write("\n\n");
    // response::write("456xyz");
    // response::send();
