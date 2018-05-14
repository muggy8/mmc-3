aja()
	.url("/app/views/modal/modal.html")
	.into("#loading")
	.on("5xx", function(){
		momoca.notify("Server Error")
	})
	.on("4xx", function(){
		momoca.notify("Failed to load modal module")
	})
	.on("2xx", function(){
		var viewNodes = Array.prototype.slice.call(momoca.loading.childNodes)
		viewNodes.forEach(function(node){
			node.parentNode.removeChild(node)
		})
		momoca.popOver = function(body, configs = {}){
			var popoverView = proxymity(viewNodes.map(function(node){
				return node.cloneNode(true)
			}))
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
	            popoverView.detach()
				configs.onclose && configs.onclose()
	            popOverController.body = popOverController.innerHTML = popOverController.proxyView = undefined;
	        }
			popoverView.appendTo("main")
		}
	})
	.go()
