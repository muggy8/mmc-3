void function(homeScope){
    aja()
        .url("/app/views/home/home.html")
        .into("main")
        .on("2xx", function(){
            homeScope.view = proxymity(main.childNodes, momoca)
        })
        .on("4xx", function(o3o){
            momoca.notify("failed to get home view")
        })
        .on("5xx", function(oxo){
            momoca.notify("server error")
        })
        .go()
}(momoca.home)
