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
		console.log(songJson)
		// default ticks per beat is 128
		var durationTicks = 128/songJson.smallestFraction

		// actual logic time

		var tracks = songJson.tracks.map(function(trackJson){
			var track = new utils.midiWriter.Track()

			track.addEvent(new utils.midiWriter.ProgramChangeEvent({
				instrument: (+trackJson.instrumentId || 0)
			}))
			track.setTempo(songJson.bpm)

			for(var key of utils.range(1, 16)){
				var tKey = "T" + key
				var tNote = trackJson.keyMap[tKey]
				trackJson[tKey].forEach(function(note, index){
					if (note && note.duration && note.velocity){
						var notePosition = index * durationTicks

						track.addEvent(new utils.midiWriter.NoteEvent({
							pitch: [tNote],
							duration: "T" + (durationTicks * note.duration),
							velocity: note.velocity
						}))
					}
				})
			}

			return track
		})

		// console.log(tracks)

		write = new utils.midiWriter.Writer(tracks)
		console.log(write.dataUri())
	}
})
var momoca = mmcView.app
momoca.getUser()

momoca.loading = document.querySelector("#loading")
