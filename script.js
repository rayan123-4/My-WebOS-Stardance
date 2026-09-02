function updateTime() {

    var currentTime = newDate().toLocaleString();

    var timeText = document.querySelector("#timeElement");

    timeText.innerHTML = currentTime;

}

setInterval(updateTime, 1000);
