jQuery(document).ready(function($) {
	try {
	    $('.wp-lunaradio').each(function() {   
	      $(this).lunaradio({
					token: $(this).data("token"),
					userinterface: $(this).data("userinterface"),
					backgroundcolor: $(this).data("backgroundcolor"),
					fontcolor: $(this).data("fontcolor"),
					hightlightcolor: $(this).data("hightlightcolor"),
					fontname: $(this).data("fontname"),
					googlefont: $(this).data("googlefont"),
					fontratio: $(this).data("fontratio"),
					radioname: $(this).data("radioname"),
					scroll: $(this).data("scroll"),
					coverimage: $(this).data("coverimage"),
					onlycoverimage: $(this).data("onlycoverimage"),
					coverstyle: $(this).data("coverstyle"),
					usevisualizer: $(this).data("usevisualizer"),
					visualizertype: $(this).data("visualizertype"),
					itunestoken: $(this).data("itunestoken"),
					metadatatechnic: $(this).data("metadatatechnic"),
					ownmetadataurl: $(this).data("ownmetadataurl"),
					corsproxy: $(this).data("corsproxy"),
					usestreamcorsproxy: $(this).data("usestreamcorsproxy"),
					streamurl: $(this).data("streamurl"),
					streamtype: $(this).data("streamtype"),
					icecastmountpoint: $(this).data("icecastmountpoint"),
					radionomyid: $(this).data("radionomyid"),
					radionomyapikey: $(this).data("radionomyapikey"),
					radiojarid: $(this).data("radiojarid"),
					radiocoid: $(this).data("radiocoid"),
					shoutcastpath: $(this).data("shoutcastpath"),
					shoutcastid: $(this).data("shoutcastid"),
					streamsuffix: $(this).data("streamsuffix"),
					metadatainterval: $(this).data("metadatainterval"),
					volume: $(this).data("volume"),
					debug: $(this).data("debug")	
				});
	    });
	} catch (e){
			//error
	}
});