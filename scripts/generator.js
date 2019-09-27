var cast = ["amy","boyle","cheddar","cj","dad","genevieve","gina","hawkins","hitchcock","jake","judy","kevin","lohank","mlepnos","nikolaj","pimento","rosa","scully","terry","twins","vulture","wuntch"];
var precinct = [];

var switchy = Math.floor(Math.random()*10);

for (i=0;i<12;i++) {
	var whom = Math.floor(Math.random()*(cast.length-1));
	if (i === switchy) {
		if (switchy % 2 === 0) {
			precinct.push([cast[whom],1]);
		} else {
			precinct.push([cast[whom],-1]);
		}
	} else {
	precinct.push([cast[whom],0]);
	}
	cast.splice(whom,1);
}

var islandCont = document.getElementById("islandersContainer");

for (i=0;i<precinct.length;i++) {
	islandCont.innerHTML += "<div class='islander-box'><img src='images/" + precinct[i][0] + ".png' class='islander'></div>";
}

function checkWeight(islander) {
	return islander[1] != 0;
}

// islandCont.innerHTML += "<p> <img src='images/" + precinct.find(checkWeight)[0] + ".png'>"

// if (precinct.find(checkWeight)[1] < 0) {
// 	islandCont.innerHTML += " is lighter</p>";
// } else {
// 	islandCont.innerHTML += " is heavier</p>";
// }