  
// Code for making the DIV element draggable:
document.querySelectorAll(".window-box, .gallery-window, .roar-window, .tiger-map-window, .settings-window, .Tiger-Information, .Weather-Window, .real-weather-window, manual-window, .snake-Game-Window, .calc-Window").forEach(dragElement);

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

    if (["INPUT", "BUTTON", "TEXTAREA", "SELECT"].includes(e.target.tagName)) {
      return;
    }

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
dragElement(document.querySelector("#gallerywindow"));

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

// For calculator drag window
dragElement(document.querySelector("#calcWindow"));

var calcWindow = document.querySelector("#calcWindow");
var calcIcon = document.querySelector("#calcIcon");
var calcWindowClose = document.querySelector("#CalcWindow-close");

if (calcIcon) {
  calcIcon.addEventListener("click", function () {
    openWindow(calcWindow);
  });
}

// Making map app closable:
if (calcWindowClose) {
  calcWindowClose.addEventListener("click", function () {
    closeWindow(calcWindow);
  });
}

// For drag on Tiger Snake game window:
dragElement(document.querySelector("#snakeGameWindow"));

var snakeWindow = document.querySelector("#snakeGameWindow");
var snakeIcon = document.querySelector("#snakeIcon");
var snakeWindowClose = document.querySelector("#SnakeWindow-close");

if (snakeIcon) {
  snakeIcon.addEventListener("click", function () {
    openWindow(snakeWindow);
  });
}

if (snakeWindowClose) {
  snakeWindowClose.addEventListener("click", function () {
    closeWindow(snakeWindow);
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

// For Instruction Manual window drag:
dragElement(document.querySelector("#ManualWindow"));

var ManualWindow = document.querySelector("#ManualWindow");
var ManualIcon = document.querySelector("#manualicon");
var ManualWindowClose = document.querySelector("#Manualwindow-close");

dragElement(ManualWindow);

if (ManualIcon) {
  ManualIcon.addEventListener("click", function () {
    openWindow(ManualWindow);
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

// Making Manual Window closable:
if (ManualWindowClose) {
  ManualWindowClose.addEventListener("click", function () {
    closeWindow(ManualWindow);
  });
}

// Making roar app closable:
if (roarWindowClose) {
  roarWindowClose.addEventListener("click", function () {
    closeWindow(roarWindow);

    // Making the Roar sound turn off when tab closed: 
    if (window.audioStopper) {
      window.audioStopper.pause();
    }
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


// Making the button be clicked and a roar sound appears:

if (roarButton1) {

  roarButton1.addEventListener("click", function () {

    var audio = new Audio("audio/bengal-tiger-sound-effects_31BebgSW.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton2) {

  roarButton2.addEventListener("click", function () {

    var audio = new Audio("audio/sumatran-tiger-sound-effects_A2KQoZrL.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton3) {

  roarButton3.addEventListener("click", function () {

    var audio = new Audio("audio/siberian-tiger-sound-effects-mp4_QyCzfm0Z.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton4) {

  roarButton4.addEventListener("click", function () {

    var audio = new Audio("audio/south-china-tiger-sound-effects_h2y6hZYS.mp3");
    window.audioStopper = audio;
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
const apiKey = "88d0ea56b63f4f9188a65331261109";
const apiUrl = "https://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-button");
const weatherEmoji = document.querySelector(".real-weather-image");


async function checkWeather(city) {
  if (!city.trim()) {
    alert("Please enter a city name.");
    return;
  }

  try {

    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Weather request failed.");
    }

    document.querySelector(".real-city").textContent = data.location.name;
    document.querySelector(".real-temp").textContent = Math.round(data.current.temp_c) + "°c";
    document.querySelector(".real-humidity").textContent = data.current.humidity + "%";
    document.querySelector(".real-wind").textContent = data.current.wind_kph + " km/h";

const defaultEmoji = document.querySelector(".default-weather-image");

    if (weatherEmoji) {

      weatherEmoji.src = "https:" + data.current.condition.icon;

      weatherEmoji.style.display = "block"

      if (defaultEmoji)  {
        defaultEmoji.style.display = "none";
      }

    }
    document.querySelector(".real-weather").style.display = "grid";
  } catch (error) {
    alert(error.message);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


  // Secret stardance trio button in bottom right corner:
  var secretButton  = document.querySelector("#stardanceButton");

  if (secretButton) {
    secretButton.addEventListener("click", function () {

      var secretAudio = new Audio("audio/secretDing.mp3");
    secretAudio.play();

      // Shows a message from the browser:
      alert("🔓 TIGER OS SECRET FEATURE UNLOCKED!");

      var allSecretImages = document.querySelectorAll(".stardance-Trio")

      allSecretImages.forEach(function (image) {
        image.style.display = "block";
      });

    });
  }

// Making the Tiger Snake game:
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#gameResetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "green";
const snakeColor = "orange";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
const solidSkinBtn = document.querySelector("#solidSkinBtn");
const stripeSkinBtn = document.querySelector("#stripeSkinBtn");
const highScoreText = document.querySelector("#highScoreText");
const scoreAlert0 = document.querySelector("#scoreAlert0");
const scoreAlert1 = document.querySelector("#scoreAlert1");
const scoreAlert2 = document.querySelector("#scoreAlert2");
const scoreAlert3 = document.querySelector("#scoreAlert3");

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let currentSkin = "stripes";
let highScore = localStorage.getItem("highScoreText") || 0;

// Setting snake positon
let snake = [
  {x:unitSize * 4, y:0},
  {x:unitSize * 3, y:0},
  {x:unitSize * 2, y:0},
  {x:unitSize, y:0},
  {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

if (solidSkinBtn) {
  solidSkinBtn.addEventListener("click", () => setSnakeSkin("orange"));
}

if (stripeSkinBtn) {
  stripeSkinBtn.addEventListener("click", () => setSnakeSkin("stripes"));
}

gameStart();

function gameStart(){
  running = true;
  scoreText.textContent = score;

  const highScoreElement = document.querySelector("#highScoreText");
  if (highScoreElement) {
    highScoreElement.textContent = highScore;
  }

  createFood();
  drawFood();
  nextTick();
};

function nextTick(){
  if(running) {
    setTimeout(() => {
      clearBoard();
        drawFood();
        moveSnake();
        drawSnake();
        checkGameOver();
        nextTick();
    }, 130)
  }
  else {
    displayGameOver();
  }
};

function clearBoard(){
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function createFood(){
  function randomFood(min, max){
    const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0,gameWidth - unitSize);
  foodY = randomFood(0,gameHeight - unitSize);
};

function drawFood(){
  ctx.font = `${unitSize}px serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("🥩", foodX, foodY)
};

function moveSnake(){
  const snakeHead = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};

    snake.unshift(snakeHead);
    // If food is eaten:
    if(snake[0].x === foodX && snake[0].y === foodY){
      score += 1;
      scoreText.textContent = score;

      if (score === 1) {
        scoreAlert0.style.display = "block";
        setTimeout(() => { scoreAlert0.style.display = "none"; }, 2000);
     }

      if (score === 10) {
        scoreAlert1.style.display = "block";
        setTimeout(() => { scoreAlert1.style.display = "none"; }, 2000);
     }

      if (score === 20) {
        scoreAlert2.style.display = "block";
        setTimeout(() => { scoreAlert2.style.display = "none"; }, 2000);
     }

     if (score === 30) {
        scoreAlert3.style.display = "block";
        setTimeout(() => { scoreAlert3.style.display = "none"; }, 2000);
     }

      highScore = score >= highScore ? score : highScore;
      localStorage.setItem("highScoreText", highScore);

      const highScoreElement = document.querySelector("#highScoreText")
      if (highScoreElement) {
        highScoreElement.textContent = highScore;
      }


      createFood();
    }
    else{
      snake.pop();
    }
};

function setSnakeSkin(selectedSkin) {
  currentSkin = selectedSkin;

  if (!running) {
    clearBoard();
    drawFood();
    drawSnake();
  }
}

function drawSnake(){
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)"; 

  snake.forEach((snakePart, index) => {
    if(index === 0) {
      ctx.fillStyle = "#e67e22";
      ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
     ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);

      ctx.font = `${unitSize}px serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("🐯", snakePart.x, snakePart.y, unitSize, unitSize)
    } else {
      if (currentSkin === "orange") {
        ctx.fillStyle = "#e67e22";
      } else {

      if(index % 2 == 0) {
        ctx.fillStyle = "#e67e22";
      } else {
        ctx.fillStyle = "#111810";
      }
    }
      ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
     ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    }
  })
};

function changeDirection(event){
  const gameKeyPressed = event.keyCode;
  const LEFTkey = 37;
  const UPkey = 38;
  const RIGHTkey = 39;
  const DOWNkey = 40;

  const goingLeft = (xVelocity == -unitSize);
  const goingUp = (yVelocity == -unitSize);
  const goingRight = (xVelocity == unitSize);
  const goingDown = (yVelocity == unitSize);


  switch(true){
      case(gameKeyPressed == LEFTkey && !goingRight):
          xVelocity = -unitSize;
          yVelocity = 0;
          break;

      case(gameKeyPressed == UPkey && !goingDown):
          xVelocity = 0;
          yVelocity = -unitSize;
          break;

      case(gameKeyPressed == RIGHTkey && !goingLeft):
          xVelocity = unitSize;
          yVelocity = 0;
          break;
      
      case(gameKeyPressed == DOWNkey && !goingUp):
          xVelocity = 0;
          yVelocity = unitSize; 
          break;
  }

};

function checkGameOver(){
    switch(true) {
        case (snake[0].x < 0):
          running = false;
          break;

        case (snake[0].x >= gameWidth):
          running = false;
          break;

        case (snake[0].y < 0):
          running = false;
          break;

        case (snake[0].y >= gameHeight):
          running = false;
          break;
  }
  for(let i = 1; i < snake.length; i+=1){
    if(snake[i].x == snake[0].x && snake[i].y == snake[0].y ){
      running = false;
    }

  }

};

function displayGameOver(){
  ctx.font = "50px MV Boli";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2)
  running = false;
};

function resetGame(){
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  running = true;

  snake = [
  {x:unitSize * 4, y:0},
  {x:unitSize * 3, y:0},
  {x:unitSize * 2, y:0},
  {x:unitSize, y:0},
  {x:0, y:0}
];
gameStart();

};

