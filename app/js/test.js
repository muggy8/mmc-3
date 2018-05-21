void function(){
	var testTrack = {
		instrumentId: "1",
		keyMap: {
			"T1":"Db5",
			"T2":"Bb4",
			"T3":"Ab4",
			"T4":"Gb4",
			"T5":"Eb4",
			"T6":"Db4",
			"T7":"Bb3",
			"T8":"Ab3",
			"T9":"Gb3",
			"T10":"Eb3",
			"T11":"Db3",
			"T12":"Bb2",
			"T13":"Ab2",
			"T14":"Gb2",
			"T15":"Eb2",
			"T16":"Db2"
		},
	}

	for(var i = 1; i <= 16; i++){
		testTrack["T" + i] = []
		for(var j = 0; j < 16; j++){
			if (i-1 === j){
				testTrack["T" + i][j] = {
					duration: 1,
					velocity: 0.8
				}
			}
			else{
				testTrack["T" + i][j] = false
			}
		}
	}

	momoca.playSong([testTrack])
}()
