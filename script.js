function wiki_api(title)
{
	$.ajax({
			type: "GET",
			url: "https://ru.wikipedia.org/w/api.php",
			dataType: 'jsonp',
			data: {
				action: 'query',
				titles: title,
				format: 'json',
				// prop: 'info',
				prop: 'extracts',
				exintro: '',
				exsentences: '3'
			},
			success: function(data)
			{
				result = data;
				obj = data.query.pages;
				for(var key in obj)
				{
					text = obj[key]; break;
				}
				console.log(text.extract);
			},
			error: function(data)
			{
				console.log("error!");
			}
		})
}
// wiki_api("Мастер и Маргарита")
$("#bodyContent a:not(#togglelink, .mw-editsection-visualeditor)").mouseenter(function(){
	wiki_api(this.title);
})

