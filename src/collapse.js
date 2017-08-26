/**
	collapse.js - firefox addon for collapsing wikipedia
	article sections.
	@author fmileshussey
	@version 0.1.1
*/

window.onload = createCollapsables;

/**
	createCollapsable - encloses tags between h2's in a div
	that are used to collapse sections.
*/
function createCollapsables(){
    var headers = document.querySelectorAll("h2");
	var insLoc = document.getElementById("bodyContent");
	var finalItem = document.getElementById("catlinks");
	
	var arr = [];
	
	Array.from(headers).forEach(function(h2, index) {
		arr[index] = [];
		var curr = h2.nextElementSibling;
		
		while (curr.tagName !== "H2") {
			arr[index].push(curr);
			var next = curr.nextElementSibling;
			curr = next;
			if(curr == null) break;
		}
	});

	arr.forEach(function(html, index) {
		if(headers[index].innerHTML != "Contents"){
			insLoc.insertBefore(headers[index], finalItem);
			var div = document.createElement("div");
			insLoc.insertBefore(div, finalItem);
			html.forEach(function(el) {
				div.appendChild(el)
			})
		}
	});
}