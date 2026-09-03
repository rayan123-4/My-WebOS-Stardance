
// Code for making the DIV element draggable:
dragElement(document.getElementById("welcomepage"));

// Function for making the window drag:
function dragElement(element) {

    // Tracking the elements position:
    var initialX = 0;

    var initialY = 0;

    var currentX = 0;

    var currentY = 0;


// The if statement that alows the element to be dragged from the header:
if (document.getElementById(element.id + "header")) {

    document.getElementById(element.id + "header").onmousedown = startDragging;

} else {

    // if not from the header then from anywhere else in the window:
    element.onmousedown = startDragging;

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

    document.onmousemove = elementMove;

}

// Function to handle the dragging of the element:
function elementMove(e) {

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

    document.onmousemove = null;

}
}



// Selecting the window:
var welcomeScreen = document.querySelector("#welcomepage");

// Function to close window:
function closeWindow(element) {

    element.style.display = "none";

}

// Function for opening the window:
function openWindow(element) {

    element.style.display = "flex"

}

// Identifing the buttons:
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

// Adding event listeners to the open and close button:
welcomeScreenClose.addEventListener("click", function() {

    closeWindow(welcomeScreen);

});

welcomeScreenOpen.addEventListener("click", function() {

    openWindow(welcomeScreen);

});



// Code for making the date/time:
function updateTime() {

    var currentTime = new Date().toLocaleString();

    var timeText = document.querySelector("#timeElement");

    timeText.innerHTML = currentTime;

}

// Making time update:
updateTime();

setInterval(updateTime, 1000);
