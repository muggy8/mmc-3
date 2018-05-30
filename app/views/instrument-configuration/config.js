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
		var view = proxymity(momoca.loading.querySelectorAll(".instrument-configuration-template"), {
			watchAndPlayScale: function(id){
				if (id.toString().match(/^\d+$/)) {
					view.app.controlIcon = "loading"
					view.app.controlFn = "stubFn"
					currentlyPlayerPromise.then(function(player){
						player && player.stop()

                        currentlyPlayerPromise = momoca.playSong({
                            tracks:[view.app.instrument.objectify()],
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
		}).detach()

		momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
			var otherRoutState = superFn(payload)
			var routMatch = momoca.state.match(/\/instrument-configuration/i)

			if (routMatch && !view.active){

                payload.notes = utils.range(0, 15).map(function(i){
                    return utils.range(0, 15).map(function(j){
                        if (i === j){
							return momoca.createNote()
						}
						return false
                    })
                })

				view.app.instrument = payload
				view.active = true
				var stopWatchingInstrument = view.app.instrument.watch("instrumentId", view.app.watchAndPlayScale)
				var stopWatchingpreset = view.app.instrument.watch("preset", view.app.watchAndPlayScale)

				momoca.popOver(view, {
					onclose: function(){
						view.active = false
						momoca.state = momoca.state.replace("/instrument-configuration", "")
						momoca.rout()
                        view.app.instrument = {}
						stopWatchingInstrument()
						stopWatchingpreset()
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
