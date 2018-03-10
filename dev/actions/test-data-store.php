<?php
	include_once("data-store.php");
	storage::connect(db_server, db_user, db_pass, db_name);

	// $demoObject = (object)[
	// 	"name" => "muggy8",
	// 	"nextLevelUp" => 48.22,
	// 	"accountActivated" => true,
	// 	"exp" => 48.22,
	// 	"auth" => (object)[
	// 		"reddit" => storage::generateId(32),
	// 		"facebook" => "",
	// 		"google" => storage::generateId(32)
	// 	],
	// 	"array" => [
	// 		storage::generateId(32),
	// 		storage::generateId(32),
	// 		storage::generateId(32)
	// 	],
	// 	"tasks" => [
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 1",
	// 			"description" => "This is some worthelss description",
	// 			"random" => storage::generateId(32)
	// 		]),
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 2",
	// 			"description" => "Null is acceptable?",
	// 			"random" => storage::generateId(32)
	// 		]),
	// 		storage::storeObject("task", (object)[
	// 			"name" => "task 3",
	// 			"description" => "I really need something better to generate demo data",
	// 			"random" => storage::generateId(32)
	// 		])
	// 	]
	// ];
	// $newId = storage::storeObject("user", $demoObject);
	// echo "$newId\n";
	// $clone = storage::getObject($newId);
	// $clone->name = "clone";
	// $clone->original = $newId;
	// $cloneId = storage::storeObject("user", $clone);
	// echo "$cloneId\n";


	// now testing attempts to retrieve data
	$previousNew = "user:bXCluFWQ5G6MvqAH9LUQY6uYGu8EDNkEPYTT6GhVWevkM_oGl92hpMbDWY5rlcTr";
	// $previousClone = "user:sSovFjZFPIxUQJjTx_Rc7BFj7uburXsNWVUCqA9n12RsbqeXKdON5SuTd_MUOdn1";
	$user = storage::get($previousNew);
	// echo json_encode($user, JSON_PRETTY_PRINT);
	// $user->auth->facebook = storage::generateId(32);
	// array_splice($user->tasks, 1, 1);
	// $user->nextLevelUp = 18.22;
	// unset($user->array);
	// echo json_encode($user, JSON_PRETTY_PRINT);
	// storage::storeObject($previousNew, $user);


	$taskId = "qDhFp9IdBbLXOKC0Ew_qOJSUqcMwgHz5cSZFbFsnYDzBes2OJXlX4jUeMKWSbyXl";
	$task = storage::get($taskId);
	echo json_encode($task, JSON_PRETTY_PRINT);
	//storage::storeObject($taskId, $task);
	//$task->assignedTo = $previousNew;

	// storage::deleteObject($previousClone);
	// echo json_encode($src = storage::getObject($previousNew), JSON_PRETTY_PRINT);
	// echo json_encode($clone = storage::getObject($previousClone), JSON_PRETTY_PRINT);

	// $clone->original = storage::storeObject("user", $src);
	// storage::storeObject("user", $clone);
	// echo json_encode($demoObject, JSON_PRETTY_PRINT);

	// $uname = "muggy8";
	// print_r(storage::saveKeyVal("123abc", "user.name", $uname));
	// $num = 158;
	// print_r(storage::saveKeyVal("123abc", "user.int", $num));
	// $num2 = 15.2;
	// print_r(storage::saveKeyVal("123abc", "user.float", $num2));
	// $bool = true;
	// print_r(storage::saveKeyVal("123abc", "user.bool", $bool));
	//print_r(storage::getObjectDefinition("user"));
