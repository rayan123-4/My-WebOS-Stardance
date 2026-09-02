function updateTime() {

    var currentTime = new Date().toLocaleString();

    var timeText = document.querySelector("#timeElement");

    timeText.innerHTML = currentTime;

}

updateTime();

setInterval(updateTime, 1000);
