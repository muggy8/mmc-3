var utils = {
    keyValParse: function(str, seperator = "&"){
        var output = {}
        var pairs = str.split(new RegExp("\\s*" + seperator + "\\s*"))
        for(var pair of pairs){
            pair = pair.split("=")
            output[pair[0]] = pair[1]
        }
        return output
    },
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
}
