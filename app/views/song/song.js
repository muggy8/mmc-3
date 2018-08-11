void function(controller){
	var view
	new utils.xhr()
		.open("GET", "/app/views/song/song.html")
		.addEventListener("error", function(){
			momoca.notify("failed to get song view")
		})
		.addEventListener("load", function(){
			view = proxymity(this.responseText, controller).detach()

			controller.inDom = false
			momoca.rout = utils.extendFn(momoca.rout, function(superFn, payload){
				var otherRoutsWorked = superFn(payload)
				var routMatch = momoca.state.match(/^\/song/)
				if (!otherRoutsWorked && routMatch){
					if (!controller.inDom){
						controller.song = payload
						view.when("renderend").then(function(){
							view.appendTo("main")
							controller.inDom = true
						})
					}
					return true
				}
				else{
					if (controller.inDom){
						view.detach()
						controller.inDom = false
					}
					return otherRoutsWorked
				}
			})
			momoca.rout()
		})
		.send()


	controller.mainControl = "play"
	controller.mainControlFn = "play"
	controller.seek = 0
	controller.stubFn = function(){}
	controller.play = function(){
		controller.mainControlFn = "stubFn"
		controller.mainControl = "loading"
		var originalSeek = controller.seek
		momoca.playSong(controller.song, controller.seek).then(function(player){
			controller.mainControlFn = "stop"
			controller.mainControl = "stop"
			controller.stop = function(){
				player.stop()
				controller.mainControl = "play"
				controller.mainControlFn = "play"
				controller.seek = originalSeek
			}
			player.on("endOfFile", function(){
				controller.mainControl = "play"
				controller.mainControlFn = "play"
				controller.seek = originalSeek
			})
			var noteTicks = 128/controller.song.smallestNoteFraction
			player.on("playing", function(){
				controller.seek = Math.floor(player.getCurrentTick()/noteTicks)
			})
		})
	}

	controller.home = function(){
		if (confirm("Discard all unsaved changes and return to home view")){
			controller.song = undefined
			momoca.state = "/"
			momoca.rout()
		}
	}

	controller.configTrack = function(track){
		momoca.state += "/instrument-configuration";
		momoca.rout(track)
	}

	controller.export = function(){
		momoca.popOver(`<div class="text-center">Midi: <a href="${momoca.generateMidi(controller.song)}" download>Download.mid</a></div><div class="text-center">JSON: <a href="data:application/json;base64,${btoa(controller.song.toString())}" download>Download.json</a></div>`)
	}

	controller.addTrack = function(){
		var popOverController = momoca.popOver(`<div class="text-center padding-0.5em"><div class="icon font-2em"><i class="loading"></i></div></div>`)
		controller.song.tracks.push({
			instrumentId: 0,
			keyMap: momoca.linearClone(momoca.presets[0]),
			preset: 0,
			notes: utils.range(0, (controller.song.beats * controller.song.smallestNoteFraction) - 1).map(function(){
				return utils.range(0, 15).map(function(){
					return false
				})
			})
		})
		view.when("renderend").then(function(){
			popOverController.close()
		})
	}

	controller.slideMode = 0
	controller.slideStates = [
		{
			toggleFn: function(ev, noteEle){
				ev && ev.preventDefault && ev.preventDefault()
				ev && ev.stopPropagation && ev.stopPropagation()
				!ev.button && momoca.toggleNote(controller.song.tracks[noteEle.trackIndex].notes, noteEle.col, noteEle.row)
				;(ev.button === 2) && momoca.toggleNoteReverse(controller.song.tracks[noteEle.trackIndex].notes, noteEle.col, noteEle.row)
			},
			icon: "toggle"
		},
		{
			toggleFn: (function(){
				var selectionState = {}
				return function(ev, noteEle){
					var targets = selectionState.selectionPoints = selectionState.selectionPoints || {}
					var elePoints = noteEle.id.split("-").map(function(str){
						return parseInt(str)
					})

					// initiate the selection if it's the first event
					if ((ev.type === "mousedown" || ev.type === "touchstart") && !ev.button){
						selectionState.selectionPoints.track = elePoints[0]
						selectionState.selectionPoints.start = {
							col: elePoints[1],
							row: elePoints[2]
						}
					}

					// all selections would include the end targets so this is not wrapped in an if
					targets.end = {
						col: elePoints[1],
						row: elePoints[2]
					}

					// convert the start and end rectangle into a selection of items
					var selection = []
					utils.range(targets.end.col, targets.start.col).forEach(function(colTarget){
						utils.range(targets.end.row, targets.start.row).forEach(function(rowTarget){
							selection.push(controller.song.tracks[targets.track].notes[colTarget][rowTarget])
						})
					})

					// remove any previousely selected elements that are no longer selected now
					targets.previousSelection && targets.previousSelection
						.filter(function(previousNote){
							if (selection.indexOf(previousNote) === -1){
								return true
							}
							return false
						})
						// .map(document.getElementById.bind(document))
						.forEach(function(note){
							// if (ele.dataset.proxyClasses){
							// 	ele.dataset.proxyClasses = ele.dataset.proxyClasses.replace(" selected", "")
							// }
							// ele.className = ele.className.replace(" selected", "")
							note.sel = false
						})

					// highlight the related element if not already
					selection.forEach(function(note){
						// if (ele.className.indexOf("selected") === -1){
						// 	ele.dataset.proxyClasses += " selected"
						// 	ele.className += " selected"
						// }
						!note.sel && (note.sel = true)
					})

					// save the current selection for the next iteration of this function
					targets.previousSelection = selection

				}
			})(),
			icon: "select"
		}
	]
	controller.mouseDown = false
	controller.prepNote = function(noteEle){
		noteEle.addEventListener("mousedown", function(ev){
			controller.mouseDown = true
			controller.slideStates[controller.slideMode].toggleFn(ev, noteEle)
		})


		noteEle.addEventListener("mouseenter", function(ev){
			if (controller.mouseDown){
				controller.slideStates[controller.slideMode].toggleFn(ev, noteEle)
			}
		})
		noteEle.addEventListener("customtouchenter", function(ev){
			// console.log(ev, noteEle)
			controller.slideStates[controller.slideMode].toggleFn(ev, noteEle)
		})
	}

	controller.trackTouch = function(trackEle){
		var touchMoveTargets = []

		trackEle.addEventListener("touchstart", function(ev){
			controller.mouseDown = true

			Array.from(ev.touches).forEach(function(touch){
				var ele = document.elementFromPoint(touch.clientX, touch.clientY)
				controller.slideStates[controller.slideMode].toggleFn(ev, ele)
			})
		})

		trackEle.addEventListener("touchmove", function(ev){
			// console.log(ev)
			var updatedIndex
			ev.touches && Array.from(ev.touches).forEach(function(touch, i){
				var ele = document.elementFromPoint(touch.clientX, touch.clientY)
				updatedIndex = i

				if (touchMoveTargets[i] !== ele){
					if (touchMoveTargets[i]){
						touchMoveTargets[i].dispatchEvent(new CustomEvent("customtouchleave"))
					}
					touchMoveTargets[i] = ele
					touchMoveTargets[i].dispatchEvent(new CustomEvent("customtouchenter"))
				}
			})
			if (updatedIndex < touchMoveTargets.length-1){
				for(var i = touchMoveTargets.length-1; i > updatedIndex; i--){
					touchMoveTargets.pop().dispatchEvent(new CustomEvent("customtouchleave"));
				}
			}
		})

		trackEle.addEventListener("touchend", function(ev){
			touchMoveTargets.forEach(function(ele){
				ele.dispatchEvent(new CustomEvent("customtouchleave"))
			})
			touchMoveTargets = []
		})
	}
}(momoca.songController = momoca.songController || {})
