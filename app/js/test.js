void function(){
	var testTrack = {
		instrumentId: "1",
		keyMap: ["Db2", "Eb2", "Gb2", "Ab2", "Bb2", "Db3", "Eb3", "Gb3", "Ab3", "Bb3", "Db4", "Eb4", "Gb4", "Ab4", "Bb4", "Db5"]
	}

    testTrack.notes = [
        // [0 - 16] this is a column that will be displayed in reverse order
        // ^ x 16
    ]

    for(var col in utils.range(0, 15)){
        testTrack.notes[col] = []
        for(var row in utils.range(15, 0)){
            testTrack.notes[col][row] = false
            if (col == row){
                testTrack.notes[col][row] = {
					velocity: 127
                }
            }
        }
    }

	TestMidiFile = momoca.generateMidi({
		tracks:[testTrack],
		bpm: 128,
		smallestNoteFraction: 4
	})

    var player = new utils.midiPlayer.Player(console.log)
    player.loadDataUri(TestMidiFile)
    player.play()
}()
