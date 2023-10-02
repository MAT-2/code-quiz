var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", tickTock);

function tickTock() {
  var timeTotal = 60;

  var timeInterval = setInterval(function () {
    timeTotal--;
    timer.textContent;

    if (timeTotal === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
