void function(homeController){
	new utils.xhr()
		.open("GET", "/app/views/home/home.html")
		.addEventListener("load", function(){
			var viewHtml = this.responseText
			var template = document.createElement("template")
			template.innerHTML = viewHtml

			Array.prototype.forEach.call(template.content.querySelectorAll("select"), function(select){
				utils.proxyRenderStaticRepeats(select.childNodes, momoca)
			})

			var view = proxymity(template.content.childNodes, momoca).detach()

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
		.addEventListener("error", function(o3o){
			momoca.notify("failed to get home view")
		})
		.send()

	homeController.createSong = function(songProperties){
		if (!+songProperties.beats){
			songProperties.beats = 4
		}
		songPropertiesHasVersion = !!songProperties.version
		!songPropertiesHasVersion && songProperties.tracks.forEach(function(track){
			track.notes = utils.range(0, (songProperties.beats * songProperties.smallestNoteFraction) - 1).map(function(){
				return utils.range(0, 15).map(function(){
					return momoca.createNote()
				})
			})
		})
		songProperties.version = songProperties.version || momoca.dataVersion
		momoca.state = "/song"
		momoca.rout(songProperties)
		momoca.notify("Work in progress", {
			timeout: 5000
		})
		return true
	}

	homeController.configure = function(instrumentForConfiguration){
		momoca.state = "/home/instrument-configuration"
		momoca.rout(instrumentForConfiguration)
	}

	homeController.trackTemplate = {
		instrumentId: 0,
		keyMap: momoca.linearClone(momoca.presets[0].map),
		preset: 0
	}

	homeController.import = function(file){
	    var reader = new FileReader()
	    reader.onload = function(ev){
	        var res = ev.target.result
	        homeController.createSong(JSON.parse(res))
	    }
	    reader.readAsText(file)
	}

    homeController.dragIconColor = ""
    homeController.prepDragDropImport = function(el){
        "drag dragstart dragend dragover dragenter dragleave drop".split(" ").forEach(function(evType){
            el.addEventListener(evType, function(ev){
                ev.preventDefault()
                ev.stopPropagation()
            })
        })
        "dragover dragenter".split(" ").forEach(function(evType){
            el.addEventListener(evType, function(ev){
                homeController.dragIconColor = "color-primary"
            })
        })
        "dragleave dragend drop".split(" ").forEach(function(evType){
            el.addEventListener(evType, function(ev){
                homeController.dragIconColor = ""
            })
        })
        el.addEventListener("drop", function(ev){
            homeController.import(ev.dataTransfer.files[0])
        })
    }
}(momoca.home = momoca.home || {})
