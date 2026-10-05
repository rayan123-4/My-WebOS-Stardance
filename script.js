// TIGEROS JAVASCRIPT:

// ALL WINDOWS:
let windows = (".window-box, .gallery-window, .roar-window, .tiger-map-window, .settings-window, .Tiger-Information, .Weather-Window, .real-weather-window, .manual-window, .snake-Game-Window, .calc-Window, .paint-window, .rayan-Link-Window")

// Code for making the DIV element draggable:
document.querySelectorAll(windows).forEach(dragElement);

// Reused one drag system for all windows
// This Function tracks mouse movement so the windows can move.

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

  }
  // I chose to remove this because I felt like it makes the purpose of a dragging button useless.
  // And also most interfaces dont use this, which I took into account when making this change.
    //else {

  //   // if not from the header then from anywhere else in the window:
  //   element.onmousedown = startDragging;

  // }

  // Makes sure that the only thing thats draggable is the header drag image.
  // Only the stardance starling image is draggable, so not the whole window.
  // I have specifically done this if you look a few comments up you will see why.
  var headerImg = element.querySelector("img[src*='Images/stardance.avif']");
  if (headerImg) {
    headerImg.onmousedown = startDragging;
  }


  // Function to handle the mouse down event and initiate dragging:
  function startDragging(e) {

    e = e || window.event;

    e.preventDefault();



    // Making sure window doesnt move randomly


    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = elementMove;

  }

  // Function to handle the dragging of the element:
  function elementMove(e) {

    e = e || window.event;

    e.preventDefault();

    // Compare the new mouse position with the previous one.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX;
    initialY = e.clientY;

    // Setting the boundaries for the window so it cannot go too far up or down or left or right.
    // And Calculating the next position first so the boundaries can be appliied before the element moves.
    var newTop = element.offsetTop - currentY;
    var newLeft = element.offsetLeft - currentX;

    // TOP (specifcally for the Weather windows).
    // This is so the windows can sit more higher instead, because I didnt use translate
    // in the css for the position, so their boundaries if I didn't do this would be different in a bad way.
    if (element.id === "WeatherWindow" || element.id === "RealWeatherWindow") {
      if (newTop < 0) {
        newTop = 0;
      }
    }
    // TOP NORMAL
    else if (newTop < 50 + (element.offsetHeight / 2)) {
      newTop = 50 + (element.offsetHeight / 2);
    }
    // BOTTOM
    if (newTop > window.innerHeight - 60) {
      newTop = window.innerHeight - 60;
    }

    // LEFT
    if (newLeft < 0 + (element.offsetWidth / 2)) {
      newLeft = 0 + (element.offsetWidth / 2);
    }

    // RIGHT
    if (newLeft > window.innerWidth - 100) {
      newLeft = newLeft = window.innerWidth - 100;
    }


    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";

  }

  // Function to stop dragging the element when the mouse button is released:
  function stopDragging() {

    // Dragging is finished, so remove temporary mouse track handles
    document.onmouseup = null;
    document.onmousemove = null;

  }

}

// Identifing the buttons:
var welcomeScreen = document.querySelector("#welcomepage")

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

// Adding event listeners to the open and close button:
// Closing only hides the existening element, so when its opened its not fully re created.
// If you wanna test this theory go the paint app, make a painting then close the window.
function closeWindow(element) {
  element.style.display = "none";
  element.classList.remove("minimized");
}

welcomeScreenClose.addEventListener("click", function () {

  closeWindow(welcomeScreen);

});

welcomeScreenOpen.addEventListener("click", function () {

  openWindow(welcomeScreen);

});



// Code for making the date/time:
// The clock uses the browser time and is updated live below.
function updateTime() {

  var currentTime = new Date().toLocaleString();

  var timeText = document.querySelector("#timeElement");

  timeText.textContent = currentTime;

}

// Making time update:
updateTime();

// One update per second keeps clock live.
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
// Selecting one icon first clears the previous selection.
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

let camera = false

// Same thing for every window, if icon hears a click open window.
// When opened the camera transition is displayed.
// If window is minimized then the animation cannot happen again.
if (galleryIcon) {
  galleryIcon.addEventListener("click", function () {
    openWindow(galleryWindow);

    // If the camera animation has happend, stop here
    if (camera === true) {
      return;
    }

       // Record that animation has happened, so that it does not happen again when icon is tapped.
    camera = true

    // For the sound, flash, camera image, and gallery images
    var cameraFlash = document.querySelector("#cameraFlash");
    var cameraClick = new Audio("audio/cameraClick.mp3");
    var cameraDisplay = document.querySelector("#cameraDisplay");
    var photoViewContent = document.querySelector("#photoViewContent");

    // Camera image reset and flash and gallery content
    cameraDisplay.style.display = "flex";
    // Hide gallery photo
    photoViewContent.style.display = "none";
    cameraFlash.classList.remove("fade-out");


    // Flash after 450ms.
    // Wait for the animation before going to the gallery images.
    setTimeout(function() {
      cameraDisplay.style.display = "none";
      photoViewContent.style.display = "grid";
    // Plays the sound and pop flash image
      cameraFlash.style.display = "block";
      cameraClick.play();
    }, 450);

   // Fade out of the flash.
    setTimeout(function() {
      cameraFlash.classList.add("fade-out");
    }, 800);

    // Hide flash completely.
    setTimeout(function() {
      cameraFlash.style.display = "none";
    }, 2100);
  });
}



if (galleryWindowClose) {
  galleryWindowClose.addEventListener("click", function () {
    closeWindow(galleryWindow);
    // Closing the gallery resets the state, so the animation can happen again when window is opened.
    camera = false
  });
}

// for paint window drag:
dragElement(document.querySelector("#paintWindow"));

var paintWindow = document.querySelector("#paintWindow");
var paintIcon = document.querySelector("#paintIcon");
var paintWindowClose = document.querySelector("#PaintWindow-close");

if (paintIcon) {
  paintIcon.addEventListener("click", function () {
    openWindow(paintWindow);
  });
}

if (paintWindowClose) {
  paintWindowClose.addEventListener("click", function () {
    closeWindow(paintWindow);
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
dragElement(document.querySelector("#WeatherWindow"));

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

// Allow handle to be selected.
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
    // To make the roars play one at a time and not all at once.
    if (window.audioStopper) {
      // Stores the current roar so that if another roar is playing the one stored stops,
      // before starting the new roar.
      window.audioStopper.pause();
      window.audioStopper.currentTime = 0;
    }

    var audio = new Audio("audio/bengal-tiger-sound-effects_31BebgSW.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton2) {

  roarButton2.addEventListener("click", function () {
    if (window.audioStopper) {
      window.audioStopper.pause();
      window.audioStopper.currentTime = 0;
    }

    var audio = new Audio("audio/sumatran-tiger-sound-effects_A2KQoZrL.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton3) {

  roarButton3.addEventListener("click", function () {
    if (window.audioStopper) {
      window.audioStopper.pause();
      window.audioStopper.currentTime = 0;
    }

    var audio = new Audio("audio/siberian-tiger-sound-effects-mp4_QyCzfm0Z.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}

if (roarButton4) {

  roarButton4.addEventListener("click", function () {
    if (window.audioStopper) {
      window.audioStopper.pause();
      window.audioStopper.currentTime = 0;
    }

    var audio = new Audio("audio/south-china-tiger-sound-effects_h2y6hZYS.mp3");
    window.audioStopper = audio;
    audio.play();

  });

}



// To save the background when you close the tab:
// Save the selected background in localStorage.
// This means that the background is still the same as the user left it, when refresh or returning to the page.
let selectedBackground = localStorage.getItem('selectedBackground')
const lightTheme = document.querySelector("#lightBackground");
const darkTheme = document.querySelector("#darkBackground");

// To enable the light background:
const enableLightBackground = () => {
  document.body.style.backgroundImage = "url('Images/lightTheme.jpg')";
  // Interface remmebers, since localStorage.
  localStorage.setItem('selectedBackground', 'Images/lightTheme.jpg')
}

// To enable the dark background:
const enableDarkBackground = () => {
  document.body.style.backgroundImage = "url('Images/darkTheme.jpg')";
  // Interface remmebers, since localStorage.
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

// Is also like an if statement, but smaller:
      themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
      })


// Trying to make a real weather app this time: 
// Api key and url.
// REAL WEATHER APP: used for current weather searches.
    const apiKey = "88d0ea56b63f4f9188a65331261109";
    const apiUrl = "https://api.weatherapi.com/v1/current.json";

    const searchBox = document.querySelector("#city-input");
    const searchBtn = document.querySelector("#search-button");
    const weatherEmoji = document.querySelector(".real-weather-image");


    // Waiting for the api's response, check for failers, and then return data to update the weather window
    async function checkWeather(city) {
      if (!city.trim()) {
        alert("Please enter a city name.");
        return;
      }

      try {

        // Making the api show results:
        // Makes sure the code is correct, no spaces, or special characters.
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || "Weather request failed.");
        }

        // Api returns returns a lot of data so only extracting the specific ones that we want.
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

    // Search can use enter and the displayed button. Two listeners below.
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });

    searchBox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkWeather(searchBox.value);
      }
    });


    // Secret stardance trio button in bottom right corner:
    // This is secret so its not with the normal app icons.
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
// The canvas is the play area, and the variables display the game state between ticks.
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
    let shownAlert0 = false;

// Setting snake positon
// Storing each snake part as a (x, y) position.
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

    // The number at the bottom is the speed of the snake.
    function nextTick(){
      // Redraws the board, moves the snake, check for game over, and schedules the next tick.
      if(running) {
        setTimeout(() => {
          clearBoard();
          drawFood();
          moveSnake();
          drawSnake();
          checkGameOver();
          nextTick();
        }, 150)
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
      // Food generated on same grid as snake, making food not appear between snake position.
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
      // Add a new head position on every move
      // If food not eaten, remove the tail so length stays the same.
      const snakeHead = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};

      snake.unshift(snakeHead);
    // If food is eaten:
    // Give new tail length.
      if(snake[0].x === foodX && snake[0].y === foodY){
        score += 1;
        scoreText.textContent = score;

      // The achievement alert.
        if (score === 2) {
          shownAlert0 = true;
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
        // Keep whichever score is the highest and then save it locally.
        // Interface remmebers, since localStorage.
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
      // Changes drawing style only, everything else stays same, so the game is not pay to win.
      currentSkin = selectedSkin;

      if (!running) {
        clearBoard();
        drawFood();
        drawSnake();
      }
    }

// The snake body
    // Draws head seperatly so it can have emoji tiger face
    // Draw body with the selected skin.
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
      // Convert arrow keys into velocity changes to prevent reversal into snake body.
      const gameKeyPressed = event.keyCode;
      const LEFTkey = 37;
      const UPkey = 38;
      const RIGHTkey = 39;
      const DOWNkey = 40;

      const goingLeft = (xVelocity == -unitSize);
      const goingUp = (yVelocity == -unitSize);
      const goingRight = (xVelocity == unitSize);
      const goingDown = (yVelocity == unitSize);

      // Make it easy to check the pressed key and direction.
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
      // If you try leave the canvas (hitting a wall) then its game over.
      // Or the snake touches it's body.
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
      // Check at index 1, because index 0 is the head.
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

// Reset game function.
    // Reset the score without deleting highscore and reset the current position.
    function resetGame(){
      score = 0;
      xVelocity = unitSize;
      yVelocity = 0;
      running = true;
      hasShownAlert0 = false;

      snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
      ];
      gameStart();

    };

 //Calculator:
// The array containing all of the buttons the calculator has.
    const buttonValues = [
      "AC", "+/-", "%", "÷",
      "7", "8", "9", "×",
      "4", "5", "6", "-",
      "1", "2", "3", "+",
      "0", ".", "="
    ];

    const rightSymbols = ["÷", "×", "-", "+", "="];
    const topSymbols = ["AC", "+/-", "%"];

    const display = document.getElementById("display");

// A+B, A×B, A-B, A÷B
// First number = A, selected operator (x, +, -, ...), and the second number = B.
    let A = 0;
    let operator = null;
    let B = null;

    function clearAll() {
      A = null;
      operator = null;
      B = null;
    }

    for (let i = 0; i < buttonValues.length; i++) {
      let value = buttonValues[i];
      let button = document.createElement("button");
      button.innerText = value;

    //styling button colors
      if (value == "0") {
        button.style.width = "180px";
        button.style.gridColumn = "span 2"; //take up 2 columns
      }
      else if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
      }
      else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
      }

      // Process button clicks
      button.addEventListener("click", function() {
        // Calculate the result when "=" is pressed.
        if (rightSymbols.includes(value)) {
          if (value == "=") {
            if (A != null && operator != null) {
              let currentCalcDisplay = display.value;
              let operatorIndex = currentCalcDisplay.indexOf(operator);
              // If the display has both numbers and the operator, so the second number is after the operator
              B = currentCalcDisplay.slice(operatorIndex + 1);

              let numA = Number(A);
              let numB = Number(B);

              // Calculations
              if (operator == "÷") {
                display.value = numA/numB;
              }
              else if (operator == "×") {
                display.value = numA*numB;
              }
              else if (operator == "-") {
                display.value = numA-numB;
              }
              else if (operator == "+") {
                display.value = numA+numB;
              }
              clearAll();
            }
          }
          else {
           if (operator == null && display.value != "") {
             A = display.value;
                   operator = value; //÷ × - +
                   display.value += value;
                 }

               }
             }
        else if (topSymbols.includes(value)) { //AC +/- %
          if (value == "AC") {
            clearAll();
            display.value = "";
          }
          else if (value == "+/-") {
            if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") { //remove -
                      display.value = display.value.slice(1);
                    } else { //add -
                      display.value = "-" + display.value;
                    }
                  }
                }
                else if (value == "%") {
                  display.value = Number(display.value) / 100;
                }
              }
        else { //digits or .
          if (value == ".") {
                // Check number before adding ".", so that there is not multiple decimal points.
            let currentCalcInput = operator ? display.value.split(operator)[1] : display.value;
            if (currentCalcInput != "" && !currentCalcInput.includes(".")) {
              display.value += value;
            }
          }
            //not a dot, number instead
          else if (display.value == "0") {
            display.value = value;
          }
          else {
            display.value += value;
          }
        }
      });

    //add button to calculator
      document.getElementById("buttons").appendChild(button);
    }

// Paint canvas window:
    // Constant
    // The canvas holding the drawing.
    // And the content such as the buttons, undo, download...
    const paintBoard = document.getElementById("paintBoard");
    const paintContext = paintBoard.getContext("2d");

    // Let variables
    let restore_art = [];
    let artIndex = -1;
    let isDrawing = false;
    const colorPicker = document.getElementById("color-picker");
    const brushSize = document.getElementById("brush-size");
    const clearButton = document.getElementById("paint-clear-button");
    const fillButton = document.getElementById("paint-fill-button");
    const undoButton = document.getElementById("paint-undo-button");
    const downloadButton = document.getElementById("paint-download-button");


// if mouse is drawing, function:
    paintBoard.addEventListener("mousedown", (e) => {
      // Begin the stroke where the mouse is pressed.
      // Then the mouse events continue in the direction.
      isDrawing = true

      paintContext.beginPath();
      paintContext.moveTo(e.offsetX, e.offsetY);

    });
    // If the mouse is not drawing
    paintBoard.addEventListener("mouseup", (e) => {
      isDrawing = false;
      paintContext.beginPath();
      // When stroke is finished, save the canvas.
      if ( e.type != 'mouseout') {
        restore_art.push(paintContext.getImageData(0, 0, paintBoard.width, paintBoard.height));
        artIndex += 1;
      }
    });

// Event listeners for drawing
    paintBoard.addEventListener("mouseout", () => {isDrawing = false});
    paintBoard.addEventListener("mousemove", draw);
    paintBoard.style.touchAction = "none";

    // Event listeners for the fill, clear, download buttons
    clearButton.addEventListener("click", clearCanvas);
    fillButton.addEventListener("click", fillCanvas);
    downloadButton.addEventListener("click", downloadImage);

    // Event listener for the undo button
    if (undoButton) {
      undoButton.addEventListener("click", undo_last);
    }

     // The drawing function to make the pen draw, connected to the event listener for draw.
    // Continue the current brush stroke by drawing.
    function draw(e) {
      if (!isDrawing) return;

      // Brush color, size and shape
      paintContext.lineWidth = brushSize.value;
      paintContext.lineCap = "round";
      paintContext.strokeStyle = colorPicker.value;

      // Movement of the pen
      paintContext.lineTo(e.offsetX, e.offsetY);
      paintContext.stroke();
      paintContext.moveTo(e.offsetX, e.offsetY);
    }

    // For clearing the canvas.
    function clearCanvas() {
      // Also saved to the undo history, so that it's not perminant.
      paintContext.clearRect(0, 0, paintBoard.width, paintBoard.height);
      restore_art.push(paintContext.getImageData(0, 0, paintBoard.width, paintBoard.height));
      artIndex += 1;
    }

    // For filling the canvas with a color.
    function fillCanvas() {
      // Fill canvas with the selected color. Also saved to the undo history.
      paintContext.fillStyle = colorPicker.value;
      paintContext.fillRect(0, 0, paintBoard.width, paintBoard.height);
      restore_art.push(paintContext.getImageData(0, 0, paintBoard.width, paintBoard.height));
      artIndex += 1;
    }

    // Function to download the image to the users computer:
    // Conver the canvas to a PNG and trigger a browser download.
    function downloadImage() {
      // Link tag constant
      const imageLink = document.createElement("a")
      // Name of the file and file type
      imageLink.download = `tigerDrawing-${Date.now()}.png`;
      imageLink.href = paintBoard.toDataURL("image/png");
      imageLink.click();
    }


    // Undo button, to undo the last edit:
    // Everything the user does is saved in the undo history ,
    // so that when the undo button is pressed, the user can return the previous state of the canvas.
    function undo_last() {
      if ( artIndex <= 0 ) {
        paintContext.clearRect(0, 0, paintBoard.width, paintBoard.height);
        restore_art = [];
        artIndex = -1;
      } else {
        restore_art.pop();
        artIndex -= 1;
        paintContext.putImageData(restore_art[artIndex], 0, 0);
      }
    }

// Multiple link button for the link winddw:

    var linkWindow = document.querySelector("#rayanLinkWindow");
    var linkBtn = document.querySelector("#linkBtn");
    var linkWindowClose = document.querySelector("#link-close");

    if (linkBtn) {
      linkBtn.addEventListener("click", function () {
        openWindow(linkWindow);
      });
    }

    if (linkWindowClose) {
      linkWindowClose.addEventListener("click", function () {
        closeWindow(linkWindow);
      });
    }

// Making the app icons stay hover light if they open:

// List of icons:
    var iconList = document.querySelectorAll(
      ".tiger-gallery, .roar-Icon, .tiger-map-icon, .settings-Icon, .information-icon, .real-weather-icon, .weather-icon, .manual-icon, .snake-icon, .calc-Icon, .paint-Icon"
      );

// List of the images:
    var windowMapping = {
      // This links each icon to it's corrisponding window.
      // So that it can manage every window with the code below.
      "tiger-gallery": "#gallerywindow",
      "roar-Icon": "#roarwindow",
      "tiger-map-icon": "#tigermapwindow",
      "settings-Icon": "#settingswindow",
      "information-icon": "#TigerInformation",
      "real-weather-icon": "#RealWeatherWindow",
      "weather-icon": "#WeatherWindow",
      "manual-icon": "#ManualWindow",
      "snake-icon": "#snakeGameWindow",
      "calc-Icon": "#calcWindow",
      "paint-Icon": "#paintWindow"
    };

    function updateIconHoverDisplay() {

      // Makes the icons in sync with the corrisponding window
      // So that it can be highlighted, when opened or hovered over.
      // Go through every desktop icon:
      for (var icon of iconList) {

        var isCurrentAppOpen = false;

    // Look through the window mapping:
        for (var iconClass in windowMapping) {

      // Check if this icon belongs to this window:
          if (icon.classList.contains(iconClass)) {

            var windowId = windowMapping[iconClass];
            var appWindow = document.querySelector(windowId);

        // Check if the window exists and is open:
            if (appWindow) {
              var actualDisplay = window.getComputedStyle(appWindow).display;

              if (actualDisplay === "flex" || appWindow.classList.contains("minimized")) {
                isCurrentAppOpen = true;
                windows.style.zIndex = "499";
              }
            }
          }
        }

    // App is open OR mouse is hovering over icon:
        if (isCurrentAppOpen || icon.matches(":hover")) {
          icon.style.filter = "drop-shadow(0 0 10px #ff7700)";
          icon.style.transform = "scale(1.1)";
        }

    // Nothing happening
        else {
          icon.style.filter = "";
          icon.style.transform = "";
        }
      }
    }

// Keeps checking so it updates live:
    setInterval(updateIconHoverDisplay, 100);

// To make if you tap a window it gets positioned to the front:
    let highestZIndex = 500;

// List of my windows in the constant 'windows'
    document.querySelectorAll(windows
      ).forEach(windowBehindFunction);

    function windowBehindFunction(windowBehind) {

      // If window is behind and gets pressed then move to highest z index (the front).
      if (windowBehind) {
        windowBehind.addEventListener("click", function () {
          highestZIndex++;
          windowBehind.style.zIndex = highestZIndex;
        });
      }
    }

    // TigerOS Minimizer Button
    // Makes all minimize buttons on all windows work the same.
    // So that it finds whatever windows minimize button is pressed.
    document.querySelectorAll(".minimize-button").forEach(function(button) {
  // event listener for the minize button
      button.addEventListener("click", function(e) {

    // Stop the click from affecting the window
        e.stopPropagation();

    // Finding the window button for the specific window, before hiding it.
        const windowMinimize = button.closest(windows);

    // Minimize the window
        if (windowMinimize) {
          windowMinimize.style.display = "none"
          windowMinimize.classList.add("minimized");
        }
      });
    });
