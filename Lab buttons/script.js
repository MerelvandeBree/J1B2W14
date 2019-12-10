var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");

var body = document.getElementById("bgc");

button1.innerHTML = "Button 1";
button1.id = "btn1";
button1.style.backgroundColor = "green";
document.getElementById("container").appendChild(button1);

button2.innerHTML = "Button 2";
button2.id = "btn2";
button2.style.backgroundColor = "red";
document.getElementById("container").appendChild(button2);

button3.innerHTML = "Button 3";
button3.id = "btn3";
button3.style.backgroundColor = "blue";
document.getElementById("container").appendChild(button3);

function knop1(){
	body.style.backgroundColor = "green";
}
button1.onclick = knop1;

function knop2(){
	body.style.backgroundColor = "red";
}
button2.onclick = knop2;

function knop3(){
	body.style.backgroundColor = "blue";
}
button3.onclick = knop3;