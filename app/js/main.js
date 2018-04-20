var mmcView = proxymity(document.querySelector("body"), {
    getUser: function(){
        var cookies = utils.keyValParse(document.cookie)
        if (cookies.user){
            aja()
                .url("/api/me")
				.cache(false)
                .on("2xx", function(ouo){
                    momoca.user = ouo
                })
				.on("4xx", function(){
					momoca.user = {}
				})
                .go()
        }
		else {
        	momoca.user = {}
		}
    },
	notify: function(message){
		console.log(message)
	}
})
var momoca = mmcView.app
momoca.getUser()
