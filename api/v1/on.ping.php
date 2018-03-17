<?php
	response::write("<pre>") ;

	response::write(json_encode(request(), JSON_PRETTY_PRINT));

	response::write("</pre>") ;
