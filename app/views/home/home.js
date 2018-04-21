void function(homeScope){
    aja()
        .url("/app/views/home/home.html")
        .into("#loading")
        .on("2xx", function(){
            homeScope.view = proxymity(loading.childNodes, momoca).detach()
        })
        .on("4xx", function(o3o){
            momoca.notify("failed to get home view")
        })
        .on("5xx", function(oxo){
            momoca.notify("server error")
        })
        .go()

    momoca.rout = utils.extendFn(momoca.rout, function(superFn){
        if (!superFn() && momoca.state.match(/^\/?$/)){
            homeScope.view.appendTo("main")
            return true
        }
        return false
    })
}(momoca.home)
