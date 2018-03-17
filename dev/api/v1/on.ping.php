<?php
	response::write("<pre>") ;

	response::write(json_encode(request()));

	response::write("</pre>") ;
