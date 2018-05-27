void function(homeController){
	aja()
		.url("/app/views/home/home.html")
		.into("#loading")
		.on("2xx", function(){
			Array.prototype.forEach.call(momoca.loading.querySelectorAll("select"), function(select){
				utils.proxyRenderStaticRepeats(select.childNodes, momoca)
			})

			var view = proxymity(momoca.loading.querySelectorAll(".home-template"), momoca).detach()

			momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
				var otherRoutsWorked = superFn(payload)
				var routMatch = momoca.state.match(/^\/($|home)/)
				if (!otherRoutsWorked && routMatch){
					if (!view.inDom){
						view.appendTo("main")
						view.inDom = true
						document.querySelector("main").className = "relative flex-big"
					}
					return true
				}
				else{
					if (view.inDom){
						view.detach()
						view.inDom = false
						document.querySelector("main").className = "relative"
					}
					return otherRoutsWorked
				}
			})
			momoca.rout()
		})
		.on("4xx", function(o3o){
			momoca.notify("failed to get home view")
		})
		.on("5xx", function(oxo){
			momoca.notify("server error")
		})
		.go()

	homeController.createSong = function(songProperties){
		if (!+songProperties.beats){
			songProperties.beats = 2
		}
		momoca.state = "/song"
		momoca.rout(songProperties.objectify())
		momoca.notify("Work in progress", {
			timeout: 5000
		})
		return true
	}

	homeController.configure = function(instrumentForConfiguration){
		momoca.state = "/home/instrument-configuration"
		momoca.rout(instrumentForConfiguration)
	}
}(momoca.home)
