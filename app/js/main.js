var mmcView = proxymity(document.querySelector("body"), {
	notify: function(message){
		console.log(message)
	},
	rout: function(){}, // default base routing function
	linearClone: function(obj){
		var clone = {}
		if (Array.isArray(obj)){
			clone = []
		}
		Object.getOwnPropertyNames(obj).forEach(function(key){
			if (typeof obj[key] === 'object'){
				clone[key] = momoca.linearClone(obj[key])
			}
			else {
				clone[key] = obj[key]
			}
		})
		return clone
	},
	state: document.location.pathname,
	generateMidi: function(songJson){
		var noteTicks = 128/songJson.smallestNoteFraction

		var song = new utils.midGen.File()
		songJson.tracks.map(function(jsonTrack){
			var track = new utils.midGen.Track()
			track.setTempo(songJson.bpm)

			var channel = 0
			if (+jsonTrack.instrumentId < 128){
				track.setInstrument(channel, +jsonTrack.instrumentId)
			}
			else {
				channel = 9
			}

			var trackBuildState = {
				waitDuration: 0
			}
			var buildEventColumn = function(columnOfNotes){ // right to left = progression through time
				columnOfNotes.forEach(function(note, index){ // right to left = bottom to top or low to high
					var noteName = jsonTrack.keyMap[index]

					if (!note.state && trackBuildState[noteName]){
						// we have detected that a note is currently falsey and there is a pending note in which case we need to turn it off
						// console.log(trackBuildState.waitDuration, "stop", noteName)
						track.addNoteOff(channel, noteName, trackBuildState.waitDuration)
						trackBuildState[noteName] = false
						trackBuildState.waitDuration = 0
					}

					if (note.state === 2){
						// we have detected a new note to be struck

						if (trackBuildState[noteName]){ // is the pervious note still going if so we want to stop it before striking again
							// console.log(trackBuildState.waitDuration, "stop", noteName)
							track.addNoteOff(channel, noteName, trackBuildState.waitDuration)
							trackBuildState[noteName] = false
							trackBuildState.waitDuration = 0
						}

						// ok we've handled the previous note thing lets strike the note now
						// console.log(trackBuildState.waitDuration, "start", noteName)
						track.addNoteOn(channel, noteName, trackBuildState.waitDuration, note.velocity)
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
				.instrument(ac, "https://cdn.rawgit.com/gleitz/midi-js-soundfonts/gh-pages/FluidR3_GM/" + selectedInstrument.id + "-ogg.js")
				.then(function(instrument){
					// this is for the final time we get the instrument we just stick the instrument in our cache so in the future we dont have to ask the network for it
					return momoca.getInstrument[instrumentId] = instrument
				}, function(o3o){
					momoca.getInstrument[instrumentId] = false
					return Promise.reject(o3o)
				})
		}
	},
	playSong: function(songJson, start = 0){
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
					momoca.notify("Failed to load Instrument ID: " + (+trackJson.instrumentId || 0))
				})
		})

		return Promise.all(instrumentLoadingQueue).then(function(){
			var noteTicks = 128/songJson.smallestNoteFraction
			return songEvents.skipToTick((noteTicks * start || 1) - 1).play()
		})
	},
	toggleNote: function(notesMatrix, column, row){
		var targetedNote = notesMatrix[column][row]

		if (column -1 >= 0){
			var previousNote = notesMatrix[column - 1][row]
		}

		if (column + 1 < notesMatrix.length){
			var nextNote = notesMatrix[column + 1][row]

			if (nextNote && nextNote.state && targetedNote.state === 2){ // current note is the start of a note chain
				nextNote.state = 2 // make the next note the start of the note chain
			}

			if (nextNote.state === 2 && !targetedNote.state){
				targetedNote.state = 2
				nextNote.state = 1
				return
			}
		}

		if (!targetedNote.state && (!previousNote || !previousNote.state)){
			targetedNote.state = 2
		}
		else if (targetedNote.state === 2){
			targetedNote.state = 0
		}
		else if (previousNote && previousNote.state && targetedNote.state === 1){
			targetedNote.state = 2
		}
		else if (previousNote && previousNote.state && !targetedNote.state){
			targetedNote.state = 1
		}
	},
	toggleNoteReverse: function(notesMatrix, column, row){
		var targetedNote = notesMatrix[column][row]

		if (column -1 >= 0){
			var previousNote = notesMatrix[column - 1][row]
		}

		if (column + 1 < notesMatrix.length){
			var nextNote = notesMatrix[column + 1][row]
		}

		if (previousNote && previousNote.state && targetedNote.state === 2){
			targetedNote.state = 1
		}
		else if (previousNote && previousNote.state && targetedNote.state === 1){
			targetedNote.state = 0
		}
		else if (previousNote && previousNote.state && !targetedNote.state){
			targetedNote.state = 2
		}
		else if ((!previousNote && !previousNote.state) && targetedNote.state === 2 && (!nextNote || !nextNote.state) ){
			targetedNote.state = 0
		}
		else if ((!previousNote || !previousNote.state) && targetedNote.state === 2 && nextNote.state){
			nextNote.state = 2
			targetedNote.state = 0
		}
		else if (!targetedNote.state){
			targetedNote.state = 2
		}
	},
	createNote: function(state = 0, velocity = 127){
		return {
			state: state,
			velocity: velocity,
			sel: false
		}
	},
	classOfNote: function(note){
		var noteClasses = ""
		switch (note.state) {
			case 2:
				noteClasses += "bg-secondary"
				break
			case 1:
				noteClasses += "bg-secondary-light"
				break
			default:
				noteClasses += "bg-gray"
				break
		}
		note.sel && (noteClasses += " selected")
		+note.hollow && (noteClasses += " opacity-0.6")
        return noteClasses
	}
})
var momoca = mmcView.app

momoca.screenSize = window.innerWidth
window.addEventListener("resize", function(){
	momoca.screenSize = window.innerWidth
})
momoca.loading = document.querySelector("#loading")
