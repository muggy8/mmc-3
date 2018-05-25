aja()
	.url("/app/views/instrument-configuration/config.html")
	.into("#loading")
	.on("2xx", function(){
		var preRenderData = proxymity.convert({
			possiableNotes: MidiPlayer.Constants.NOTES
		})

		Array.prototype.forEach.call(momoca.loading.querySelectorAll("select"), function(select){
			utils.proxyRenderStaticRepeats(select.childNodes, preRenderData)
		})

		var currentlyPlayerPromise = Promise.resolve(null)
		var view = proxymity(momoca.loading.childNodes, {
			watchAndPlayScale: function(id){
				if (id.toString().match(/^\d+$/)) {
					currentlyPlayerPromise.then(function(player){
						player && player.stop()
						setTimeout(function(){
							currentlyPlayerPromise = momoca.playSong({
								tracks:[view.app.instrument.objectify()],
								bpm: momoca.home.newSong.bpm,
								smallestNoteFraction: momoca.home.newSong.smallestNoteFraction
							})
						}, 100)
					})
				}
			}
		}).detach()

		momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
			var otherRoutState = superFn(payload)
			var routMatch = momoca.state.match(/\/instrument-configuration/i)

			if (routMatch && !view.active){

                payload.notes = utils.range(0, 15).map(function(i){
                    return utils.range(0, 15).map(function(j){
                        if (i === j){
							return {
								velocity: 127
							}
						}
						return false
                    })
                })

				view.app.instrument = payload
				view.active = true
				// var stopWatchingInstrument = view.app.instrument.watch("instrumentId", view.app.watchAndPlayScale)
				// var stopWatchingInstrument = view.app.instrument.watch("preset", view.app.watchAndPlayScale)

				momoca.popOver(view, {
					onclose: function(){
						view.active = false
						momoca.state = momoca.state.replace("/instrument-configuration", "")
						momoca.rout()
                        delete view.app.instrument
						stopWatchingInstrument()
						stopWatchingInstrument()
					},
					label: "Instrument Key Selector"
				})
			}

			return otherRoutState
		})
	})
	.on("4xx", function(){
		momoca.notify("failed to get instrument configuration module")
	})
	.on("5xx", function(){
		momoca.notify("server error")
	})
	.go()
