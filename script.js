
// Code for making the DIV element draggable:
document.querySelectorAll(".window-box, .gallery-window, .roar-window, .tiger-map-window, .settings-window, .Tiger-Information, .Weather-Window").forEach(dragElement);

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

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = elementMove;

  }

  // Function to handle the dragging of the element:
  function elementMove(e) {

    e = e || window.event;

    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";

  }

  // Function to stop dragging the element when the mouse button is released:
  function stopDragging() {

    document.onmouseup = null;
    document.onmousemove = null;

  }

}

// Identifing the buttons:
var welcomeScreen = document.querySelector("#welcomepage")

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

// Adding event listeners to the open and close button:
function closeWindow(element) {
  element.style.display = "none";
}

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

  timeText.textContent = currentTime;

}

// Making time update:
updateTime();

setInterval(updateTime, 1000);

// Storing the icon:
var selectedIcon = undefined

// For selecting icon:
function selectIcon(element) {
  element.classList.add("TigerInformation");
  selectedIcon = element
}

// For deselecting icon:
function deselectIcon(element) {
  element.classList.remove("TigerInformation");
  selectedIcon = undefined
}

// For deselecting icon:
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

// For drag on gallery window:
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

// For information window drag:
dragElement(document.querySelector("#TigerInformation"));

var informationWindow = document.querySelector("#TigerInformation");
var informationIcon = document.querySelector("#informationicon");
var informationWindowClose = document.querySelector("#informationclose");

if (informationIcon) {
  informationIcon.addEventListener("click", function () {
    openWindow(informationWindow);
  });
}

if (informationWindowClose) {
  informationWindowClose.addEventListener("click", function () {
    closeWindow(informationWindow);
  });
}

// For roar window drag:
dragElement(document.querySelector("#roarwindow"));

var roarWindow = document.querySelector("#roarwindow");
var roarIcon = document.querySelector("#roarIcon");
var roarWindowClose = document.querySelector("#roarwindow-close");

if (roarIcon) {
  roarIcon.addEventListener("click", function () {
    openWindow(roarWindow);
  });
}

// For map window drag:
dragElement(document.querySelector("#tigermapwindow"));

var tigerMapWindow = document.querySelector("#tigermapwindow");
var tigerMapIcon = document.querySelector("#tigermapicon");
var tigerMapWindowClose = document.querySelector("#mapwindow-close");

if (tigerMapIcon) {
  tigerMapIcon.addEventListener("click", function () {
    openWindow(tigerMapWindow);
  });
}

// For fun fact weather window drag:
dragElement(document.querySelector("#tigermapwindow"));

var WeatherWindow = document.querySelector("#WeatherWindow");
var WeatherIcon = document.querySelector("#weatherIcon");
var WeatherWindowClose = document.querySelector("#Weatherwindow-close");

dragElement(WeatherWindow);

if (WeatherIcon) {
  WeatherIcon.addEventListener("click", function () {
    openWindow(WeatherWindow);
  });
}

// For real working weather window drag:
dragElement(document.querySelector("#RealWeatherWindow"));

var realWeatherWindow = document.querySelector("#RealWeatherWindow");
var realWeatherIcon = document.querySelector("#realweatherIcon");
var realWeatherWindowClose = document.querySelector("#Real-Weatherwindow-close");

dragElement(realWeatherWindow);

if (realWeatherIcon) {
  realWeatherIcon.addEventListener("click", function () {
    openWindow(realWeatherWindow);
  });
}

// For setting draggable and close:
dragElement(document.querySelector("#settingswindow"));

var settingsWindow = document.querySelector("#settingswindow");
var settingsIcon = document.querySelector("#settingsIcon");
var settingsWindowClose = document.querySelector("#settingswindow-close");

if (settingsIcon) {
  settingsIcon.addEventListener("click", function () {
    openWindow(settingsWindow);
  });
}

// Making map app closable:
if (tigerMapWindowClose) {
  tigerMapWindowClose.addEventListener("click", function () {
    closeWindow(tigerMapWindow);
  });
}

// Making roar app closable:
if (roarWindowClose) {
  roarWindowClose.addEventListener("click", function () {
    closeWindow(roarWindow);
  });
}


// Making settings app closable:
if (settingsWindowClose) {
  settingsWindowClose.addEventListener("click", function () {
    closeWindow(settingsWindow);
  });
}

// Making fun fact weather app closable:
if (WeatherWindowClose) {
  WeatherWindowClose.addEventListener("click", function () {
    closeWindow(WeatherWindow);
  });
}

// Making Real working weather app closable:
if (realWeatherWindowClose) {
  realWeatherWindowClose.addEventListener("click", function () {
    closeWindow(realWeatherWindow);
  });
}

// Making app closable:
welcomeScreen = document.querySelector("#welcomepage");

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
var roarButton1 = document.querySelector("#roarsoundbutton1");
var roarButton2 = document.querySelector("#roarsoundbutton2");
var roarButton3 = document.querySelector("#roarsoundbutton3");
var roarButton4 = document.querySelector("#roarsoundbutton4");


// Making the button be clicked and a roar sound appears

if (roarButton1) {

  roarButton1.addEventListener("click", function () {

    var audio = new Audio("audio/bengal-tiger-sound-effects_31BebgSW.mp3");
    audio.play();

  });

}

if (roarButton2) {

  roarButton2.addEventListener("click", function () {

    var audio = new Audio("audio/sumatran-tiger-sound-effects_A2KQoZrL.mp3");
    audio.play();

  });

}

if (roarButton3) {

  roarButton3.addEventListener("click", function () {

    var audio = new Audio("audio/siberian-tiger-sound-effects-mp4_QyCzfm0Z.mp3");
    audio.play();

  });

}

if (roarButton4) {

  roarButton4.addEventListener("click", function () {

    var audio = new Audio("audio/south-china-tiger-sound-effects_h2y6hZYS.mp3");
    audio.play();

  });

}

// To save the background when you close the tab:
let selectedBackground = localStorage.getItem('selectedBackground')
const lightTheme = document.querySelector("#lightBackground");
const darkTheme = document.querySelector("#darkBackground");

// To enable the light background:
const enableLightBackground = () => {
  document.body.style.backgroundImage = "url('Images/lightTheme.jpg')";
  localStorage.setItem('selectedBackground', 'Images/lightTheme.jpg')
}

// To enable the dark background:
const enableDarkBackground = () => {
  document.body.style.backgroundImage = "url('Images/darkTheme.jpg')";
  localStorage.setItem('selectedBackground', 'Images/darkTheme.jpg')
}

if (selectedBackground === "Images/lightTheme.jpg") enableLightBackground()
if (selectedBackground === "Images/darkTheme.jpg") enableDarkBackground()

// Adding the new event listener for light theme:
if (lightTheme) {

  lightTheme.addEventListener("click", () => {

    enableLightBackground()

  });
}


// Adding the new event listener for dark theme:
if (darkTheme) {

  darkTheme.addEventListener("click", () => {

    enableDarkBackground()

  });

}


// For dark mode color change:
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('ColorThemeSwitch')

// To enable dark mode:
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

// To disable dark mode:
const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', 'null')
}

if (darkmode === "active") enableDarkmode()

// Is also an if statement, but smaller:
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


// Trying to make a real weather app this time: 
const apiKey = "dfb5a6298d484b45b7593608261009";
const apiUrl = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-button");
const weatherEmoji = document.querySelector(".real-weather-image");


async function checkWeather(city) {
  const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`);

  if (!response.ok) {
    document.querySelector(".real-weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".real-city").innerHTML = data.location.name;
    document.querySelector(".real-temp").innerHTML = Math.round(data.current.temp_c) + "°c";
    document.querySelector(".real-humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".real-wind").innerHTML = data.current.wind_kph + " km/h";

    const condition = data.current.condition.text.toLowerCase();

    if (condition.includes("cloud")) {
      weatherEmoji.src = "Images/clouds.png";
    }
    else if (condition.includes("clear") || condition.includes("sun")) {
      weatherEmoji.src = "Images/Clear.png";
    }
    else if (condition.includes("rain")) {
      weatherEmoji.src = "Images/Rain.png";
    }
    else if (condition.includes("snow")) {
      weatherEmoji.src = "Images/Snow.png";
    }

    document.querySelector(".real-weather").style.display = "grid";
  }



}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
