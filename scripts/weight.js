var leftSaw = document.getElementById("leftSaw");
var rightSaw = document.getElementById("rightSaw");
var moveSaw = document.getElementById("sawLine");
var sawBtn = document.getElementById("go");

var leftSawPos = [leftSaw.offsetLeft, leftSaw.offsetTop + 280];
var rightSawPos = [rightSaw.offsetLeft, rightSaw.offsetTop + 280];

function weightTest(){
	let rightWeight = 0;
	let leftWeight = 0;
	for (i=0;i<islanders.length;i++) {
		if (findIslander(islanders[i],leftSawPos)) {
			leftWeight += precinct[i][1];
		} else if (findIslander(islanders[i],rightSawPos)) {
			rightWeight += precinct[i][1];
		}
	}
	console.log([leftWeight,rightWeight]);
	if (leftWeight > rightWeight) {
		moveSaw.style.transform = "rotate(-5deg)";
	} else if (rightWeight > leftWeight) {
		moveSaw.style.transform = "rotate(5deg)";
	} else  {
		moveSaw.style.transform = "rotate(0deg)";
	}
}

sawBtn.addEventListener("click", weightTest);

function findIslander(element,side){
	let whereX = element.offsetLeft - 10;
	let whereY = element.offsetTop;
	if (whereX >= side[0] && whereX <= side[0] + 240) {
		if (whereY <= side[1]) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}