function keyValParse(str, seperator = "&"){
	var output = {}
	var pairs = str.split(new RegExp("\\s*" + seperator + "\\s*"))
	for(var pair of pairs){
		pair = pair.split("=", 1)
		output[pair[0]] = output[1]
	}
}