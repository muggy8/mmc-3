<?php
	function event($complex){
		static $listeners = null;
		static $includeQueue = [];
		static $runListener = null;
		static $workspace = null;

		if (!$listeners){
			$path = $complex;
			$workspace = (object)[];
			$runListener = function($path, &$workspace){
				include_once($path);
			};
			if (substr($path, -1) === "/"){
				$path = substr($path, 0, -1);
			}


			// get the listeners from the path
			$listeners = (object)[];

			// we dont want recursion here because i originally wanted to not declare too many functions but it seems that we would have had repeating code if we didn't so derrr... anyways we're doing something that would normally done with recursion (tree crawling) with a while loop instead
			$getPathContents = function($path){
				return array_map(function($file)use($path){
					return "$path/$file";
				}, array_filter(scandir($path), function($file){
					return substr($file, 0, 1) !== ".";
				}));
			};
			$pathContents = $getPathContents($path);
			// print_r($pathContents);
			while($filePath = array_shift($pathContents)){
				//print_r($file);
				if (is_dir($filePath)){
					$pathContents = array_merge($pathContents, $getPathContents($filePath));
				}
				else {
					$fileName = basename($filePath);
					if (preg_match('/^on\.(.+)(\(.+\))?\.php$/', $fileName, $listenerName)){
						$listenerName = $listenerName[1];
						$listenerName = preg_replace('/\./', '\.', $listenerName);
						$listenerName = preg_replace('/__/', '.*', $listenerName);
						$listenerName = preg_replace('/_/', '[^\.]+', $listenerName);
						$listenerName = '/^' . $listenerName . '$/i';
						$listeners->{$listenerName} = $listeners->{$listenerName} ?: [];
						array_push($listeners->{$listenerName}, $filePath);
						// var_dump($listenerName);
					}
				}
			}
			return;
		}

		$eventName = $complex;
		if (!$eventName){
			return;
		}
		$currentQueueLength = count($includeQueue);
		// var_dump($listeners);
		foreach($listeners as $listenerRegex => $listenerToAdd){
			if (preg_match($listenerRegex, $eventName)){
				foreach($listenerToAdd as $listener){
					array_push($includeQueue, $listener);
				}
			}
		}



		if ($currentQueueLength === 0){
			// we dont want to clear out the item from the queue until we have finished running the listener so we cant use array_shift incase the include script calls event which woud not trigger the event handler and would return back to here for the next loop
			while($included = $includeQueue[0]){
				$runListener($included, $workspace);
				array_shift($includeQueue);
			}
		}

		return $workspace;
	}
