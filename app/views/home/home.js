void function(homeController){
    aja()
        .url("/app/views/home/home.html")
        .into("#loading")
        .on("2xx", function(){
            var view = proxymity(loading.childNodes, momoca).detach()
            momoca.rout = utils.extendFn(momoca.rout, function(superFn){
                if (!superFn() && momoca.state.match(/^\/?$/)){
                    view.appendTo("main")
                    return true
                }
            })
            momoca.rout()
        })
        .on("4xx", function(o3o){
            momoca.notify("failed to get home view")
        })
        .on("5xx", function(oxo){
            momoca.notify("server error")
        })
        .go()

}(momoca.home)
