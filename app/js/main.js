var mmcView = proxymity(document.querySelector("body"), {
	getUser: function(){
		var cookies = utils.keyValParse(document.cookie)
		if (cookies.user){
			aja()
				.url("/api/me")
				.cache(false)
				.on("2xx", function(ouo){
					momoca.user = ouo
				})
				.on("4xx", function(o3o){
					momoca.user = {}
				})
				.on("5xx", function(x_x){
					momoca.notify("Server Error. Please try again later")
				})
				.go()
		}
		else {
			momoca.user = {}
		}
	},
	notify: function(message){
		console.log(message)
	},
	rout: function(){},
	state: "/"
})
var momoca = mmcView.app
momoca.getUser()

momoca.loading = document.querySelector("#loading")
momoca.instruments = [
	{
		"name":"Accordion",
		"key":"accordion"
	},
	{
		"name":"Acoustic Bass",
		"key":"acoustic_bass"
	},
	{
		"name":"Acoustic Grand Piano",
		"key":"acoustic_grand_piano"
	},
	{
		"name":"Acoustic Guitar Nylon",
		"key":"acoustic_guitar_nylon"
	},
	{
		"name":"Acoustic Guitar Steel",
		"key":"acoustic_guitar_steel"
	},
	{
		"name":"Agogo",
		"key":"agogo"
	},
	{
		"name":"Alto Sax",
		"key":"alto_sax"
	},
	{
		"name":"Applause",
		"key":"applause"
	},
	{
		"name":"Bagpipe",
		"key":"bagpipe"
	},
	{
		"name":"Banjo",
		"key":"banjo"
	},
	{
		"name":"Baritone Sax",
		"key":"baritone_sax"
	},
	{
		"name":"Bassoon",
		"key":"bassoon"
	},
	{
		"name":"Bird Tweet",
		"key":"bird_tweet"
	},
	{
		"name":"Blown Bottle",
		"key":"blown_bottle"
	},
	{
		"name":"Brass Section",
		"key":"brass_section"
	},
	{
		"name":"Breath Noise",
		"key":"breath_noise"
	},
	{
		"name":"Bright Acoustic Piano",
		"key":"bright_acoustic_piano"
	},
	{
		"name":"Celesta",
		"key":"celesta"
	},
	{
		"name":"Cello",
		"key":"cello"
	},
	{
		"name":"Choir Aahs",
		"key":"choir_aahs"
	},
	{
		"name":"Church Organ",
		"key":"church_organ"
	},
	{
		"name":"Clarinet",
		"key":"clarinet"
	},
	{
		"name":"Clavinet",
		"key":"clavinet"
	},
	{
		"name":"Contrabass",
		"key":"contrabass"
	},
	{
		"name":"Distortion Guitar",
		"key":"distortion_guitar"
	},
	{
		"name":"Drawbar Organ",
		"key":"drawbar_organ"
	},
	{
		"name":"Dulcimer",
		"key":"dulcimer"
	},
	{
		"name":"Electric Bass Finger",
		"key":"electric_bass_finger"
	},
	{
		"name":"Electric Bass Pick",
		"key":"electric_bass_pick"
	},
	{
		"name":"Electric Grand Piano",
		"key":"electric_grand_piano"
	},
	{
		"name":"Electric Guitar Clean",
		"key":"electric_guitar_clean"
	},
	{
		"name":"Electric Guitar Jazz",
		"key":"electric_guitar_jazz"
	},
	{
		"name":"Electric Guitar Muted",
		"key":"electric_guitar_muted"
	},
	{
		"name":"Electric Piano 1",
		"key":"electric_piano_1"
	},
	{
		"name":"Electric Piano 2",
		"key":"electric_piano_2"
	},
	{
		"name":"English Horn",
		"key":"english_horn"
	},
	{
		"name":"Fiddle",
		"key":"fiddle"
	},
	{
		"name":"Flute",
		"key":"flute"
	},
	{
		"name":"French Horn",
		"key":"french_horn"
	},
	{
		"name":"Fretless Bass",
		"key":"fretless_bass"
	},
	{
		"name":"Fx 1 Rain",
		"key":"fx_1_rain"
	},
	{
		"name":"Fx 2 Soundtrack",
		"key":"fx_2_soundtrack"
	},
	{
		"name":"Fx 3 Crystal",
		"key":"fx_3_crystal"
	},
	{
		"name":"Fx 4 Atmosphere",
		"key":"fx_4_atmosphere"
	},
	{
		"name":"Fx 5 Brightness",
		"key":"fx_5_brightness"
	},
	{
		"name":"Fx 6 Goblins",
		"key":"fx_6_goblins"
	},
	{
		"name":"Fx 7 Echoes",
		"key":"fx_7_echoes"
	},
	{
		"name":"Fx 8 Scifi",
		"key":"fx_8_scifi"
	},
	{
		"name":"Glockenspiel",
		"key":"glockenspiel"
	},
	{
		"name":"Guitar Fret Noise",
		"key":"guitar_fret_noise"
	},
	{
		"name":"Guitar Harmonics",
		"key":"guitar_harmonics"
	},
	{
		"name":"Gunshot",
		"key":"gunshot"
	},
	{
		"name":"Harmonica",
		"key":"harmonica"
	},
	{
		"name":"Harpsichord",
		"key":"harpsichord"
	},
	{
		"name":"Helicopter",
		"key":"helicopter"
	},
	{
		"name":"Honkytonk Piano",
		"key":"honkytonk_piano"
	},
	{
		"name":"Kalimba",
		"key":"kalimba"
	},
	{
		"name":"Koto",
		"key":"koto"
	},
	{
		"name":"Lead 1 Square",
		"key":"lead_1_square"
	},
	{
		"name":"Lead 2 Sawtooth",
		"key":"lead_2_sawtooth"
	},
	{
		"name":"Lead 3 Calliope",
		"key":"lead_3_calliope"
	},
	{
		"name":"Lead 4 Chiff",
		"key":"lead_4_chiff"
	},
	{
		"name":"Lead 5 Charang",
		"key":"lead_5_charang"
	},
	{
		"name":"Lead 6 Voice",
		"key":"lead_6_voice"
	},
	{
		"name":"Lead 7 Fifths",
		"key":"lead_7_fifths"
	},
	{
		"name":"Lead 8 Bass _lead",
		"key":"lead_8_bass__lead"
	},
	{
		"name":"Marimba",
		"key":"marimba"
	},
	{
		"name":"Melodic Tom",
		"key":"melodic_tom"
	},
	{
		"name":"Music Box",
		"key":"music_box"
	},
	{
		"name":"Muted Trumpet",
		"key":"muted_trumpet"
	},
	{
		"name":"Oboe",
		"key":"oboe"
	},
	{
		"name":"Ocarina",
		"key":"ocarina"
	},
	{
		"name":"Orchestra Hit",
		"key":"orchestra_hit"
	},
	{
		"name":"Orchestral Harp",
		"key":"orchestral_harp"
	},
	{
		"name":"Overdriven Guitar",
		"key":"overdriven_guitar"
	},
	{
		"name":"Pad 1 New Age",
		"key":"pad_1_new_age"
	},
	{
		"name":"Pad 2 Warm",
		"key":"pad_2_warm"
	},
	{
		"name":"Pad 3 Polysynth",
		"key":"pad_3_polysynth"
	},
	{
		"name":"Pad 4 Choir",
		"key":"pad_4_choir"
	},
	{
		"name":"Pad 5 Bowed",
		"key":"pad_5_bowed"
	},
	{
		"name":"Pad 6 Metallic",
		"key":"pad_6_metallic"
	},
	{
		"name":"Pad 7 Halo",
		"key":"pad_7_halo"
	},
	{
		"name":"Pad 8 Sweep",
		"key":"pad_8_sweep"
	},
	{
		"name":"Pan Flute",
		"key":"pan_flute"
	},
	{
		"name":"Percussive Organ",
		"key":"percussive_organ"
	},
	{
		"name":"Piccolo",
		"key":"piccolo"
	},
	{
		"name":"Pizzicato Strings",
		"key":"pizzicato_strings"
	},
	{
		"name":"Recorder",
		"key":"recorder"
	},
	{
		"name":"Reed Organ",
		"key":"reed_organ"
	},
	{
		"name":"Reverse Cymbal",
		"key":"reverse_cymbal"
	},
	{
		"name":"Rock Organ",
		"key":"rock_organ"
	},
	{
		"name":"Seashore",
		"key":"seashore"
	},
	{
		"name":"Shakuhachi",
		"key":"shakuhachi"
	},
	{
		"name":"Shamisen",
		"key":"shamisen"
	},
	{
		"name":"Shanai",
		"key":"shanai"
	},
	{
		"name":"Sitar",
		"key":"sitar"
	},
	{
		"name":"Slap Bass 1",
		"key":"slap_bass_1"
	},
	{
		"name":"Slap Bass 2",
		"key":"slap_bass_2"
	},
	{
		"name":"Soprano Sax",
		"key":"soprano_sax"
	},
	{
		"name":"Steel Drums",
		"key":"steel_drums"
	},
	{
		"name":"String Ensemble 1",
		"key":"string_ensemble_1"
	},
	{
		"name":"String Ensemble 2",
		"key":"string_ensemble_2"
	},
	{
		"name":"Synth Bass 1",
		"key":"synth_bass_1"
	},
	{
		"name":"Synth Bass 2",
		"key":"synth_bass_2"
	},
	{
		"name":"Synth Brass 1",
		"key":"synth_brass_1"
	},
	{
		"name":"Synth Brass 2",
		"key":"synth_brass_2"
	},
	{
		"name":"Synth Choir",
		"key":"synth_choir"
	},
	{
		"name":"Synth Drum",
		"key":"synth_drum"
	},
	{
		"name":"Synth Strings 1",
		"key":"synth_strings_1"
	},
	{
		"name":"Synth Strings 2",
		"key":"synth_strings_2"
	},
	{
		"name":"Taiko Drum",
		"key":"taiko_drum"
	},
	{
		"name":"Tango Accordion",
		"key":"tango_accordion"
	},
	{
		"name":"Telephone Ring",
		"key":"telephone_ring"
	},
	{
		"name":"Tenor Sax",
		"key":"tenor_sax"
	},
	{
		"name":"Timpani",
		"key":"timpani"
	},
	{
		"name":"Tinkle Bell",
		"key":"tinkle_bell"
	},
	{
		"name":"Tremolo Strings",
		"key":"tremolo_strings"
	},
	{
		"name":"Trombone",
		"key":"trombone"
	},
	{
		"name":"Trumpet",
		"key":"trumpet"
	},
	{
		"name":"Tuba",
		"key":"tuba"
	},
	{
		"name":"Tubular Bells",
		"key":"tubular_bells"
	},
	{
		"name":"Vibraphone",
		"key":"vibraphone"
	},
	{
		"name":"Viola",
		"key":"viola"
	},
	{
		"name":"Violin",
		"key":"violin"
	},
	{
		"name":"Voice Oohs",
		"key":"voice_oohs"
	},
	{
		"name":"Whistle",
		"key":"whistle"
	},
	{
		"name":"Woodblock",
		"key":"woodblock"
	},
	{
		"name":"Xylophone",
		"key":"xylophone"
	}
]
