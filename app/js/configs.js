utils.midiWriter = require('MidiWriter') // https://www.npmjs.com/package/midi-writer-js
utils.midGen = Midi // https://www.npmjs.com/package/midi-writer-js
utils.midiPlayer = MidiPlayer // https://github.com/grimmdude/MidiPlayerJS
utils.soundfontPlayer = Soundfont // https://github.com/danigb/soundfont-player

// copy paste of GM from MIDI.js. although we are no longer using it, we still need this map lul
momoca.instruments = [
	{
		"id": "acoustic_grand_piano",
		"instrument": "Acoustic Grand Piano",
		"number": 0,
		"category": "Piano"
	},
	{
		"id": "bright_acoustic_piano",
		"instrument": "Bright Acoustic Piano",
		"number": 1,
		"category": "Piano"
	},
	{
		"id": "electric_grand_piano",
		"instrument": "Electric Grand Piano",
		"number": 2,
		"category": "Piano"
	},
	{
		"id": "honkytonk_piano",
		"instrument": "Honky-tonk Piano",
		"number": 3,
		"category": "Piano"
	},
	{
		"id": "electric_piano_1",
		"instrument": "Electric Piano 1",
		"number": 4,
		"category": "Piano"
	},
	{
		"id": "electric_piano_2",
		"instrument": "Electric Piano 2",
		"number": 5,
		"category": "Piano"
	},
	{
		"id": "harpsichord",
		"instrument": "Harpsichord",
		"number": 6,
		"category": "Piano"
	},
	{
		"id": "clavinet",
		"instrument": "Clavinet",
		"number": 7,
		"category": "Piano"
	},
	{
		"id": "celesta",
		"instrument": "Celesta",
		"number": 8,
		"category": "Chromatic Percussion"
	},
	{
		"id": "glockenspiel",
		"instrument": "Glockenspiel",
		"number": 9,
		"category": "Chromatic Percussion"
	},
	{
		"id": "music_box",
		"instrument": "Music Box",
		"number": 10,
		"category": "Chromatic Percussion"
	},
	{
		"id": "vibraphone",
		"instrument": "Vibraphone",
		"number": 11,
		"category": "Chromatic Percussion"
	},
	{
		"id": "marimba",
		"instrument": "Marimba",
		"number": 12,
		"category": "Chromatic Percussion"
	},
	{
		"id": "xylophone",
		"instrument": "Xylophone",
		"number": 13,
		"category": "Chromatic Percussion"
	},
	{
		"id": "tubular_bells",
		"instrument": "Tubular Bells",
		"number": 14,
		"category": "Chromatic Percussion"
	},
	{
		"id": "dulcimer",
		"instrument": "Dulcimer",
		"number": 15,
		"category": "Chromatic Percussion"
	},
	{
		"id": "drawbar_organ",
		"instrument": "Drawbar Organ",
		"number": 16,
		"category": "Organ"
	},
	{
		"id": "percussive_organ",
		"instrument": "Percussive Organ",
		"number": 17,
		"category": "Organ"
	},
	{
		"id": "rock_organ",
		"instrument": "Rock Organ",
		"number": 18,
		"category": "Organ"
	},
	{
		"id": "church_organ",
		"instrument": "Church Organ",
		"number": 19,
		"category": "Organ"
	},
	{
		"id": "reed_organ",
		"instrument": "Reed Organ",
		"number": 20,
		"category": "Organ"
	},
	{
		"id": "accordion",
		"instrument": "Accordion",
		"number": 21,
		"category": "Organ"
	},
	{
		"id": "harmonica",
		"instrument": "Harmonica",
		"number": 22,
		"category": "Organ"
	},
	{
		"id": "tango_accordion",
		"instrument": "Tango Accordion",
		"number": 23,
		"category": "Organ"
	},
	{
		"id": "acoustic_guitar_nylon",
		"instrument": "Acoustic Guitar (nylon)",
		"number": 24,
		"category": "Guitar"
	},
	{
		"id": "acoustic_guitar_steel",
		"instrument": "Acoustic Guitar (steel)",
		"number": 25,
		"category": "Guitar"
	},
	{
		"id": "electric_guitar_jazz",
		"instrument": "Electric Guitar (jazz)",
		"number": 26,
		"category": "Guitar"
	},
	{
		"id": "electric_guitar_clean",
		"instrument": "Electric Guitar (clean)",
		"number": 27,
		"category": "Guitar"
	},
	{
		"id": "electric_guitar_muted",
		"instrument": "Electric Guitar (muted)",
		"number": 28,
		"category": "Guitar"
	},
	{
		"id": "overdriven_guitar",
		"instrument": "Overdriven Guitar",
		"number": 29,
		"category": "Guitar"
	},
	{
		"id": "distortion_guitar",
		"instrument": "Distortion Guitar",
		"number": 30,
		"category": "Guitar"
	},
	{
		"id": "guitar_harmonics",
		"instrument": "Guitar Harmonics",
		"number": 31,
		"category": "Guitar"
	},
	{
		"id": "acoustic_bass",
		"instrument": "Acoustic Bass",
		"number": 32,
		"category": "Bass"
	},
	{
		"id": "electric_bass_finger",
		"instrument": "Electric Bass (finger)",
		"number": 33,
		"category": "Bass"
	},
	{
		"id": "electric_bass_pick",
		"instrument": "Electric Bass (pick)",
		"number": 34,
		"category": "Bass"
	},
	{
		"id": "fretless_bass",
		"instrument": "Fretless Bass",
		"number": 35,
		"category": "Bass"
	},
	{
		"id": "slap_bass_1",
		"instrument": "Slap Bass 1",
		"number": 36,
		"category": "Bass"
	},
	{
		"id": "slap_bass_2",
		"instrument": "Slap Bass 2",
		"number": 37,
		"category": "Bass"
	},
	{
		"id": "synth_bass_1",
		"instrument": "Synth Bass 1",
		"number": 38,
		"category": "Bass"
	},
	{
		"id": "synth_bass_2",
		"instrument": "Synth Bass 2",
		"number": 39,
		"category": "Bass"
	},
	{
		"id": "violin",
		"instrument": "Violin",
		"number": 40,
		"category": "Strings"
	},
	{
		"id": "viola",
		"instrument": "Viola",
		"number": 41,
		"category": "Strings"
	},
	{
		"id": "cello",
		"instrument": "Cello",
		"number": 42,
		"category": "Strings"
	},
	{
		"id": "contrabass",
		"instrument": "Contrabass",
		"number": 43,
		"category": "Strings"
	},
	{
		"id": "tremolo_strings",
		"instrument": "Tremolo Strings",
		"number": 44,
		"category": "Strings"
	},
	{
		"id": "pizzicato_strings",
		"instrument": "Pizzicato Strings",
		"number": 45,
		"category": "Strings"
	},
	{
		"id": "orchestral_harp",
		"instrument": "Orchestral Harp",
		"number": 46,
		"category": "Strings"
	},
	{
		"id": "timpani",
		"instrument": "Timpani",
		"number": 47,
		"category": "Strings"
	},
	{
		"id": "string_ensemble_1",
		"instrument": "String Ensemble 1",
		"number": 48,
		"category": "Ensemble"
	},
	{
		"id": "string_ensemble_2",
		"instrument": "String Ensemble 2",
		"number": 49,
		"category": "Ensemble"
	},
	{
		"id": "synth_strings_1",
		"instrument": "Synth Strings 1",
		"number": 50,
		"category": "Ensemble"
	},
	{
		"id": "synth_strings_2",
		"instrument": "Synth Strings 2",
		"number": 51,
		"category": "Ensemble"
	},
	{
		"id": "choir_aahs",
		"instrument": "Choir Aahs",
		"number": 52,
		"category": "Ensemble"
	},
	{
		"id": "voice_oohs",
		"instrument": "Voice Oohs",
		"number": 53,
		"category": "Ensemble"
	},
	{
		"id": "synth_choir",
		"instrument": "Synth Choir",
		"number": 54,
		"category": "Ensemble"
	},
	{
		"id": "orchestra_hit",
		"instrument": "Orchestra Hit",
		"number": 55,
		"category": "Ensemble"
	},
	{
		"id": "trumpet",
		"instrument": "Trumpet",
		"number": 56,
		"category": "Brass"
	},
	{
		"id": "trombone",
		"instrument": "Trombone",
		"number": 57,
		"category": "Brass"
	},
	{
		"id": "tuba",
		"instrument": "Tuba",
		"number": 58,
		"category": "Brass"
	},
	{
		"id": "muted_trumpet",
		"instrument": "Muted Trumpet",
		"number": 59,
		"category": "Brass"
	},
	{
		"id": "french_horn",
		"instrument": "French Horn",
		"number": 60,
		"category": "Brass"
	},
	{
		"id": "brass_section",
		"instrument": "Brass Section",
		"number": 61,
		"category": "Brass"
	},
	{
		"id": "synth_brass_1",
		"instrument": "Synth Brass 1",
		"number": 62,
		"category": "Brass"
	},
	{
		"id": "synth_brass_2",
		"instrument": "Synth Brass 2",
		"number": 63,
		"category": "Brass"
	},
	{
		"id": "soprano_sax",
		"instrument": "Soprano Sax",
		"number": 64,
		"category": "Reed"
	},
	{
		"id": "alto_sax",
		"instrument": "Alto Sax",
		"number": 65,
		"category": "Reed"
	},
	{
		"id": "tenor_sax",
		"instrument": "Tenor Sax",
		"number": 66,
		"category": "Reed"
	},
	{
		"id": "baritone_sax",
		"instrument": "Baritone Sax",
		"number": 67,
		"category": "Reed"
	},
	{
		"id": "oboe",
		"instrument": "Oboe",
		"number": 68,
		"category": "Reed"
	},
	{
		"id": "english_horn",
		"instrument": "English Horn",
		"number": 69,
		"category": "Reed"
	},
	{
		"id": "bassoon",
		"instrument": "Bassoon",
		"number": 70,
		"category": "Reed"
	},
	{
		"id": "clarinet",
		"instrument": "Clarinet",
		"number": 71,
		"category": "Reed"
	},
	{
		"id": "piccolo",
		"instrument": "Piccolo",
		"number": 72,
		"category": "Pipe"
	},
	{
		"id": "flute",
		"instrument": "Flute",
		"number": 73,
		"category": "Pipe"
	},
	{
		"id": "recorder",
		"instrument": "Recorder",
		"number": 74,
		"category": "Pipe"
	},
	{
		"id": "pan_flute",
		"instrument": "Pan Flute",
		"number": 75,
		"category": "Pipe"
	},
	{
		"id": "blown_bottle",
		"instrument": "Blown Bottle",
		"number": 76,
		"category": "Pipe"
	},
	{
		"id": "shakuhachi",
		"instrument": "Shakuhachi",
		"number": 77,
		"category": "Pipe"
	},
	{
		"id": "whistle",
		"instrument": "Whistle",
		"number": 78,
		"category": "Pipe"
	},
	{
		"id": "ocarina",
		"instrument": "Ocarina",
		"number": 79,
		"category": "Pipe"
	},
	{
		"id": "lead_1_square",
		"instrument": "Lead 1 (square)",
		"number": 80,
		"category": "Synth Lead"
	},
	{
		"id": "lead_2_sawtooth",
		"instrument": "Lead 2 (sawtooth)",
		"number": 81,
		"category": "Synth Lead"
	},
	{
		"id": "lead_3_calliope",
		"instrument": "Lead 3 (calliope)",
		"number": 82,
		"category": "Synth Lead"
	},
	{
		"id": "lead_4_chiff",
		"instrument": "Lead 4 (chiff)",
		"number": 83,
		"category": "Synth Lead"
	},
	{
		"id": "lead_5_charang",
		"instrument": "Lead 5 (charang)",
		"number": 84,
		"category": "Synth Lead"
	},
	{
		"id": "lead_6_voice",
		"instrument": "Lead 6 (voice)",
		"number": 85,
		"category": "Synth Lead"
	},
	{
		"id": "lead_7_fifths",
		"instrument": "Lead 7 (fifths)",
		"number": 86,
		"category": "Synth Lead"
	},
	{
		"id": "lead_8_bass__lead",
		"instrument": "Lead 8 (bass + lead)",
		"number": 87,
		"category": "Synth Lead"
	},
	{
		"id": "pad_1_new_age",
		"instrument": "Pad 1 (new age)",
		"number": 88,
		"category": "Synth Pad"
	},
	{
		"id": "pad_2_warm",
		"instrument": "Pad 2 (warm)",
		"number": 89,
		"category": "Synth Pad"
	},
	{
		"id": "pad_3_polysynth",
		"instrument": "Pad 3 (polysynth)",
		"number": 90,
		"category": "Synth Pad"
	},
	{
		"id": "pad_4_choir",
		"instrument": "Pad 4 (choir)",
		"number": 91,
		"category": "Synth Pad"
	},
	{
		"id": "pad_5_bowed",
		"instrument": "Pad 5 (bowed)",
		"number": 92,
		"category": "Synth Pad"
	},
	{
		"id": "pad_6_metallic",
		"instrument": "Pad 6 (metallic)",
		"number": 93,
		"category": "Synth Pad"
	},
	{
		"id": "pad_7_halo",
		"instrument": "Pad 7 (halo)",
		"number": 94,
		"category": "Synth Pad"
	},
	{
		"id": "pad_8_sweep",
		"instrument": "Pad 8 (sweep)",
		"number": 95,
		"category": "Synth Pad"
	},
	{
		"id": "fx_1_rain",
		"instrument": "FX 1 (rain)",
		"number": 96,
		"category": "Synth Effects"
	},
	{
		"id": "fx_2_soundtrack",
		"instrument": "FX 2 (soundtrack)",
		"number": 97,
		"category": "Synth Effects"
	},
	{
		"id": "fx_3_crystal",
		"instrument": "FX 3 (crystal)",
		"number": 98,
		"category": "Synth Effects"
	},
	{
		"id": "fx_4_atmosphere",
		"instrument": "FX 4 (atmosphere)",
		"number": 99,
		"category": "Synth Effects"
	},
	{
		"id": "fx_5_brightness",
		"instrument": "FX 5 (brightness)",
		"number": 100,
		"category": "Synth Effects"
	},
	{
		"id": "fx_6_goblins",
		"instrument": "FX 6 (goblins)",
		"number": 101,
		"category": "Synth Effects"
	},
	{
		"id": "fx_7_echoes",
		"instrument": "FX 7 (echoes)",
		"number": 102,
		"category": "Synth Effects"
	},
	{
		"id": "fx_8_scifi",
		"instrument": "FX 8 (sci-fi)",
		"number": 103,
		"category": "Synth Effects"
	},
	{
		"id": "sitar",
		"instrument": "Sitar",
		"number": 104,
		"category": "Ethnic"
	},
	{
		"id": "banjo",
		"instrument": "Banjo",
		"number": 105,
		"category": "Ethnic"
	},
	{
		"id": "shamisen",
		"instrument": "Shamisen",
		"number": 106,
		"category": "Ethnic"
	},
	{
		"id": "koto",
		"instrument": "Koto",
		"number": 107,
		"category": "Ethnic"
	},
	{
		"id": "kalimba",
		"instrument": "Kalimba",
		"number": 108,
		"category": "Ethnic"
	},
	{
		"id": "bagpipe",
		"instrument": "Bagpipe",
		"number": 109,
		"category": "Ethnic"
	},
	{
		"id": "fiddle",
		"instrument": "Fiddle",
		"number": 110,
		"category": "Ethnic"
	},
	{
		"id": "shanai",
		"instrument": "Shanai",
		"number": 111,
		"category": "Ethnic"
	},
	{
		"id": "tinkle_bell",
		"instrument": "Tinkle Bell",
		"number": 112,
		"category": "Percussive"
	},
	{
		"id": "agogo",
		"instrument": "Agogo",
		"number": 113,
		"category": "Percussive"
	},
	{
		"id": "steel_drums",
		"instrument": "Steel Drums",
		"number": 114,
		"category": "Percussive"
	},
	{
		"id": "woodblock",
		"instrument": "Woodblock",
		"number": 115,
		"category": "Percussive"
	},
	{
		"id": "taiko_drum",
		"instrument": "Taiko Drum",
		"number": 116,
		"category": "Percussive"
	},
	{
		"id": "melodic_tom",
		"instrument": "Melodic Tom",
		"number": 117,
		"category": "Percussive"
	},
	{
		"id": "synth_drum",
		"instrument": "Synth Drum",
		"number": 118,
		"category": "Percussive"
	},
	{
		"id": "reverse_cymbal",
		"instrument": "Reverse Cymbal",
		"number": 119,
		"category": "Sound effects"
	},
	{
		"id": "guitar_fret_noise",
		"instrument": "Guitar Fret Noise",
		"number": 120,
		"category": "Sound effects"
	},
	{
		"id": "breath_noise",
		"instrument": "Breath Noise",
		"number": 121,
		"category": "Sound effects"
	},
	{
		"id": "seashore",
		"instrument": "Seashore",
		"number": 122,
		"category": "Sound effects"
	},
	{
		"id": "bird_tweet",
		"instrument": "Bird Tweet",
		"number": 123,
		"category": "Sound effects"
	},
	{
		"id": "telephone_ring",
		"instrument": "Telephone Ring",
		"number": 124,
		"category": "Sound effects"
	},
	{
		"id": "helicopter",
		"instrument": "Helicopter",
		"number": 125,
		"category": "Sound effects"
	},
	{
		"id": "applause",
		"instrument": "Applause",
		"number": 126,
		"category": "Sound effects"
	},
	{
		"id": "gunshot",
		"instrument": "Gunshot",
		"number": 127,
		"category": "Sound effects"
	}
]

momoca.presets = [
	{
		"preset": "Music Matrix A",
		"map": [
			"Db2",
			"Eb2",
			"Gb2",
			"Ab2",
			"Bb2",
			"Db3",
			"Eb3",
			"Gb3",
			"Ab3",
			"Bb3",
			"Db4",
			"Eb4",
			"Gb4",
			"Ab4",
			"Bb4",
			"Db5"
		]
	},
	{
		"preset": "Music Matrix B",
		"map": [
			"Eb2",
			"F2",
			"Ab2",
			"Bb2",
			"C3",
			"Eb3",
			"F3",
			"Ab3",
			"Bb3",
			"C4",
			"Eb4",
			"F4",
			"Ab4",
			"Bb4",
			"C5",
			"Eb5"
		]
	},
	{
		"preset": "Music Matrix C",
		"map": [
			"E2",
			"Gb2",
			"A2",
			"B2",
			"Db3",
			"E3",
			"Gb3",
			"A3",
			"B3",
			"Db4",
			"E4",
			"Gb4",
			"A4",
			"B4",
			"Db5",
			"E5"
		]
	},
	{
		"preset": "Music Matrix D",
		"map": [
			"Gb2",
			"Ab2",
			"B2",
			"Db3",
			"Eb3",
			"Gb3",
			"Ab3",
			"B3",
			"Db4",
			"Eb4",
			"Gb4",
			"Ab4",
			"B4",
			"Db5",
			"Eb5",
			"Gb5"
		]
	},
	{
		"preset": "Music Matrix E",
		"map": [
			"Ab2",
			"Bb2",
			"Db3",
			"Eb3",
			"F3",
			"Ab3",
			"Bb3",
			"Db4",
			"Eb4",
			"F4",
			"Ab4",
			"Bb4",
			"Db5",
			"Eb5",
			"F5",
			"Ab5"
		]
	},
	{
		"preset": "Music Matrix F",
		"map": [
			"A2",
			"B2",
			"D3",
			"E3",
			"Gb3",
			"A3",
			"B3",
			"D4",
			"E4",
			"Gb4",
			"A4",
			"B4",
			"D5",
			"E5",
			"Gb5",
			"A5"
		]
	},
	{
		"preset": "Music Matrix G",
		"map": [
			"B2",
			"Db3",
			"E3",
			"Gb3",
			"Ab3",
			"B3",
			"Db4",
			"E4",
			"Gb4",
			"Ab4",
			"B4",
			"Db5",
			"E5",
			"Gb5",
			"Ab5",
			"B5"
		]
	},
	{
		"preset": "Music Matrix G#/Ab",
		"map": [
			"Db2",
			"Eb2",
			"Gb2",
			"Ab2",
			"Bb2",
			"Db3",
			"Eb3",
			"Gb3",
			"Ab3",
			"Bb3",
			"Db4",
			"Eb4",
			"Gb4",
			"Ab4",
			"Bb4",
			"Db5"
		]
	},
	{
		"preset": "Music Matrix A#/Bb",
		"map": [
			"D2",
			"E2",
			"G2",
			"A2",
			"B2",
			"D3",
			"E3",
			"G3",
			"A3",
			"B3",
			"D4",
			"E4",
			"G4",
			"A4",
			"B4",
			"D5"
		]
	},
	{
		"preset": "Music Matrix C#/Db",
		"map": [
			"F2",
			"G2",
			"Bb2",
			"C3",
			"D3",
			"F3",
			"G3",
			"Bb3",
			"C4",
			"D4",
			"F4",
			"G4",
			"Bb4",
			"C5",
			"D5",
			"F5"
		]
	},
	{
		"preset": "Music Matrix D#/Eb",
		"map": [
			"G2",
			"A2",
			"C3",
			"D3",
			"E3",
			"G3",
			"A3",
			"C4",
			"D4",
			"E4",
			"G4",
			"A4",
			"C5",
			"D5",
			"E5",
			"G5"
		]
	},
	{
		"preset": "Music Matrix F#/Gb",
		"map": [
			"Bb2",
			"C3",
			"Eb3",
			"F3",
			"G3",
			"Bb3",
			"C4",
			"Eb4",
			"F4",
			"G4",
			"Bb4",
			"C5",
			"Eb5",
			"F5",
			"G5",
			"Bb5"
		]
	},
	{
		"preset": "Drum Kit Lower Range",
		"map": [
			"Eb1",
			"E1",
			"F1",
			"Gb1",
			"G1",
			"Ab1",
			"A1",
			"Bb1",
			"B1",
			"C2",
			"Db2",
			"D2",
			"Eb2",
			"E2",
			"F2",
			"Gb2"
		]
	},
	{
		"preset": "Drum Kit Lower Mid Range",
		"map": [
			"G2",
			"Ab2",
			"A2",
			"Bb2",
			"B2",
			"C3",
			"Db3",
			"D3",
			"Eb3",
			"E3",
			"F3",
			"Gb3",
			"G3",
			"Ab3",
			"A3",
			"Bb3"
		]
	},
	{
		"preset": "Drum Kit Upper Mid Range",
		"map": [
			"B3",
			"C4",
			"Db4",
			"D4",
			"Eb4",
			"E4",
			"F4",
			"Gb4",
			"G4",
			"Ab4",
			"A4",
			"Bb4",
			"B4",
			"C5",
			"Db5",
			"D5"
		]
	},
	{
		"preset": "Drum Kit Upper Range",
		"map": [
			"C5",
			"Db5",
			"D5",
			"Eb5",
			"E5",
			"F5",
			"Gb5",
			"G5",
			"Ab5",
			"A5",
			"Bb5",
			"B5",
			"C6",
			"Db6",
			"D6",
			"Eb6"
		]
	},
	{
		"preset": "Cord: C (Major)",
		"map": [
			"E2",
			"Ab2",
			"B2",
			"E3",
			"Ab3",
			"B3",
			"E4",
			"Ab4",
			"B4",
			"E5",
			"Ab5",
			"B5",
			"E6",
			"Ab6",
			"B6",
			"E7"
		]
	},
	{
		"preset": "Cord: C (Major 7)",
		"map": [
			"E2",
			"Ab2",
			"B2",
			"Eb3",
			"E3",
			"Ab3",
			"B3",
			"Eb4",
			"E4",
			"Ab4",
			"B4",
			"Eb5",
			"E5",
			"Ab5",
			"B5",
			"Eb6"
		]
	},
	{
		"preset": "Cord: C (minor)",
		"map": [
			"E2",
			"G2",
			"B2",
			"E3",
			"G3",
			"B3",
			"E4",
			"G4",
			"B4",
			"E5",
			"G5",
			"B5",
			"E6",
			"G6",
			"B6",
			"E7"
		]
	},
	{
		"preset": "Cord: C (minor 7)",
		"map": [
			"E2",
			"G2",
			"B2",
			"D3",
			"E3",
			"G3",
			"B3",
			"D4",
			"E4",
			"G4",
			"B4",
			"D5",
			"E5",
			"G5",
			"B5",
			"D6"
		]
	},
	{
		"preset": "Cord: C (Suspended 2nd)",
		"map": [
			"E2",
			"Gb2",
			"B2",
			"E3",
			"Gb3",
			"B3",
			"E4",
			"Gb4",
			"B4",
			"E5",
			"Gb5",
			"B5",
			"E6",
			"Gb6",
			"B6",
			"E7"
		]
	},
	{
		"preset": "Cord: C (Suspended 4nd)",
		"map": [
			"E2",
			"A2",
			"B2",
			"E3",
			"A3",
			"B3",
			"E4",
			"A4",
			"B4",
			"E5",
			"A5",
			"B5",
			"E6",
			"A6",
			"B6",
			"E7"
		]
	},
	{
		"preset": "Cord: C#/Db (Major)",
		"map": [
			"F2",
			"A2",
			"C3",
			"F3",
			"A3",
			"C4",
			"F4",
			"A4",
			"C5",
			"F5",
			"A5",
			"C6",
			"F6",
			"A6",
			"C7",
			"F7"
		]
	},
	{
		"preset": "Cord: C#/Db (Major 7)",
		"map": [
			"F2",
			"A2",
			"C3",
			"E3",
			"F3",
			"A3",
			"C4",
			"E4",
			"F4",
			"A4",
			"C5",
			"E5",
			"F5",
			"A5",
			"C6",
			"E6"
		]
	},
	{
		"preset": "Cord: C#/Db (minor)",
		"map": [
			"F2",
			"Ab2",
			"C3",
			"F3",
			"Ab3",
			"C4",
			"F4",
			"Ab4",
			"C5",
			"F5",
			"Ab5",
			"C6",
			"F6",
			"Ab6",
			"C7",
			"F7"
		]
	},
	{
		"preset": "Cord: C#/Db (minor 7)",
		"map": [
			"F2",
			"Ab2",
			"C3",
			"Eb3",
			"F3",
			"Ab3",
			"C4",
			"Eb4",
			"F4",
			"Ab4",
			"C5",
			"Eb5",
			"F5",
			"Ab5",
			"C6",
			"Eb6"
		]
	},
	{
		"preset": "Cord: C#/Db (Suspended 2nd)",
		"map": [
			"F2",
			"G2",
			"C3",
			"F3",
			"G3",
			"C4",
			"F4",
			"G4",
			"C5",
			"F5",
			"G5",
			"C6",
			"F6",
			"G6",
			"C7",
			"F7"
		]
	},
	{
		"preset": "Cord: C#/Db (Suspended 4nd)",
		"map": [
			"F2",
			"Bb2",
			"C3",
			"F3",
			"Bb3",
			"C4",
			"F4",
			"Bb4",
			"C5",
			"F5",
			"Bb5",
			"C6",
			"F6",
			"Bb6",
			"C7",
			"F7"
		]
	},
	{
		"preset": "Cord: D (Major)",
		"map": [
			"Gb2",
			"Bb2",
			"Db3",
			"Gb3",
			"Bb3",
			"Db4",
			"Gb4",
			"Bb4",
			"Db5",
			"Gb5",
			"Bb5",
			"Db6",
			"Gb6",
			"Bb6",
			"Db7",
			"Gb7"
		]
	},
	{
		"preset": "Cord: D (Major 7)",
		"map": [
			"Gb2",
			"Bb2",
			"Db3",
			"F3",
			"Gb3",
			"Bb3",
			"Db4",
			"F4",
			"Gb4",
			"Bb4",
			"Db5",
			"F5",
			"Gb5",
			"Bb5",
			"Db6",
			"F6"
		]
	},
	{
		"preset": "Cord: D (minor)",
		"map": [
			"Gb2",
			"A2",
			"Db3",
			"Gb3",
			"A3",
			"Db4",
			"Gb4",
			"A4",
			"Db5",
			"Gb5",
			"A5",
			"Db6",
			"Gb6",
			"A6",
			"Db7",
			"Gb7"
		]
	},
	{
		"preset": "Cord: D (minor 7)",
		"map": [
			"Gb2",
			"A2",
			"Db3",
			"E3",
			"Gb3",
			"A3",
			"Db4",
			"E4",
			"Gb4",
			"A4",
			"Db5",
			"E5",
			"Gb5",
			"A5",
			"Db6",
			"E6"
		]
	},
	{
		"preset": "Cord: D (Suspended 2nd)",
		"map": [
			"Gb2",
			"Ab2",
			"Db3",
			"Gb3",
			"Ab3",
			"Db4",
			"Gb4",
			"Ab4",
			"Db5",
			"Gb5",
			"Ab5",
			"Db6",
			"Gb6",
			"Ab6",
			"Db7",
			"Gb7"
		]
	},
	{
		"preset": "Cord: D (Suspended 4nd)",
		"map": [
			"Gb2",
			"B2",
			"Db3",
			"Gb3",
			"B3",
			"Db4",
			"Gb4",
			"B4",
			"Db5",
			"Gb5",
			"B5",
			"Db6",
			"Gb6",
			"B6",
			"Db7",
			"Gb7"
		]
	},
	{
		"preset": "Cord: D#/Eb (Major)",
		"map": [
			"G2",
			"B2",
			"D3",
			"G3",
			"B3",
			"D4",
			"G4",
			"B4",
			"D5",
			"G5",
			"B5",
			"D6",
			"G6",
			"B6",
			"D7",
			"G7"
		]
	},
	{
		"preset": "Cord: D#/Eb (Major 7)",
		"map": [
			"G2",
			"B2",
			"D3",
			"Gb3",
			"G3",
			"B3",
			"D4",
			"Gb4",
			"G4",
			"B4",
			"D5",
			"Gb5",
			"G5",
			"B5",
			"D6",
			"Gb6"
		]
	},
	{
		"preset": "Cord: D#/Eb (minor)",
		"map": [
			"G2",
			"Bb2",
			"D3",
			"G3",
			"Bb3",
			"D4",
			"G4",
			"Bb4",
			"D5",
			"G5",
			"Bb5",
			"D6",
			"G6",
			"Bb6",
			"D7",
			"G7"
		]
	},
	{
		"preset": "Cord: D#/Eb (minor 7)",
		"map": [
			"G2",
			"Bb2",
			"D3",
			"F3",
			"G3",
			"Bb3",
			"D4",
			"F4",
			"G4",
			"Bb4",
			"D5",
			"F5",
			"G5",
			"Bb5",
			"D6",
			"F6"
		]
	},
	{
		"preset": "Cord: D#/Eb (Suspended 2nd)",
		"map": [
			"G2",
			"A2",
			"D3",
			"G3",
			"A3",
			"D4",
			"G4",
			"A4",
			"D5",
			"G5",
			"A5",
			"D6",
			"G6",
			"A6",
			"D7",
			"G7"
		]
	},
	{
		"preset": "Cord: D#/Eb (Suspended 4nd)",
		"map": [
			"G2",
			"C3",
			"D3",
			"G3",
			"C4",
			"D4",
			"G4",
			"C5",
			"D5",
			"G5",
			"C6",
			"D6",
			"G6",
			"C7",
			"D7",
			"G7"
		]
	},
	{
		"preset": "Cord: E (Major)",
		"map": [
			"Ab1",
			"C2",
			"Eb2",
			"Ab2",
			"C3",
			"Eb3",
			"Ab3",
			"C4",
			"Eb4",
			"Ab4",
			"C5",
			"Eb5",
			"Ab5",
			"C6",
			"Eb6",
			"Ab6"
		]
	},
	{
		"preset": "Cord: E (Major 7)",
		"map": [
			"Ab1",
			"C2",
			"Eb2",
			"G2",
			"Ab2",
			"C3",
			"Eb3",
			"G3",
			"Ab3",
			"C4",
			"Eb4",
			"G4",
			"Ab4",
			"C5",
			"Eb5",
			"G5"
		]
	},
	{
		"preset": "Cord: E (minor)",
		"map": [
			"Ab1",
			"B1",
			"Eb2",
			"Ab2",
			"B2",
			"Eb3",
			"Ab3",
			"B3",
			"Eb4",
			"Ab4",
			"B4",
			"Eb5",
			"Ab5",
			"B5",
			"Eb6",
			"Ab6"
		]
	},
	{
		"preset": "Cord: E (minor 7)",
		"map": [
			"Ab1",
			"B1",
			"Eb2",
			"Gb2",
			"Ab2",
			"B2",
			"Eb3",
			"Gb3",
			"Ab3",
			"B3",
			"Eb4",
			"Gb4",
			"Ab4",
			"B4",
			"Eb5",
			"Gb5"
		]
	},
	{
		"preset": "Cord: E (Suspended 2nd)",
		"map": [
			"Ab1",
			"Bb1",
			"Eb2",
			"Ab2",
			"Bb2",
			"Eb3",
			"Ab3",
			"Bb3",
			"Eb4",
			"Ab4",
			"Bb4",
			"Eb5",
			"Ab5",
			"Bb5",
			"Eb6",
			"Ab6"
		]
	},
	{
		"preset": "Cord: E (Suspended 4nd)",
		"map": [
			"Ab1",
			"Db2",
			"Eb2",
			"Ab2",
			"Db3",
			"Eb3",
			"Ab3",
			"Db4",
			"Eb4",
			"Ab4",
			"Db5",
			"Eb5",
			"Ab5",
			"Db6",
			"Eb6",
			"Ab6"
		]
	},
	{
		"preset": "Cord: F (Major)",
		"map": [
			"A1",
			"Db2",
			"E2",
			"A2",
			"Db3",
			"E3",
			"A3",
			"Db4",
			"E4",
			"A4",
			"Db5",
			"E5",
			"A5",
			"Db6",
			"E6",
			"A6"
		]
	},
	{
		"preset": "Cord: F (Major 7)",
		"map": [
			"A1",
			"Db2",
			"E2",
			"Ab2",
			"A2",
			"Db3",
			"E3",
			"Ab3",
			"A3",
			"Db4",
			"E4",
			"Ab4",
			"A4",
			"Db5",
			"E5",
			"Ab5"
		]
	},
	{
		"preset": "Cord: F (minor)",
		"map": [
			"A1",
			"C2",
			"E2",
			"A2",
			"C3",
			"E3",
			"A3",
			"C4",
			"E4",
			"A4",
			"C5",
			"E5",
			"A5",
			"C6",
			"E6",
			"A6"
		]
	},
	{
		"preset": "Cord: F (minor 7)",
		"map": [
			"A1",
			"C2",
			"E2",
			"G2",
			"A2",
			"C3",
			"E3",
			"G3",
			"A3",
			"C4",
			"E4",
			"G4",
			"A4",
			"C5",
			"E5",
			"G5"
		]
	},
	{
		"preset": "Cord: F (Suspended 2nd)",
		"map": [
			"A1",
			"B1",
			"E2",
			"A2",
			"B2",
			"E3",
			"A3",
			"B3",
			"E4",
			"A4",
			"B4",
			"E5",
			"A5",
			"B5",
			"E6",
			"A6"
		]
	},
	{
		"preset": "Cord: F (Suspended 4nd)",
		"map": [
			"A1",
			"D2",
			"E2",
			"A2",
			"D3",
			"E3",
			"A3",
			"D4",
			"E4",
			"A4",
			"D5",
			"E5",
			"A5",
			"D6",
			"E6",
			"A6"
		]
	},
	{
		"preset": "Cord: F#/Gb (Major)",
		"map": [
			"Bb1",
			"D2",
			"F2",
			"Bb2",
			"D3",
			"F3",
			"Bb3",
			"D4",
			"F4",
			"Bb4",
			"D5",
			"F5",
			"Bb5",
			"D6",
			"F6",
			"Bb6"
		]
	},
	{
		"preset": "Cord: F#/Gb (Major 7)",
		"map": [
			"Bb1",
			"D2",
			"F2",
			"A2",
			"Bb2",
			"D3",
			"F3",
			"A3",
			"Bb3",
			"D4",
			"F4",
			"A4",
			"Bb4",
			"D5",
			"F5",
			"A5"
		]
	},
	{
		"preset": "Cord: F#/Gb (minor)",
		"map": [
			"Bb1",
			"Db2",
			"F2",
			"Bb2",
			"Db3",
			"F3",
			"Bb3",
			"Db4",
			"F4",
			"Bb4",
			"Db5",
			"F5",
			"Bb5",
			"Db6",
			"F6",
			"Bb6"
		]
	},
	{
		"preset": "Cord: F#/Gb (minor 7)",
		"map": [
			"Bb1",
			"Db2",
			"F2",
			"Ab2",
			"Bb2",
			"Db3",
			"F3",
			"Ab3",
			"Bb3",
			"Db4",
			"F4",
			"Ab4",
			"Bb4",
			"Db5",
			"F5",
			"Ab5"
		]
	},
	{
		"preset": "Cord: F#/Gb (Suspended 2nd)",
		"map": [
			"Bb1",
			"C2",
			"F2",
			"Bb2",
			"C3",
			"F3",
			"Bb3",
			"C4",
			"F4",
			"Bb4",
			"C5",
			"F5",
			"Bb5",
			"C6",
			"F6",
			"Bb6"
		]
	},
	{
		"preset": "Cord: F#/Gb (Suspended 4nd)",
		"map": [
			"Bb1",
			"Eb2",
			"F2",
			"Bb2",
			"Eb3",
			"F3",
			"Bb3",
			"Eb4",
			"F4",
			"Bb4",
			"Eb5",
			"F5",
			"Bb5",
			"Eb6",
			"F6",
			"Bb6"
		]
	},
	{
		"preset": "Cord: G (Major)",
		"map": [
			"B1",
			"Eb2",
			"Gb2",
			"B2",
			"Eb3",
			"Gb3",
			"B3",
			"Eb4",
			"Gb4",
			"B4",
			"Eb5",
			"Gb5",
			"B5",
			"Eb6",
			"Gb6",
			"B6"
		]
	},
	{
		"preset": "Cord: G (Major 7)",
		"map": [
			"B1",
			"Eb2",
			"Gb2",
			"Bb2",
			"B2",
			"Eb3",
			"Gb3",
			"Bb3",
			"B3",
			"Eb4",
			"Gb4",
			"Bb4",
			"B4",
			"Eb5",
			"Gb5",
			"Bb5"
		]
	},
	{
		"preset": "Cord: G (minor)",
		"map": [
			"B1",
			"D2",
			"Gb2",
			"B2",
			"D3",
			"Gb3",
			"B3",
			"D4",
			"Gb4",
			"B4",
			"D5",
			"Gb5",
			"B5",
			"D6",
			"Gb6",
			"B6"
		]
	},
	{
		"preset": "Cord: G (minor 7)",
		"map": [
			"B1",
			"D2",
			"Gb2",
			"A2",
			"B2",
			"D3",
			"Gb3",
			"A3",
			"B3",
			"D4",
			"Gb4",
			"A4",
			"B4",
			"D5",
			"Gb5",
			"A5"
		]
	},
	{
		"preset": "Cord: G (Suspended 2nd)",
		"map": [
			"B1",
			"Db2",
			"Gb2",
			"B2",
			"Db3",
			"Gb3",
			"B3",
			"Db4",
			"Gb4",
			"B4",
			"Db5",
			"Gb5",
			"B5",
			"Db6",
			"Gb6",
			"B6"
		]
	},
	{
		"preset": "Cord: G (Suspended 4nd)",
		"map": [
			"B1",
			"E2",
			"Gb2",
			"B2",
			"E3",
			"Gb3",
			"B3",
			"E4",
			"Gb4",
			"B4",
			"E5",
			"Gb5",
			"B5",
			"E6",
			"Gb6",
			"B6"
		]
	},
	{
		"preset": "Cord: G#/Ab (Major)",
		"map": [
			"C2",
			"E2",
			"G2",
			"C3",
			"E3",
			"G3",
			"C4",
			"E4",
			"G4",
			"C5",
			"E5",
			"G5",
			"C6",
			"E6",
			"G6",
			"C7"
		]
	},
	{
		"preset": "Cord: G#/Ab (Major 7)",
		"map": [
			"C2",
			"E2",
			"G2",
			"B2",
			"C3",
			"E3",
			"G3",
			"B3",
			"C4",
			"E4",
			"G4",
			"B4",
			"C5",
			"E5",
			"G5",
			"B5"
		]
	},
	{
		"preset": "Cord: G#/Ab (minor)",
		"map": [
			"C2",
			"Eb2",
			"G2",
			"C3",
			"Eb3",
			"G3",
			"C4",
			"Eb4",
			"G4",
			"C5",
			"Eb5",
			"G5",
			"C6",
			"Eb6",
			"G6",
			"C7"
		]
	},
	{
		"preset": "Cord: G#/Ab (minor 7)",
		"map": [
			"C2",
			"Eb2",
			"G2",
			"Bb2",
			"C3",
			"Eb3",
			"G3",
			"Bb3",
			"C4",
			"Eb4",
			"G4",
			"Bb4",
			"C5",
			"Eb5",
			"G5",
			"Bb5"
		]
	},
	{
		"preset": "Cord: G#/Ab (Suspended 2nd)",
		"map": [
			"C2",
			"D2",
			"G2",
			"C3",
			"D3",
			"G3",
			"C4",
			"D4",
			"G4",
			"C5",
			"D5",
			"G5",
			"C6",
			"D6",
			"G6",
			"C7"
		]
	},
	{
		"preset": "Cord: G#/Ab (Suspended 4nd)",
		"map": [
			"C2",
			"F2",
			"G2",
			"C3",
			"F3",
			"G3",
			"C4",
			"F4",
			"G4",
			"C5",
			"F5",
			"G5",
			"C6",
			"F6",
			"G6",
			"C7"
		]
	},
	{
		"preset": "Cord: A (Major)",
		"map": [
			"Db2",
			"F2",
			"Ab2",
			"Db3",
			"F3",
			"Ab3",
			"Db4",
			"F4",
			"Ab4",
			"Db5",
			"F5",
			"Ab5",
			"Db6",
			"F6",
			"Ab6",
			"Db7"
		]
	},
	{
		"preset": "Cord: A (Major 7)",
		"map": [
			"Db2",
			"F2",
			"Ab2",
			"C3",
			"Db3",
			"F3",
			"Ab3",
			"C4",
			"Db4",
			"F4",
			"Ab4",
			"C5",
			"Db5",
			"F5",
			"Ab5",
			"C6"
		]
	},
	{
		"preset": "Cord: A (minor)",
		"map": [
			"Db2",
			"E2",
			"Ab2",
			"Db3",
			"E3",
			"Ab3",
			"Db4",
			"E4",
			"Ab4",
			"Db5",
			"E5",
			"Ab5",
			"Db6",
			"E6",
			"Ab6",
			"Db7"
		]
	},
	{
		"preset": "Cord: A (minor 7)",
		"map": [
			"Db2",
			"E2",
			"Ab2",
			"B2",
			"Db3",
			"E3",
			"Ab3",
			"B3",
			"Db4",
			"E4",
			"Ab4",
			"B4",
			"Db5",
			"E5",
			"Ab5",
			"B5"
		]
	},
	{
		"preset": "Cord: A (Suspended 2nd)",
		"map": [
			"Db2",
			"Eb2",
			"Ab2",
			"Db3",
			"Eb3",
			"Ab3",
			"Db4",
			"Eb4",
			"Ab4",
			"Db5",
			"Eb5",
			"Ab5",
			"Db6",
			"Eb6",
			"Ab6",
			"Db7"
		]
	},
	{
		"preset": "Cord: A (Suspended 4nd)",
		"map": [
			"Db2",
			"Gb2",
			"Ab2",
			"Db3",
			"Gb3",
			"Ab3",
			"Db4",
			"Gb4",
			"Ab4",
			"Db5",
			"Gb5",
			"Ab5",
			"Db6",
			"Gb6",
			"Ab6",
			"Db7"
		]
	},
	{
		"preset": "Cord: A#/Bb (Major)",
		"map": [
			"D2",
			"Gb2",
			"A2",
			"D3",
			"Gb3",
			"A3",
			"D4",
			"Gb4",
			"A4",
			"D5",
			"Gb5",
			"A5",
			"D6",
			"Gb6",
			"A6",
			"D7"
		]
	},
	{
		"preset": "Cord: A#/Bb (Major 7)",
		"map": [
			"D2",
			"Gb2",
			"A2",
			"Db3",
			"D3",
			"Gb3",
			"A3",
			"Db4",
			"D4",
			"Gb4",
			"A4",
			"Db5",
			"D5",
			"Gb5",
			"A5",
			"Db6"
		]
	},
	{
		"preset": "Cord: A#/Bb (minor)",
		"map": [
			"D2",
			"F2",
			"A2",
			"D3",
			"F3",
			"A3",
			"D4",
			"F4",
			"A4",
			"D5",
			"F5",
			"A5",
			"D6",
			"F6",
			"A6",
			"D7"
		]
	},
	{
		"preset": "Cord: A#/Bb (minor 7)",
		"map": [
			"D2",
			"F2",
			"A2",
			"C3",
			"D3",
			"F3",
			"A3",
			"C4",
			"D4",
			"F4",
			"A4",
			"C5",
			"D5",
			"F5",
			"A5",
			"C6"
		]
	},
	{
		"preset": "Cord: A#/Bb (Suspended 2nd)",
		"map": [
			"D2",
			"E2",
			"A2",
			"D3",
			"E3",
			"A3",
			"D4",
			"E4",
			"A4",
			"D5",
			"E5",
			"A5",
			"D6",
			"E6",
			"A6",
			"D7"
		]
	},
	{
		"preset": "Cord: A#/Bb (Suspended 4nd)",
		"map": [
			"D2",
			"G2",
			"A2",
			"D3",
			"G3",
			"A3",
			"D4",
			"G4",
			"A4",
			"D5",
			"G5",
			"A5",
			"D6",
			"G6",
			"A6",
			"D7"
		]
	},
	{
		"preset": "Cord: B (Major)",
		"map": [
			"Eb2",
			"G2",
			"Bb2",
			"Eb3",
			"G3",
			"Bb3",
			"Eb4",
			"G4",
			"Bb4",
			"Eb5",
			"G5",
			"Bb5",
			"Eb6",
			"G6",
			"Bb6",
			"Eb7"
		]
	},
	{
		"preset": "Cord: B (Major 7)",
		"map": [
			"Eb2",
			"G2",
			"Bb2",
			"D3",
			"Eb3",
			"G3",
			"Bb3",
			"D4",
			"Eb4",
			"G4",
			"Bb4",
			"D5",
			"Eb5",
			"G5",
			"Bb5",
			"D6"
		]
	},
	{
		"preset": "Cord: B (minor)",
		"map": [
			"Eb2",
			"Gb2",
			"Bb2",
			"Eb3",
			"Gb3",
			"Bb3",
			"Eb4",
			"Gb4",
			"Bb4",
			"Eb5",
			"Gb5",
			"Bb5",
			"Eb6",
			"Gb6",
			"Bb6",
			"Eb7"
		]
	},
	{
		"preset": "Cord: B (minor 7)",
		"map": [
			"Eb2",
			"Gb2",
			"Bb2",
			"Db3",
			"Eb3",
			"Gb3",
			"Bb3",
			"Db4",
			"Eb4",
			"Gb4",
			"Bb4",
			"Db5",
			"Eb5",
			"Gb5",
			"Bb5",
			"Db6"
		]
	},
	{
		"preset": "Cord: B (Suspended 2nd)",
		"map": [
			"Eb2",
			"F2",
			"Bb2",
			"Eb3",
			"F3",
			"Bb3",
			"Eb4",
			"F4",
			"Bb4",
			"Eb5",
			"F5",
			"Bb5",
			"Eb6",
			"F6",
			"Bb6",
			"Eb7"
		]
	},
	{
		"preset": "Cord: B (Suspended 4nd)",
		"map": [
			"Eb2",
			"Ab2",
			"Bb2",
			"Eb3",
			"Ab3",
			"Bb3",
			"Eb4",
			"Ab4",
			"Bb4",
			"Eb5",
			"Ab5",
			"Bb5",
			"Eb6",
			"Ab6",
			"Bb6",
			"Eb7"
		]
	},
	{
		"preset": "C3 Major",
		"map": [
			"E1",
			"Gb1",
			"Ab1",
			"A1",
			"B1",
			"Db2",
			"Eb2",
			"E2",
			"Gb2",
			"Ab2",
			"A2",
			"B2",
			"Db3",
			"Eb3",
			"E3",
			"Gb3"
		]
	},
	{
		"preset": "C5 Major",
		"map": [
			"E3",
			"Gb3",
			"Ab3",
			"A3",
			"B3",
			"Db4",
			"Eb4",
			"E4",
			"Gb4",
			"Ab4",
			"A4",
			"B4",
			"Db5",
			"Eb5",
			"E5",
			"Gb5"
		]
	},
	{
		"preset": "C7 Major",
		"map": [
			"E5",
			"Gb5",
			"Ab5",
			"A5",
			"B5",
			"Db6",
			"Eb6",
			"E6",
			"Gb6",
			"Ab6",
			"A6",
			"B6",
			"Db7",
			"Eb7",
			"E7",
			"Gb7"
		]
	},
	{
		"preset": "G2 Major",
		"map": [
			"B0",
			"Db1",
			"Eb1",
			"E1",
			"Gb1",
			"Ab1",
			"Bb1",
			"B1",
			"Db2",
			"Eb2",
			"E2",
			"Gb2",
			"Ab2",
			"Bb2",
			"B2",
			"Db3"
		]
	},
	{
		"preset": "G4 Major",
		"map": [
			"B2",
			"Db3",
			"Eb3",
			"E3",
			"Gb3",
			"Ab3",
			"Bb3",
			"B3",
			"Db4",
			"Eb4",
			"E4",
			"Gb4",
			"Ab4",
			"Bb4",
			"B4",
			"Db5"
		]
	},
	{
		"preset": "G6 Major",
		"map": [
			"B4",
			"Db5",
			"Eb5",
			"E5",
			"Gb5",
			"Ab5",
			"Bb5",
			"B5",
			"Db6",
			"Eb6",
			"E6",
			"Gb6",
			"Ab6",
			"Bb6",
			"B6",
			"Db7"
		]
	},
	{
		"preset": "D3 Major",
		"map": [
			"Gb1",
			"Ab1",
			"Bb1",
			"B1",
			"Db2",
			"Eb2",
			"F2",
			"Gb2",
			"Ab2",
			"Bb2",
			"B2",
			"Db3",
			"Eb3",
			"F3",
			"Gb3",
			"Ab3"
		]
	},
	{
		"preset": "D5 Major",
		"map": [
			"Gb3",
			"Ab3",
			"Bb3",
			"B3",
			"Db4",
			"Eb4",
			"F4",
			"Gb4",
			"Ab4",
			"Bb4",
			"B4",
			"Db5",
			"Eb5",
			"F5",
			"Gb5",
			"Ab5"
		]
	},
	{
		"preset": "D7 Major",
		"map": [
			"Gb5",
			"Ab5",
			"Bb5",
			"B5",
			"Db6",
			"Eb6",
			"F6",
			"Gb6",
			"Ab6",
			"Bb6",
			"B6",
			"Db7",
			"Eb7",
			"F7",
			"Gb7",
			"Ab7"
		]
	},
	{
		"preset": "A2 Major",
		"map": [
			"Db1",
			"Eb1",
			"F1",
			"Gb1",
			"Ab1",
			"Bb1",
			"C2",
			"Db2",
			"Eb2",
			"F2",
			"Gb2",
			"Ab2",
			"Bb2",
			"C3",
			"Db3",
			"Eb3"
		]
	},
	{
		"preset": "A4 Major",
		"map": [
			"Db3",
			"Eb3",
			"F3",
			"Gb3",
			"Ab3",
			"Bb3",
			"C4",
			"Db4",
			"Eb4",
			"F4",
			"Gb4",
			"Ab4",
			"Bb4",
			"C5",
			"Db5",
			"Eb5"
		]
	},
	{
		"preset": "A6 Major",
		"map": [
			"Db5",
			"Eb5",
			"F5",
			"Gb5",
			"Ab5",
			"Bb5",
			"C6",
			"Db6",
			"Eb6",
			"F6",
			"Gb6",
			"Ab6",
			"Bb6",
			"C7",
			"Db7",
			"Eb7"
		]
	},
	{
		"preset": "E3 Major",
		"map": [
			"Ab1",
			"Bb1",
			"C2",
			"Db2",
			"Eb2",
			"F2",
			"G2",
			"Ab2",
			"Bb2",
			"C3",
			"Db3",
			"Eb3",
			"F3",
			"G3",
			"Ab3",
			"Bb3"
		]
	},
	{
		"preset": "E5 Major",
		"map": [
			"Ab3",
			"Bb3",
			"C4",
			"Db4",
			"Eb4",
			"F4",
			"G4",
			"Ab4",
			"Bb4",
			"C5",
			"Db5",
			"Eb5",
			"F5",
			"G5",
			"Ab5",
			"Bb5"
		]
	},
	{
		"preset": "E7 Major",
		"map": [
			"Ab5",
			"Bb5",
			"C6",
			"Db6",
			"Eb6",
			"F6",
			"G6",
			"Ab6",
			"Bb6",
			"C7",
			"Db7",
			"Eb7",
			"F7",
			"G7",
			"Ab7",
			"Bb7"
		]
	},
	{
		"preset": "B2 Major",
		"map": [
			"Eb1",
			"F1",
			"G1",
			"Ab1",
			"Bb1",
			"C2",
			"D2",
			"Eb2",
			"F2",
			"G2",
			"Ab2",
			"Bb2",
			"C3",
			"D3",
			"Eb3",
			"F3"
		]
	},
	{
		"preset": "B4 Major",
		"map": [
			"Eb3",
			"F3",
			"G3",
			"Ab3",
			"Bb3",
			"C4",
			"D4",
			"Eb4",
			"F4",
			"G4",
			"Ab4",
			"Bb4",
			"C5",
			"D5",
			"Eb5",
			"F5"
		]
	},
	{
		"preset": "B6 Major",
		"map": [
			"Eb5",
			"F5",
			"G5",
			"Ab5",
			"Bb5",
			"C6",
			"D6",
			"Eb6",
			"F6",
			"G6",
			"Ab6",
			"Bb6",
			"C7",
			"D7",
			"Eb7",
			"F7"
		]
	},
	{
		"preset": "F#2/Gb2 Major",
		"map": [
			"Bb0",
			"C1",
			"D1",
			"Eb1",
			"F1",
			"G1",
			"A1",
			"Bb1",
			"C2",
			"D2",
			"Eb2",
			"F2",
			"G2",
			"A2",
			"Bb2",
			"C3"
		]
	},
	{
		"preset": "F#4/Gb4 Major",
		"map": [
			"Bb2",
			"C3",
			"D3",
			"Eb3",
			"F3",
			"G3",
			"A3",
			"Bb3",
			"C4",
			"D4",
			"Eb4",
			"F4",
			"G4",
			"A4",
			"Bb4",
			"C5"
		]
	},
	{
		"preset": "F#6/Gb6 Major",
		"map": [
			"Bb4",
			"C5",
			"D5",
			"Eb5",
			"F5",
			"G5",
			"A5",
			"Bb5",
			"C6",
			"D6",
			"Eb6",
			"F6",
			"G6",
			"A6",
			"Bb6",
			"C7"
		]
	},
	{
		"preset": "F2 Major",
		"map": [
			"A0",
			"B0",
			"Db1",
			"D1",
			"E1",
			"Gb1",
			"Ab1",
			"A1",
			"B1",
			"Db2",
			"D2",
			"E2",
			"Gb2",
			"Ab2",
			"A2",
			"B2"
		]
	},
	{
		"preset": "F4 Major",
		"map": [
			"A2",
			"B2",
			"Db3",
			"D3",
			"E3",
			"Gb3",
			"Ab3",
			"A3",
			"B3",
			"Db4",
			"D4",
			"E4",
			"Gb4",
			"Ab4",
			"A4",
			"B4"
		]
	},
	{
		"preset": "F6 Major",
		"map": [
			"A4",
			"B4",
			"Db5",
			"D5",
			"E5",
			"Gb5",
			"Ab5",
			"A5",
			"B5",
			"Db6",
			"D6",
			"E6",
			"Gb6",
			"Ab6",
			"A6",
			"B6"
		]
	},
	{
		"preset": "A#2/Bb2 Major",
		"map": [
			"D1",
			"E1",
			"Gb1",
			"G1",
			"A1",
			"B1",
			"Db2",
			"D2",
			"E2",
			"Gb2",
			"G2",
			"A2",
			"B2",
			"Db3",
			"D3",
			"E3"
		]
	},
	{
		"preset": "A#4/Bb4 Major",
		"map": [
			"D3",
			"E3",
			"Gb3",
			"G3",
			"A3",
			"B3",
			"Db4",
			"D4",
			"E4",
			"Gb4",
			"G4",
			"A4",
			"B4",
			"Db5",
			"D5",
			"E5"
		]
	},
	{
		"preset": "A#6/Bb6 Major",
		"map": [
			"D5",
			"E5",
			"Gb5",
			"G5",
			"A5",
			"B5",
			"Db6",
			"D6",
			"E6",
			"Gb6",
			"G6",
			"A6",
			"B6",
			"Db7",
			"D7",
			"E7"
		]
	},
	{
		"preset": "D#3/Eb3 Major",
		"map": [
			"G1",
			"A1",
			"B1",
			"C2",
			"D2",
			"E2",
			"Gb2",
			"G2",
			"A2",
			"B2",
			"C3",
			"D3",
			"E3",
			"Gb3",
			"G3",
			"A3"
		]
	},
	{
		"preset": "D#5/Eb5 Major",
		"map": [
			"G3",
			"A3",
			"B3",
			"C4",
			"D4",
			"E4",
			"Gb4",
			"G4",
			"A4",
			"B4",
			"C5",
			"D5",
			"E5",
			"Gb5",
			"G5",
			"A5"
		]
	},
	{
		"preset": "D#7/Eb7 Major",
		"map": [
			"G5",
			"A5",
			"B5",
			"C6",
			"D6",
			"E6",
			"Gb6",
			"G6",
			"A6",
			"B6",
			"C7",
			"D7",
			"E7",
			"Gb7",
			"G7",
			"A7"
		]
	},
	{
		"preset": "G#2/Ab2 Major",
		"map": [
			"C1",
			"D1",
			"E1",
			"F1",
			"G1",
			"A1",
			"B1",
			"C2",
			"D2",
			"E2",
			"F2",
			"G2",
			"A2",
			"B2",
			"C3",
			"D3"
		]
	},
	{
		"preset": "G#4/Ab4 Major",
		"map": [
			"C3",
			"D3",
			"E3",
			"F3",
			"G3",
			"A3",
			"B3",
			"C4",
			"D4",
			"E4",
			"F4",
			"G4",
			"A4",
			"B4",
			"C5",
			"D5"
		]
	},
	{
		"preset": "G#6/Ab6 Major",
		"map": [
			"C5",
			"D5",
			"E5",
			"F5",
			"G5",
			"A5",
			"B5",
			"C6",
			"D6",
			"E6",
			"F6",
			"G6",
			"A6",
			"B6",
			"C7",
			"D7"
		]
	},
	{
		"preset": "C#5/Db5 Major",
		"map": [
			"F1",
			"G1",
			"A1",
			"Bb1",
			"C2",
			"D2",
			"E2",
			"F2",
			"G2",
			"A2",
			"Bb2",
			"C3",
			"D3",
			"E3",
			"F3",
			"G3"
		]
	},
	{
		"preset": "C#5/Db5 Major",
		"map": [
			"F3",
			"G3",
			"A3",
			"Bb3",
			"C4",
			"D4",
			"E4",
			"F4",
			"G4",
			"A4",
			"Bb4",
			"C5",
			"D5",
			"E5",
			"F5",
			"G5"
		]
	},
	{
		"preset": "C#7/Db7 Major",
		"map": [
			"F5",
			"G5",
			"A5",
			"Bb5",
			"C6",
			"D6",
			"E6",
			"F6",
			"G6",
			"A6",
			"Bb6",
			"C7",
			"D7",
			"E7",
			"F7",
			"G7"
		]
	},
	{
		"preset": "C3 minor",
		"map": [
			"E1",
			"Gb1",
			"G1",
			"A1",
			"B1",
			"C2",
			"D2",
			"E2",
			"Gb2",
			"G2",
			"A2",
			"B2",
			"C3",
			"D3",
			"E3",
			"Gb3"
		]
	},
	{
		"preset": "C5 minor",
		"map": [
			"E3",
			"Gb3",
			"G3",
			"A3",
			"B3",
			"C4",
			"D4",
			"E4",
			"Gb4",
			"G4",
			"A4",
			"B4",
			"C5",
			"D5",
			"E5",
			"Gb5"
		]
	},
	{
		"preset": "C7 minor",
		"map": [
			"E5",
			"Gb5",
			"G5",
			"A5",
			"B5",
			"C6",
			"D6",
			"E6",
			"Gb6",
			"G6",
			"A6",
			"B6",
			"C7",
			"D7",
			"E7",
			"Gb7"
		]
	},
	{
		"preset": "G2 minor",
		"map": [
			"B0",
			"Db1",
			"D1",
			"E1",
			"Gb1",
			"G1",
			"A1",
			"B1",
			"Db2",
			"D2",
			"E2",
			"Gb2",
			"G2",
			"A2",
			"B2",
			"Db3"
		]
	},
	{
		"preset": "G4 minor",
		"map": [
			"B2",
			"Db3",
			"D3",
			"E3",
			"Gb3",
			"G3",
			"A3",
			"B3",
			"Db4",
			"D4",
			"E4",
			"Gb4",
			"G4",
			"A4",
			"B4",
			"Db5"
		]
	},
	{
		"preset": "G6 minor",
		"map": [
			"B4",
			"Db5",
			"D5",
			"E5",
			"Gb5",
			"G5",
			"A5",
			"B5",
			"Db6",
			"D6",
			"E6",
			"Gb6",
			"G6",
			"A6",
			"B6",
			"Db7"
		]
	},
	{
		"preset": "D3 minor",
		"map": [
			"Gb1",
			"Ab1",
			"A1",
			"B1",
			"Db2",
			"D2",
			"E2",
			"Gb2",
			"Ab2",
			"A2",
			"B2",
			"Db3",
			"D3",
			"E3",
			"Gb3",
			"Ab3"
		]
	},
	{
		"preset": "D5 minor",
		"map": [
			"Gb3",
			"Ab3",
			"A3",
			"B3",
			"Db4",
			"D4",
			"E4",
			"Gb4",
			"Ab4",
			"A4",
			"B4",
			"Db5",
			"D5",
			"E5",
			"Gb5",
			"Ab5"
		]
	},
	{
		"preset": "D7 minor",
		"map": [
			"Gb5",
			"Ab5",
			"A5",
			"B5",
			"Db6",
			"D6",
			"E6",
			"Gb6",
			"Ab6",
			"A6",
			"B6",
			"Db7",
			"D7",
			"E7",
			"Gb7",
			"Ab7"
		]
	},
	{
		"preset": "A2 minor",
		"map": [
			"Db1",
			"Eb1",
			"E1",
			"Gb1",
			"Ab1",
			"A1",
			"B1",
			"Db2",
			"Eb2",
			"E2",
			"Gb2",
			"Ab2",
			"A2",
			"B2",
			"Db3",
			"Eb3"
		]
	},
	{
		"preset": "A4 minor",
		"map": [
			"Db3",
			"Eb3",
			"E3",
			"Gb3",
			"Ab3",
			"A3",
			"B3",
			"Db4",
			"Eb4",
			"E4",
			"Gb4",
			"Ab4",
			"A4",
			"B4",
			"Db5",
			"Eb5"
		]
	},
	{
		"preset": "A6 minor",
		"map": [
			"Db5",
			"Eb5",
			"E5",
			"Gb5",
			"Ab5",
			"A5",
			"B5",
			"Db6",
			"Eb6",
			"E6",
			"Gb6",
			"Ab6",
			"A6",
			"B6",
			"Db7",
			"Eb7"
		]
	},
	{
		"preset": "E3 minor",
		"map": [
			"Ab1",
			"Bb1",
			"B1",
			"Db2",
			"Eb2",
			"E2",
			"Gb2",
			"Ab2",
			"Bb2",
			"B2",
			"Db3",
			"Eb3",
			"E3",
			"Gb3",
			"Ab3",
			"Bb3"
		]
	},
	{
		"preset": "E5 minor",
		"map": [
			"Ab3",
			"Bb3",
			"B3",
			"Db4",
			"Eb4",
			"E4",
			"Gb4",
			"Ab4",
			"Bb4",
			"B4",
			"Db5",
			"Eb5",
			"E5",
			"Gb5",
			"Ab5",
			"Bb5"
		]
	},
	{
		"preset": "E7 minor",
		"map": [
			"Ab5",
			"Bb5",
			"B5",
			"Db6",
			"Eb6",
			"E6",
			"Gb6",
			"Ab6",
			"Bb6",
			"B6",
			"Db7",
			"Eb7",
			"E7",
			"Gb7",
			"Ab7",
			"Bb7"
		]
	},
	{
		"preset": "B2 minor",
		"map": [
			"Eb1",
			"F1",
			"Gb1",
			"Ab1",
			"Bb1",
			"B1",
			"Db2",
			"Eb2",
			"F2",
			"Gb2",
			"Ab2",
			"Bb2",
			"B2",
			"Db3",
			"Eb3",
			"F3"
		]
	},
	{
		"preset": "B4 minor",
		"map": [
			"Eb3",
			"F3",
			"Gb3",
			"Ab3",
			"Bb3",
			"B3",
			"Db4",
			"Eb4",
			"F4",
			"Gb4",
			"Ab4",
			"Bb4",
			"B4",
			"Db5",
			"Eb5",
			"F5"
		]
	},
	{
		"preset": "B6 minor",
		"map": [
			"Eb5",
			"F5",
			"Gb5",
			"Ab5",
			"Bb5",
			"B5",
			"Db6",
			"Eb6",
			"F6",
			"Gb6",
			"Ab6",
			"Bb6",
			"B6",
			"Db7",
			"Eb7",
			"F7"
		]
	},
	{
		"preset": "A#2/Bb2 minor",
		"map": [
			"D1",
			"E1",
			"F1",
			"G1",
			"A1",
			"Bb1",
			"C2",
			"D2",
			"E2",
			"F2",
			"G2",
			"A2",
			"Bb2",
			"C3",
			"D3",
			"E3"
		]
	},
	{
		"preset": "A#4/Bb4 minor",
		"map": [
			"D3",
			"E3",
			"F3",
			"G3",
			"A3",
			"Bb3",
			"C4",
			"D4",
			"E4",
			"F4",
			"G4",
			"A4",
			"Bb4",
			"C5",
			"D5",
			"E5"
		]
	},
	{
		"preset": "A#6/Bb6 minor",
		"map": [
			"D5",
			"E5",
			"F5",
			"G5",
			"A5",
			"Bb5",
			"C6",
			"D6",
			"E6",
			"F6",
			"G6",
			"A6",
			"Bb6",
			"C7",
			"D7",
			"E7"
		]
	},
	{
		"preset": "F2 minor",
		"map": [
			"A0",
			"B0",
			"C1",
			"D1",
			"E1",
			"F1",
			"G1",
			"A1",
			"B1",
			"C2",
			"D2",
			"E2",
			"F2",
			"G2",
			"A2",
			"B2"
		]
	},
	{
		"preset": "F4 minor",
		"map": [
			"A2",
			"B2",
			"C3",
			"D3",
			"E3",
			"F3",
			"G3",
			"A3",
			"B3",
			"C4",
			"D4",
			"E4",
			"F4",
			"G4",
			"A4",
			"B4"
		]
	},
	{
		"preset": "F6 minor",
		"map": [
			"A4",
			"B4",
			"C5",
			"D5",
			"E5",
			"F5",
			"G5",
			"A5",
			"B5",
			"C6",
			"D6",
			"E6",
			"F6",
			"G6",
			"A6",
			"B6"
		]
	},
	{
		"preset": "F#2/Gb2 minor",
		"map": [
			"Bb0",
			"C1",
			"Db1",
			"Eb1",
			"F1",
			"Gb1",
			"Ab1",
			"Bb1",
			"C2",
			"Db2",
			"Eb2",
			"F2",
			"Gb2",
			"Ab2",
			"Bb2",
			"C3"
		]
	},
	{
		"preset": "F#4/Gb4 minor",
		"map": [
			"Bb2",
			"C3",
			"Db3",
			"Eb3",
			"F3",
			"Gb3",
			"Ab3",
			"Bb3",
			"C4",
			"Db4",
			"Eb4",
			"F4",
			"Gb4",
			"Ab4",
			"Bb4",
			"C5"
		]
	},
	{
		"preset": "F#6/Gb6 minor",
		"map": [
			"Bb4",
			"C5",
			"Db5",
			"Eb5",
			"F5",
			"Gb5",
			"Ab5",
			"Bb5",
			"C6",
			"Db6",
			"Eb6",
			"F6",
			"Gb6",
			"Ab6",
			"Bb6",
			"C7"
		]
	},
	{
		"preset": "C#3/Db3 minor",
		"map": [
			"F1",
			"G1",
			"Ab1",
			"Bb1",
			"C2",
			"Db2",
			"Eb2",
			"F2",
			"G2",
			"Ab2",
			"Bb2",
			"C3",
			"Db3",
			"Eb3",
			"F3",
			"G3"
		]
	},
	{
		"preset": "C#5/Db5 minor",
		"map": [
			"F3",
			"G3",
			"Ab3",
			"Bb3",
			"C4",
			"Db4",
			"Eb4",
			"F4",
			"G4",
			"Ab4",
			"Bb4",
			"C5",
			"Db5",
			"Eb5",
			"F5",
			"G5"
		]
	},
	{
		"preset": "C#7/Db7 minor",
		"map": [
			"F5",
			"G5",
			"Ab5",
			"Bb5",
			"C6",
			"Db6",
			"Eb6",
			"F6",
			"G6",
			"Ab6",
			"Bb6",
			"C7",
			"Db7",
			"Eb7",
			"F7",
			"G7"
		]
	},
	{
		"preset": "G#2/Ab2 minor",
		"map": [
			"C1",
			"D1",
			"Eb1",
			"F1",
			"G1",
			"Ab1",
			"Bb1",
			"C2",
			"D2",
			"Eb2",
			"F2",
			"G2",
			"Ab2",
			"Bb2",
			"C3",
			"D3"
		]
	},
	{
		"preset": "G#4/Ab4 minor",
		"map": [
			"C3",
			"D3",
			"Eb3",
			"F3",
			"G3",
			"Ab3",
			"Bb3",
			"C4",
			"D4",
			"Eb4",
			"F4",
			"G4",
			"Ab4",
			"Bb4",
			"C5",
			"D5"
		]
	},
	{
		"preset": "G#6/Ab6 minor",
		"map": [
			"C5",
			"D5",
			"Eb5",
			"F5",
			"G5",
			"Ab5",
			"Bb5",
			"C6",
			"D6",
			"Eb6",
			"F6",
			"G6",
			"Ab6",
			"Bb6",
			"C7",
			"D7"
		]
	},
	{
		"preset": "D#3/Eb3 minor",
		"map": [
			"G1",
			"A1",
			"Bb1",
			"C2",
			"D2",
			"Eb2",
			"F2",
			"G2",
			"A2",
			"Bb2",
			"C3",
			"D3",
			"Eb3",
			"F3",
			"G3",
			"A3"
		]
	},
	{
		"preset": "D#5/Eb5 minor",
		"map": [
			"G3",
			"A3",
			"Bb3",
			"C4",
			"D4",
			"Eb4",
			"F4",
			"G4",
			"A4",
			"Bb4",
			"C5",
			"D5",
			"Eb5",
			"F5",
			"G5",
			"A5"
		]
	},
	{
		"preset": "D#7/Eb7 minor",
		"map": [
			"G5",
			"A5",
			"Bb5",
			"C6",
			"D6",
			"Eb6",
			"F6",
			"G6",
			"A6",
			"Bb6",
			"C7",
			"D7",
			"Eb7",
			"F7",
			"G7",
			"A7"
		]
	}
]

momoca.smallestNoteSet = [
	{
		name: "1 Beat (1/4 Bar)",
		fraction: 1
	},
	{
		name: "1/2 Beat (1/8 Bar)",
		fraction: 2
	},
	{
		name: "1/3 Beat (1/12 Bar)",
		fraction: 3
	},
	{
		name: "1/4 Beat (1/16 Bar)",
		fraction: 4
	},
	{
		name: "1/5 Beat (1/20 Bar)",
		fraction: 5
	},
	{
		name: "1/6 Beat (1/24 Bar)",
		fraction: 6
	},
	{
		name: "1/8 Beat (1/32 Bar)",
		fraction: 8
	},
	{
		name: "1/10 Beat (1/40 Bar)",
		fraction: 10
	},
	{
		name: "1/12 Beat (1/48 Bar)",
		fraction: 12
	}
]
