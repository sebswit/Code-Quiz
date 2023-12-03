// High Scores Container
const highScoreContainer = document.getElementById("highscores");
highScoreContainer.addEventListener("click", function() {
 window.location.replace("highscores.html")});
// Function to display high scores
function displayHighScores() {
    // Get existing scores from local storage or initialize an empty array
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
  
    // Clear the highScoreContainer before displaying scores
    highScoreContainer.innerHTML = '';
  
    // Display each score in the highScoreContainer
    scores.forEach((score, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
      highScoreContainer.appendChild(listItem);
    });
  }


