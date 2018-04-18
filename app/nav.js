var navView = (function(){
    var view = proxymity(document.querySelector("#header-nav"))
    var app = view.app

    if (cookies.user){
        aja()
            .url("/api/user/me")
            .on("2xx", function(res){
                console.log(res)
            })
    }

    return view
})()