var utils = {
	keyValParse: function(str, seperator = "&"){
		var output = {}
		var pairs = str.split(new RegExp("\\s*" + seperator + "\\s*"))
		for(var pair of pairs){
			pair = pair.split("=")
			output[pair[0]] = pair[1]
		}
		return output
	},
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
		for(var i = start; i <= end; i++){
			range.push(i)
		}
		return range
	}
}
