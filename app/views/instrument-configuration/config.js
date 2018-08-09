new utils.xhr()
	.open("GET", "/app/views/instrument-configuration/config.html")
	.addEventListener("load", function(){
		var preRenderData = proxymity.convert({
			possiableNotes: MidiPlayer.Constants.NOTES
		})
		var template = document.createElement("template")
		template.innerHTML = this.responseText

		Array.prototype.forEach.call(template.content.querySelectorAll("select"), function(select){
			utils.proxyRenderStaticRepeats(select.childNodes, preRenderData)
		})

		var currentlyPlayerPromise = Promise.resolve(null)
		var view = proxymity(template.content.childNodes, {
			notes: utils.range(0, 15).map(function(i){
				return utils.range(0, 15).map(function(j){
					if (i === j){
						return momoca.createNote(2)
					}
					return momoca.createNote()
				})
			}),
			watchAndPlayScale: function(id){
				if (id.toString().match(/^\d+$/)) {
					view.app.controlIcon = "loading"
					view.app.controlFn = "stubFn"
					currentlyPlayerPromise.then(function(player){
						player && player.stop()
						var demoTrackNotes = momoca.linearClone(view.app.notes)
						var demoTrackData = momoca.linearClone(view.app.instrument)
						demoTrackData.notes = demoTrackNotes

						currentlyPlayerPromise = momoca.playSong({
							tracks:[demoTrackData],
							bpm: momoca.home.newSong.bpm,
							smallestNoteFraction: momoca.home.newSong.smallestNoteFraction
						}).then(function(player){
							view.app.controlIcon = "stop"
							view.app.stop = function(){
								player.stop()
								view.app.controlIcon = "play"
								view.app.controlFn = "watchAndPlayScale"
							}
							view.app.controlFn = "stop"

							player.on("endOfFile", function(){
								view.app.controlIcon = "play"
								view.app.controlFn = "watchAndPlayScale"
							})
						})

					})
				}
			},
			controlIcon: "play",
			controlFn: "watchAndPlayScale",
			stubFn: function(){}
		})

		momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
			var otherRoutState = superFn(payload)
			var routMatch = momoca.state.match(/\/instrument-configuration/i)

			if (routMatch && !view.active){
				view.app.instrument = payload
				view.active = true
				var stopWatchingInstrument = view.app.instrument.watch("instrumentId", view.app.watchAndPlayScale)
				var stopWatchingpreset = view.app.instrument.watch("preset", view.app.watchAndPlayScale)

				momoca.popOver(view, {
					onclose: function(){
						view.active = false
						momoca.state = momoca.state.replace("/instrument-configuration", "")
						momoca.rout()
						stopWatchingInstrument()
						stopWatchingpreset()
						view.app.instrument = {}
					},
					label: "Instrument Key Selector"
				})
			}

			return otherRoutState
		})
	})
	.addEventListener("error", function(){
		momoca.notify("failed to get instrument configuration module")
	})
	.send()
