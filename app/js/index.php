<?php
	header("Content-Type: application/javascript;charset=UTF-8");
    include_once "globals.php";
    $assets = json_decode(file_get_contents(http_root . "/app/assets.json"));
    foreach($assets->js as $js){
        if (is_file(http_root . $js)){
            include_once http_root . $js;
        }
    }
