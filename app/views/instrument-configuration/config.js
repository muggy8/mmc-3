aja()
	.url("/app/views/instrument-configuration/config.html")
	.into("#loading")
	.on("2xx", function(){
		var view = proxymity(momoca.loading.childNodes, {
			cols: [],
			possiableNotes: MidiPlayer.Constants.NOTES
		}).detach()
		for(var i = 16; i--;){
			view.app.cols.push(true)
		}
		momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
			var otherRoutState = superFn(payload)
			var routMatch = momoca.state.match(/\/instrument-configuration/i)

			if (routMatch && !view.active){
				momoca.popOver(view, {
					onclose: function(){
						view.active = false
						momoca.state = momoca.state.replace("/instrument-configuration", "")
						momoca.rout()
                        delete view.app.instrument
					},
					label: "Instrument Key Selector"
				})
				view.app.instrument = payload
				view.active = true
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
