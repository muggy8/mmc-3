void function(controller){
	var view
	aja()
		.url("/app/views/song/song.html")
		.into("#loading")
		.on("5xx", function(oxo){
			momoca.notify("server error")
		})
		.on("4xx", function(o3o){
			momoca.notify("failed to get song view")
		})
		.on("2xx", function(ouo){
			view = proxymity(momoca.loading.querySelectorAll(".song-template"), controller).detach()

			controller.inDom = false
			momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
				var otherRoutsWorked = superFn(payload)
				var routMatch = momoca.state.match(/^\/song/)
				if (!otherRoutsWorked && routMatch){
					if (!controller.inDom){
						controller.song = payload
						view.when("renderend").then(function(){
							view.appendTo("main")
							controller.inDom = true
						})
					}
					return true
				}
				else{
					if (controller.inDom){
						view.detach()
						controller.inDom = false
					}
					return otherRoutsWorked
				}
			})
			momoca.rout()
		})
		.go()


	controller.mainControl = "play"
	controller.mainControlFn = "play"
	controller.seek = 0
	controller.stubFn = function(){}
	controller.play = function(){
		controller.mainControlFn = "stubFn"
		controller.mainControl = "loading"
        var originalSeek = controller.seek
		momoca.playSong(controller.song.objectify(), controller.seek).then(function(player){
			controller.mainControlFn = "stop"
			controller.mainControl = "stop"
			controller.stop = function(){
				player.stop()
				controller.mainControl = "play"
				controller.mainControlFn = "play"
                controller.seek = originalSeek
			}
            player.on("endOfFile", function(){
                controller.mainControl = "play"
                controller.mainControlFn = "play"
                controller.seek = originalSeek
            })
            var noteTicks = 128/controller.song.smallestNoteFraction
            player.on("playing", function(){
                controller.seek = Math.floor(player.getCurrentTick()/noteTicks)
            })
        })
	}

	controller.home = function(){
		if (confirm("Discard all unsaved changes and return to home view")){
			delete controller.song
			momoca.state = "/"
			momoca.rout()
		}
	}

	controller.configTrack = function(track){
		momoca.state += "/instrument-configuration";
		momoca.rout(track)
	}

	controller.export = function(){
		momoca.popOver(`<div class="text-center">Midi: <a href="${momoca.generateMidi(controller.song.objectify())}" download>Download.mid</a></div><div class="text-center">JSON: <a href="data:application/json;base64,${btoa(controller.song.stringify())}" download>Download.json</a></div>`)
	}

	controller.addTrack = function(){
		var popOverController = momoca.popOver(`<div class="text-center padding-0.5em"><div class="icon font-2em"><i class="loading"></i></div></div>`)
		controller.song.tracks.push({
			instrumentId: 0,
			keyMap: momoca.presets[0].objectify(),
			preset: 0,
			notes: utils.range(0, (controller.song.beats * controller.song.smallestNoteFraction) - 1).map(function(){
				return utils.range(0, 15).map(function(){
					return false
				})
			})
		})
		view.when("renderend").then(function(){
			popOverController.close()
		})
	}

}(momoca.songController)
