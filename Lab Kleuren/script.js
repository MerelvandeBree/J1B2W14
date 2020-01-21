// var btns = [0, 0, 0, 0, 0]
var col = ["red", "purple", "blue", "black"]

var btnCounter = {};

for (var i = 1 ; i <= 30; i++){
	var button0 = document.createElement("button");
	button0.innerHTML = i;
	button0.style.backgroundColor = "green";
	button0.id = "btn" + i;
	document.getElementById("container").appendChild(button0);
	button0.onclick = knop1;
	btnCounter["btn" + i] = 0;
}

function knop1(){
	btnCounter [this.id]++; 		
	if (btnCounter[this.id] == 1) {
		this.style.backgroundColor = col[0];
	}
	else if (btnCounter[this.id] == 2) {
		this.style.backgroundColor = col[1];
	}
	else if (btnCounter[this.id] == 3) {
		this.style.backgroundColor = col[2];
	}
	else if (btnCounter[this.id] == 4) {
		this.style.backgroundColor = col[3];
	}
	else if (btnCounter[this.id] > col.length) {

		var remove = document.getElementById(this.id);
		remove.parentNode.removeChild(remove)
	}
}


