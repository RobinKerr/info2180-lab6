function onClick(){
	const button = document.getElementsByTagName("button")[0];
	button.onclick = function(){getSuperHeroes()};
}

function getSuperHeroes() {
  	let xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      			alert(this.responseText);
    		}
  	};
  	xhttp.open("GET", "superheroes.php", true);
  	xhttp.send();
}

window.onload = onClick;