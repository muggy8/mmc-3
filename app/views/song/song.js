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
					if (!view.inDom){
						view.appendTo("main")
						view.inDom = true
						controller.song = payload
					}
					return true
				}
				else{
					if (view.inDom){
						view.detach()
						view.inDom = false
					}
					return otherRoutsWorked
				}
			})
			momoca.rout()
		})
		.go()
}(momoca.songController)
