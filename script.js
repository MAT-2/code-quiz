var timerEl = document.querySelector(".timeLeft");
//querySelector applies to only one. so do a querySelectorAll to basically create an array of elements JS is collecting the classes from.
var questionEl = document.querySelectorAll(".questionSection");
var inputEl = document.querySelector("#game-complete");
// var startButtonEl = document.querySelector(".startButton");
var counter;
var time;
//variables to capture between wrong vs correct answer choices
//IMPORTANT NOTE: using querySelector only selects the first button, since it is only wanting to use one element. And querySelectorAll does not work either.
var wrongEl = document.querySelectorAll(".wrongAnswer");
var correctEl = document.querySelectorAll(".correctAnswer");
//variable to capture input when user puts name for scoreboard.
var inputName = document.getElementById("name");
//variable for submit button
var submitBtn = document.getElementById("submit");
var saveBtn = document.getElementById("save");

//Since we are going on a new page, the startButton does not exist on the new game.html page.
// startButtonEl.addEventListener("click", tickTock);
//in the setInterval parentheses, it is calling the timer function every 1000 miliseconds.

//In For Loop, since querySelectorAll makes everything selected act as an array, we can use a For Loop to call each index of the question Sections to display as none.

function tickTock() {
  time = 60;
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

//Submit button to stop timer and display input form. Also stops the time.

submitBtn.addEventListener("click", () => {
  clearInterval(counter);
  questionContainer.style.display = "none";
  inputEl.style.display = "block";
});

//Creating an event listener whenever a correct answer button is pressed, highlight green.
//Have to create a For Loop grabbing it like an array and then including an addEventListener.
correctEl.addEventListener("click", () => {
  correctEl.style.backgroundColor = "#81f683";
});

//Creating an event listener whenever a wrong answer button is pressed, highlight red.
wrongEl.addEventListener("click", () => {
  wrongEl.style.backgroundColor = "#ec5858";
});

//localStorage is applied for all pages within the domain.

saveBtn.addEventListener("click", saveScore);

function saveScore() {
  var scoreDetails = {
    inputName: inputName.value.trim(),
    time: time,
  };
  console.log(scoreDetails);
  var scoreData = JSON.parse(localStorage.getItem("scoreDetails")) || [];
  console.log(scoreData);
  scoreData.push(scoreDetails);
  localStorage.setItem("scoreDetails", JSON.stringify(scoreData));
}
