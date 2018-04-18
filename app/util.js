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
        mmc.user = false
        var cookies = utils.keyValParse(document.cookie)
        if (cookies.user){
            aja()
                .url("/api/user/me")
                .on("2xx", function(res){
                    mmc.user = res
                })
                .go()
        }
    }
}
