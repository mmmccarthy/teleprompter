var scripts = []; 

var key = "1jRxm9zBw2itj0EDHXQ3yQ71fI6BsTJ9MvRqsQI4_TVs";

$.getJSON("https://spreadsheets.google.com/feeds/list/"+key+"/od6/public/values?alt=json", function(data) {

	for (var i = 0; i < data.feed.entry.length; i++) {
	var id = i;
	var slug = data.feed.entry[i].gsx$slug.$t;
	var reporter = data.feed.entry[i].gsx$reporter.$t;
	var anchor = data.feed.entry[i].gsx$anchor.$t;
	var script = data.feed.entry[i].gsx$script.$t;
	
	createScript(id, slug, reporter, anchor, script);
	}

	
	function createScript(id, slug, reporter, anchor, script){
		var newScript = {
			id: id,
			slug: slug,
			reporter: reporter,
			anchor: anchor,
			script: script
		};
		
		scripts.push(newScript);
		$("#select-slug").append('<option value="slug-'+id+'">'+slug+'</option>');
	}
	
	
});

$("#select-slug").change(function(){
	var slugId = $("#select-slug").val().substring(5);
	console.log(slugId);
	var result = $.grep(scripts, function(e){ return e.id == slugId; });
	var anchor = result[0].anchor.toUpperCase();
	var slugScript = result[0].script;
	$("#teleprompter").html('<span class="anchor-highlight">***'+anchor+'***</span><br />'+slugScript);
});