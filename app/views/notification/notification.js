void function(){
    var notificationsView
    var notificationController = {
        notifications: []
    }

    function notificationsArray(){
        return notificationsView
            ? notificationsView.app.notifications
            : notificationController.notifications
    }

    momoca.notify = function(message, configs = {}){
		configs.message = message
		if (!configs.hasOwnProperty("timeout")){
			configs.timeout = 2000
		}
		notificationsArray().push(configs)
        if (typeof configs.timeout === "number"){
            setTimeout(function(){
                var source = notificationsArray()
                source.splice(source.indexOf(configs), 1)
            }, configs.timeout)
        }
    }
	momoca.notify.clear = function(){
		var source = notificationsArray()
		source.length = 0
	}

    aja()
        .url("/app/views/notification/notification.html")
        .into("#loading")
        .on("2xx", function(){
            notificationsView = proxymity(loading.childNodes, notificationController).appendTo("body")
        })
        .on("4xx", function(){
            alert("Failed to load Notification module")
        })
        .on("5xx", function(){
            alert("Server Error")
        })
        .go()
}()
