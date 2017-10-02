/**
   collapse.js
   @desc firefox addon for collapsing wikipedia
   article sections.
   @author fmileshussey
   @version 0.9.0
*/

window.onload = createCollapsables();


/**
   @desc the function called on event i.e. click, hides
   and displays divs depending on current state and updates
   link.
   @param index - index of current section to be changed

 */
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
   @desc createCollapsable - encloses tags between h2's in a div
   that are used to collapse sections.
   done with help from: https://stackoverflow.com/a/39554032/6726577
*/
function createCollapsables(){
    var headers = document.querySelectorAll("h2");
    var insLoc = document.getElementById("bodyContent");
    var finalItem = document.getElementById("catlinks");
    var array = [];


    /*For each header's siblings, add into array */
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

    /*Add links, create and add elements to individual divs*/
    array.forEach(function(html, index) {
	
	if(headers[index].parentElement.className != "toctitle"){
	    if(headers[index].parentElement.id != "mw-navigation"){
		
		//inserting link
		var hideLink = document.createElement("span");
		hideLink.style.marginRight = "5px";
		hideLink.style.fontSize = "small";
		hideLink.style.fontFamily = "sans-serif";
		hideLink.innerHTML = "[<a id='" + index + "-link'>hide</a>]";
		headers[index].insertBefore(hideLink, headers[index].firstChild);
		
		insLoc.insertBefore(headers[index], finalItem);
		var div = document.createElement("div");
		div.id = index + "-content";
		
		insLoc.insertBefore(div, finalItem);
		html.forEach(function(el) {
		    div.appendChild(el)
		})
		document.getElementById(index + "-link").addEventListener("click", function(){hideDiv(index)});
	    }
	}
    });
    
}
