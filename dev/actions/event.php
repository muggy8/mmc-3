<?php
	function event($complex){
		static $listeners = null;
		static $includeQueue = [];
		static $runListener = null;
		static $workspace = null;

		if (!$listeners){
			echo "Initializing the event system\n\n";
			$path = $complex;
			$workspace = (object)[];
			$runListener = function($path, &$workspace){
				include_once($path);
			};
			// get the listeners from the path
		}

		$currentQueueLength = count($includeQueue);
		foreach($listener as $name => $path){
			// push the correct listeners onto the queue
		}

		if ($currentQueueLength === 0){
			while($included=array_shift($includeQueue)){
				$runListener($included, $workspace);
			}
		}
	}
