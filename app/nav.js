;(function(accountableData){
    accountableData.logout = function(){
        aja()
            .url("/api/auth/logout")
            .on("2xx", utils.updateUser)
            .go()
    }
})(mmc.nav)