<?php
	class response {
		protected static $body = "";
		protected static $headers = $null;
		protected static $streaming = false;

		protected static function initOnce(){
			static $init = false;

			if (!$init){
				$init = true;
				$headers = (object)[];
			}
		}

		public static addHeader($name, $val){
			self::initOnce();
			// add the header or initialize it if it's not set
		}
		public static setHeader($name, $val){
			self::initOnce();
			// ovewrite the current header and set it's value
		}

		public static stream(){
			self::initOnce();
			if (!self::$streaming){ // stream will only activate once and will start streaming the output
				$streaming = true;
				// send the headers and when future write chunks comes in, immediately echo it
			}
		}
		public static write($chunk){
			self::initOnce();
			if (self::$streaming){
				echo $chunk;
			}
			else {
				self::$body .= $chunk;
			}
		}

		public static end($chunk){
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
