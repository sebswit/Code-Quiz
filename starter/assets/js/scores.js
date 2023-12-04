// High Scores Container
let highScore = document.querySelector("#highScore");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#goBack");

// Event listener to clear scores 
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload(scores);
});

// Retrieves local storage 
let scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

if (scores !== null) {
  for (var i = 0; i < scores.length; i++) {
    let createLi = document.createElement("li");
    createLi.textContent = scores[i].initials + " " + scores[i].score;
    highScore.appendChild(createLi);
  }
}

// Event listener to move to index page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});

