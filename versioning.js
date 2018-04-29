const fs = require("fs")
const https = require("https")
const crypto = require('crypto')
const assetVersion = {}

fs.readFile("app/assets.json", function(o3o, ouo){
    if (o3o){
        return console.log("failed to read json")
    }
    try{
        var assets = JSON.parse(ouo)
    }
    catch(o3o){
        return console.log("failed to parse json", o3o)
    }

    var assetHashPromiseQueue = []
    for(var type in assets){
        assets[type].map(function(assetName){
            return new Promise(function(accept, reject){
                var contents = ""
                https.get("https://mmc-3.mugdev.com" + assetName, function(stream){
                    stream.on("data", function(chunk){
                        contents += chunk
                    })
                    stream.on("end", function(){
						console.log("loaded:", assetName)
                        assetVersion[assetName] = crypto.createHash("md5")
                            .update(contents, 'utf8')
                            .digest('hex')
                        accept()
                    })
                    stream.on("error", reject)
                })
            })
        }).forEach(function(p){
            assetHashPromiseQueue.push(p)
        })
    }

    Promise.all(assetHashPromiseQueue).then(function(ouo){
        fs.writeFile("app/version.json", JSON.stringify(assetVersion, null, "    "), function(o3o){
            if (o3o){
                console.log("failed to write app/version.json")
            }
            else {
                console.log("updated app/version.json")
            }
        })
    }, console.log.bind(console, "Failed to fetch everything"))
})
