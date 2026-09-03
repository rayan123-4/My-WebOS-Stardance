
// Code for making the DIV element draggable:
dragElement(document.getElementById("window-box"));

function dragElement(element) {

    // Tracking the elements position:
    var initialX = 0;

    var initialY = 0;

    var currentX = 0;

    var currentY = 0;
}

// The if statement that alows the element to be dragged from the header:
if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = startDragging;

} else {

    // if not from the header then from anywhere else in the window:
    elmnt.onmousedown = startDragging;

}

// Function to handle the mouse down event and initiate dragging:
function startDragging(e) {

    e = e || window.event;

    e.preventDefault();

    // Getting mouse cursor position
    initialX = e.clientX;

    initialY = e.clientY;

    // Setting up event listener for mouse movement
    document.onmouseup = stopDragging;

    document.onmousemove = dragElement;

}

// Function to handle the dragging of the element:
function dragElement(e {

    e = e || window.event;

    e.preventDefault();

// Calculate new cursor position

currentX = initialX - e.clientX;

currentY = initialY - e.clientY;

initialX = e.clientX;

initialY = e.clientY;

// Update element's new position
element.style.top = (element.offsetTop - currentY) + "px";

element.style.left = (element.offsetLeft - currentX) + "px";

}

// Function to stop dragging the element when the mouse button is released:
function stopDragging() {

    document.onmouseup = null;

    document.onmousedown = null;

}

}

// Code for making the date/time:
function updateTime() {

    var currentTime = new Date().toLocaleString();

    var timeText = document.querySelector("#timeElement");

    timeText.innerHTML = currentTime;

}

// Making time update:
updateTime();

setInterval(updateTime, 1000);
