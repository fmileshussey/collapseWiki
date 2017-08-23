createCollapsables();

function createCollapsables(){
    var headers = document.querySelectorAll("h2");
    var arr = [];

    Array.from(headers).forEach(function(h2, index) {
	arr[index] = [];
	var current = h2.nextElementSibling;
	while (current.tagName !== "h2"){
	    arr[index].push(curr);
	    var next = curr.nextElementSibling;
	    current = next;
	}
    });

    arr.forEach(function(html, index){
	var div = document.createElement("div");
	div.className = "collapseSect";
	document.body.appendChild(div);
	//div.appendChild(headers[index]);
	html.forEach(function(el){
	    div.appendChild(el);
	})
    })
}

