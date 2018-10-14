$(function(){
	//Use current tab
	chrome.tabs.getSelected(null, function(tab) {
			//Get URL
			link = tab.url; 
			var l = document.createElement("a");
			l.href = link;
				
			//Get domain  www.google.com => google
			var websiteName = String(l.hostname).replace(/^www\./,'').split('.').reverse()[1];

			//symbols that you can use 
			var generatedPass = "";
			var symbols = ['!', '+', '-', '*', '/', '(', ')'];
			
			var siteCount = websiteName.length;
			var symbolCount = symbols.length;
			var count=0;
			for(var i=0; i<siteCount; i++){
				count+=websiteName.charCodeAt(i);
			}
			
			//get inputs from html
			var usernameHTML = document.getElementById("username");
			var passwordHTML = document.getElementById("password");
			
			usernameHTML.value = websiteName;
			
			//Create password by taking
			// first upper case char of url 
			// last char of url
			// random symbol (use count variable to always use same symbol for same url)
			//You can and should change this and create your own pattern
			passwordHTML.value = generatedPass.concat(
				"myCustomPrefix",
				websiteName.charAt(0).toUpperCase(),
				websiteName.charAt((siteCount-1)%siteCount),
				symbols[count%symbolCount],
				"myCustomPostfix"
			);
			
			//Copy password to clipboard
			passwordHTML.type = "text";
			passwordHTML.select();
			document.execCommand("copy");
			passwordHTML.type = "password";
	});
	
	
});