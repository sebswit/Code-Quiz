// create starting const eg:
// 
// const start button 
const startButton = document.getElementById("start");
// const questionsBeginner => document.querySelector??
// const questionsExpert => document.querrySelectorAll??
// const answers => document.querySelector??
// const initials => ??

// let currentQuestion = 0;
// let score = 0;
// let timer

// Level Typo
levelSwitcher.addEventListener("click", function() {
    if (level === "beginner") {
      level = "beginner";
      quizContainer = easyContainer;
    } else {
      level = "expert";
      quizContainer = hardContainer;
    }
  });
// startQuiz => function using button, timer, and radiobutton for level
// showQuestion => function with loop based on radiobutton
// checkAnswer => function with if else
//                  correct - adds points (add sound)
//                  incorrect - substract points, time penalty (add sound)
// endQuiz => function displays score, resets timer
// saveScore => file score.js function with initials input(max 3 letters) store it in localStorage
// window.location.replace(url:"scores.js")