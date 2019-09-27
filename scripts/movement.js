var islanders = document.getElementsByClassName("islander");

for (i=0;i<islanders.length;i++) {
  dragElement(islanders[i]);
}

function dragElement(elmnt) {

  elmnt.onmousedown = dragMouseDown;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag(e);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    console.log(getComputedStyle(elmnt).top);
    elmnt.style.top = (getComputedStyle(elmnt).top - pos2) + "px";
    elmnt.style.left = (getComputedStyle(elmnt).left - pos1) + "px";
    console.log(elmnt.style.left);
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}