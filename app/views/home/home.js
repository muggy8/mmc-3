void function(homeController){
    aja()
        .url("/app/views/home/home.html")
        .into("#loading")
        .on("2xx", function(){
            var view = proxymity(loading.childNodes, momoca).detach()
            momoca.rout = utils.extendFn(momoca.rout, function(superFn){
				var otherRoutsWorked = superFn()
                if (!otherRoutsWorked && momoca.state.match(/^\/?$/)){
                    view.appendTo("main")
					document.querySelector("main").className = "relative flex-big"
                    return true
                }
				else if (otherRoutsWorked) {
					view.detach()
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
		songProperties.nps = +songProperties.nps || 8
		console.log(songProperties.objectify())
		momoca.state = "/song"
		momoca.rout()
	}
}(momoca.home)
