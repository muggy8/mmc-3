function keyValParse(str, seperator = "&"){
	var output = {}
	var pairs = str.split(new RegExp("\\s*" + seperator + "\\s*"))
	for(var pair of pairs){
		pair = pair.split("=")
		output[pair[0]] = pair[1]
	}
    return output
}

function updateUser = function(){
    var cookies = keyValParse(document.cookie)
    if (cookies.user){
        aja()
            .url("/api/user/me")
            .on("2xx", function(res){
                mmc.user = res
            })
            .on("4xx", function(o3o){
                mmc.user = null
            })
            .go()
    }
    else {
        mmc.user = null
    }
}

var mmcView = proxymity(document.querySelector("body"))
var mmc = mmcView.app
updateUser()