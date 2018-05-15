var track = new midiWriterJs.Track();

// Define an instrument (optional):
track.addEvent(new midiWriterJs.ProgramChangeEvent({instrument : 1}));

// Add some notes:
var note = new midiWriterJs.NoteEvent({pitch:['C4', 'D4', 'E4'], duration: '4'});
track.addEvent(note);

// Generate a data URI
var write = new midiWriterJs.Writer([track]);
var b64 = write.dataUri();

var Player = new MidiPlayer.Player(console.log)
Player.loadDataUri(b64)
Player.play()
