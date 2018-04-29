void function(navControler){
	navControler.logout = function(){
		aja()
			.url("/api/auth/logout")
			.on("success", momoca.getUser)
			.go()
	}

	navControler.patchUser = function(userProxy){
		aja()
			.method("PATCH")
			.cache(false)
			.body(userProxy.objectify())
			.url("/api/me")
			.on("2xx", function(){
				momoca.notify("Account Updated")
				momoca.nav.subNavSection = ""
				momoca.getUser()
			})
			.on("4xx", function(o3o){
				var messages = JSON.parse(o3o)
				for(var message of messages){
					momoca.notify(message)
				}
			})
			.on("5xx", function(oxo){
				momoca.notify("Server Error")
			})
			.go()
	}

	window.addEventListener("message", function(ev){
		if (ev.data === "close"){
			momoca.getUser()
			momoca.nav.subNavSection = ""
		}
	})
}(momoca.nav)
