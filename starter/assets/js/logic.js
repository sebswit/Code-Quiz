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

// checkAnswer => function with if else
//                  correct - adds points (add sound)
//                  incorrect - substract points, time penalty (add sound)
// endQuiz => function displays score, resets timer
// saveScore => file score.js function with initials input(max 3 letters) store it in localStorage
// window.location.replace(url:"scores.js")