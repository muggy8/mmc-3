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
				.on("4xx", function(){
					momoca.user = {}
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
		"name":"trombone",
		"key":"trombone"
	},
	{
		"name":"taiko Drum",
		"key":"taiko_drum"
	},
	{
		"name":"bird Tweet",
		"key":"bird_tweet"
	},
	{
		"name":"tubular Bells",
		"key":"tubular_bells"
	},
	{
		"name":"oboe",
		"key":"oboe"
	},
	{
		"name":"lead 6 Voice",
		"key":"lead_6_voice"
	},
	{
		"name":"violin",
		"key":"violin"
	},
	{
		"name":"gunshot",
		"key":"gunshot"
	},
	{
		"name":"music Box",
		"key":"music_box"
	},
	{
		"name":"viola",
		"key":"viola"
	},
	{
		"name":"pad 6 Metallic",
		"key":"pad_6_metallic"
	},
	{
		"name":"slap Bass 1",
		"key":"slap_bass_1"
	},
	{
		"name":"rock Organ",
		"key":"rock_organ"
	},
	{
		"name":"flute",
		"key":"flute"
	},
	{
		"name":"lead 3 Calliope",
		"key":"lead_3_calliope"
	},
	{
		"name":"celesta",
		"key":"celesta"
	},
	{
		"name":"alto Sax",
		"key":"alto_sax"
	},
	{
		"name":"fretless Bass",
		"key":"fretless_bass"
	},
	{
		"name":"seashore",
		"key":"seashore"
	},
	{
		"name":"lead 5 Charang",
		"key":"lead_5_charang"
	},
	{
		"name":"cello",
		"key":"cello"
	},
	{
		"name":"electric Grand Piano",
		"key":"electric_grand_piano"
	},
	{
		"name":"harpsichord",
		"key":"harpsichord"
	},
	{
		"name":"pizzicato Strings",
		"key":"pizzicato_strings"
	},
	{
		"name":"agogo",
		"key":"agogo"
	},
	{
		"name":"steel Drums",
		"key":"steel_drums"
	},
	{
		"name":"piccolo",
		"key":"piccolo"
	},
	{
		"name":"bright Acoustic Piano",
		"key":"bright_acoustic_piano"
	},
	{
		"name":"fx 2 Soundtrack",
		"key":"fx_2_soundtrack"
	},
	{
		"name":"applause",
		"key":"applause"
	},
	{
		"name":"electric Piano 2",
		"key":"electric_piano_2"
	},
	{
		"name":"bassoon",
		"key":"bassoon"
	},
	{
		"name":"pad 1 New Age",
		"key":"pad_1_new_age"
	},
	{
		"name":"fx 4 Atmosphere",
		"key":"fx_4_atmosphere"
	},
	{
		"name":"synth Choir",
		"key":"synth_choir"
	},
	{
		"name":"reverse Cymbal",
		"key":"reverse_cymbal"
	},
	{
		"name":"ocarina",
		"key":"ocarina"
	},
	{
		"name":"french Horn",
		"key":"french_horn"
	},
	{
		"name":"recorder",
		"key":"recorder"
	},
	{
		"name":"orchestra Hit",
		"key":"orchestra_hit"
	},
	{
		"name":"guitar Harmonics",
		"key":"guitar_harmonics"
	},
	{
		"name":"acoustic Guitar Steel",
		"key":"acoustic_guitar_steel"
	},
	{
		"name":"fx 3 Crystal",
		"key":"fx_3_crystal"
	},
	{
		"name":"trumpet",
		"key":"trumpet"
	},
	{
		"name":"lead 4 Chiff",
		"key":"lead_4_chiff"
	},
	{
		"name":"electric Guitar Clean",
		"key":"electric_guitar_clean"
	},
	{
		"name":"accordion",
		"key":"accordion"
	},
	{
		"name":"sitar",
		"key":"sitar"
	},
	{
		"name":"fiddle",
		"key":"fiddle"
	},
	{
		"name":"percussive Organ",
		"key":"percussive_organ"
	},
	{
		"name":"lead 7 Fifths",
		"key":"lead_7_fifths"
	},
	{
		"name":"tenor Sax",
		"key":"tenor_sax"
	},
	{
		"name":"tinkle Bell",
		"key":"tinkle_bell"
	},
	{
		"name":"english Horn",
		"key":"english_horn"
	},
	{
		"name":"fx 1 Rain",
		"key":"fx_1_rain"
	},
	{
		"name":"dulcimer",
		"key":"dulcimer"
	},
	{
		"name":"tuba",
		"key":"tuba"
	},
	{
		"name":"acoustic Grand Piano",
		"key":"acoustic_grand_piano"
	},
	{
		"name":"drawbar Organ",
		"key":"drawbar_organ"
	},
	{
		"name":"baritone Sax",
		"key":"baritone_sax"
	},
	{
		"name":"orchestral Harp",
		"key":"orchestral_harp"
	},
	{
		"name":"reed Organ",
		"key":"reed_organ"
	},
	{
		"name":"pad 2 Warm",
		"key":"pad_2_warm"
	},
	{
		"name":"soprano Sax",
		"key":"soprano_sax"
	},
	{
		"name":"electric Bass Pick",
		"key":"electric_bass_pick"
	},
	{
		"name":"synth Strings 1",
		"key":"synth_strings_1"
	},
	{
		"name":"tango Accordion",
		"key":"tango_accordion"
	},
	{
		"name":"choir Aahs",
		"key":"choir_aahs"
	},
	{
		"name":"synth Strings 2",
		"key":"synth_strings_2"
	},
	{
		"name":"slap Bass 2",
		"key":"slap_bass_2"
	},
	{
		"name":"banjo",
		"key":"banjo"
	},
	{
		"name":"xylophone",
		"key":"xylophone"
	},
	{
		"name":"overdriven Guitar",
		"key":"overdriven_guitar"
	},
	{
		"name":"vibraphone",
		"key":"vibraphone"
	},
	{
		"name":"synth Bass 1",
		"key":"synth_bass_1"
	},
	{
		"name":"blown Bottle",
		"key":"blown_bottle"
	},
	{
		"name":"fx 6 Goblins",
		"key":"fx_6_goblins"
	},
	{
		"name":"pad 5 Bowed",
		"key":"pad_5_bowed"
	},
	{
		"name":"pad 8 Sweep",
		"key":"pad_8_sweep"
	},
	{
		"name":"tremolo Strings",
		"key":"tremolo_strings"
	},
	{
		"name":"bagpipe",
		"key":"bagpipe"
	},
	{
		"name":"koto",
		"key":"koto"
	},
	{
		"name":"muted Trumpet",
		"key":"muted_trumpet"
	},
	{
		"name":"fx 5 Brightness",
		"key":"fx_5_brightness"
	},
	{
		"name":"glockenspiel",
		"key":"glockenspiel"
	},
	{
		"name":"electric Piano 1",
		"key":"electric_piano_1"
	},
	{
		"name":"voice Oohs",
		"key":"voice_oohs"
	},
	{
		"name":"clavinet",
		"key":"clavinet"
	},
	{
		"name":"timpani",
		"key":"timpani"
	},
	{
		"name":"breath Noise",
		"key":"breath_noise"
	},
	{
		"name":"marimba",
		"key":"marimba"
	},
	{
		"name":"synth Brass 1",
		"key":"synth_brass_1"
	},
	{
		"name":"pan Flute",
		"key":"pan_flute"
	},
	{
		"name":"kalimba",
		"key":"kalimba"
	},
	{
		"name":"synth Drum",
		"key":"synth_drum"
	},
	{
		"name":"acoustic Bass",
		"key":"acoustic_bass"
	},
	{
		"name":"shakuhachi",
		"key":"shakuhachi"
	},
	{
		"name":"electric Guitar Jazz",
		"key":"electric_guitar_jazz"
	},
	{
		"name":"church Organ",
		"key":"church_organ"
	},
	{
		"name":"fx 8 Scifi",
		"key":"fx_8_scifi"
	},
	{
		"name":"shanai",
		"key":"shanai"
	},
	{
		"name":"melodic Tom",
		"key":"melodic_tom"
	},
	{
		"name":"woodblock",
		"key":"woodblock"
	},
	{
		"name":"lead 2 Sawtooth",
		"key":"lead_2_sawtooth"
	},
	{
		"name":"guitar Fret Noise",
		"key":"guitar_fret_noise"
	},
	{
		"name":"electric Bass Finger",
		"key":"electric_bass_finger"
	},
	{
		"name":"synth Bass 2",
		"key":"synth_bass_2"
	},
	{
		"name":"synth Brass 2",
		"key":"synth_brass_2"
	},
	{
		"name":"string Ensemble 2",
		"key":"string_ensemble_2"
	},
	{
		"name":"electric Guitar Muted",
		"key":"electric_guitar_muted"
	},
	{
		"name":"distortion Guitar",
		"key":"distortion_guitar"
	},
	{
		"name":"harmonica",
		"key":"harmonica"
	},
	{
		"name":"pad 7 Halo",
		"key":"pad_7_halo"
	},
	{
		"name":"pad 4 Choir",
		"key":"pad_4_choir"
	},
	{
		"name":"acoustic Guitar Nylon",
		"key":"acoustic_guitar_nylon"
	},
	{
		"name":"lead 1 Square",
		"key":"lead_1_square"
	},
	{
		"name":"lead 8 Bass _lead",
		"key":"lead_8_bass__lead"
	},
	{
		"name":"pad 3 Polysynth",
		"key":"pad_3_polysynth"
	},
	{
		"name":"brass Section",
		"key":"brass_section"
	},
	{
		"name":"contrabass",
		"key":"contrabass"
	},
	{
		"name":"shamisen",
		"key":"shamisen"
	},
	{
		"name":"fx 7 Echoes",
		"key":"fx_7_echoes"
	},
	{
		"name":"string Ensemble 1",
		"key":"string_ensemble_1"
	},
	{
		"name":"helicopter",
		"key":"helicopter"
	},
	{
		"name":"telephone Ring",
		"key":"telephone_ring"
	},
	{
		"name":"honkytonk Piano",
		"key":"honkytonk_piano"
	},
	{
		"name":"whistle",
		"key":"whistle"
	},
	{
		"name":"clarinet",
		"key":"clarinet"
	}
]
