;(function(navControler){
    navControler.logout = function(){
        aja()
            .url("/api/auth/logout")
            .on("success", mmc.updateUser)
            .go()
    }

	navControler.updateUser = function(userProxy){
		aja()
			.method("PATCH")
			.cache(false)
			.body(userProxy.objectify())
			.url("/api/me")
			.on("2xx", function(){
				utils.notify("Account Updated")
				mmc.nav.subNavSection = ""
				mmc.updateUser()
			})
			.on("4xx", function(o3o){
				var messages = JSON.parse(o3o)
				for(var message of messages){
					utils.notify(message)
				}
			})
			.go()
	}

    window.addEventListener("message", function(ev){
        if (ev.data === "close"){
            mmc.updateUser()
            mmc.nav.subNavSection = ""
        }
    })
})(mmc.nav)
