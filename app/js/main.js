var mmcView = proxymity(document.querySelector("body"))
var mmc = mmcView.app
utils.updateUser()

window.addEventListener("focus", utils.updateUser)
