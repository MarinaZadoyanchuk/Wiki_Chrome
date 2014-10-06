chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if(info.url)
  {
    if(/ru.wikipedia.org/.test(info.url))
      {      	
  			console.log(id);	
	      	chrome.pageAction.show(id); 
	      	console.log(info.url);  
	      	if  ( info.status ==  'complete' )  {
	      		chrome.tabs.executeScript( null ,{ file : "script.js" }); 
	      	} 	
      }
   }
}); 


// chrome.tabs.executeScript(null,{file:"script.js"});   
// chrome.tabs.onUpdated.addListener(function(details) {
    
//     chrome.tabs.executeScript(null,{file:"script.js"});
// });

// chrome.webNavigation.onHistoryStateUpdated.addListener( function ( details )  { 
//     chrome.tabs.executeScript( null ,{ file : "script.js" }); 
// });
