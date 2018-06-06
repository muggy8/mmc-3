void function(controller){
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
			var view = proxymity(momoca.loading.querySelectorAll(".song-template"), controller).detach()

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

	controller.inDom = false

	controller.mainControl = "play"
	controller.mainControlFn = "play"
	controller.stubFn = function(){}
	controller.play = function(){
		controller.mainControlFn = "stubFn"
		controller.mainControl = "loading"
		momoca.playSong(controller.song.objectify()).then(function(player){
			controller.mainControlFn = "stop"
			controller.mainControl = "stop"
			controller.stop = function(){
				player.stop()
				controller.mainControl = "play"
				controller.mainControlFn = "play"
			}
            player.on("endOfFile", function(){
                controller.mainControl = "play"
                controller.mainControlFn = "play"
            })
        })
	}

	controller.home = function(){
		if (confirm("Discard all unsaved changes and return to home view")){
			momoca.state = "/"
			momoca.rout()
		}
	}

	controller.configTrack = function(track){
		momoca.state += "/instrument-configuration";
		momoca.rout(track)
	}
}(momoca.songController)
