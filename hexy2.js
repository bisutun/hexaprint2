function printMultiples(c, b, a) {
    document.getElementById("enumerated").innerHTML = "";
    a = parseInt(document.getElementById("mult").value);
    b = parseInt(document.getElementById("bound").value);
    c = parseInt(document.getElementById("start").value);
    if ( c >= b ) {
			document.getElementById("enumerated").innerHTML = ("Not a valid range.");
	} else if ( (b - c) / a > 200 ) {
			document.getElementById("enumerated").innerHTML = ("That'll take too long.");
		} else { 
			for ( var i = c; i <= b; i++ ) {
			  if ( i % a === 0 ) {
                document.getElementById("enumerated").innerHTML += ("<strong>" + i + "</strong>" + "<br/>");
		      } 
			}
		} 
}
