var scoreData = JSON.parse(localStorage.getItem("scoreDetails"));
var itemEl = document.createElement("li");
scoreData[0].parentElement.appendChild(itemEl);
itemEl.id = "item";

//Experimenting with creating a loop collecting local Storage data and appending it as a listed item to be displayed in our highscores.html.

for (i = 0; i < scoreData.length; i++) {
  itemEl.appendChild(scoreData[i]);
}
