var timerEl = document.querySelector(".timeLeft");
//querySelector applies to only one. so do a querySelectorAll to basically create an array of elements JS is collecting the classes from.
var questionEl = document.querySelectorAll(".questionSection");
var inputEl = document.querySelector("#game-complete");
// var startButtonEl = document.querySelector(".startButton");
var counter;
var time;

//Since we are going on a new page, the startButton does not exist on the new game.html page.
// startButtonEl.addEventListener("click", tickTock);
//in the setInterval parentheses, it is calling the timer function every 1000 miliseconds.

//In For Loop, since querySelectorAll makes everything selected act as an array, we can use a For Loop to call each index of the question Sections to display as none.

function tickTock() {
  time = 5;
  counter = setInterval(timer, 1000);
  function timer() {
    time--;
    timerEl.textContent = time;
    if (time === 0) {
      clearInterval(counter);
      timerEl.textContent = "Stop Quiz!";
      for (i = 0; i < questionEl.length; i++) {
        questionEl[i].style.display = "none";
      }
      inputEl.style.display = "block";
    }
  }
}
tickTock();
