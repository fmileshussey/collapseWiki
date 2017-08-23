/**
	collapse.js - firefox addon for collapsing wikipedia
	article sections.
	@author fmileshussey
	@version 0.1.0
*/

window.onload = createCollapsables;

/**
	createCollapsable - encloses tags between h2's in a div
	that are used to collapse sections.
*/
function createCollapsables(){
    var headers = document.querySelectorAll("h2");
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
		document.body.appendChild(headers[index])
		var div = document.createElement("div");
		document.body.appendChild(div);
		html.forEach(function(el) {
			div.appendChild(el)
		})
	});
}