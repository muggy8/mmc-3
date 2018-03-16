<?php
	class response {
		protected static $body;
		protected static $headers;
		protected static $streaming = false;

		public static addHeader($name, $val){
			// add the header or initialize it if it's not set
		}
		public static setHeader($name, $val){
			// ovewrite the current header and set it's value
		}

		public static stream(){
			if (!self::$streaming){ // stream will only activate once and will start streaming the output
				$streaming = true;
				// send the headers and when future write chunks comes in, immediately echo it
			}
		}
		public static write($chunk){

		}
	}
