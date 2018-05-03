aja()
	.url("/app/views/pop-over/pop-over.html")
	.into("#loading")
	.on("2xx", function(){
		var popoverView = proxymity(momoca.loading.childNodes)
		var popOverController = popoverView.app
		momoca.popOver = function(body, configs = {}){
			if (body instanceof HTMLElement){
				popOverController.body = body
			}
			else if (typeof body === "string") {
				popOverController.innerHTML = body
			}
			popOverController
		}
	})
	.on("4xx", function(){
		momoca.notify("Failed to load pop-over module")
	})
	.on("5xx", function(){
		momoca.notify("Server Error")
	})
	.go()
