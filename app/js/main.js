var mmcView = proxymity(document.querySelector("body"), {
    updateUser: function(){
        var cookies = utils.keyValParse(document.cookie)
        if (cookies.user){
            aja()
                .url("/api/me")
				.cache(false)
                .on("2xx", function(res){
                    mmc.user = res
                })
				.on("4xx", function(){
					mmc.user = {}
				})
                .go()
        }
		else {
        	mmc.user = {}
		}
    },
	notify: function(message){
		console.log(message)
	}
})
var mmc = mmcView.app
mmc.updateUser()
