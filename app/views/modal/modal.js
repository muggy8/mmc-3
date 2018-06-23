new xhr()
	.open("GET", "/app/views/modal/modal.html")
	.addEventListener("error", function(){
		momoca.notify("Failed to load modal module")
	})
	.addEventListener("load", function(){
		var viewHtml = this.responseText


		momoca.popOver = function(body, configs = {}){
			var popoverView = proxymity(viewHtml)
			var popOverController = popoverView.app
        	popOverController.body = popOverController.innerHTML = popOverController.proxyView = undefined;
			if (body instanceof HTMLElement){
				popOverController.body = body
			}
			else if (typeof body === "string") {
				popOverController.innerHTML = body
			}
            else if (Array.isArray(body) && body.appendTo) {
                popOverController.proxyView = body
            }
            popOverController.configs = configs

	        popOverController.close = function(){
				var canClose = configs.onclose && configs.onclose()
				if (canClose === false){
					return
				}
	            popoverView.detach()
	            popOverController.body = popOverController.innerHTML = popOverController.proxyView = undefined;
	        }
			popoverView.appendTo("main")

			return popOverController
		}
	})
	.send()
