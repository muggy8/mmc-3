var mmcView = proxymity(document.querySelector("body"), {
	getUser: function(){
		var cookies = utils.keyValParse(document.cookie)
		if (cookies.user){
			aja()
				.url("/api/me")
				.cache(false)
				.on("2xx", function(ouo){
					momoca.user = ouo
				})
				.on("4xx", function(o3o){
					momoca.user = {}
				})
				.on("5xx", function(x_x){
					momoca.notify("Server Error. Please try again later")
				})
				.go()
		}
		else {
			momoca.user = {}
		}
	},
	notify: function(message){
		console.log(message)
	},
	rout: function(){},
	state: document.location.pathname,
	playSong: function(songJson){
		var b64
		// somehow convert the song data into base64

		MIDI.Player.currentData = window.atob(b64);
		MIDI.Player.loadMidiFile();
		MIDI.Player.start();
	}
})
var momoca = mmcView.app
momoca.getUser()

momoca.loading = document.querySelector("#loading")
