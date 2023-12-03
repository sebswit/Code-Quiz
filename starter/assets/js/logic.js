// const start button 
const startButton = document.getElementById("start");
// const questionsBeginner => document.querySelector??
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
let level = "beginner";
let quizContainer = easyContainer;
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
// startQuiz => function using button, timer, and radiobutton for level
// showQuestion => function with loop based on radiobutton
// checkAnswer => function with if else
//                  correct - adds points (add sound)
//                  incorrect - substract points, time penalty (add sound)
// endQuiz => function displays score, resets timer
// saveScore => file score.js function with initials input(max 3 letters) store it in localStorage
// window.location.replace(url:"scores.js")