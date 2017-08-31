/**
	collapse.js - firefox addon for collapsing wikipedia
	article sections.
	@author fmileshussey
	@version 0.2.2
*/

window.onload = createCollapsables;

function hideDiv(index){
	var d = document.getElementById(index + "-content");
	var heading = document.getElementById(index + "-link");
	if(d.style.display == "none"){
		d.style.display = "block";
		heading.innerHTML = "hide";
	}else{
		d.style.display = "none";
		heading.innerHTML = "show";
	}
}

/**
	createCollapsable - encloses tags between h2's in a div
	that are used to collapse sections.
*/
function createCollapsables(){
    var headers = document.querySelectorAll("h2");
	var insLoc = document.getElementById("bodyContent");
	var finalItem = document.getElementById("catlinks");
	
	var array = [];
	
	Array.from(headers).forEach(function(h2, index) {
		array[index] = [];
		var current = h2.nextElementSibling;
		
		while (current.tagName !== "H2") {
			array[index].push(current);
			var next = current.nextElementSibling;
			current = next;
			if(current == null) break;
		}
	});

	array.forEach(function(html, index) {
		if(headers[index].innerHTML != "Contents" && headers[index].innerHTML != "Navigation menu"){
			var hideLink = document.createElement("span");
			hideLink.style.marginRight = "5px";
			hideLink.style.fontSize = "small";
			hideLink.style.fontFamily = "sans-serif";
			hideLink.innerHTML = "[<a id='" + index + "-link' onclick='hideDiv(" + index + ")'>hide</a>]";
			
			headers[index].insertBefore(hideLink, headers[index].firstChild);
			insLoc.insertBefore(headers[index], finalItem);
			var div = document.createElement("div");
			div.id = index + "-content";
			
			insLoc.insertBefore(div, finalItem);
			html.forEach(function(el) {
				div.appendChild(el)
			})
		}
	});
}