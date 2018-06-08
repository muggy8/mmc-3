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
	rout: function(){}, // default base routing function
	state: document.location.pathname,
    generateMidi: function(songJson){
        var noteTicks = 128/songJson.smallestNoteFraction

        var song = new utils.midGen.File()
        songJson.tracks.map(function(jsonTrack){
            var track = new utils.midGen.Track()
            track.setInstrument(0, +jsonTrack.instrumentId)
            track.setTempo(songJson.bpm)

            var trackBuildState = {
                waitDuration: 0
            }
            var buildEventColumn = function(columnOfNotes){ // right to left = progression through time
                columnOfNotes.forEach(function(note, index){ // right to left = bottom to top or low to high
                    var noteName = jsonTrack.keyMap[index]

                    if (!note && trackBuildState[noteName]){
                        // we have detected that a note is currently falsey and there is a pending note in which case we need to turn it off
                        // console.log(trackBuildState.waitDuration, "stop", noteName)
                        track.addNoteOff(0, noteName, trackBuildState.waitDuration)
                        trackBuildState[noteName] = false
                        trackBuildState.waitDuration = 0
                    }

                    if (note && note.velocity){
                        // we have detected a new note to be struck

                        if (trackBuildState[noteName]){ // is the pervious note still going if so we want to stop it before striking again
                            // console.log(trackBuildState.waitDuration, "stop", noteName)
                            track.addNoteOff(0, noteName, trackBuildState.waitDuration)
                            trackBuildState[noteName] = false
                            trackBuildState.waitDuration = 0
                        }

                        // ok we've handled the previous note thing lets strike the note now
                        // console.log(trackBuildState.waitDuration, "start", noteName)
                        track.addNoteOn(0, noteName, trackBuildState.waitDuration, note.velocity)
                        trackBuildState[noteName] = true
						trackBuildState.waitDuration = 0
                    }

                    // ok we're done with any changes that need to be made to no on and no off now we increment the wait time so the next round of setting can begin
                })
                trackBuildState.waitDuration += noteTicks
            }
            jsonTrack.notes.forEach(buildEventColumn)
            buildEventColumn(utils.range(0, 15).map(function(){
                return false
            }))
            return track
        }).forEach(song.addTrack.bind(song))

        var songB64 = "data:audio/midi;base64," + btoa(song.toBytes())
        return songB64
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
		var songEvents = new utils.midiPlayer.Player(function(event){
			// console.log(event)
			songEvents.triggerPlayerEvent(event.track + ":" + event.name, event)
		})
        songEvents.loadDataUri(momoca.generateMidi(songJson))
		songEvents.fileLoaded()

		var instrumentLoadingQueue = songJson.tracks.map(function(trackJson, index){
			var trackNumber = index + 1
			return momoca.getInstrument(+trackJson.instrumentId || 0)
				.then(function(instrument){
					var lastPlayed = {}
					songEvents.on(trackNumber + ":Note on", function(event){
						var notePlaying = instrument.play(event.noteName, instrument.context.currentTime, {gain:event.velocity/100})
						if (lastPlayed[event.noteName]){
							lastPlayed[event.noteName].stop()
						}
						lastPlayed[event.noteName] = notePlaying
					})
					songEvents.on(trackNumber + ":Note off", function(event){
						if (lastPlayed[event.noteName]){
							lastPlayed[event.noteName].stop()
							delete lastPlayed[event.noteName]
						}
					})
				}, function(){
					momoca.notify("Failed to laod Instrument ID: " + (+trackJson.instrumentId || 0))
				})
		})

		return Promise.all(instrumentLoadingQueue).then(function(){
			return songEvents.play()
		})
	},
	toggleNote: function(notesMatrix, column, row){
		var targetedNote = notesMatrix[column][row]

		if (column -1 >= 0){
			var previousNote = notesMatrix[column - 1][row]
		}

		if (column + 1 < notesMatrix.length){
			var nextNote = notesMatrix[column + 1][row]

			if (nextNote && targetedNote.velocity){ // current note is the start of a note chain
				notesMatrix[column + 1][row] = momoca.createNote() // make the next note the start of the note chain
			}

			if (nextNote.velocity && !targetedNote){
				notesMatrix[column][row] = nextNote
				notesMatrix[column + 1][row] = true
				return
			}
		}

		if (!targetedNote && !previousNote){
			notesMatrix[column][row] = momoca.createNote()
		}
		else if (targetedNote.velocity){
			notesMatrix[column][row] = false
		}
		else if (previousNote && targetedNote && !targetedNote.velocity){
			notesMatrix[column][row] = momoca.createNote()
		}
		else if (previousNote && !targetedNote){
			notesMatrix[column][row] = true
		}
	},
	createNote: function(velocity = 127){
		return {
			velocity: velocity
		}
	},
	classOfNote: function(note){
		if (note && note.velocity){
			return "bg-secondary"
		}
		else if (note){
			return "bg-secondary-light"
		}
		return "bg-gray"
	}
})
var momoca = mmcView.app
momoca.getUser()

momoca.screenSize = window.innerWidth
window.addEventListener("resize", function(){
	momoca.screenSize = window.innerWidth
})
momoca.loading = document.querySelector("#loading")
