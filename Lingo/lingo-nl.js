var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];

// var
var body = document.getElementsByTagName("BODY")[0];
var container = document.createElement("div");
var fullContainer = document.createElement("div");
var button = document.createElement("BUTTON");
var textInput = document.createElement("p");
var input = document.createElement("INPUT");
var guessedArray = ["", "", "", "", ""];
var correctArray = ["", "", "", "", ""];
var rightArray = ["", "", "", "", ""];
var correctWord = words[Math.floor(Math.random() * words.length)];
var guessedWord;
var idCount = "1";
var idFill = "1";
var firstLetter = 1;
var arrayCount = 0;
var p = 1;
var rowcount = 0;
var guessAmount = 0;


// Container opmaak
body.appendChild(fullContainer);
fullContainer.id = "fullContainer";

fullContainer.appendChild(container);
container.id = "container";

// Balkje
container.appendChild(textInput);
var textInputText = document.createTextNode("Word: ");
textInput.appendChild(textInputText);
textInput.id = "textInput"; 

textInput.appendChild(input);
input.id = "input";
input.type = "text";

// Knopje
button.id = "button";
var buttonText = document.createTextNode("Submit");
button.appendChild(buttonText);
container.appendChild(button);

// 
button.onclick = function(){
	buttonClick();
}

function buttonClick() {
	if (guessAmount != 4){
		arrayUpload();
		kleurtjes();
		rowcount++;
		setTimeout(function(){
			if (correctWord == guessedWord){
				alert("Je hebt gewonnen");
		    	location.reload();
			}
		}, 500);
	}
	else if (guessAmount == 4) {
		arrayUpload();
		kleurtjes();
		rowcount++;
		setTimeout(function(){
			if (correctWord == guessedWord){
				alert("Je hebt gewonnen");
				location.reload();
			}
		}, 500);
		guessAmount++;
		setTimeout(function(){
			if (correctWord != guessedWord) {
				alert("Je hebt verloren het goede woord was: " + correctWord);
		    	location.reload();
			}
		}, 500);
	}
	guessAmount++;
}


function blokjeCreate(){
	for (var i = 1; i <= 25; i++) {
		var blokje = document.createElement("div");
	    fullContainer.appendChild(blokje);
		blokje.id = idCount;
		idCount++;
		blokje.innerHTML = "...";
	}
}

blokjeCreate();
style();

function style(){
	for(var i = 1; i <= 25; i++){
		var blokjestyle = document.getElementById(i);
		blokjestyle.style.position = "relative";
	    blokjestyle.style.fontSize = "26px";
	    blokjestyle.style.padding = "15px";
	    blokjestyle.style.margin = "10px";
	    blokjestyle.style.width = "30px";
	    blokjestyle.style.height = "30px";
	    blokjestyle.style.border = "solid black 2px";
	    blokjestyle.style.backgroundColor = "white";
	    blokjestyle.style.display = "inline-block" ;
	}
}

// Geraden woordje
console.log(correctWord);

function arrayUpload(){
	guessedArray = [];
	guessedWord = document.getElementById("input").value.toLowerCase();
	for (var i = 0; i < 5; i++) {
		guessedArray.push(guessedWord.charAt(i));
	}
	console.log(guessedArray);
	for (var i = 0; i < 5; i++) {
		if (idFill <= 25){
			var blokjeFill = document.getElementById("" + idFill);
			blokjeFill.innerHTML = guessedArray[arrayCount];
			idFill++;
			if (arrayCount <= 3){
				arrayCount++;
			}
			else{
				arrayCount = 0;
			}
		}
	}
}

correctArrayFunction();
rightArrayFunction();

for (var i = 0; i < 5; i++) {
	var fillOne = document.getElementById("" + firstLetter);
	fillOne.innerHTML = correctArray[0];
	firstLetter = firstLetter + 5;
}

function correctArrayFunction(){
	correctArray = [];
	for (var i = 0; i < 5; i++) {
		correctArray.push(correctWord.charAt(i));
	}
}

function rightArrayFunction(){
	rightArray = [];
	for (var i = 0; i < 5; i++) {
		rightArray.push(correctWord.charAt(i));
	}
}

// Kleurtjes
function kleurtjes(){

 	for (var y = 0; y <= 4; y++) {
		if(correctArray[y] == guessedArray[y]){
			document.getElementById("" + p).style.backgroundColor = "green";
			p++;
			rightArray[y] = false;
		}
		else{
			p++;
		}
	}

    for(var j = 0; j < 5; j++){
        for (var o = 0; o < 5; o++) {
            if (rightArray[j] == guessedArray[o]){
            	rightArray[j] = false;
                document.getElementById("" + (o + 1 + (rowcount * 5))).style.backgroundColor = "yellow";
                document.getElementById("" + (o + 1 + (rowcount * 5))).style.borderRadius = "50%";
                console.log("" + (o + 1 + (rowcount * 5)));
            }
        }
    }
    rightArrayFunction();
}
document.addEventListener('keydown', function(event){
    if(event.keyCode === 13) {
        buttonClick();
    }        
});


