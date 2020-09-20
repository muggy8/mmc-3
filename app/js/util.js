var utils = {
	extendFn: function(superFunction, extendedFunction){
		return function(){
			var args = Array.prototype.slice.call(arguments)
			args.unshift(superFunction.bind(this))
			return extendedFunction.apply(this, args)
		}
	},
    proxyRenderStaticRepeats(template, proxyData, name="app"){
        return proxymity(template, proxyData, name)
			.unlink()
			.forEach(function(node){
				if (!(node instanceof HTMLElement)){
					node.parentNode.removeChild(node)
				}
			})
    },
	range: function(start, end){
		var range = []
		var increment = 1
		if (end < start){
			increment = -1
		}
		for(; start !== end; start += increment){
			range.push(start)
		}
		range.push(start)
		return range
	},
	xhr: chainify(XMLHttpRequest)
}
