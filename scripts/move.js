var islanders = document.getElementsByClassName("islander");

for (i=0;i<islanders.length;i++) {
  dragElement(islanders[i]);
}

function dragElement(elmnt) {

  elmnt.onmousedown = dragMouseDown;
  var calcMiddle = (parseInt(getComputedStyle(elmnt).width, 10))/2;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    var startX = e.clientX;
    var startY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    // document.onmousemove = elementDrag(e, startX, startY);
    document.onmousemove = test;
  }

  function test(e) {
    // console.log(e.clientX);
    elmnt.style.left = (e.clientX - calcMiddle) + "px";
    elmnt.style.top = (e.clientY - calcMiddle) + "px";
  }

  function elementDrag(e, x, y) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    var pos1 = x - e.clientX;
    var pos2 = y - e.clientY;
    // set the element's new position:
    console.log(getComputedStyle(elmnt).top);
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log(elmnt.style.left);
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}