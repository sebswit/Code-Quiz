// const start button 
const startButton = document.getElementById("start");
// const question title
const questionTitle = document.getElementById("question-title");
// Define your answers
const choices = document.getElementById("choices");
// const initials
const initialsInput = document.getElementById("initials");
//const timer
const myTimer = document.getElementById("Timer");
//const questions
const questionDiv = document.getElementById("questions");
//const time
const time = document.getElementById("time");
// const endscreen
const endScreenDiv = document.getElementById("end-screen");
// Result Container and Score Element
const resultContainer = document.getElementById("feedback");
// const final score
const scoreElement = document.getElementById("final-score");
// submit button
const submitButton = document.getElementById("submit");


let currentQuestion = 0;
let score = 0;
let timer = 0;
let index = 0;
let count = quizContainer.length *15;
let answer = quizContainer[1];

// Timer Function
function updateTimer() {
  time.textContent = count;
count--;
 if (count === 0) {
  alert("Time is up");
  endQuiz();
  }
}


// startQuiz => function using button, timer,
startButton.addEventListener("click", startQuiz);

// function startQuiz
function startQuiz() {
startButton.style.display = "none";
questionDiv.classList.remove("hide");
showQuestion(currentQuestion);
timer = setInterval(updateTimer, 1000);
}
// showQuestion => function with loop
function showQuestion(index, container) {
const currentQuestion = quizContainer[index];
questionTitle.textContent = currentQuestion.question;
choices.textContent = "";
currentQuestion.answers.forEach((answer) => {
  let button = document.createElement("button");
  button.textContent = answer;
  choices.appendChild(button);
  
});
choices.addEventListener("click", checkAnswer);

}
// checkAnswer 

function checkAnswer(event) {
const selectedAnswer = event.target;
const selectedAnswerIndex = quizContainer[index].answers.findIndex(answer => answer === selectedAnswer.textContent);
const isCorrect = JSON.parse(selectedAnswer.getAttribute("data-correct"));

if (selectedAnswerIndex === quizContainer[index].correctIndex) {
      alert("correct");
      }
      else  {
      count -=10;
      alert("wrong");
      }
      
index++;
if (index < quizContainer.length) {
  
  showQuestion(index);
} else {
  endQuiz();
}
}
// endQuiz => function displays score, resets timer
function endQuiz() {
clearInterval(timer);
resultContainer.classList.remove("hide");
scoreElement.textContent = time.textContent;
endScreenDiv.classList.remove("hide");
questionDiv.classList.add("hide");
}

submitButton.addEventListener("click", saveScore);
// saveScore => file score.js function with initials input(max 3 letters) store it in localStorage
function saveScore() {
  const initials = initialsInput.value.trim();

  if (initials !== '') {
      //  Save it to localStorage or send it to a server
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    
    const newScore = {
      initials: initials,
      score: score, 
    };
     // Add the new score to the scores array
  scores.push(newScore);

  // Sort the scores in descending order (highest score first)
  scores.sort((a, b) => b.score - a.score);

  // Save the updated scores array back to local storage
  localStorage.setItem('scores', JSON.stringify(scores));
  alert(`Score saved for ${initials}!`);
  } else {
    alert('Please enter your initials.');
  }
}