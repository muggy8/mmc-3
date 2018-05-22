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
	buildSong: function(songJson){
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

		return new utils.midiWriter.Writer(tracks)
	},
	getInstrument: function(instrumentId){
		var ac = momoca.getInstrument.audioContext ||  (momoca.getInstrument.audioContext = new AudioContext())
		if (momoca.getInstrument[instrumentId]){
			return Promise.resolve(momoca.getInstrument[instrumentId])
		}
		else {
			var selectedInstrument
			momoca.instruments.forEach(function(instrument){
				if (instrument.number === instrumentId) {
					selectedInstrument = instrument
				}
			})

			// first we cache the promise for the network opperation in case there's lots of calls for the same instrument
			return momoca.getInstrument[instrumentId] = utils.soundfontPlayer
				.instrument(ac, "/app/soundfonts/" + selectedInstrument.id + "-ogg.js")
				.then(function(instrument){
					// this is for the final time we get the instrument we just stick the instrument in our cache so in the future we dont have to ask the network for it
					return momoca.getInstrument[instrumentId] = instrument
				})
		}
	},
	playSong: function(songJson){
		var songWriter = momoca.buildSong(songJson)
		var songEvents = new utils.midiPlayer.Player(console.log, songWriter.buildFile())

		songEvents.fileLoaded()

		playerTest = songEvents
	}
})
var momoca = mmcView.app
momoca.getUser()

momoca.loading = document.querySelector("#loading")
