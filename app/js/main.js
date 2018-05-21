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
	playSong: function(songJson, nps){
		// notes/second = smallest note that can be played. 
		console.log(songJson)

		// actual logic time

		var tracks = songJson.map(function(trackJson){
			var track = new utils.midiWriter.Track()

			track.addEvent(new utils.midiWriter.ProgramChangeEvent({
				instrument: (+trackJson.instrumentId || 0)
			}))

			for(var key of utils.range(1, 16)){
				var tKey = "T" + key
				var tNote = trackJson.keyMap[tKey]
				trackJson[tKey].forEach(function(note, index){
					// default ticks per beat is 128
				})
			}
		})
	}
})
var momoca = mmcView.app
momoca.getUser()

momoca.loading = document.querySelector("#loading")
