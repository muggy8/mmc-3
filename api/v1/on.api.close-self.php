<?php
	response::setHeader("Status", "200 OK");
	response::setHeader("Content-Type", "text/html;charset=UTF-8");
	response::write("
		<html>
			<head>
				<script>
					window.close()
					var messageTo = window.opener || window.parent
					messageTo.postMessage('close', '*')
				</script>
			</head>
			<body>
			</body>
		</html>
	");
