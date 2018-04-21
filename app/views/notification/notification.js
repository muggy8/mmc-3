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
        notificationsArray().push(message)
        if (typeof configs.timeout === "number"){
            setTimeout(function(){
                var source = notificationsArray()
                source.splice(source.indexOf(message), 1)
            }, timeout)
        }
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
