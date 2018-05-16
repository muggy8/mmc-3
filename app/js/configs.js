utils.midiWriter = require('MidiWriter') // https://www.npmjs.com/package/midi-writer-js
utils.midiPlayer = MidiPlayer // https://github.com/grimmdude/MidiPlayerJS
utils.soundfontPlayer = Soundfont // https://github.com/danigb/soundfont-player

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
    {"preset": "Music Matrix A", "map":{"T1":73,"T2":70,"T3":68,"T4":66,"T5":63,"T6":61,"T7":58,"T8":56,"T9":54,"T10":51,"T11":49,"T12":46,"T13":44,"T14":42,"T15":39,"T16":37}},
    {"preset": "Music Matrix B", "map":{"T1":75,"T2":72,"T3":70,"T4":68,"T5":65,"T6":63,"T7":60,"T8":58,"T9":56,"T10":53,"T11":51,"T12":48,"T13":46,"T14":44,"T15":41,"T16":39}},
    {"preset": "Music Matrix C", "map":{"T1":76,"T2":73,"T3":71,"T4":69,"T5":66,"T6":64,"T7":61,"T8":59,"T9":57,"T10":54,"T11":52,"T12":49,"T13":47,"T14":45,"T15":42,"T16":40}},
    {"preset": "Music Matrix D", "map":{"T1":78,"T2":75,"T3":73,"T4":71,"T5":68,"T6":66,"T7":63,"T8":61,"T9":59,"T10":56,"T11":54,"T12":51,"T13":49,"T14":47,"T15":44,"T16":42}},
    {"preset": "Music Matrix E", "map":{"T1":80,"T2":77,"T3":75,"T4":73,"T5":70,"T6":68,"T7":65,"T8":63,"T9":61,"T10":58,"T11":56,"T12":53,"T13":51,"T14":49,"T15":46,"T16":44}},
    {"preset": "Music Matrix F", "map":{"T1":81,"T2":78,"T3":76,"T4":74,"T5":71,"T6":69,"T7":66,"T8":64,"T9":62,"T10":59,"T11":57,"T12":54,"T13":52,"T14":50,"T15":47,"T16":45}},
    {"preset": "Music Matrix G", "map":{"T1":83,"T2":80,"T3":78,"T4":76,"T5":73,"T6":71,"T7":68,"T8":66,"T9":64,"T10":61,"T11":59,"T12":56,"T13":54,"T14":52,"T15":49,"T16":47}},
    {"preset": "Music Matrix G#/Ab", "map":{"T1":73,"T2":70,"T3":68,"T4":66,"T5":63,"T6":61,"T7":58,"T8":56,"T9":54,"T10":51,"T11":49,"T12":46,"T13":44,"T14":42,"T15":39,"T16":37 }},
    {"preset": "Music Matrix A#/Bb", "map":{"T1":74,"T2":71,"T3":69,"T4":67,"T5":64,"T6":62,"T7":59,"T8":57,"T9":55,"T10":52,"T11":50,"T12":47,"T13":45,"T14":43,"T15":40,"T16":38}},
    {"preset": "Music Matrix C#/Db", "map":{"T1":77,"T2":74,"T3":72,"T4":70,"T5":67,"T6":65,"T7":62,"T8":60,"T9":58,"T10":55,"T11":53,"T12":50,"T13":48,"T14":46,"T15":43,"T16":41}},
    {"preset": "Music Matrix D#/Eb", "map":{"T1":79,"T2":76,"T3":74,"T4":72,"T5":69,"T6":67,"T7":64,"T8":62,"T9":60,"T10":57,"T11":55,"T12":52,"T13":50,"T14":48,"T15":45,"T16":43}},
    {"preset": "Music Matrix F#/Gb", "map":{"T1":82,"T2":79,"T3":77,"T4":75,"T5":72,"T6":70,"T7":67,"T8":65,"T9":63,"T10":60,"T11":58,"T12":55,"T13":53,"T14":51,"T15":48,"T16":46}},

    // drum kits and stuff

    {"preset": "Drum Kit Lower Range", "map":{"T1":42,"T2":41,"T3":40,"T4":39,"T5":38,"T6":37,"T7":36,"T8":35,"T9":34,"T10":33,"T11":32,"T12":31,"T13":30,"T14":29,"T15":28,"T16":27}},
    {"preset": "Drum Kit Lower Mid Range", "map":{"T1":58,"T2":57,"T3":56,"T4":55,"T5":54,"T6":53,"T7":52,"T8":51,"T9":50,"T10":49,"T11":48,"T12":47,"T13":46,"T14":45,"T15":44,"T16":43}},
    {"preset": "Drum Kit Upper Mid Range", "map":{"T1":74,"T2":73,"T3":72,"T4":71,"T5":70,"T6":69,"T7":68,"T8":67,"T9":66,"T10":65,"T11":64,"T12":63,"T13":62,"T14":61,"T15":60,"T16":59}},
    {"preset": "Drum Kit Upper Range", "map":{"T1":87,"T2":86,"T3":85,"T4":84,"T5":83,"T6":82,"T7":81,"T8":80,"T9":79,"T10":78,"T11":77,"T12":76,"T13":75,"T14":74,"T15":73,"T16":72}},

    // cord presets

    {"preset": "Cord: C (Major)", "map":{"T1":100,"T2":95,"T3":92,"T4":88,"T5":83,"T6":80,"T7":76,"T8":71,"T9":68,"T10":64,"T11":59,"T12":56,"T13":52,"T14":47,"T15":44,"T16":40}},
    {"preset": "Cord: C (Major 7)", "map":{"T1":87,"T2":83,"T3":80,"T4":76,"T5":75,"T6":71,"T7":68,"T8":64,"T9":63,"T10":59,"T11":56,"T12":52,"T13":51,"T14":47,"T15":44,"T16":40}},
    {"preset": "Cord: C (minor)", "map":{"T1":100,"T2":95,"T3":91,"T4":88,"T5":83,"T6":79,"T7":76,"T8":71,"T9":67,"T10":64,"T11":59,"T12":55,"T13":52,"T14":47,"T15":43,"T16":40}},
    {"preset": "Cord: C (minor 7)", "map":{"T1":86,"T2":83,"T3":79,"T4":76,"T5":74,"T6":71,"T7":67,"T8":64,"T9":62,"T10":59,"T11":55,"T12":52,"T13":50,"T14":47,"T15":43,"T16":40}},
    {"preset": "Cord: C (Suspended 2nd)", "map":{"T1":100,"T2":95,"T3":90,"T4":88,"T5":83,"T6":78,"T7":76,"T8":71,"T9":66,"T10":64,"T11":59,"T12":54,"T13":52,"T14":47,"T15":42,"T16":40}},
    {"preset": "Cord: C (Suspended 4nd)", "map":{"T1":100,"T2":95,"T3":93,"T4":88,"T5":83,"T6":81,"T7":76,"T8":71,"T9":69,"T10":64,"T11":59,"T12":57,"T13":52,"T14":47,"T15":45,"T16":40}},

    {"preset": "Cord: C#/Db (Major)", "map":{"T1":101,"T2":96,"T3":93,"T4":89,"T5":84,"T6":81,"T7":77,"T8":72,"T9":69,"T10":65,"T11":60,"T12":57,"T13":53,"T14":48,"T15":45,"T16":41}},
    {"preset": "Cord: C#/Db (Major 7)", "map":{"T1":88,"T2":84,"T3":81,"T4":77,"T5":76,"T6":72,"T7":69,"T8":65,"T9":64,"T10":60,"T11":57,"T12":53,"T13":52,"T14":48,"T15":45,"T16":41}},
    {"preset": "Cord: C#/Db (minor)", "map":{"T1":101,"T2":96,"T3":92,"T4":89,"T5":84,"T6":80,"T7":77,"T8":72,"T9":68,"T10":65,"T11":60,"T12":56,"T13":53,"T14":48,"T15":44,"T16":41}},
    {"preset": "Cord: C#/Db (minor 7)", "map":{"T1":87,"T2":84,"T3":80,"T4":77,"T5":75,"T6":72,"T7":68,"T8":65,"T9":63,"T10":60,"T11":56,"T12":53,"T13":51,"T14":48,"T15":44,"T16":41}},
    {"preset": "Cord: C#/Db (Suspended 2nd)", "map":{"T1":101,"T2":96,"T3":91,"T4":89,"T5":84,"T6":79,"T7":77,"T8":72,"T9":67,"T10":65,"T11":60,"T12":55,"T13":53,"T14":48,"T15":43,"T16":41}},
    {"preset": "Cord: C#/Db (Suspended 4nd)", "map":{"T1":101,"T2":96,"T3":94,"T4":89,"T5":84,"T6":82,"T7":77,"T8":72,"T9":70,"T10":65,"T11":60,"T12":58,"T13":53,"T14":48,"T15":46,"T16":41}},

    {"preset": "Cord: D (Major)", "map":{"T1":102,"T2":97,"T3":94,"T4":90,"T5":85,"T6":82,"T7":78,"T8":73,"T9":70,"T10":66,"T11":61,"T12":58,"T13":54,"T14":49,"T15":46,"T16":42}},
    {"preset": "Cord: D (Major 7)", "map":{"T1":89,"T2":85,"T3":82,"T4":78,"T5":77,"T6":73,"T7":70,"T8":66,"T9":65,"T10":61,"T11":58,"T12":54,"T13":53,"T14":49,"T15":46,"T16":42}},
    {"preset": "Cord: D (minor)", "map":{"T1":102,"T2":97,"T3":93,"T4":90,"T5":85,"T6":81,"T7":78,"T8":73,"T9":69,"T10":66,"T11":61,"T12":57,"T13":54,"T14":49,"T15":45,"T16":42}},
    {"preset": "Cord: D (minor 7)", "map":{"T1":88,"T2":85,"T3":81,"T4":78,"T5":76,"T6":73,"T7":69,"T8":66,"T9":64,"T10":61,"T11":57,"T12":54,"T13":52,"T14":49,"T15":45,"T16":42}},
    {"preset": "Cord: D (Suspended 2nd)", "map":{"T1":102,"T2":97,"T3":92,"T4":90,"T5":85,"T6":80,"T7":78,"T8":73,"T9":68,"T10":66,"T11":61,"T12":56,"T13":54,"T14":49,"T15":44,"T16":42}},
    {"preset": "Cord: D (Suspended 4nd)", "map":{"T1":102,"T2":97,"T3":95,"T4":90,"T5":85,"T6":83,"T7":78,"T8":73,"T9":71,"T10":66,"T11":61,"T12":59,"T13":54,"T14":49,"T15":47,"T16":42}},

    {"preset": "Cord: D#/Eb (Major)", "map":{"T1":103,"T2":98,"T3":95,"T4":91,"T5":86,"T6":83,"T7":79,"T8":74,"T9":71,"T10":67,"T11":62,"T12":59,"T13":55,"T14":50,"T15":47,"T16":43}},
    {"preset": "Cord: D#/Eb (Major 7)", "map":{"T1":90,"T2":86,"T3":83,"T4":79,"T5":78,"T6":74,"T7":71,"T8":67,"T9":66,"T10":62,"T11":59,"T12":55,"T13":54,"T14":50,"T15":47,"T16":43}},
    {"preset": "Cord: D#/Eb (minor)", "map":{"T1":103,"T2":98,"T3":94,"T4":91,"T5":86,"T6":82,"T7":79,"T8":74,"T9":70,"T10":67,"T11":62,"T12":58,"T13":55,"T14":50,"T15":46,"T16":43}},
    {"preset": "Cord: D#/Eb (minor 7)", "map":{"T1":89,"T2":86,"T3":82,"T4":79,"T5":77,"T6":74,"T7":70,"T8":67,"T9":65,"T10":62,"T11":58,"T12":55,"T13":53,"T14":50,"T15":46,"T16":43}},
    {"preset": "Cord: D#/Eb (Suspended 2nd)", "map":{"T1":103,"T2":98,"T3":93,"T4":91,"T5":86,"T6":81,"T7":79,"T8":74,"T9":69,"T10":67,"T11":62,"T12":57,"T13":55,"T14":50,"T15":45,"T16":43}},
    {"preset": "Cord: D#/Eb (Suspended 4nd)", "map":{"T1":103,"T2":98,"T3":96,"T4":91,"T5":86,"T6":84,"T7":79,"T8":74,"T9":72,"T10":67,"T11":62,"T12":60,"T13":55,"T14":50,"T15":48,"T16":43}},

    {"preset": "Cord: E (Major)", "map":{"T1":92,"T2":87,"T3":84,"T4":80,"T5":75,"T6":72,"T7":68,"T8":63,"T9":60,"T10":56,"T11":51,"T12":48,"T13":44,"T14":39,"T15":36,"T16":32}},
    {"preset": "Cord: E (Major 7)", "map":{"T1":79,"T2":75,"T3":72,"T4":68,"T5":67,"T6":63,"T7":60,"T8":56,"T9":55,"T10":51,"T11":48,"T12":44,"T13":43,"T14":39,"T15":36,"T16":32}},
    {"preset": "Cord: E (minor)", "map":{"T1":92,"T2":87,"T3":83,"T4":80,"T5":75,"T6":71,"T7":68,"T8":63,"T9":59,"T10":56,"T11":51,"T12":47,"T13":44,"T14":39,"T15":35,"T16":32}},
    {"preset": "Cord: E (minor 7)", "map":{"T1":78,"T2":75,"T3":71,"T4":68,"T5":66,"T6":63,"T7":59,"T8":56,"T9":54,"T10":51,"T11":47,"T12":44,"T13":42,"T14":39,"T15":35,"T16":32}},
    {"preset": "Cord: E (Suspended 2nd)", "map":{"T1":92,"T2":87,"T3":82,"T4":80,"T5":75,"T6":70,"T7":68,"T8":63,"T9":58,"T10":56,"T11":51,"T12":46,"T13":44,"T14":39,"T15":34,"T16":32}},
    {"preset": "Cord: E (Suspended 4nd)", "map":{"T1":92,"T2":87,"T3":85,"T4":80,"T5":75,"T6":73,"T7":68,"T8":63,"T9":61,"T10":56,"T11":51,"T12":49,"T13":44,"T14":39,"T15":37,"T16":32}},

    {"preset": "Cord: F (Major)", "map":{"T1":93,"T2":88,"T3":85,"T4":81,"T5":76,"T6":73,"T7":69,"T8":64,"T9":61,"T10":57,"T11":52,"T12":49,"T13":45,"T14":40,"T15":37,"T16":33}},
    {"preset": "Cord: F (Major 7)", "map":{"T1":80,"T2":76,"T3":73,"T4":69,"T5":68,"T6":64,"T7":61,"T8":57,"T9":56,"T10":52,"T11":49,"T12":45,"T13":44,"T14":40,"T15":37,"T16":33}},
    {"preset": "Cord: F (minor)", "map":{"T1":93,"T2":88,"T3":84,"T4":81,"T5":76,"T6":72,"T7":69,"T8":64,"T9":60,"T10":57,"T11":52,"T12":48,"T13":45,"T14":40,"T15":36,"T16":33}},
    {"preset": "Cord: F (minor 7)", "map":{"T1":79,"T2":76,"T3":72,"T4":69,"T5":67,"T6":64,"T7":60,"T8":57,"T9":55,"T10":52,"T11":48,"T12":45,"T13":43,"T14":40,"T15":36,"T16":33}},
    {"preset": "Cord: F (Suspended 2nd)", "map":{"T1":93,"T2":88,"T3":83,"T4":81,"T5":76,"T6":71,"T7":69,"T8":64,"T9":59,"T10":57,"T11":52,"T12":47,"T13":45,"T14":40,"T15":35,"T16":33}},
    {"preset": "Cord: F (Suspended 4nd)", "map":{"T1":93,"T2":88,"T3":86,"T4":81,"T5":76,"T6":74,"T7":69,"T8":64,"T9":62,"T10":57,"T11":52,"T12":50,"T13":45,"T14":40,"T15":38,"T16":33}},

    {"preset": "Cord: F#/Gb (Major)", "map":{"T1":94,"T2":89,"T3":86,"T4":82,"T5":77,"T6":74,"T7":70,"T8":65,"T9":62,"T10":58,"T11":53,"T12":50,"T13":46,"T14":41,"T15":38,"T16":34}},
    {"preset": "Cord: F#/Gb (Major 7)", "map":{"T1":81,"T2":77,"T3":74,"T4":70,"T5":69,"T6":65,"T7":62,"T8":58,"T9":57,"T10":53,"T11":50,"T12":46,"T13":45,"T14":41,"T15":38,"T16":34}},
    {"preset": "Cord: F#/Gb (minor)", "map":{"T1":94,"T2":89,"T3":85,"T4":82,"T5":77,"T6":73,"T7":70,"T8":65,"T9":61,"T10":58,"T11":53,"T12":49,"T13":46,"T14":41,"T15":37,"T16":34}},
    {"preset": "Cord: F#/Gb (minor 7)", "map":{"T1":80,"T2":77,"T3":73,"T4":70,"T5":68,"T6":65,"T7":61,"T8":58,"T9":56,"T10":53,"T11":49,"T12":46,"T13":44,"T14":41,"T15":37,"T16":34}},
    {"preset": "Cord: F#/Gb (Suspended 2nd)", "map":{"T1":94,"T2":89,"T3":84,"T4":82,"T5":77,"T6":72,"T7":70,"T8":65,"T9":60,"T10":58,"T11":53,"T12":48,"T13":46,"T14":41,"T15":36,"T16":34}},
    {"preset": "Cord: F#/Gb (Suspended 4nd)", "map":{"T1":94,"T2":89,"T3":87,"T4":82,"T5":77,"T6":75,"T7":70,"T8":65,"T9":63,"T10":58,"T11":53,"T12":51,"T13":46,"T14":41,"T15":39,"T16":34}},

    {"preset": "Cord: G (Major)", "map":{"T1":95,"T2":90,"T3":87,"T4":83,"T5":78,"T6":75,"T7":71,"T8":66,"T9":63,"T10":59,"T11":54,"T12":51,"T13":47,"T14":42,"T15":39,"T16":35}},
    {"preset": "Cord: G (Major 7)", "map":{"T1":82,"T2":78,"T3":75,"T4":71,"T5":70,"T6":66,"T7":63,"T8":59,"T9":58,"T10":54,"T11":51,"T12":47,"T13":46,"T14":42,"T15":39,"T16":35}},
    {"preset": "Cord: G (minor)", "map":{"T1":95,"T2":90,"T3":86,"T4":83,"T5":78,"T6":74,"T7":71,"T8":66,"T9":62,"T10":59,"T11":54,"T12":50,"T13":47,"T14":42,"T15":38,"T16":35}},
    {"preset": "Cord: G (minor 7)", "map":{"T1":81,"T2":78,"T3":74,"T4":71,"T5":69,"T6":66,"T7":62,"T8":59,"T9":57,"T10":54,"T11":50,"T12":47,"T13":45,"T14":42,"T15":38,"T16":35}},
    {"preset": "Cord: G (Suspended 2nd)", "map":{"T1":95,"T2":90,"T3":85,"T4":83,"T5":78,"T6":73,"T7":71,"T8":66,"T9":61,"T10":59,"T11":54,"T12":49,"T13":47,"T14":42,"T15":37,"T16":35}},
    {"preset": "Cord: G (Suspended 4nd)", "map":{"T1":95,"T2":90,"T3":88,"T4":83,"T5":78,"T6":76,"T7":71,"T8":66,"T9":64,"T10":59,"T11":54,"T12":52,"T13":47,"T14":42,"T15":40,"T16":35}},

    {"preset": "Cord: G#/Ab (Major)", "map":{"T1":96,"T2":91,"T3":88,"T4":84,"T5":79,"T6":76,"T7":72,"T8":67,"T9":64,"T10":60,"T11":55,"T12":52,"T13":48,"T14":43,"T15":40,"T16":36}},
    {"preset": "Cord: G#/Ab (Major 7)", "map":{"T1":83,"T2":79,"T3":76,"T4":72,"T5":71,"T6":67,"T7":64,"T8":60,"T9":59,"T10":55,"T11":52,"T12":48,"T13":47,"T14":43,"T15":40,"T16":36}},
    {"preset": "Cord: G#/Ab (minor)", "map":{"T1":96,"T2":91,"T3":87,"T4":84,"T5":79,"T6":75,"T7":72,"T8":67,"T9":63,"T10":60,"T11":55,"T12":51,"T13":48,"T14":43,"T15":39,"T16":36}},
    {"preset": "Cord: G#/Ab (minor 7)", "map":{"T1":82,"T2":79,"T3":75,"T4":72,"T5":70,"T6":67,"T7":63,"T8":60,"T9":58,"T10":55,"T11":51,"T12":48,"T13":46,"T14":43,"T15":39,"T16":36}},
    {"preset": "Cord: G#/Ab (Suspended 2nd)", "map":{"T1":96,"T2":91,"T3":86,"T4":84,"T5":79,"T6":74,"T7":72,"T8":67,"T9":62,"T10":60,"T11":55,"T12":50,"T13":48,"T14":43,"T15":38,"T16":36}},
    {"preset": "Cord: G#/Ab (Suspended 4nd)", "map":{"T1":96,"T2":91,"T3":89,"T4":84,"T5":79,"T6":77,"T7":72,"T8":67,"T9":65,"T10":60,"T11":55,"T12":53,"T13":48,"T14":43,"T15":41,"T16":36}},

    {"preset": "Cord: A (Major)", "map":{"T1":97,"T2":92,"T3":89,"T4":85,"T5":80,"T6":77,"T7":73,"T8":68,"T9":65,"T10":61,"T11":56,"T12":53,"T13":49,"T14":44,"T15":41,"T16":37}},
    {"preset": "Cord: A (Major 7)", "map":{"T1":84,"T2":80,"T3":77,"T4":73,"T5":72,"T6":68,"T7":65,"T8":61,"T9":60,"T10":56,"T11":53,"T12":49,"T13":48,"T14":44,"T15":41,"T16":37}},
    {"preset": "Cord: A (minor)", "map":{"T1":97,"T2":92,"T3":88,"T4":85,"T5":80,"T6":76,"T7":73,"T8":68,"T9":64,"T10":61,"T11":56,"T12":52,"T13":49,"T14":44,"T15":40,"T16":37}},
    {"preset": "Cord: A (minor 7)", "map":{"T1":83,"T2":80,"T3":76,"T4":73,"T5":71,"T6":68,"T7":64,"T8":61,"T9":59,"T10":56,"T11":52,"T12":49,"T13":47,"T14":44,"T15":40,"T16":37}},
    {"preset": "Cord: A (Suspended 2nd)", "map":{"T1":97,"T2":92,"T3":87,"T4":85,"T5":80,"T6":75,"T7":73,"T8":68,"T9":63,"T10":61,"T11":56,"T12":51,"T13":49,"T14":44,"T15":39,"T16":37}},
    {"preset": "Cord: A (Suspended 4nd)", "map":{"T1":97,"T2":92,"T3":90,"T4":85,"T5":80,"T6":78,"T7":73,"T8":68,"T9":66,"T10":61,"T11":56,"T12":54,"T13":49,"T14":44,"T15":42,"T16":37}},

    {"preset": "Cord: A#/Bb (Major)", "map":{"T1":98,"T2":93,"T3":90,"T4":86,"T5":81,"T6":78,"T7":74,"T8":69,"T9":66,"T10":62,"T11":57,"T12":54,"T13":50,"T14":45,"T15":42,"T16":38}},
    {"preset": "Cord: A#/Bb (Major 7)", "map":{"T1":85,"T2":81,"T3":78,"T4":74,"T5":73,"T6":69,"T7":66,"T8":62,"T9":61,"T10":57,"T11":54,"T12":50,"T13":49,"T14":45,"T15":42,"T16":38}},
    {"preset": "Cord: A#/Bb (minor)", "map":{"T1":98,"T2":93,"T3":89,"T4":86,"T5":81,"T6":77,"T7":74,"T8":69,"T9":65,"T10":62,"T11":57,"T12":53,"T13":50,"T14":45,"T15":41,"T16":38}},
    {"preset": "Cord: A#/Bb (minor 7)", "map":{"T1":84,"T2":81,"T3":77,"T4":74,"T5":72,"T6":69,"T7":65,"T8":62,"T9":60,"T10":57,"T11":53,"T12":50,"T13":48,"T14":45,"T15":41,"T16":38}},
    {"preset": "Cord: A#/Bb (Suspended 2nd)", "map":{"T1":98,"T2":93,"T3":88,"T4":86,"T5":81,"T6":76,"T7":74,"T8":69,"T9":64,"T10":62,"T11":57,"T12":52,"T13":50,"T14":45,"T15":40,"T16":38}},
    {"preset": "Cord: A#/Bb (Suspended 4nd)", "map":{"T1":98,"T2":93,"T3":91,"T4":86,"T5":81,"T6":79,"T7":74,"T8":69,"T9":67,"T10":62,"T11":57,"T12":55,"T13":50,"T14":45,"T15":43,"T16":38}},

    {"preset": "Cord: B (Major)", "map":{"T1":99,"T2":94,"T3":91,"T4":87,"T5":82,"T6":79,"T7":75,"T8":70,"T9":67,"T10":63,"T11":58,"T12":55,"T13":51,"T14":46,"T15":43,"T16":39}},
    {"preset": "Cord: B (Major 7)", "map":{"T1":86,"T2":82,"T3":79,"T4":75,"T5":74,"T6":70,"T7":67,"T8":63,"T9":62,"T10":58,"T11":55,"T12":51,"T13":50,"T14":46,"T15":43,"T16":39}},
    {"preset": "Cord: B (minor)", "map":{"T1":99,"T2":94,"T3":90,"T4":87,"T5":82,"T6":78,"T7":75,"T8":70,"T9":66,"T10":63,"T11":58,"T12":54,"T13":51,"T14":46,"T15":42,"T16":39}},
    {"preset": "Cord: B (minor 7)", "map":{"T1":85,"T2":82,"T3":78,"T4":75,"T5":73,"T6":70,"T7":66,"T8":63,"T9":61,"T10":58,"T11":54,"T12":51,"T13":49,"T14":46,"T15":42,"T16":39}},
    {"preset": "Cord: B (Suspended 2nd)", "map":{"T1":99,"T2":94,"T3":89,"T4":87,"T5":82,"T6":77,"T7":75,"T8":70,"T9":65,"T10":63,"T11":58,"T12":53,"T13":51,"T14":46,"T15":41,"T16":39}},
    {"preset": "Cord: B (Suspended 4nd)", "map":{"T1":99,"T2":94,"T3":92,"T4":87,"T5":82,"T6":80,"T7":75,"T8":70,"T9":68,"T10":63,"T11":58,"T12":56,"T13":51,"T14":46,"T15":44,"T16":39}},

    //{"preset": "Music Matrix Cm", "map":{"T1":76,"T2":72,"T3":71,"T4":69,"T5":66,"T6":64,"T7":60,"T8":59,"T9":57,"T10":54,"T11":52,"T12":48,"T13":47,"T14":45,"T15":42,"T16":40}},

    // major/minor presets

    {"preset": "C3 Major", "map":{"T1":54,"T2":52,"T3":51,"T4":49,"T5":47,"T6":45,"T7":44,"T8":42,"T9":40,"T10":39,"T11":37,"T12":35,"T13":33,"T14":32,"T15":30,"T16":28}},
    {"preset": "C5 Major", "map":{"T1":78,"T2":76,"T3":75,"T4":73,"T5":71,"T6":69,"T7":68,"T8":66,"T9":64,"T10":63,"T11":61,"T12":59,"T13":57,"T14":56,"T15":54,"T16":52}},
    {"preset": "C7 Major", "map":{"T1":102,"T2":100,"T3":99,"T4":97,"T5":95,"T6":93,"T7":92,"T8":90,"T9":88,"T10":87,"T11":85,"T12":83,"T13":81,"T14":80,"T15":78,"T16":76}},

    {"preset": "G2 Major", "map":{"T1":49,"T2":47,"T3":46,"T4":44,"T5":42,"T6":40,"T7":39,"T8":37,"T9":35,"T10":34,"T11":32,"T12":30,"T13":28,"T14":27,"T15":25,"T16":23}},
    {"preset": "G4 Major", "map":{"T1":73,"T2":71,"T3":70,"T4":68,"T5":66,"T6":64,"T7":63,"T8":61,"T9":59,"T10":58,"T11":56,"T12":54,"T13":52,"T14":51,"T15":49,"T16":47}},
    {"preset": "G6 Major", "map":{"T1":97,"T2":95,"T3":94,"T4":92,"T5":90,"T6":88,"T7":87,"T8":85,"T9":83,"T10":82,"T11":80,"T12":78,"T13":76,"T14":75,"T15":73,"T16":71}},

    {"preset": "D3 Major", "map":{"T1":56,"T2":54,"T3":53,"T4":51,"T5":49,"T6":47,"T7":46,"T8":44,"T9":42,"T10":41,"T11":39,"T12":37,"T13":35,"T14":34,"T15":32,"T16":30}},
    {"preset": "D5 Major", "map":{"T1":80,"T2":78,"T3":77,"T4":75,"T5":73,"T6":71,"T7":70,"T8":68,"T9":66,"T10":65,"T11":63,"T12":61,"T13":59,"T14":58,"T15":56,"T16":54}},
    {"preset": "D7 Major", "map":{"T1":104,"T2":102,"T3":101,"T4":99,"T5":97,"T6":95,"T7":94,"T8":92,"T9":90,"T10":89,"T11":87,"T12":85,"T13":83,"T14":82,"T15":80,"T16":78}},

    {"preset": "A2 Major", "map":{"T1":51,"T2":49,"T3":48,"T4":46,"T5":44,"T6":42,"T7":41,"T8":39,"T9":37,"T10":36,"T11":34,"T12":32,"T13":30,"T14":29,"T15":27,"T16":25}},
    {"preset": "A4 Major", "map":{"T1":75,"T2":73,"T3":72,"T4":70,"T5":68,"T6":66,"T7":65,"T8":63,"T9":61,"T10":60,"T11":58,"T12":56,"T13":54,"T14":53,"T15":51,"T16":49}},
    {"preset": "A6 Major", "map":{"T1":99,"T2":97,"T3":96,"T4":94,"T5":92,"T6":90,"T7":89,"T8":87,"T9":85,"T10":84,"T11":82,"T12":80,"T13":78,"T14":77,"T15":75,"T16":73}},

    {"preset": "E3 Major", "map":{"T1":58,"T2":56,"T3":55,"T4":53,"T5":51,"T6":49,"T7":48,"T8":46,"T9":44,"T10":43,"T11":41,"T12":39,"T13":37,"T14":36,"T15":34,"T16":32}},
    {"preset": "E5 Major", "map":{"T1":82,"T2":80,"T3":79,"T4":77,"T5":75,"T6":73,"T7":72,"T8":70,"T9":68,"T10":67,"T11":65,"T12":63,"T13":61,"T14":60,"T15":58,"T16":56}},
    {"preset": "E7 Major", "map":{"T1":106,"T2":104,"T3":103,"T4":101,"T5":99,"T6":97,"T7":96,"T8":94,"T9":92,"T10":91,"T11":89,"T12":87,"T13":85,"T14":84,"T15":82,"T16":80}},

    {"preset": "B2 Major", "map":{"T1":53,"T2":51,"T3":50,"T4":48,"T5":46,"T6":44,"T7":43,"T8":41,"T9":39,"T10":38,"T11":36,"T12":34,"T13":32,"T14":31,"T15":29,"T16":27}},
    {"preset": "B4 Major", "map":{"T1":77,"T2":75,"T3":74,"T4":72,"T5":70,"T6":68,"T7":67,"T8":65,"T9":63,"T10":62,"T11":60,"T12":58,"T13":56,"T14":55,"T15":53,"T16":51}},
    {"preset": "B6 Major", "map":{"T1":101,"T2":99,"T3":98,"T4":96,"T5":94,"T6":92,"T7":91,"T8":89,"T9":87,"T10":86,"T11":84,"T12":82,"T13":80,"T14":79,"T15":77,"T16":75}},

    {"preset": "F#2/Gb2 Major", "map":{"T1":48,"T2":46,"T3":45,"T4":43,"T5":41,"T6":39,"T7":38,"T8":36,"T9":34,"T10":33,"T11":31,"T12":29,"T13":27,"T14":26,"T15":24,"T16":22}},
    {"preset": "F#4/Gb4 Major", "map":{"T1":72,"T2":70,"T3":69,"T4":67,"T5":65,"T6":63,"T7":62,"T8":60,"T9":58,"T10":57,"T11":55,"T12":53,"T13":51,"T14":50,"T15":48,"T16":46}},
    {"preset": "F#6/Gb6 Major", "map":{"T1":96,"T2":94,"T3":93,"T4":91,"T5":89,"T6":87,"T7":86,"T8":84,"T9":82,"T10":81,"T11":79,"T12":77,"T13":75,"T14":74,"T15":72,"T16":70}},

    {"preset": "F2 Major", "map":{"T1":47,"T2":45,"T3":44,"T4":42,"T5":40,"T6":38,"T7":37,"T8":35,"T9":33,"T10":32,"T11":30,"T12":28,"T13":26,"T14":25,"T15":23,"T16":21}},
    {"preset": "F4 Major", "map":{"T1":71,"T2":69,"T3":68,"T4":66,"T5":64,"T6":62,"T7":61,"T8":59,"T9":57,"T10":56,"T11":54,"T12":52,"T13":50,"T14":49,"T15":47,"T16":45}},
    {"preset": "F6 Major", "map":{"T1":95,"T2":93,"T3":92,"T4":90,"T5":88,"T6":86,"T7":85,"T8":83,"T9":81,"T10":80,"T11":78,"T12":76,"T13":74,"T14":73,"T15":71,"T16":69}},

    {"preset": "A#2/Bb2 Major", "map":{"T1":52,"T2":50,"T3":49,"T4":47,"T5":45,"T6":43,"T7":42,"T8":40,"T9":38,"T10":37,"T11":35,"T12":33,"T13":31,"T14":30,"T15":28,"T16":26}},
    {"preset": "A#4/Bb4 Major", "map":{"T1":76,"T2":74,"T3":73,"T4":71,"T5":69,"T6":67,"T7":66,"T8":64,"T9":62,"T10":61,"T11":59,"T12":57,"T13":55,"T14":54,"T15":52,"T16":50}},
    {"preset": "A#6/Bb6 Major", "map":{"T1":100,"T2":98,"T3":97,"T4":95,"T5":93,"T6":91,"T7":90,"T8":88,"T9":86,"T10":85,"T11":83,"T12":81,"T13":79,"T14":78,"T15":76,"T16":74}},

    {"preset": "D#3/Eb3 Major", "map":{"T1":57,"T2":55,"T3":54,"T4":52,"T5":50,"T6":48,"T7":47,"T8":45,"T9":43,"T10":42,"T11":40,"T12":38,"T13":36,"T14":35,"T15":33,"T16":31}},
    {"preset": "D#5/Eb5 Major", "map":{"T1":81,"T2":79,"T3":78,"T4":76,"T5":74,"T6":72,"T7":71,"T8":69,"T9":67,"T10":66,"T11":64,"T12":62,"T13":60,"T14":59,"T15":57,"T16":55}},
    {"preset": "D#7/Eb7 Major", "map":{"T1":105,"T2":103,"T3":102,"T4":100,"T5":98,"T6":96,"T7":95,"T8":93,"T9":91,"T10":90,"T11":88,"T12":86,"T13":84,"T14":83,"T15":81,"T16":79}},

    {"preset": "G#2/Ab2 Major", "map":{"T1":50,"T2":48,"T3":47,"T4":45,"T5":43,"T6":41,"T7":40,"T8":38,"T9":36,"T10":35,"T11":33,"T12":31,"T13":29,"T14":28,"T15":26,"T16":24}},
    {"preset": "G#4/Ab4 Major", "map":{"T1":74,"T2":72,"T3":71,"T4":69,"T5":67,"T6":65,"T7":64,"T8":62,"T9":60,"T10":59,"T11":57,"T12":55,"T13":53,"T14":52,"T15":50,"T16":48}},
    {"preset": "G#6/Ab6 Major", "map":{"T1":98,"T2":96,"T3":95,"T4":93,"T5":91,"T6":89,"T7":88,"T8":86,"T9":84,"T10":83,"T11":81,"T12":79,"T13":77,"T14":76,"T15":74,"T16":72}},

    {"preset": "C#5/Db5 Major", "map":{"T1":55,"T2":53,"T3":52,"T4":50,"T5":48,"T6":46,"T7":45,"T8":43,"T9":41,"T10":40,"T11":38,"T12":36,"T13":34,"T14":33,"T15":31,"T16":29}},
    {"preset": "C#5/Db5 Major", "map":{"T1":79,"T2":77,"T3":76,"T4":74,"T5":72,"T6":70,"T7":69,"T8":67,"T9":65,"T10":64,"T11":62,"T12":60,"T13":58,"T14":57,"T15":55,"T16":53}},
    {"preset": "C#7/Db7 Major", "map":{"T1":103,"T2":101,"T3":100,"T4":98,"T5":96,"T6":94,"T7":93,"T8":91,"T9":89,"T10":88,"T11":86,"T12":84,"T13":82,"T14":81,"T15":79,"T16":77}},

    {"preset": "C3 minor", "map":{"T1":54,"T2":52,"T3":50,"T4":48,"T5":47,"T6":45,"T7":43,"T8":42,"T9":40,"T10":38,"T11":36,"T12":35,"T13":33,"T14":31,"T15":30,"T16":28}},
    {"preset": "C5 minor", "map":{"T1":78,"T2":76,"T3":74,"T4":72,"T5":71,"T6":69,"T7":67,"T8":66,"T9":64,"T10":62,"T11":60,"T12":59,"T13":57,"T14":55,"T15":54,"T16":52}},
    {"preset": "C7 minor", "map":{"T1":102,"T2":100,"T3":98,"T4":96,"T5":95,"T6":93,"T7":91,"T8":90,"T9":88,"T10":86,"T11":84,"T12":83,"T13":81,"T14":79,"T15":78,"T16":76}},

    {"preset": "G2 minor", "map":{"T1":49,"T2":47,"T3":45,"T4":43,"T5":42,"T6":40,"T7":38,"T8":37,"T9":35,"T10":33,"T11":31,"T12":30,"T13":28,"T14":26,"T15":25,"T16":23}},
    {"preset": "G4 minor", "map":{"T1":73,"T2":71,"T3":69,"T4":67,"T5":66,"T6":64,"T7":62,"T8":61,"T9":59,"T10":57,"T11":55,"T12":54,"T13":52,"T14":50,"T15":49,"T16":47}},
    {"preset": "G6 minor", "map":{"T1":97,"T2":95,"T3":93,"T4":91,"T5":90,"T6":88,"T7":86,"T8":85,"T9":83,"T10":81,"T11":79,"T12":78,"T13":76,"T14":74,"T15":73,"T16":71}},

    {"preset": "D3 minor", "map":{"T1":56,"T2":54,"T3":52,"T4":50,"T5":49,"T6":47,"T7":45,"T8":44,"T9":42,"T10":40,"T11":38,"T12":37,"T13":35,"T14":33,"T15":32,"T16":30}},
    {"preset": "D5 minor", "map":{"T1":80,"T2":78,"T3":76,"T4":74,"T5":73,"T6":71,"T7":69,"T8":68,"T9":66,"T10":64,"T11":62,"T12":61,"T13":59,"T14":57,"T15":56,"T16":54}},
    {"preset": "D7 minor", "map":{"T1":104,"T2":102,"T3":100,"T4":98,"T5":97,"T6":95,"T7":93,"T8":92,"T9":90,"T10":88,"T11":86,"T12":85,"T13":83,"T14":81,"T15":80,"T16":78}},

    {"preset": "A2 minor", "map":{"T1":51,"T2":49,"T3":47,"T4":45,"T5":44,"T6":42,"T7":40,"T8":39,"T9":37,"T10":35,"T11":33,"T12":32,"T13":30,"T14":28,"T15":27,"T16":25}},
    {"preset": "A4 minor", "map":{"T1":75,"T2":73,"T3":71,"T4":69,"T5":68,"T6":66,"T7":64,"T8":63,"T9":61,"T10":59,"T11":57,"T12":56,"T13":54,"T14":52,"T15":51,"T16":49}},
    {"preset": "A6 minor", "map":{"T1":99,"T2":97,"T3":95,"T4":93,"T5":92,"T6":90,"T7":88,"T8":87,"T9":85,"T10":83,"T11":81,"T12":80,"T13":78,"T14":76,"T15":75,"T16":73}},

    {"preset": "E3 minor", "map":{"T1":58,"T2":56,"T3":54,"T4":52,"T5":51,"T6":49,"T7":47,"T8":46,"T9":44,"T10":42,"T11":40,"T12":39,"T13":37,"T14":35,"T15":34,"T16":32}},
    {"preset": "E5 minor", "map":{"T1":82,"T2":80,"T3":78,"T4":76,"T5":75,"T6":73,"T7":71,"T8":70,"T9":68,"T10":66,"T11":64,"T12":63,"T13":61,"T14":59,"T15":58,"T16":56}},
    {"preset": "E7 minor", "map":{"T1":106,"T2":104,"T3":102,"T4":100,"T5":99,"T6":97,"T7":95,"T8":94,"T9":92,"T10":90,"T11":88,"T12":87,"T13":85,"T14":83,"T15":82,"T16":80}},

    {"preset": "B2 minor", "map":{"T1":53,"T2":51,"T3":49,"T4":47,"T5":46,"T6":44,"T7":42,"T8":41,"T9":39,"T10":37,"T11":35,"T12":34,"T13":32,"T14":30,"T15":29,"T16":27}},
    {"preset": "B4 minor", "map":{"T1":77,"T2":75,"T3":73,"T4":71,"T5":70,"T6":68,"T7":66,"T8":65,"T9":63,"T10":61,"T11":59,"T12":58,"T13":56,"T14":54,"T15":53,"T16":51}},
    {"preset": "B6 minor", "map":{"T1":101,"T2":99,"T3":97,"T4":95,"T5":94,"T6":92,"T7":90,"T8":89,"T9":87,"T10":85,"T11":83,"T12":82,"T13":80,"T14":78,"T15":77,"T16":75}},

    {"preset": "A#2/Bb2 minor", "map":{"T1":52,"T2":50,"T3":48,"T4":46,"T5":45,"T6":43,"T7":41,"T8":40,"T9":38,"T10":36,"T11":34,"T12":33,"T13":31,"T14":29,"T15":28,"T16":26}},
    {"preset": "A#4/Bb4 minor", "map":{"T1":76,"T2":74,"T3":72,"T4":70,"T5":69,"T6":67,"T7":65,"T8":64,"T9":62,"T10":60,"T11":58,"T12":57,"T13":55,"T14":53,"T15":52,"T16":50}},
    {"preset": "A#6/Bb6 minor", "map":{"T1":100,"T2":98,"T3":96,"T4":94,"T5":93,"T6":91,"T7":89,"T8":88,"T9":86,"T10":84,"T11":82,"T12":81,"T13":79,"T14":77,"T15":76,"T16":74}},

    {"preset": "F2 minor", "map":{"T1":47,"T2":45,"T3":43,"T4":41,"T5":40,"T6":38,"T7":36,"T8":35,"T9":33,"T10":31,"T11":29,"T12":28,"T13":26,"T14":24,"T15":23,"T16":21}},
    {"preset": "F4 minor", "map":{"T1":71,"T2":69,"T3":67,"T4":65,"T5":64,"T6":62,"T7":60,"T8":59,"T9":57,"T10":55,"T11":53,"T12":52,"T13":50,"T14":48,"T15":47,"T16":45}},
    {"preset": "F6 minor", "map":{"T1":95,"T2":93,"T3":91,"T4":89,"T5":88,"T6":86,"T7":84,"T8":83,"T9":81,"T10":79,"T11":77,"T12":76,"T13":74,"T14":72,"T15":71,"T16":69}},

    {"preset": "F#2/Gb2 minor", "map":{"T1":48,"T2":46,"T3":44,"T4":42,"T5":41,"T6":39,"T7":37,"T8":36,"T9":34,"T10":32,"T11":30,"T12":29,"T13":27,"T14":25,"T15":24,"T16":22}},
    {"preset": "F#4/Gb4 minor", "map":{"T1":72,"T2":70,"T3":68,"T4":66,"T5":65,"T6":63,"T7":61,"T8":60,"T9":58,"T10":56,"T11":54,"T12":53,"T13":51,"T14":49,"T15":48,"T16":46}},
    {"preset": "F#6/Gb6 minor", "map":{"T1":96,"T2":94,"T3":92,"T4":90,"T5":89,"T6":87,"T7":85,"T8":84,"T9":82,"T10":80,"T11":78,"T12":77,"T13":75,"T14":73,"T15":72,"T16":70}},

    {"preset": "C#3/Db3 minor", "map":{"T1":55,"T2":53,"T3":51,"T4":49,"T5":48,"T6":46,"T7":44,"T8":43,"T9":41,"T10":39,"T11":37,"T12":36,"T13":34,"T14":32,"T15":31,"T16":29}},
    {"preset": "C#5/Db5 minor", "map":{"T1":79,"T2":77,"T3":75,"T4":73,"T5":72,"T6":70,"T7":68,"T8":67,"T9":65,"T10":63,"T11":61,"T12":60,"T13":58,"T14":56,"T15":55,"T16":53}},
    {"preset": "C#7/Db7 minor", "map":{"T1":103,"T2":101,"T3":99,"T4":97,"T5":96,"T6":94,"T7":92,"T8":91,"T9":89,"T10":87,"T11":85,"T12":84,"T13":82,"T14":80,"T15":79,"T16":77}},

    {"preset": "G#2/Ab2 minor", "map":{"T1":50,"T2":48,"T3":46,"T4":44,"T5":43,"T6":41,"T7":39,"T8":38,"T9":36,"T10":34,"T11":32,"T12":31,"T13":29,"T14":27,"T15":26,"T16":24}},
    {"preset": "G#4/Ab4 minor", "map":{"T1":74,"T2":72,"T3":70,"T4":68,"T5":67,"T6":65,"T7":63,"T8":62,"T9":60,"T10":58,"T11":56,"T12":55,"T13":53,"T14":51,"T15":50,"T16":48}},
    {"preset": "G#6/Ab6 minor", "map":{"T1":98,"T2":96,"T3":94,"T4":92,"T5":91,"T6":89,"T7":87,"T8":86,"T9":84,"T10":82,"T11":80,"T12":79,"T13":77,"T14":75,"T15":74,"T16":72}},

    {"preset": "D#3/Eb3 minor", "map":{"T1":57,"T2":55,"T3":53,"T4":51,"T5":50,"T6":48,"T7":46,"T8":45,"T9":43,"T10":41,"T11":39,"T12":38,"T13":36,"T14":34,"T15":33,"T16":31}},
    {"preset": "D#5/Eb5 minor", "map":{"T1":81,"T2":79,"T3":77,"T4":75,"T5":74,"T6":72,"T7":70,"T8":69,"T9":67,"T10":65,"T11":63,"T12":62,"T13":60,"T14":58,"T15":57,"T16":55}},
    {"preset": "D#7/Eb7 minor", "map":{"T1":105,"T2":103,"T3":101,"T4":99,"T5":98,"T6":96,"T7":94,"T8":93,"T9":91,"T10":89,"T11":87,"T12":86,"T13":84,"T14":82,"T15":81,"T16":79}}
]

// MIDI.soundfontUrl = "/app/soundfonts/"
