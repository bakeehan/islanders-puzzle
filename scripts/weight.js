var leftSaw = document.getElementById("leftSaw");
var rightSaw = document.getElementById("rightSaw");
var moveSaw = document.getElementById("sawLine");

function weightTest(deg){
	console.log(leftSaw.offsetLeft);
	console.log(rightSaw.offsetLeft);
	console.log(islanders[0].offsetLeft);
	moveSaw.style.transform = "rotate(" + deg + "deg)";
	console.log(moveSaw.style.transform);
}