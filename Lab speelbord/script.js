var button = document.getElementById("knop");
var woord = document.getElementById("woord");

var letters = " ";

button.onclick = checker;
function checker(){
    correctWoord = [];
	input = document.getElementById("woord").value.toLowerCase();
	for( i = 0; i < input.length; i++){
		correctWoord.push(input.charAt(i));
		console.log(i);
	}

	raadWoord = [];
	check = document.getElementById("letter").value.toLowerCase();
	for( i = 0; i < check.length; i++){
		raadWoord.push(check.charAt(i));
		console.log(i);
	}

	for(let i = 0; i < correctWoord.length; i++){
		if(raadWoord[i] == correctWoord[i]){
			document.getElementById("blokje" + (i+1)).innerHTML = raadWoord[i];
			document.getElementById("blokje" + (i+1)).style.backgroundColor = "green";
			document.getElementById("blokje" + (i+1)).classList.add("green");
			console.log("yup");
		}
		else{
			for(let j = 0; j < correctWoord.length; j++){
				if(raadWoord[j] == correctWoord[i] && raadWoord[i] !== correctWoord[i]){
					if(document.getElementById("blokje" + (j+1)).classList.contains("green"))
						continue;
				
					document.getElementById("blokje" + (j+1)).innerHTML = raadWoord[j];
					document.getElementById("blokje" + (j+1)).style.backgroundColor = "yellow";
					document.getElementById("blokje" + (j+1)).style.borderRadius = "50%";
					
				}
				else{
					document.getElementById("blokje" + (j+1)).innerHTML = raadWoord[j];
				}
			}

		}
	}
}

document.addEventListener('keydown', function(event){
    if(event.keyCode === 13) {
        checker();
    }
} );


 
