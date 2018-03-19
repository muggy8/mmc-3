<html>
	<head>
		<title>Music Matrix Composer V3</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?=$_GET["console"] ? '<script src="//unpkg.com/mobile-inspector">{}</script>' : null ?>
		<script src="//unpkg.com/aja@0.4.1/aja.min.js"></script>
		<script src="//unpkg.com/onfontready"></script>
	</head>
	<body>
		<header>
			<h1>
				Music Matrix Composer (V3)
			</h1>
		</header>
		<script>onfontready("Source Sans Pro", function(){
			document.body.className += "has-font"
		})</script>
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
		<link href="/app/styles.css" rel="stylesheet"/>
		<script href="/app"></script>
	</body>
</html>