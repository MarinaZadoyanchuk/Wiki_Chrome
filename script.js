var	url_api = window.location.protocol + "//" + document.domain +"/w/api.php";

function wiki_api(title)
{	
	console.log(url_api);
	$.ajax({
			type: "GET",
			url: url_api,
			dataType: 'jsonp',
			data: {
				action: 'query',
				titles: title,
				format: 'json',
				prop: 'extracts',
				redirects: ''
			},
			beforeSend: function()
			{
				$(".link_popup").append("<img id = 'loadImg' src='http://www.jotform.com/images/ajax-loader.gif'/>");
			},
			success: function(data)
			{
				result = data;
				if(data.query !== undefined)
				{
					obj = data.query.pages;
					for(var key in obj)
					{
						text = obj[key]; break;
					}

					reg = /(<p><\/p>)*(\s)*(<p>.*<\/p>){1}/;
					if(text.extract)
					{
						t = text.extract;
						if(t.match(reg))
						{						
							$(".link_popup").html(t.match(reg)[0]);
						}
					}
				}
			},
			error: function(data)
			{
				return "error!";
			}
		})
}

$(document).ready(function(){
	$("body").append("<div class = 'link_popup'></div>");

	$("#bodyContent a[href^='/wiki/']").not(".mw-disambig, .image, :parent.mw-normal-catlinks").hover(
	function()
	{
		wiki_api(this.title);
		var that = $(this);
		setTimeout(function() {
			if(that.is(":hover")) 
			{
				$(".link_popup").fadeIn(350);
			}
			else
			{				
				$(".link_popup").fadeOut(0);
			}
				
		}, 1000);
	},
	function()
	{		
		$(".link_popup").fadeOut(0);		
		$(".link_popup").empty();
	}
	);
})