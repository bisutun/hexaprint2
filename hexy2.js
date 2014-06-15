function printMultiples(c, b, a) {
    document.getElementById("enumerated").innerHTML = "";
    a = parseInt(document.getElementById("mult").value);
    b = parseInt(document.getElementById("bound").value);
    c = parseInt(document.getElementById("start").value);
	if (a === 6 && b === 6 && c === 6) {                                       // Ozzy mode
		    document.getElementById("enumerated").innerHTML = ("Hail Satan.");
        } else if ( c >= b ) {
		    document.getElementById("enumerated").innerHTML = ("That's not how ranges work!");
	} else if ( (b - c) / a > 200 ) {                                          // Bartleby mode
		    document.getElementById("enumerated").innerHTML = ("I prefer not to.");
        } else { 
	        for ( var i = c; i <= b; i++ ) {
                  if ( i % a === 0 ) {
                    document.getElementById("enumerated").innerHTML += ("<strong>" + i + "</strong>" + "<br/>");
		  } 
		}
	} 
}
