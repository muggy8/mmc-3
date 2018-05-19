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
    proxyRenderStaticRepeats(template, data={}, name="app"){
        var bound = proxymity(template, data, name)
        var preRendered = bound.reduce(function(sum, current){
            return sum + (current.outerHTML || "")
        }, "")
        bound.destroy && bound.destroy()
        return preRendered
    }
}
