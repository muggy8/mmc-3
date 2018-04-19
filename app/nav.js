;(function(accountableData){
    accountableData.logout = function(){
        aja()
            .url("/api/auth/logout")
            .on("success", utils.updateUser)
            .go()
    }
})(mmc.nav)