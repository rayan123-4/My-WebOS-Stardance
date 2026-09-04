
// Code for making the DIV element draggable:
document.querySelectorAll(".window-box, .gallery-window, .window").forEach(dragElement);

// Function for making the window drag:
function dragElement(element) {

  // Tracking the elements position:
  var initialX = 0;

  var initialY = 0;

  var currentX = 0;

  var currentY = 0;


  // The if statement that alows the element to be dragged from the header:
  if (document.getElementById(element.id + "-header")) {

    document.getElementById(element.id + "-header").onmousedown = startDragging;

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
welcomeScreenClose.addEventListener("click", function () {

  closeWindow(welcomeScreen);

});

welcomeScreenOpen.addEventListener("click", function () {

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

// Storing the icon:
var selectedIcon = undefined

// For selecting icon:
function selectIcon(element) {
  element.classList.add("tiger-gallery");
  selectedIcon = element
}


// For deselecting icon:
function deselectIcon(element) {
  element.classList.remove("tiger-gallery");
  selectedIcon = undefined
}

// If it's not selected, but deselects it if it is already selected.
function handleIconTap(element) {
  if (selectedIcon === element) {
    deselectIcon(element)
  } else {
    if (selectedIcon) {
      deselectIcon(selectedIcon);
    }
    selectIcon(element)
  }
}

// For drag:
dragElement(document.querySelector("#tigergallery"));

var galleryWindow = document.querySelector("#gallerywindow");
var galleryIcon = document.querySelector("#tigergallery");
var galleryWindowClose = document.querySelector("#galleryclose");

if (galleryIcon) {
  galleryIcon.addEventListener("click", function () {
    openWindow(galleryWindow);
  });
}

if (galleryWindowClose) {
  galleryWindowClose.addEventListener("click", function () {
    closeWindow(galleryWindow);
  });
}

var roarWindow = document.querySelector("#roarwindow");
var roarIcon = document.querySelector("#roarIcon");
var roarWindowClose = document.querySelector("#roarwindow-close");

if (roarIcon) {
  roarIcon.addEventListener("click", function () {
    openWindow(roarWindow);
  });
}

if (roarWindowClose) {
  roarWindowClose.addEventListener("click", function () {
    closeWindow(roarWindow);
  });
}

// Making app closable
welcomeScreen = document.querySelector("#welcomepage");

function initializeIcon(name) {
  var icon = document.querySelector("#" + name + "Icon");
  var screen = document.querySelector("#" + name);
  
  if (icon) {
    icon.addEventListener("click", () => handleIconTap(icon));
  }
}
initializeIcon("notes");

// Defining largest index:
var biggestIndex = 1;

// Function to make window listen for click:
function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}


// Making window move on tap:
function handleWindowTap(element) {
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
}

// Making window on top to move open:
function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

// For top bar: 
var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
  if (topBar) {
    topBar.style.zIndex = biggestIndex + 1;
  }
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  if (topBar) {
    topBar.style.zIndex = biggestIndex + 1;
  }
  if (selectedIcon) {
    deselectIcon(selectedIcon)
  }
}

// 1. Find the speaker icon button
var roarButton = document.querySelector("#roarsoundbutton");

// The function to making the button be clicked and a roar sound appear

  if (roarButton) {

  roarButton.addEventListener("click", function () {

    var audio = new Audio("https://www.gstatic.com/delight/knowledge/animal_sounds/tiger/tiger_bengal_01.mp3");
    audio.play();

  }); 

}




