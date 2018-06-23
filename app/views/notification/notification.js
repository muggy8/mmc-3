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
			configs.timeout = 10000
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

	new utils.xhr()
		.open("GET", "/app/views/notification/notification.html")
		.addEventListener("load", function(){
			notificationsView = proxymity(this.responseText).appendTo("body")
		})
		.addEventListener("error", function(){
			alert("Failed to load Notification module")
		})
		.send()
}()
