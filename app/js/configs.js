utils.midiWriter = require('MidiWriter') // https://www.npmjs.com/package/midi-writer-js
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
		"map": {
			"T1": "Db5",
			"T2": "Bb4",
			"T3": "Ab4",
			"T4": "Gb4",
			"T5": "Eb4",
			"T6": "Db4",
			"T7": "Bb3",
			"T8": "Ab3",
			"T9": "Gb3",
			"T10": "Eb3",
			"T11": "Db3",
			"T12": "Bb2",
			"T13": "Ab2",
			"T14": "Gb2",
			"T15": "Eb2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Music Matrix B",
		"map": {
			"T1": "Eb5",
			"T2": "C5",
			"T3": "Bb4",
			"T4": "Ab4",
			"T5": "F4",
			"T6": "Eb4",
			"T7": "C4",
			"T8": "Bb3",
			"T9": "Ab3",
			"T10": "F3",
			"T11": "Eb3",
			"T12": "C3",
			"T13": "Bb2",
			"T14": "Ab2",
			"T15": "F2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Music Matrix C",
		"map": {
			"T1": "E5",
			"T2": "Db5",
			"T3": "B4",
			"T4": "A4",
			"T5": "Gb4",
			"T6": "E4",
			"T7": "Db4",
			"T8": "B3",
			"T9": "A3",
			"T10": "Gb3",
			"T11": "E3",
			"T12": "Db3",
			"T13": "B2",
			"T14": "A2",
			"T15": "Gb2",
			"T16": "E2"
		}
	},
	{
		"preset": "Music Matrix D",
		"map": {
			"T1": "Gb5",
			"T2": "Eb5",
			"T3": "Db5",
			"T4": "B4",
			"T5": "Ab4",
			"T6": "Gb4",
			"T7": "Eb4",
			"T8": "Db4",
			"T9": "B3",
			"T10": "Ab3",
			"T11": "Gb3",
			"T12": "Eb3",
			"T13": "Db3",
			"T14": "B2",
			"T15": "Ab2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Music Matrix E",
		"map": {
			"T1": "Ab5",
			"T2": "F5",
			"T3": "Eb5",
			"T4": "Db5",
			"T5": "Bb4",
			"T6": "Ab4",
			"T7": "F4",
			"T8": "Eb4",
			"T9": "Db4",
			"T10": "Bb3",
			"T11": "Ab3",
			"T12": "F3",
			"T13": "Eb3",
			"T14": "Db3",
			"T15": "Bb2",
			"T16": "Ab2"
		}
	},
	{
		"preset": "Music Matrix F",
		"map": {
			"T1": "A5",
			"T2": "Gb5",
			"T3": "E5",
			"T4": "D5",
			"T5": "B4",
			"T6": "A4",
			"T7": "Gb4",
			"T8": "E4",
			"T9": "D4",
			"T10": "B3",
			"T11": "A3",
			"T12": "Gb3",
			"T13": "E3",
			"T14": "D3",
			"T15": "B2",
			"T16": "A2"
		}
	},
	{
		"preset": "Music Matrix G",
		"map": {
			"T1": "B5",
			"T2": "Ab5",
			"T3": "Gb5",
			"T4": "E5",
			"T5": "Db5",
			"T6": "B4",
			"T7": "Ab4",
			"T8": "Gb4",
			"T9": "E4",
			"T10": "Db4",
			"T11": "B3",
			"T12": "Ab3",
			"T13": "Gb3",
			"T14": "E3",
			"T15": "Db3",
			"T16": "B2"
		}
	},
	{
		"preset": "Music Matrix G#/Ab",
		"map": {
			"T1": "Db5",
			"T2": "Bb4",
			"T3": "Ab4",
			"T4": "Gb4",
			"T5": "Eb4",
			"T6": "Db4",
			"T7": "Bb3",
			"T8": "Ab3",
			"T9": "Gb3",
			"T10": "Eb3",
			"T11": "Db3",
			"T12": "Bb2",
			"T13": "Ab2",
			"T14": "Gb2",
			"T15": "Eb2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Music Matrix A#/Bb",
		"map": {
			"T1": "D5",
			"T2": "B4",
			"T3": "A4",
			"T4": "G4",
			"T5": "E4",
			"T6": "D4",
			"T7": "B3",
			"T8": "A3",
			"T9": "G3",
			"T10": "E3",
			"T11": "D3",
			"T12": "B2",
			"T13": "A2",
			"T14": "G2",
			"T15": "E2",
			"T16": "D2"
		}
	},
	{
		"preset": "Music Matrix C#/Db",
		"map": {
			"T1": "F5",
			"T2": "D5",
			"T3": "C5",
			"T4": "Bb4",
			"T5": "G4",
			"T6": "F4",
			"T7": "D4",
			"T8": "C4",
			"T9": "Bb3",
			"T10": "G3",
			"T11": "F3",
			"T12": "D3",
			"T13": "C3",
			"T14": "Bb2",
			"T15": "G2",
			"T16": "F2"
		}
	},
	{
		"preset": "Music Matrix D#/Eb",
		"map": {
			"T1": "G5",
			"T2": "E5",
			"T3": "D5",
			"T4": "C5",
			"T5": "A4",
			"T6": "G4",
			"T7": "E4",
			"T8": "D4",
			"T9": "C4",
			"T10": "A3",
			"T11": "G3",
			"T12": "E3",
			"T13": "D3",
			"T14": "C3",
			"T15": "A2",
			"T16": "G2"
		}
	},
	{
		"preset": "Music Matrix F#/Gb",
		"map": {
			"T1": "Bb5",
			"T2": "G5",
			"T3": "F5",
			"T4": "Eb5",
			"T5": "C5",
			"T6": "Bb4",
			"T7": "G4",
			"T8": "F4",
			"T9": "Eb4",
			"T10": "C4",
			"T11": "Bb3",
			"T12": "G3",
			"T13": "F3",
			"T14": "Eb3",
			"T15": "C3",
			"T16": "Bb2"
		}
	},
	{
		"preset": "Drum Kit Lower Range",
		"map": {
			"T1": "Gb2",
			"T2": "F2",
			"T3": "E2",
			"T4": "Eb2",
			"T5": "D2",
			"T6": "Db2",
			"T7": "C2",
			"T8": "B1",
			"T9": "Bb1",
			"T10": "A1",
			"T11": "Ab1",
			"T12": "G1",
			"T13": "Gb1",
			"T14": "F1",
			"T15": "E1",
			"T16": "Eb1"
		}
	},
	{
		"preset": "Drum Kit Lower Mid Range",
		"map": {
			"T1": "Bb3",
			"T2": "A3",
			"T3": "Ab3",
			"T4": "G3",
			"T5": "Gb3",
			"T6": "F3",
			"T7": "E3",
			"T8": "Eb3",
			"T9": "D3",
			"T10": "Db3",
			"T11": "C3",
			"T12": "B2",
			"T13": "Bb2",
			"T14": "A2",
			"T15": "Ab2",
			"T16": "G2"
		}
	},
	{
		"preset": "Drum Kit Upper Mid Range",
		"map": {
			"T1": "D5",
			"T2": "Db5",
			"T3": "C5",
			"T4": "B4",
			"T5": "Bb4",
			"T6": "A4",
			"T7": "Ab4",
			"T8": "G4",
			"T9": "Gb4",
			"T10": "F4",
			"T11": "E4",
			"T12": "Eb4",
			"T13": "D4",
			"T14": "Db4",
			"T15": "C4",
			"T16": "B3"
		}
	},
	{
		"preset": "Drum Kit Upper Range",
		"map": {
			"T1": "Eb6",
			"T2": "D6",
			"T3": "Db6",
			"T4": "C6",
			"T5": "B5",
			"T6": "Bb5",
			"T7": "A5",
			"T8": "Ab5",
			"T9": "G5",
			"T10": "Gb5",
			"T11": "F5",
			"T12": "E5",
			"T13": "Eb5",
			"T14": "D5",
			"T15": "Db5",
			"T16": "C5"
		}
	},
	{
		"preset": "Cord: C (Major)",
		"map": {
			"T1": "E7",
			"T2": "B6",
			"T3": "Ab6",
			"T4": "E6",
			"T5": "B5",
			"T6": "Ab5",
			"T7": "E5",
			"T8": "B4",
			"T9": "Ab4",
			"T10": "E4",
			"T11": "B3",
			"T12": "Ab3",
			"T13": "E3",
			"T14": "B2",
			"T15": "Ab2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C (Major 7)",
		"map": {
			"T1": "Eb6",
			"T2": "B5",
			"T3": "Ab5",
			"T4": "E5",
			"T5": "Eb5",
			"T6": "B4",
			"T7": "Ab4",
			"T8": "E4",
			"T9": "Eb4",
			"T10": "B3",
			"T11": "Ab3",
			"T12": "E3",
			"T13": "Eb3",
			"T14": "B2",
			"T15": "Ab2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C (minor)",
		"map": {
			"T1": "E7",
			"T2": "B6",
			"T3": "G6",
			"T4": "E6",
			"T5": "B5",
			"T6": "G5",
			"T7": "E5",
			"T8": "B4",
			"T9": "G4",
			"T10": "E4",
			"T11": "B3",
			"T12": "G3",
			"T13": "E3",
			"T14": "B2",
			"T15": "G2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C (minor 7)",
		"map": {
			"T1": "D6",
			"T2": "B5",
			"T3": "G5",
			"T4": "E5",
			"T5": "D5",
			"T6": "B4",
			"T7": "G4",
			"T8": "E4",
			"T9": "D4",
			"T10": "B3",
			"T11": "G3",
			"T12": "E3",
			"T13": "D3",
			"T14": "B2",
			"T15": "G2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C (Suspended 2nd)",
		"map": {
			"T1": "E7",
			"T2": "B6",
			"T3": "Gb6",
			"T4": "E6",
			"T5": "B5",
			"T6": "Gb5",
			"T7": "E5",
			"T8": "B4",
			"T9": "Gb4",
			"T10": "E4",
			"T11": "B3",
			"T12": "Gb3",
			"T13": "E3",
			"T14": "B2",
			"T15": "Gb2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C (Suspended 4nd)",
		"map": {
			"T1": "E7",
			"T2": "B6",
			"T3": "A6",
			"T4": "E6",
			"T5": "B5",
			"T6": "A5",
			"T7": "E5",
			"T8": "B4",
			"T9": "A4",
			"T10": "E4",
			"T11": "B3",
			"T12": "A3",
			"T13": "E3",
			"T14": "B2",
			"T15": "A2",
			"T16": "E2"
		}
	},
	{
		"preset": "Cord: C#/Db (Major)",
		"map": {
			"T1": "F7",
			"T2": "C7",
			"T3": "A6",
			"T4": "F6",
			"T5": "C6",
			"T6": "A5",
			"T7": "F5",
			"T8": "C5",
			"T9": "A4",
			"T10": "F4",
			"T11": "C4",
			"T12": "A3",
			"T13": "F3",
			"T14": "C3",
			"T15": "A2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: C#/Db (Major 7)",
		"map": {
			"T1": "E6",
			"T2": "C6",
			"T3": "A5",
			"T4": "F5",
			"T5": "E5",
			"T6": "C5",
			"T7": "A4",
			"T8": "F4",
			"T9": "E4",
			"T10": "C4",
			"T11": "A3",
			"T12": "F3",
			"T13": "E3",
			"T14": "C3",
			"T15": "A2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: C#/Db (minor)",
		"map": {
			"T1": "F7",
			"T2": "C7",
			"T3": "Ab6",
			"T4": "F6",
			"T5": "C6",
			"T6": "Ab5",
			"T7": "F5",
			"T8": "C5",
			"T9": "Ab4",
			"T10": "F4",
			"T11": "C4",
			"T12": "Ab3",
			"T13": "F3",
			"T14": "C3",
			"T15": "Ab2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: C#/Db (minor 7)",
		"map": {
			"T1": "Eb6",
			"T2": "C6",
			"T3": "Ab5",
			"T4": "F5",
			"T5": "Eb5",
			"T6": "C5",
			"T7": "Ab4",
			"T8": "F4",
			"T9": "Eb4",
			"T10": "C4",
			"T11": "Ab3",
			"T12": "F3",
			"T13": "Eb3",
			"T14": "C3",
			"T15": "Ab2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: C#/Db (Suspended 2nd)",
		"map": {
			"T1": "F7",
			"T2": "C7",
			"T3": "G6",
			"T4": "F6",
			"T5": "C6",
			"T6": "G5",
			"T7": "F5",
			"T8": "C5",
			"T9": "G4",
			"T10": "F4",
			"T11": "C4",
			"T12": "G3",
			"T13": "F3",
			"T14": "C3",
			"T15": "G2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: C#/Db (Suspended 4nd)",
		"map": {
			"T1": "F7",
			"T2": "C7",
			"T3": "Bb6",
			"T4": "F6",
			"T5": "C6",
			"T6": "Bb5",
			"T7": "F5",
			"T8": "C5",
			"T9": "Bb4",
			"T10": "F4",
			"T11": "C4",
			"T12": "Bb3",
			"T13": "F3",
			"T14": "C3",
			"T15": "Bb2",
			"T16": "F2"
		}
	},
	{
		"preset": "Cord: D (Major)",
		"map": {
			"T1": "Gb7",
			"T2": "Db7",
			"T3": "Bb6",
			"T4": "Gb6",
			"T5": "Db6",
			"T6": "Bb5",
			"T7": "Gb5",
			"T8": "Db5",
			"T9": "Bb4",
			"T10": "Gb4",
			"T11": "Db4",
			"T12": "Bb3",
			"T13": "Gb3",
			"T14": "Db3",
			"T15": "Bb2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D (Major 7)",
		"map": {
			"T1": "F6",
			"T2": "Db6",
			"T3": "Bb5",
			"T4": "Gb5",
			"T5": "F5",
			"T6": "Db5",
			"T7": "Bb4",
			"T8": "Gb4",
			"T9": "F4",
			"T10": "Db4",
			"T11": "Bb3",
			"T12": "Gb3",
			"T13": "F3",
			"T14": "Db3",
			"T15": "Bb2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D (minor)",
		"map": {
			"T1": "Gb7",
			"T2": "Db7",
			"T3": "A6",
			"T4": "Gb6",
			"T5": "Db6",
			"T6": "A5",
			"T7": "Gb5",
			"T8": "Db5",
			"T9": "A4",
			"T10": "Gb4",
			"T11": "Db4",
			"T12": "A3",
			"T13": "Gb3",
			"T14": "Db3",
			"T15": "A2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D (minor 7)",
		"map": {
			"T1": "E6",
			"T2": "Db6",
			"T3": "A5",
			"T4": "Gb5",
			"T5": "E5",
			"T6": "Db5",
			"T7": "A4",
			"T8": "Gb4",
			"T9": "E4",
			"T10": "Db4",
			"T11": "A3",
			"T12": "Gb3",
			"T13": "E3",
			"T14": "Db3",
			"T15": "A2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D (Suspended 2nd)",
		"map": {
			"T1": "Gb7",
			"T2": "Db7",
			"T3": "Ab6",
			"T4": "Gb6",
			"T5": "Db6",
			"T6": "Ab5",
			"T7": "Gb5",
			"T8": "Db5",
			"T9": "Ab4",
			"T10": "Gb4",
			"T11": "Db4",
			"T12": "Ab3",
			"T13": "Gb3",
			"T14": "Db3",
			"T15": "Ab2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D (Suspended 4nd)",
		"map": {
			"T1": "Gb7",
			"T2": "Db7",
			"T3": "B6",
			"T4": "Gb6",
			"T5": "Db6",
			"T6": "B5",
			"T7": "Gb5",
			"T8": "Db5",
			"T9": "B4",
			"T10": "Gb4",
			"T11": "Db4",
			"T12": "B3",
			"T13": "Gb3",
			"T14": "Db3",
			"T15": "B2",
			"T16": "Gb2"
		}
	},
	{
		"preset": "Cord: D#/Eb (Major)",
		"map": {
			"T1": "G7",
			"T2": "D7",
			"T3": "B6",
			"T4": "G6",
			"T5": "D6",
			"T6": "B5",
			"T7": "G5",
			"T8": "D5",
			"T9": "B4",
			"T10": "G4",
			"T11": "D4",
			"T12": "B3",
			"T13": "G3",
			"T14": "D3",
			"T15": "B2",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: D#/Eb (Major 7)",
		"map": {
			"T1": "Gb6",
			"T2": "D6",
			"T3": "B5",
			"T4": "G5",
			"T5": "Gb5",
			"T6": "D5",
			"T7": "B4",
			"T8": "G4",
			"T9": "Gb4",
			"T10": "D4",
			"T11": "B3",
			"T12": "G3",
			"T13": "Gb3",
			"T14": "D3",
			"T15": "B2",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: D#/Eb (minor)",
		"map": {
			"T1": "G7",
			"T2": "D7",
			"T3": "Bb6",
			"T4": "G6",
			"T5": "D6",
			"T6": "Bb5",
			"T7": "G5",
			"T8": "D5",
			"T9": "Bb4",
			"T10": "G4",
			"T11": "D4",
			"T12": "Bb3",
			"T13": "G3",
			"T14": "D3",
			"T15": "Bb2",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: D#/Eb (minor 7)",
		"map": {
			"T1": "F6",
			"T2": "D6",
			"T3": "Bb5",
			"T4": "G5",
			"T5": "F5",
			"T6": "D5",
			"T7": "Bb4",
			"T8": "G4",
			"T9": "F4",
			"T10": "D4",
			"T11": "Bb3",
			"T12": "G3",
			"T13": "F3",
			"T14": "D3",
			"T15": "Bb2",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: D#/Eb (Suspended 2nd)",
		"map": {
			"T1": "G7",
			"T2": "D7",
			"T3": "A6",
			"T4": "G6",
			"T5": "D6",
			"T6": "A5",
			"T7": "G5",
			"T8": "D5",
			"T9": "A4",
			"T10": "G4",
			"T11": "D4",
			"T12": "A3",
			"T13": "G3",
			"T14": "D3",
			"T15": "A2",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: D#/Eb (Suspended 4nd)",
		"map": {
			"T1": "G7",
			"T2": "D7",
			"T3": "C7",
			"T4": "G6",
			"T5": "D6",
			"T6": "C6",
			"T7": "G5",
			"T8": "D5",
			"T9": "C5",
			"T10": "G4",
			"T11": "D4",
			"T12": "C4",
			"T13": "G3",
			"T14": "D3",
			"T15": "C3",
			"T16": "G2"
		}
	},
	{
		"preset": "Cord: E (Major)",
		"map": {
			"T1": "Ab6",
			"T2": "Eb6",
			"T3": "C6",
			"T4": "Ab5",
			"T5": "Eb5",
			"T6": "C5",
			"T7": "Ab4",
			"T8": "Eb4",
			"T9": "C4",
			"T10": "Ab3",
			"T11": "Eb3",
			"T12": "C3",
			"T13": "Ab2",
			"T14": "Eb2",
			"T15": "C2",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: E (Major 7)",
		"map": {
			"T1": "G5",
			"T2": "Eb5",
			"T3": "C5",
			"T4": "Ab4",
			"T5": "G4",
			"T6": "Eb4",
			"T7": "C4",
			"T8": "Ab3",
			"T9": "G3",
			"T10": "Eb3",
			"T11": "C3",
			"T12": "Ab2",
			"T13": "G2",
			"T14": "Eb2",
			"T15": "C2",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: E (minor)",
		"map": {
			"T1": "Ab6",
			"T2": "Eb6",
			"T3": "B5",
			"T4": "Ab5",
			"T5": "Eb5",
			"T6": "B4",
			"T7": "Ab4",
			"T8": "Eb4",
			"T9": "B3",
			"T10": "Ab3",
			"T11": "Eb3",
			"T12": "B2",
			"T13": "Ab2",
			"T14": "Eb2",
			"T15": "B1",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: E (minor 7)",
		"map": {
			"T1": "Gb5",
			"T2": "Eb5",
			"T3": "B4",
			"T4": "Ab4",
			"T5": "Gb4",
			"T6": "Eb4",
			"T7": "B3",
			"T8": "Ab3",
			"T9": "Gb3",
			"T10": "Eb3",
			"T11": "B2",
			"T12": "Ab2",
			"T13": "Gb2",
			"T14": "Eb2",
			"T15": "B1",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: E (Suspended 2nd)",
		"map": {
			"T1": "Ab6",
			"T2": "Eb6",
			"T3": "Bb5",
			"T4": "Ab5",
			"T5": "Eb5",
			"T6": "Bb4",
			"T7": "Ab4",
			"T8": "Eb4",
			"T9": "Bb3",
			"T10": "Ab3",
			"T11": "Eb3",
			"T12": "Bb2",
			"T13": "Ab2",
			"T14": "Eb2",
			"T15": "Bb1",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: E (Suspended 4nd)",
		"map": {
			"T1": "Ab6",
			"T2": "Eb6",
			"T3": "Db6",
			"T4": "Ab5",
			"T5": "Eb5",
			"T6": "Db5",
			"T7": "Ab4",
			"T8": "Eb4",
			"T9": "Db4",
			"T10": "Ab3",
			"T11": "Eb3",
			"T12": "Db3",
			"T13": "Ab2",
			"T14": "Eb2",
			"T15": "Db2",
			"T16": "Ab1"
		}
	},
	{
		"preset": "Cord: F (Major)",
		"map": {
			"T1": "A6",
			"T2": "E6",
			"T3": "Db6",
			"T4": "A5",
			"T5": "E5",
			"T6": "Db5",
			"T7": "A4",
			"T8": "E4",
			"T9": "Db4",
			"T10": "A3",
			"T11": "E3",
			"T12": "Db3",
			"T13": "A2",
			"T14": "E2",
			"T15": "Db2",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F (Major 7)",
		"map": {
			"T1": "Ab5",
			"T2": "E5",
			"T3": "Db5",
			"T4": "A4",
			"T5": "Ab4",
			"T6": "E4",
			"T7": "Db4",
			"T8": "A3",
			"T9": "Ab3",
			"T10": "E3",
			"T11": "Db3",
			"T12": "A2",
			"T13": "Ab2",
			"T14": "E2",
			"T15": "Db2",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F (minor)",
		"map": {
			"T1": "A6",
			"T2": "E6",
			"T3": "C6",
			"T4": "A5",
			"T5": "E5",
			"T6": "C5",
			"T7": "A4",
			"T8": "E4",
			"T9": "C4",
			"T10": "A3",
			"T11": "E3",
			"T12": "C3",
			"T13": "A2",
			"T14": "E2",
			"T15": "C2",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F (minor 7)",
		"map": {
			"T1": "G5",
			"T2": "E5",
			"T3": "C5",
			"T4": "A4",
			"T5": "G4",
			"T6": "E4",
			"T7": "C4",
			"T8": "A3",
			"T9": "G3",
			"T10": "E3",
			"T11": "C3",
			"T12": "A2",
			"T13": "G2",
			"T14": "E2",
			"T15": "C2",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F (Suspended 2nd)",
		"map": {
			"T1": "A6",
			"T2": "E6",
			"T3": "B5",
			"T4": "A5",
			"T5": "E5",
			"T6": "B4",
			"T7": "A4",
			"T8": "E4",
			"T9": "B3",
			"T10": "A3",
			"T11": "E3",
			"T12": "B2",
			"T13": "A2",
			"T14": "E2",
			"T15": "B1",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F (Suspended 4nd)",
		"map": {
			"T1": "A6",
			"T2": "E6",
			"T3": "D6",
			"T4": "A5",
			"T5": "E5",
			"T6": "D5",
			"T7": "A4",
			"T8": "E4",
			"T9": "D4",
			"T10": "A3",
			"T11": "E3",
			"T12": "D3",
			"T13": "A2",
			"T14": "E2",
			"T15": "D2",
			"T16": "A1"
		}
	},
	{
		"preset": "Cord: F#/Gb (Major)",
		"map": {
			"T1": "Bb6",
			"T2": "F6",
			"T3": "D6",
			"T4": "Bb5",
			"T5": "F5",
			"T6": "D5",
			"T7": "Bb4",
			"T8": "F4",
			"T9": "D4",
			"T10": "Bb3",
			"T11": "F3",
			"T12": "D3",
			"T13": "Bb2",
			"T14": "F2",
			"T15": "D2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: F#/Gb (Major 7)",
		"map": {
			"T1": "A5",
			"T2": "F5",
			"T3": "D5",
			"T4": "Bb4",
			"T5": "A4",
			"T6": "F4",
			"T7": "D4",
			"T8": "Bb3",
			"T9": "A3",
			"T10": "F3",
			"T11": "D3",
			"T12": "Bb2",
			"T13": "A2",
			"T14": "F2",
			"T15": "D2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: F#/Gb (minor)",
		"map": {
			"T1": "Bb6",
			"T2": "F6",
			"T3": "Db6",
			"T4": "Bb5",
			"T5": "F5",
			"T6": "Db5",
			"T7": "Bb4",
			"T8": "F4",
			"T9": "Db4",
			"T10": "Bb3",
			"T11": "F3",
			"T12": "Db3",
			"T13": "Bb2",
			"T14": "F2",
			"T15": "Db2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: F#/Gb (minor 7)",
		"map": {
			"T1": "Ab5",
			"T2": "F5",
			"T3": "Db5",
			"T4": "Bb4",
			"T5": "Ab4",
			"T6": "F4",
			"T7": "Db4",
			"T8": "Bb3",
			"T9": "Ab3",
			"T10": "F3",
			"T11": "Db3",
			"T12": "Bb2",
			"T13": "Ab2",
			"T14": "F2",
			"T15": "Db2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: F#/Gb (Suspended 2nd)",
		"map": {
			"T1": "Bb6",
			"T2": "F6",
			"T3": "C6",
			"T4": "Bb5",
			"T5": "F5",
			"T6": "C5",
			"T7": "Bb4",
			"T8": "F4",
			"T9": "C4",
			"T10": "Bb3",
			"T11": "F3",
			"T12": "C3",
			"T13": "Bb2",
			"T14": "F2",
			"T15": "C2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: F#/Gb (Suspended 4nd)",
		"map": {
			"T1": "Bb6",
			"T2": "F6",
			"T3": "Eb6",
			"T4": "Bb5",
			"T5": "F5",
			"T6": "Eb5",
			"T7": "Bb4",
			"T8": "F4",
			"T9": "Eb4",
			"T10": "Bb3",
			"T11": "F3",
			"T12": "Eb3",
			"T13": "Bb2",
			"T14": "F2",
			"T15": "Eb2",
			"T16": "Bb1"
		}
	},
	{
		"preset": "Cord: G (Major)",
		"map": {
			"T1": "B6",
			"T2": "Gb6",
			"T3": "Eb6",
			"T4": "B5",
			"T5": "Gb5",
			"T6": "Eb5",
			"T7": "B4",
			"T8": "Gb4",
			"T9": "Eb4",
			"T10": "B3",
			"T11": "Gb3",
			"T12": "Eb3",
			"T13": "B2",
			"T14": "Gb2",
			"T15": "Eb2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G (Major 7)",
		"map": {
			"T1": "Bb5",
			"T2": "Gb5",
			"T3": "Eb5",
			"T4": "B4",
			"T5": "Bb4",
			"T6": "Gb4",
			"T7": "Eb4",
			"T8": "B3",
			"T9": "Bb3",
			"T10": "Gb3",
			"T11": "Eb3",
			"T12": "B2",
			"T13": "Bb2",
			"T14": "Gb2",
			"T15": "Eb2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G (minor)",
		"map": {
			"T1": "B6",
			"T2": "Gb6",
			"T3": "D6",
			"T4": "B5",
			"T5": "Gb5",
			"T6": "D5",
			"T7": "B4",
			"T8": "Gb4",
			"T9": "D4",
			"T10": "B3",
			"T11": "Gb3",
			"T12": "D3",
			"T13": "B2",
			"T14": "Gb2",
			"T15": "D2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G (minor 7)",
		"map": {
			"T1": "A5",
			"T2": "Gb5",
			"T3": "D5",
			"T4": "B4",
			"T5": "A4",
			"T6": "Gb4",
			"T7": "D4",
			"T8": "B3",
			"T9": "A3",
			"T10": "Gb3",
			"T11": "D3",
			"T12": "B2",
			"T13": "A2",
			"T14": "Gb2",
			"T15": "D2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G (Suspended 2nd)",
		"map": {
			"T1": "B6",
			"T2": "Gb6",
			"T3": "Db6",
			"T4": "B5",
			"T5": "Gb5",
			"T6": "Db5",
			"T7": "B4",
			"T8": "Gb4",
			"T9": "Db4",
			"T10": "B3",
			"T11": "Gb3",
			"T12": "Db3",
			"T13": "B2",
			"T14": "Gb2",
			"T15": "Db2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G (Suspended 4nd)",
		"map": {
			"T1": "B6",
			"T2": "Gb6",
			"T3": "E6",
			"T4": "B5",
			"T5": "Gb5",
			"T6": "E5",
			"T7": "B4",
			"T8": "Gb4",
			"T9": "E4",
			"T10": "B3",
			"T11": "Gb3",
			"T12": "E3",
			"T13": "B2",
			"T14": "Gb2",
			"T15": "E2",
			"T16": "B1"
		}
	},
	{
		"preset": "Cord: G#/Ab (Major)",
		"map": {
			"T1": "C7",
			"T2": "G6",
			"T3": "E6",
			"T4": "C6",
			"T5": "G5",
			"T6": "E5",
			"T7": "C5",
			"T8": "G4",
			"T9": "E4",
			"T10": "C4",
			"T11": "G3",
			"T12": "E3",
			"T13": "C3",
			"T14": "G2",
			"T15": "E2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: G#/Ab (Major 7)",
		"map": {
			"T1": "B5",
			"T2": "G5",
			"T3": "E5",
			"T4": "C5",
			"T5": "B4",
			"T6": "G4",
			"T7": "E4",
			"T8": "C4",
			"T9": "B3",
			"T10": "G3",
			"T11": "E3",
			"T12": "C3",
			"T13": "B2",
			"T14": "G2",
			"T15": "E2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: G#/Ab (minor)",
		"map": {
			"T1": "C7",
			"T2": "G6",
			"T3": "Eb6",
			"T4": "C6",
			"T5": "G5",
			"T6": "Eb5",
			"T7": "C5",
			"T8": "G4",
			"T9": "Eb4",
			"T10": "C4",
			"T11": "G3",
			"T12": "Eb3",
			"T13": "C3",
			"T14": "G2",
			"T15": "Eb2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: G#/Ab (minor 7)",
		"map": {
			"T1": "Bb5",
			"T2": "G5",
			"T3": "Eb5",
			"T4": "C5",
			"T5": "Bb4",
			"T6": "G4",
			"T7": "Eb4",
			"T8": "C4",
			"T9": "Bb3",
			"T10": "G3",
			"T11": "Eb3",
			"T12": "C3",
			"T13": "Bb2",
			"T14": "G2",
			"T15": "Eb2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: G#/Ab (Suspended 2nd)",
		"map": {
			"T1": "C7",
			"T2": "G6",
			"T3": "D6",
			"T4": "C6",
			"T5": "G5",
			"T6": "D5",
			"T7": "C5",
			"T8": "G4",
			"T9": "D4",
			"T10": "C4",
			"T11": "G3",
			"T12": "D3",
			"T13": "C3",
			"T14": "G2",
			"T15": "D2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: G#/Ab (Suspended 4nd)",
		"map": {
			"T1": "C7",
			"T2": "G6",
			"T3": "F6",
			"T4": "C6",
			"T5": "G5",
			"T6": "F5",
			"T7": "C5",
			"T8": "G4",
			"T9": "F4",
			"T10": "C4",
			"T11": "G3",
			"T12": "F3",
			"T13": "C3",
			"T14": "G2",
			"T15": "F2",
			"T16": "C2"
		}
	},
	{
		"preset": "Cord: A (Major)",
		"map": {
			"T1": "Db7",
			"T2": "Ab6",
			"T3": "F6",
			"T4": "Db6",
			"T5": "Ab5",
			"T6": "F5",
			"T7": "Db5",
			"T8": "Ab4",
			"T9": "F4",
			"T10": "Db4",
			"T11": "Ab3",
			"T12": "F3",
			"T13": "Db3",
			"T14": "Ab2",
			"T15": "F2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A (Major 7)",
		"map": {
			"T1": "C6",
			"T2": "Ab5",
			"T3": "F5",
			"T4": "Db5",
			"T5": "C5",
			"T6": "Ab4",
			"T7": "F4",
			"T8": "Db4",
			"T9": "C4",
			"T10": "Ab3",
			"T11": "F3",
			"T12": "Db3",
			"T13": "C3",
			"T14": "Ab2",
			"T15": "F2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A (minor)",
		"map": {
			"T1": "Db7",
			"T2": "Ab6",
			"T3": "E6",
			"T4": "Db6",
			"T5": "Ab5",
			"T6": "E5",
			"T7": "Db5",
			"T8": "Ab4",
			"T9": "E4",
			"T10": "Db4",
			"T11": "Ab3",
			"T12": "E3",
			"T13": "Db3",
			"T14": "Ab2",
			"T15": "E2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A (minor 7)",
		"map": {
			"T1": "B5",
			"T2": "Ab5",
			"T3": "E5",
			"T4": "Db5",
			"T5": "B4",
			"T6": "Ab4",
			"T7": "E4",
			"T8": "Db4",
			"T9": "B3",
			"T10": "Ab3",
			"T11": "E3",
			"T12": "Db3",
			"T13": "B2",
			"T14": "Ab2",
			"T15": "E2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A (Suspended 2nd)",
		"map": {
			"T1": "Db7",
			"T2": "Ab6",
			"T3": "Eb6",
			"T4": "Db6",
			"T5": "Ab5",
			"T6": "Eb5",
			"T7": "Db5",
			"T8": "Ab4",
			"T9": "Eb4",
			"T10": "Db4",
			"T11": "Ab3",
			"T12": "Eb3",
			"T13": "Db3",
			"T14": "Ab2",
			"T15": "Eb2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A (Suspended 4nd)",
		"map": {
			"T1": "Db7",
			"T2": "Ab6",
			"T3": "Gb6",
			"T4": "Db6",
			"T5": "Ab5",
			"T6": "Gb5",
			"T7": "Db5",
			"T8": "Ab4",
			"T9": "Gb4",
			"T10": "Db4",
			"T11": "Ab3",
			"T12": "Gb3",
			"T13": "Db3",
			"T14": "Ab2",
			"T15": "Gb2",
			"T16": "Db2"
		}
	},
	{
		"preset": "Cord: A#/Bb (Major)",
		"map": {
			"T1": "D7",
			"T2": "A6",
			"T3": "Gb6",
			"T4": "D6",
			"T5": "A5",
			"T6": "Gb5",
			"T7": "D5",
			"T8": "A4",
			"T9": "Gb4",
			"T10": "D4",
			"T11": "A3",
			"T12": "Gb3",
			"T13": "D3",
			"T14": "A2",
			"T15": "Gb2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: A#/Bb (Major 7)",
		"map": {
			"T1": "Db6",
			"T2": "A5",
			"T3": "Gb5",
			"T4": "D5",
			"T5": "Db5",
			"T6": "A4",
			"T7": "Gb4",
			"T8": "D4",
			"T9": "Db4",
			"T10": "A3",
			"T11": "Gb3",
			"T12": "D3",
			"T13": "Db3",
			"T14": "A2",
			"T15": "Gb2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: A#/Bb (minor)",
		"map": {
			"T1": "D7",
			"T2": "A6",
			"T3": "F6",
			"T4": "D6",
			"T5": "A5",
			"T6": "F5",
			"T7": "D5",
			"T8": "A4",
			"T9": "F4",
			"T10": "D4",
			"T11": "A3",
			"T12": "F3",
			"T13": "D3",
			"T14": "A2",
			"T15": "F2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: A#/Bb (minor 7)",
		"map": {
			"T1": "C6",
			"T2": "A5",
			"T3": "F5",
			"T4": "D5",
			"T5": "C5",
			"T6": "A4",
			"T7": "F4",
			"T8": "D4",
			"T9": "C4",
			"T10": "A3",
			"T11": "F3",
			"T12": "D3",
			"T13": "C3",
			"T14": "A2",
			"T15": "F2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: A#/Bb (Suspended 2nd)",
		"map": {
			"T1": "D7",
			"T2": "A6",
			"T3": "E6",
			"T4": "D6",
			"T5": "A5",
			"T6": "E5",
			"T7": "D5",
			"T8": "A4",
			"T9": "E4",
			"T10": "D4",
			"T11": "A3",
			"T12": "E3",
			"T13": "D3",
			"T14": "A2",
			"T15": "E2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: A#/Bb (Suspended 4nd)",
		"map": {
			"T1": "D7",
			"T2": "A6",
			"T3": "G6",
			"T4": "D6",
			"T5": "A5",
			"T6": "G5",
			"T7": "D5",
			"T8": "A4",
			"T9": "G4",
			"T10": "D4",
			"T11": "A3",
			"T12": "G3",
			"T13": "D3",
			"T14": "A2",
			"T15": "G2",
			"T16": "D2"
		}
	},
	{
		"preset": "Cord: B (Major)",
		"map": {
			"T1": "Eb7",
			"T2": "Bb6",
			"T3": "G6",
			"T4": "Eb6",
			"T5": "Bb5",
			"T6": "G5",
			"T7": "Eb5",
			"T8": "Bb4",
			"T9": "G4",
			"T10": "Eb4",
			"T11": "Bb3",
			"T12": "G3",
			"T13": "Eb3",
			"T14": "Bb2",
			"T15": "G2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Cord: B (Major 7)",
		"map": {
			"T1": "D6",
			"T2": "Bb5",
			"T3": "G5",
			"T4": "Eb5",
			"T5": "D5",
			"T6": "Bb4",
			"T7": "G4",
			"T8": "Eb4",
			"T9": "D4",
			"T10": "Bb3",
			"T11": "G3",
			"T12": "Eb3",
			"T13": "D3",
			"T14": "Bb2",
			"T15": "G2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Cord: B (minor)",
		"map": {
			"T1": "Eb7",
			"T2": "Bb6",
			"T3": "Gb6",
			"T4": "Eb6",
			"T5": "Bb5",
			"T6": "Gb5",
			"T7": "Eb5",
			"T8": "Bb4",
			"T9": "Gb4",
			"T10": "Eb4",
			"T11": "Bb3",
			"T12": "Gb3",
			"T13": "Eb3",
			"T14": "Bb2",
			"T15": "Gb2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Cord: B (minor 7)",
		"map": {
			"T1": "Db6",
			"T2": "Bb5",
			"T3": "Gb5",
			"T4": "Eb5",
			"T5": "Db5",
			"T6": "Bb4",
			"T7": "Gb4",
			"T8": "Eb4",
			"T9": "Db4",
			"T10": "Bb3",
			"T11": "Gb3",
			"T12": "Eb3",
			"T13": "Db3",
			"T14": "Bb2",
			"T15": "Gb2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Cord: B (Suspended 2nd)",
		"map": {
			"T1": "Eb7",
			"T2": "Bb6",
			"T3": "F6",
			"T4": "Eb6",
			"T5": "Bb5",
			"T6": "F5",
			"T7": "Eb5",
			"T8": "Bb4",
			"T9": "F4",
			"T10": "Eb4",
			"T11": "Bb3",
			"T12": "F3",
			"T13": "Eb3",
			"T14": "Bb2",
			"T15": "F2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "Cord: B (Suspended 4nd)",
		"map": {
			"T1": "Eb7",
			"T2": "Bb6",
			"T3": "Ab6",
			"T4": "Eb6",
			"T5": "Bb5",
			"T6": "Ab5",
			"T7": "Eb5",
			"T8": "Bb4",
			"T9": "Ab4",
			"T10": "Eb4",
			"T11": "Bb3",
			"T12": "Ab3",
			"T13": "Eb3",
			"T14": "Bb2",
			"T15": "Ab2",
			"T16": "Eb2"
		}
	},
	{
		"preset": "C3 Major",
		"map": {
			"T1": "Gb3",
			"T2": "E3",
			"T3": "Eb3",
			"T4": "Db3",
			"T5": "B2",
			"T6": "A2",
			"T7": "Ab2",
			"T8": "Gb2",
			"T9": "E2",
			"T10": "Eb2",
			"T11": "Db2",
			"T12": "B1",
			"T13": "A1",
			"T14": "Ab1",
			"T15": "Gb1",
			"T16": "E1"
		}
	},
	{
		"preset": "C5 Major",
		"map": {
			"T1": "Gb5",
			"T2": "E5",
			"T3": "Eb5",
			"T4": "Db5",
			"T5": "B4",
			"T6": "A4",
			"T7": "Ab4",
			"T8": "Gb4",
			"T9": "E4",
			"T10": "Eb4",
			"T11": "Db4",
			"T12": "B3",
			"T13": "A3",
			"T14": "Ab3",
			"T15": "Gb3",
			"T16": "E3"
		}
	},
	{
		"preset": "C7 Major",
		"map": {
			"T1": "Gb7",
			"T2": "E7",
			"T3": "Eb7",
			"T4": "Db7",
			"T5": "B6",
			"T6": "A6",
			"T7": "Ab6",
			"T8": "Gb6",
			"T9": "E6",
			"T10": "Eb6",
			"T11": "Db6",
			"T12": "B5",
			"T13": "A5",
			"T14": "Ab5",
			"T15": "Gb5",
			"T16": "E5"
		}
	},
	{
		"preset": "G2 Major",
		"map": {
			"T1": "Db3",
			"T2": "B2",
			"T3": "Bb2",
			"T4": "Ab2",
			"T5": "Gb2",
			"T6": "E2",
			"T7": "Eb2",
			"T8": "Db2",
			"T9": "B1",
			"T10": "Bb1",
			"T11": "Ab1",
			"T12": "Gb1",
			"T13": "E1",
			"T14": "Eb1",
			"T15": "Db1",
			"T16": "B0"
		}
	},
	{
		"preset": "G4 Major",
		"map": {
			"T1": "Db5",
			"T2": "B4",
			"T3": "Bb4",
			"T4": "Ab4",
			"T5": "Gb4",
			"T6": "E4",
			"T7": "Eb4",
			"T8": "Db4",
			"T9": "B3",
			"T10": "Bb3",
			"T11": "Ab3",
			"T12": "Gb3",
			"T13": "E3",
			"T14": "Eb3",
			"T15": "Db3",
			"T16": "B2"
		}
	},
	{
		"preset": "G6 Major",
		"map": {
			"T1": "Db7",
			"T2": "B6",
			"T3": "Bb6",
			"T4": "Ab6",
			"T5": "Gb6",
			"T6": "E6",
			"T7": "Eb6",
			"T8": "Db6",
			"T9": "B5",
			"T10": "Bb5",
			"T11": "Ab5",
			"T12": "Gb5",
			"T13": "E5",
			"T14": "Eb5",
			"T15": "Db5",
			"T16": "B4"
		}
	},
	{
		"preset": "D3 Major",
		"map": {
			"T1": "Ab3",
			"T2": "Gb3",
			"T3": "F3",
			"T4": "Eb3",
			"T5": "Db3",
			"T6": "B2",
			"T7": "Bb2",
			"T8": "Ab2",
			"T9": "Gb2",
			"T10": "F2",
			"T11": "Eb2",
			"T12": "Db2",
			"T13": "B1",
			"T14": "Bb1",
			"T15": "Ab1",
			"T16": "Gb1"
		}
	},
	{
		"preset": "D5 Major",
		"map": {
			"T1": "Ab5",
			"T2": "Gb5",
			"T3": "F5",
			"T4": "Eb5",
			"T5": "Db5",
			"T6": "B4",
			"T7": "Bb4",
			"T8": "Ab4",
			"T9": "Gb4",
			"T10": "F4",
			"T11": "Eb4",
			"T12": "Db4",
			"T13": "B3",
			"T14": "Bb3",
			"T15": "Ab3",
			"T16": "Gb3"
		}
	},
	{
		"preset": "D7 Major",
		"map": {
			"T1": "Ab7",
			"T2": "Gb7",
			"T3": "F7",
			"T4": "Eb7",
			"T5": "Db7",
			"T6": "B6",
			"T7": "Bb6",
			"T8": "Ab6",
			"T9": "Gb6",
			"T10": "F6",
			"T11": "Eb6",
			"T12": "Db6",
			"T13": "B5",
			"T14": "Bb5",
			"T15": "Ab5",
			"T16": "Gb5"
		}
	},
	{
		"preset": "A2 Major",
		"map": {
			"T1": "Eb3",
			"T2": "Db3",
			"T3": "C3",
			"T4": "Bb2",
			"T5": "Ab2",
			"T6": "Gb2",
			"T7": "F2",
			"T8": "Eb2",
			"T9": "Db2",
			"T10": "C2",
			"T11": "Bb1",
			"T12": "Ab1",
			"T13": "Gb1",
			"T14": "F1",
			"T15": "Eb1",
			"T16": "Db1"
		}
	},
	{
		"preset": "A4 Major",
		"map": {
			"T1": "Eb5",
			"T2": "Db5",
			"T3": "C5",
			"T4": "Bb4",
			"T5": "Ab4",
			"T6": "Gb4",
			"T7": "F4",
			"T8": "Eb4",
			"T9": "Db4",
			"T10": "C4",
			"T11": "Bb3",
			"T12": "Ab3",
			"T13": "Gb3",
			"T14": "F3",
			"T15": "Eb3",
			"T16": "Db3"
		}
	},
	{
		"preset": "A6 Major",
		"map": {
			"T1": "Eb7",
			"T2": "Db7",
			"T3": "C7",
			"T4": "Bb6",
			"T5": "Ab6",
			"T6": "Gb6",
			"T7": "F6",
			"T8": "Eb6",
			"T9": "Db6",
			"T10": "C6",
			"T11": "Bb5",
			"T12": "Ab5",
			"T13": "Gb5",
			"T14": "F5",
			"T15": "Eb5",
			"T16": "Db5"
		}
	},
	{
		"preset": "E3 Major",
		"map": {
			"T1": "Bb3",
			"T2": "Ab3",
			"T3": "G3",
			"T4": "F3",
			"T5": "Eb3",
			"T6": "Db3",
			"T7": "C3",
			"T8": "Bb2",
			"T9": "Ab2",
			"T10": "G2",
			"T11": "F2",
			"T12": "Eb2",
			"T13": "Db2",
			"T14": "C2",
			"T15": "Bb1",
			"T16": "Ab1"
		}
	},
	{
		"preset": "E5 Major",
		"map": {
			"T1": "Bb5",
			"T2": "Ab5",
			"T3": "G5",
			"T4": "F5",
			"T5": "Eb5",
			"T6": "Db5",
			"T7": "C5",
			"T8": "Bb4",
			"T9": "Ab4",
			"T10": "G4",
			"T11": "F4",
			"T12": "Eb4",
			"T13": "Db4",
			"T14": "C4",
			"T15": "Bb3",
			"T16": "Ab3"
		}
	},
	{
		"preset": "E7 Major",
		"map": {
			"T1": "Bb7",
			"T2": "Ab7",
			"T3": "G7",
			"T4": "F7",
			"T5": "Eb7",
			"T6": "Db7",
			"T7": "C7",
			"T8": "Bb6",
			"T9": "Ab6",
			"T10": "G6",
			"T11": "F6",
			"T12": "Eb6",
			"T13": "Db6",
			"T14": "C6",
			"T15": "Bb5",
			"T16": "Ab5"
		}
	},
	{
		"preset": "B2 Major",
		"map": {
			"T1": "F3",
			"T2": "Eb3",
			"T3": "D3",
			"T4": "C3",
			"T5": "Bb2",
			"T6": "Ab2",
			"T7": "G2",
			"T8": "F2",
			"T9": "Eb2",
			"T10": "D2",
			"T11": "C2",
			"T12": "Bb1",
			"T13": "Ab1",
			"T14": "G1",
			"T15": "F1",
			"T16": "Eb1"
		}
	},
	{
		"preset": "B4 Major",
		"map": {
			"T1": "F5",
			"T2": "Eb5",
			"T3": "D5",
			"T4": "C5",
			"T5": "Bb4",
			"T6": "Ab4",
			"T7": "G4",
			"T8": "F4",
			"T9": "Eb4",
			"T10": "D4",
			"T11": "C4",
			"T12": "Bb3",
			"T13": "Ab3",
			"T14": "G3",
			"T15": "F3",
			"T16": "Eb3"
		}
	},
	{
		"preset": "B6 Major",
		"map": {
			"T1": "F7",
			"T2": "Eb7",
			"T3": "D7",
			"T4": "C7",
			"T5": "Bb6",
			"T6": "Ab6",
			"T7": "G6",
			"T8": "F6",
			"T9": "Eb6",
			"T10": "D6",
			"T11": "C6",
			"T12": "Bb5",
			"T13": "Ab5",
			"T14": "G5",
			"T15": "F5",
			"T16": "Eb5"
		}
	},
	{
		"preset": "F#2/Gb2 Major",
		"map": {
			"T1": "C3",
			"T2": "Bb2",
			"T3": "A2",
			"T4": "G2",
			"T5": "F2",
			"T6": "Eb2",
			"T7": "D2",
			"T8": "C2",
			"T9": "Bb1",
			"T10": "A1",
			"T11": "G1",
			"T12": "F1",
			"T13": "Eb1",
			"T14": "D1",
			"T15": "C1",
			"T16": "Bb0"
		}
	},
	{
		"preset": "F#4/Gb4 Major",
		"map": {
			"T1": "C5",
			"T2": "Bb4",
			"T3": "A4",
			"T4": "G4",
			"T5": "F4",
			"T6": "Eb4",
			"T7": "D4",
			"T8": "C4",
			"T9": "Bb3",
			"T10": "A3",
			"T11": "G3",
			"T12": "F3",
			"T13": "Eb3",
			"T14": "D3",
			"T15": "C3",
			"T16": "Bb2"
		}
	},
	{
		"preset": "F#6/Gb6 Major",
		"map": {
			"T1": "C7",
			"T2": "Bb6",
			"T3": "A6",
			"T4": "G6",
			"T5": "F6",
			"T6": "Eb6",
			"T7": "D6",
			"T8": "C6",
			"T9": "Bb5",
			"T10": "A5",
			"T11": "G5",
			"T12": "F5",
			"T13": "Eb5",
			"T14": "D5",
			"T15": "C5",
			"T16": "Bb4"
		}
	},
	{
		"preset": "F2 Major",
		"map": {
			"T1": "B2",
			"T2": "A2",
			"T3": "Ab2",
			"T4": "Gb2",
			"T5": "E2",
			"T6": "D2",
			"T7": "Db2",
			"T8": "B1",
			"T9": "A1",
			"T10": "Ab1",
			"T11": "Gb1",
			"T12": "E1",
			"T13": "D1",
			"T14": "Db1",
			"T15": "B0",
			"T16": "A0"
		}
	},
	{
		"preset": "F4 Major",
		"map": {
			"T1": "B4",
			"T2": "A4",
			"T3": "Ab4",
			"T4": "Gb4",
			"T5": "E4",
			"T6": "D4",
			"T7": "Db4",
			"T8": "B3",
			"T9": "A3",
			"T10": "Ab3",
			"T11": "Gb3",
			"T12": "E3",
			"T13": "D3",
			"T14": "Db3",
			"T15": "B2",
			"T16": "A2"
		}
	},
	{
		"preset": "F6 Major",
		"map": {
			"T1": "B6",
			"T2": "A6",
			"T3": "Ab6",
			"T4": "Gb6",
			"T5": "E6",
			"T6": "D6",
			"T7": "Db6",
			"T8": "B5",
			"T9": "A5",
			"T10": "Ab5",
			"T11": "Gb5",
			"T12": "E5",
			"T13": "D5",
			"T14": "Db5",
			"T15": "B4",
			"T16": "A4"
		}
	},
	{
		"preset": "A#2/Bb2 Major",
		"map": {
			"T1": "E3",
			"T2": "D3",
			"T3": "Db3",
			"T4": "B2",
			"T5": "A2",
			"T6": "G2",
			"T7": "Gb2",
			"T8": "E2",
			"T9": "D2",
			"T10": "Db2",
			"T11": "B1",
			"T12": "A1",
			"T13": "G1",
			"T14": "Gb1",
			"T15": "E1",
			"T16": "D1"
		}
	},
	{
		"preset": "A#4/Bb4 Major",
		"map": {
			"T1": "E5",
			"T2": "D5",
			"T3": "Db5",
			"T4": "B4",
			"T5": "A4",
			"T6": "G4",
			"T7": "Gb4",
			"T8": "E4",
			"T9": "D4",
			"T10": "Db4",
			"T11": "B3",
			"T12": "A3",
			"T13": "G3",
			"T14": "Gb3",
			"T15": "E3",
			"T16": "D3"
		}
	},
	{
		"preset": "A#6/Bb6 Major",
		"map": {
			"T1": "E7",
			"T2": "D7",
			"T3": "Db7",
			"T4": "B6",
			"T5": "A6",
			"T6": "G6",
			"T7": "Gb6",
			"T8": "E6",
			"T9": "D6",
			"T10": "Db6",
			"T11": "B5",
			"T12": "A5",
			"T13": "G5",
			"T14": "Gb5",
			"T15": "E5",
			"T16": "D5"
		}
	},
	{
		"preset": "D#3/Eb3 Major",
		"map": {
			"T1": "A3",
			"T2": "G3",
			"T3": "Gb3",
			"T4": "E3",
			"T5": "D3",
			"T6": "C3",
			"T7": "B2",
			"T8": "A2",
			"T9": "G2",
			"T10": "Gb2",
			"T11": "E2",
			"T12": "D2",
			"T13": "C2",
			"T14": "B1",
			"T15": "A1",
			"T16": "G1"
		}
	},
	{
		"preset": "D#5/Eb5 Major",
		"map": {
			"T1": "A5",
			"T2": "G5",
			"T3": "Gb5",
			"T4": "E5",
			"T5": "D5",
			"T6": "C5",
			"T7": "B4",
			"T8": "A4",
			"T9": "G4",
			"T10": "Gb4",
			"T11": "E4",
			"T12": "D4",
			"T13": "C4",
			"T14": "B3",
			"T15": "A3",
			"T16": "G3"
		}
	},
	{
		"preset": "D#7/Eb7 Major",
		"map": {
			"T1": "A7",
			"T2": "G7",
			"T3": "Gb7",
			"T4": "E7",
			"T5": "D7",
			"T6": "C7",
			"T7": "B6",
			"T8": "A6",
			"T9": "G6",
			"T10": "Gb6",
			"T11": "E6",
			"T12": "D6",
			"T13": "C6",
			"T14": "B5",
			"T15": "A5",
			"T16": "G5"
		}
	},
	{
		"preset": "G#2/Ab2 Major",
		"map": {
			"T1": "D3",
			"T2": "C3",
			"T3": "B2",
			"T4": "A2",
			"T5": "G2",
			"T6": "F2",
			"T7": "E2",
			"T8": "D2",
			"T9": "C2",
			"T10": "B1",
			"T11": "A1",
			"T12": "G1",
			"T13": "F1",
			"T14": "E1",
			"T15": "D1",
			"T16": "C1"
		}
	},
	{
		"preset": "G#4/Ab4 Major",
		"map": {
			"T1": "D5",
			"T2": "C5",
			"T3": "B4",
			"T4": "A4",
			"T5": "G4",
			"T6": "F4",
			"T7": "E4",
			"T8": "D4",
			"T9": "C4",
			"T10": "B3",
			"T11": "A3",
			"T12": "G3",
			"T13": "F3",
			"T14": "E3",
			"T15": "D3",
			"T16": "C3"
		}
	},
	{
		"preset": "G#6/Ab6 Major",
		"map": {
			"T1": "D7",
			"T2": "C7",
			"T3": "B6",
			"T4": "A6",
			"T5": "G6",
			"T6": "F6",
			"T7": "E6",
			"T8": "D6",
			"T9": "C6",
			"T10": "B5",
			"T11": "A5",
			"T12": "G5",
			"T13": "F5",
			"T14": "E5",
			"T15": "D5",
			"T16": "C5"
		}
	},
	{
		"preset": "C#5/Db5 Major",
		"map": {
			"T1": "G3",
			"T2": "F3",
			"T3": "E3",
			"T4": "D3",
			"T5": "C3",
			"T6": "Bb2",
			"T7": "A2",
			"T8": "G2",
			"T9": "F2",
			"T10": "E2",
			"T11": "D2",
			"T12": "C2",
			"T13": "Bb1",
			"T14": "A1",
			"T15": "G1",
			"T16": "F1"
		}
	},
	{
		"preset": "C#5/Db5 Major",
		"map": {
			"T1": "G5",
			"T2": "F5",
			"T3": "E5",
			"T4": "D5",
			"T5": "C5",
			"T6": "Bb4",
			"T7": "A4",
			"T8": "G4",
			"T9": "F4",
			"T10": "E4",
			"T11": "D4",
			"T12": "C4",
			"T13": "Bb3",
			"T14": "A3",
			"T15": "G3",
			"T16": "F3"
		}
	},
	{
		"preset": "C#7/Db7 Major",
		"map": {
			"T1": "G7",
			"T2": "F7",
			"T3": "E7",
			"T4": "D7",
			"T5": "C7",
			"T6": "Bb6",
			"T7": "A6",
			"T8": "G6",
			"T9": "F6",
			"T10": "E6",
			"T11": "D6",
			"T12": "C6",
			"T13": "Bb5",
			"T14": "A5",
			"T15": "G5",
			"T16": "F5"
		}
	},
	{
		"preset": "C3 minor",
		"map": {
			"T1": "Gb3",
			"T2": "E3",
			"T3": "D3",
			"T4": "C3",
			"T5": "B2",
			"T6": "A2",
			"T7": "G2",
			"T8": "Gb2",
			"T9": "E2",
			"T10": "D2",
			"T11": "C2",
			"T12": "B1",
			"T13": "A1",
			"T14": "G1",
			"T15": "Gb1",
			"T16": "E1"
		}
	},
	{
		"preset": "C5 minor",
		"map": {
			"T1": "Gb5",
			"T2": "E5",
			"T3": "D5",
			"T4": "C5",
			"T5": "B4",
			"T6": "A4",
			"T7": "G4",
			"T8": "Gb4",
			"T9": "E4",
			"T10": "D4",
			"T11": "C4",
			"T12": "B3",
			"T13": "A3",
			"T14": "G3",
			"T15": "Gb3",
			"T16": "E3"
		}
	},
	{
		"preset": "C7 minor",
		"map": {
			"T1": "Gb7",
			"T2": "E7",
			"T3": "D7",
			"T4": "C7",
			"T5": "B6",
			"T6": "A6",
			"T7": "G6",
			"T8": "Gb6",
			"T9": "E6",
			"T10": "D6",
			"T11": "C6",
			"T12": "B5",
			"T13": "A5",
			"T14": "G5",
			"T15": "Gb5",
			"T16": "E5"
		}
	},
	{
		"preset": "G2 minor",
		"map": {
			"T1": "Db3",
			"T2": "B2",
			"T3": "A2",
			"T4": "G2",
			"T5": "Gb2",
			"T6": "E2",
			"T7": "D2",
			"T8": "Db2",
			"T9": "B1",
			"T10": "A1",
			"T11": "G1",
			"T12": "Gb1",
			"T13": "E1",
			"T14": "D1",
			"T15": "Db1",
			"T16": "B0"
		}
	},
	{
		"preset": "G4 minor",
		"map": {
			"T1": "Db5",
			"T2": "B4",
			"T3": "A4",
			"T4": "G4",
			"T5": "Gb4",
			"T6": "E4",
			"T7": "D4",
			"T8": "Db4",
			"T9": "B3",
			"T10": "A3",
			"T11": "G3",
			"T12": "Gb3",
			"T13": "E3",
			"T14": "D3",
			"T15": "Db3",
			"T16": "B2"
		}
	},
	{
		"preset": "G6 minor",
		"map": {
			"T1": "Db7",
			"T2": "B6",
			"T3": "A6",
			"T4": "G6",
			"T5": "Gb6",
			"T6": "E6",
			"T7": "D6",
			"T8": "Db6",
			"T9": "B5",
			"T10": "A5",
			"T11": "G5",
			"T12": "Gb5",
			"T13": "E5",
			"T14": "D5",
			"T15": "Db5",
			"T16": "B4"
		}
	},
	{
		"preset": "D3 minor",
		"map": {
			"T1": "Ab3",
			"T2": "Gb3",
			"T3": "E3",
			"T4": "D3",
			"T5": "Db3",
			"T6": "B2",
			"T7": "A2",
			"T8": "Ab2",
			"T9": "Gb2",
			"T10": "E2",
			"T11": "D2",
			"T12": "Db2",
			"T13": "B1",
			"T14": "A1",
			"T15": "Ab1",
			"T16": "Gb1"
		}
	},
	{
		"preset": "D5 minor",
		"map": {
			"T1": "Ab5",
			"T2": "Gb5",
			"T3": "E5",
			"T4": "D5",
			"T5": "Db5",
			"T6": "B4",
			"T7": "A4",
			"T8": "Ab4",
			"T9": "Gb4",
			"T10": "E4",
			"T11": "D4",
			"T12": "Db4",
			"T13": "B3",
			"T14": "A3",
			"T15": "Ab3",
			"T16": "Gb3"
		}
	},
	{
		"preset": "D7 minor",
		"map": {
			"T1": "Ab7",
			"T2": "Gb7",
			"T3": "E7",
			"T4": "D7",
			"T5": "Db7",
			"T6": "B6",
			"T7": "A6",
			"T8": "Ab6",
			"T9": "Gb6",
			"T10": "E6",
			"T11": "D6",
			"T12": "Db6",
			"T13": "B5",
			"T14": "A5",
			"T15": "Ab5",
			"T16": "Gb5"
		}
	},
	{
		"preset": "A2 minor",
		"map": {
			"T1": "Eb3",
			"T2": "Db3",
			"T3": "B2",
			"T4": "A2",
			"T5": "Ab2",
			"T6": "Gb2",
			"T7": "E2",
			"T8": "Eb2",
			"T9": "Db2",
			"T10": "B1",
			"T11": "A1",
			"T12": "Ab1",
			"T13": "Gb1",
			"T14": "E1",
			"T15": "Eb1",
			"T16": "Db1"
		}
	},
	{
		"preset": "A4 minor",
		"map": {
			"T1": "Eb5",
			"T2": "Db5",
			"T3": "B4",
			"T4": "A4",
			"T5": "Ab4",
			"T6": "Gb4",
			"T7": "E4",
			"T8": "Eb4",
			"T9": "Db4",
			"T10": "B3",
			"T11": "A3",
			"T12": "Ab3",
			"T13": "Gb3",
			"T14": "E3",
			"T15": "Eb3",
			"T16": "Db3"
		}
	},
	{
		"preset": "A6 minor",
		"map": {
			"T1": "Eb7",
			"T2": "Db7",
			"T3": "B6",
			"T4": "A6",
			"T5": "Ab6",
			"T6": "Gb6",
			"T7": "E6",
			"T8": "Eb6",
			"T9": "Db6",
			"T10": "B5",
			"T11": "A5",
			"T12": "Ab5",
			"T13": "Gb5",
			"T14": "E5",
			"T15": "Eb5",
			"T16": "Db5"
		}
	},
	{
		"preset": "E3 minor",
		"map": {
			"T1": "Bb3",
			"T2": "Ab3",
			"T3": "Gb3",
			"T4": "E3",
			"T5": "Eb3",
			"T6": "Db3",
			"T7": "B2",
			"T8": "Bb2",
			"T9": "Ab2",
			"T10": "Gb2",
			"T11": "E2",
			"T12": "Eb2",
			"T13": "Db2",
			"T14": "B1",
			"T15": "Bb1",
			"T16": "Ab1"
		}
	},
	{
		"preset": "E5 minor",
		"map": {
			"T1": "Bb5",
			"T2": "Ab5",
			"T3": "Gb5",
			"T4": "E5",
			"T5": "Eb5",
			"T6": "Db5",
			"T7": "B4",
			"T8": "Bb4",
			"T9": "Ab4",
			"T10": "Gb4",
			"T11": "E4",
			"T12": "Eb4",
			"T13": "Db4",
			"T14": "B3",
			"T15": "Bb3",
			"T16": "Ab3"
		}
	},
	{
		"preset": "E7 minor",
		"map": {
			"T1": "Bb7",
			"T2": "Ab7",
			"T3": "Gb7",
			"T4": "E7",
			"T5": "Eb7",
			"T6": "Db7",
			"T7": "B6",
			"T8": "Bb6",
			"T9": "Ab6",
			"T10": "Gb6",
			"T11": "E6",
			"T12": "Eb6",
			"T13": "Db6",
			"T14": "B5",
			"T15": "Bb5",
			"T16": "Ab5"
		}
	},
	{
		"preset": "B2 minor",
		"map": {
			"T1": "F3",
			"T2": "Eb3",
			"T3": "Db3",
			"T4": "B2",
			"T5": "Bb2",
			"T6": "Ab2",
			"T7": "Gb2",
			"T8": "F2",
			"T9": "Eb2",
			"T10": "Db2",
			"T11": "B1",
			"T12": "Bb1",
			"T13": "Ab1",
			"T14": "Gb1",
			"T15": "F1",
			"T16": "Eb1"
		}
	},
	{
		"preset": "B4 minor",
		"map": {
			"T1": "F5",
			"T2": "Eb5",
			"T3": "Db5",
			"T4": "B4",
			"T5": "Bb4",
			"T6": "Ab4",
			"T7": "Gb4",
			"T8": "F4",
			"T9": "Eb4",
			"T10": "Db4",
			"T11": "B3",
			"T12": "Bb3",
			"T13": "Ab3",
			"T14": "Gb3",
			"T15": "F3",
			"T16": "Eb3"
		}
	},
	{
		"preset": "B6 minor",
		"map": {
			"T1": "F7",
			"T2": "Eb7",
			"T3": "Db7",
			"T4": "B6",
			"T5": "Bb6",
			"T6": "Ab6",
			"T7": "Gb6",
			"T8": "F6",
			"T9": "Eb6",
			"T10": "Db6",
			"T11": "B5",
			"T12": "Bb5",
			"T13": "Ab5",
			"T14": "Gb5",
			"T15": "F5",
			"T16": "Eb5"
		}
	},
	{
		"preset": "A#2/Bb2 minor",
		"map": {
			"T1": "E3",
			"T2": "D3",
			"T3": "C3",
			"T4": "Bb2",
			"T5": "A2",
			"T6": "G2",
			"T7": "F2",
			"T8": "E2",
			"T9": "D2",
			"T10": "C2",
			"T11": "Bb1",
			"T12": "A1",
			"T13": "G1",
			"T14": "F1",
			"T15": "E1",
			"T16": "D1"
		}
	},
	{
		"preset": "A#4/Bb4 minor",
		"map": {
			"T1": "E5",
			"T2": "D5",
			"T3": "C5",
			"T4": "Bb4",
			"T5": "A4",
			"T6": "G4",
			"T7": "F4",
			"T8": "E4",
			"T9": "D4",
			"T10": "C4",
			"T11": "Bb3",
			"T12": "A3",
			"T13": "G3",
			"T14": "F3",
			"T15": "E3",
			"T16": "D3"
		}
	},
	{
		"preset": "A#6/Bb6 minor",
		"map": {
			"T1": "E7",
			"T2": "D7",
			"T3": "C7",
			"T4": "Bb6",
			"T5": "A6",
			"T6": "G6",
			"T7": "F6",
			"T8": "E6",
			"T9": "D6",
			"T10": "C6",
			"T11": "Bb5",
			"T12": "A5",
			"T13": "G5",
			"T14": "F5",
			"T15": "E5",
			"T16": "D5"
		}
	},
	{
		"preset": "F2 minor",
		"map": {
			"T1": "B2",
			"T2": "A2",
			"T3": "G2",
			"T4": "F2",
			"T5": "E2",
			"T6": "D2",
			"T7": "C2",
			"T8": "B1",
			"T9": "A1",
			"T10": "G1",
			"T11": "F1",
			"T12": "E1",
			"T13": "D1",
			"T14": "C1",
			"T15": "B0",
			"T16": "A0"
		}
	},
	{
		"preset": "F4 minor",
		"map": {
			"T1": "B4",
			"T2": "A4",
			"T3": "G4",
			"T4": "F4",
			"T5": "E4",
			"T6": "D4",
			"T7": "C4",
			"T8": "B3",
			"T9": "A3",
			"T10": "G3",
			"T11": "F3",
			"T12": "E3",
			"T13": "D3",
			"T14": "C3",
			"T15": "B2",
			"T16": "A2"
		}
	},
	{
		"preset": "F6 minor",
		"map": {
			"T1": "B6",
			"T2": "A6",
			"T3": "G6",
			"T4": "F6",
			"T5": "E6",
			"T6": "D6",
			"T7": "C6",
			"T8": "B5",
			"T9": "A5",
			"T10": "G5",
			"T11": "F5",
			"T12": "E5",
			"T13": "D5",
			"T14": "C5",
			"T15": "B4",
			"T16": "A4"
		}
	},
	{
		"preset": "F#2/Gb2 minor",
		"map": {
			"T1": "C3",
			"T2": "Bb2",
			"T3": "Ab2",
			"T4": "Gb2",
			"T5": "F2",
			"T6": "Eb2",
			"T7": "Db2",
			"T8": "C2",
			"T9": "Bb1",
			"T10": "Ab1",
			"T11": "Gb1",
			"T12": "F1",
			"T13": "Eb1",
			"T14": "Db1",
			"T15": "C1",
			"T16": "Bb0"
		}
	},
	{
		"preset": "F#4/Gb4 minor",
		"map": {
			"T1": "C5",
			"T2": "Bb4",
			"T3": "Ab4",
			"T4": "Gb4",
			"T5": "F4",
			"T6": "Eb4",
			"T7": "Db4",
			"T8": "C4",
			"T9": "Bb3",
			"T10": "Ab3",
			"T11": "Gb3",
			"T12": "F3",
			"T13": "Eb3",
			"T14": "Db3",
			"T15": "C3",
			"T16": "Bb2"
		}
	},
	{
		"preset": "F#6/Gb6 minor",
		"map": {
			"T1": "C7",
			"T2": "Bb6",
			"T3": "Ab6",
			"T4": "Gb6",
			"T5": "F6",
			"T6": "Eb6",
			"T7": "Db6",
			"T8": "C6",
			"T9": "Bb5",
			"T10": "Ab5",
			"T11": "Gb5",
			"T12": "F5",
			"T13": "Eb5",
			"T14": "Db5",
			"T15": "C5",
			"T16": "Bb4"
		}
	},
	{
		"preset": "C#3/Db3 minor",
		"map": {
			"T1": "G3",
			"T2": "F3",
			"T3": "Eb3",
			"T4": "Db3",
			"T5": "C3",
			"T6": "Bb2",
			"T7": "Ab2",
			"T8": "G2",
			"T9": "F2",
			"T10": "Eb2",
			"T11": "Db2",
			"T12": "C2",
			"T13": "Bb1",
			"T14": "Ab1",
			"T15": "G1",
			"T16": "F1"
		}
	},
	{
		"preset": "C#5/Db5 minor",
		"map": {
			"T1": "G5",
			"T2": "F5",
			"T3": "Eb5",
			"T4": "Db5",
			"T5": "C5",
			"T6": "Bb4",
			"T7": "Ab4",
			"T8": "G4",
			"T9": "F4",
			"T10": "Eb4",
			"T11": "Db4",
			"T12": "C4",
			"T13": "Bb3",
			"T14": "Ab3",
			"T15": "G3",
			"T16": "F3"
		}
	},
	{
		"preset": "C#7/Db7 minor",
		"map": {
			"T1": "G7",
			"T2": "F7",
			"T3": "Eb7",
			"T4": "Db7",
			"T5": "C7",
			"T6": "Bb6",
			"T7": "Ab6",
			"T8": "G6",
			"T9": "F6",
			"T10": "Eb6",
			"T11": "Db6",
			"T12": "C6",
			"T13": "Bb5",
			"T14": "Ab5",
			"T15": "G5",
			"T16": "F5"
		}
	},
	{
		"preset": "G#2/Ab2 minor",
		"map": {
			"T1": "D3",
			"T2": "C3",
			"T3": "Bb2",
			"T4": "Ab2",
			"T5": "G2",
			"T6": "F2",
			"T7": "Eb2",
			"T8": "D2",
			"T9": "C2",
			"T10": "Bb1",
			"T11": "Ab1",
			"T12": "G1",
			"T13": "F1",
			"T14": "Eb1",
			"T15": "D1",
			"T16": "C1"
		}
	},
	{
		"preset": "G#4/Ab4 minor",
		"map": {
			"T1": "D5",
			"T2": "C5",
			"T3": "Bb4",
			"T4": "Ab4",
			"T5": "G4",
			"T6": "F4",
			"T7": "Eb4",
			"T8": "D4",
			"T9": "C4",
			"T10": "Bb3",
			"T11": "Ab3",
			"T12": "G3",
			"T13": "F3",
			"T14": "Eb3",
			"T15": "D3",
			"T16": "C3"
		}
	},
	{
		"preset": "G#6/Ab6 minor",
		"map": {
			"T1": "D7",
			"T2": "C7",
			"T3": "Bb6",
			"T4": "Ab6",
			"T5": "G6",
			"T6": "F6",
			"T7": "Eb6",
			"T8": "D6",
			"T9": "C6",
			"T10": "Bb5",
			"T11": "Ab5",
			"T12": "G5",
			"T13": "F5",
			"T14": "Eb5",
			"T15": "D5",
			"T16": "C5"
		}
	},
	{
		"preset": "D#3/Eb3 minor",
		"map": {
			"T1": "A3",
			"T2": "G3",
			"T3": "F3",
			"T4": "Eb3",
			"T5": "D3",
			"T6": "C3",
			"T7": "Bb2",
			"T8": "A2",
			"T9": "G2",
			"T10": "F2",
			"T11": "Eb2",
			"T12": "D2",
			"T13": "C2",
			"T14": "Bb1",
			"T15": "A1",
			"T16": "G1"
		}
	},
	{
		"preset": "D#5/Eb5 minor",
		"map": {
			"T1": "A5",
			"T2": "G5",
			"T3": "F5",
			"T4": "Eb5",
			"T5": "D5",
			"T6": "C5",
			"T7": "Bb4",
			"T8": "A4",
			"T9": "G4",
			"T10": "F4",
			"T11": "Eb4",
			"T12": "D4",
			"T13": "C4",
			"T14": "Bb3",
			"T15": "A3",
			"T16": "G3"
		}
	},
	{
		"preset": "D#7/Eb7 minor",
		"map": {
			"T1": "A7",
			"T2": "G7",
			"T3": "F7",
			"T4": "Eb7",
			"T5": "D7",
			"T6": "C7",
			"T7": "Bb6",
			"T8": "A6",
			"T9": "G6",
			"T10": "F6",
			"T11": "Eb6",
			"T12": "D6",
			"T13": "C6",
			"T14": "Bb5",
			"T15": "A5",
			"T16": "G5"
		}
	}
]
