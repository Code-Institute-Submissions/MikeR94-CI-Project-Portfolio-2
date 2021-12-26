let nextBtn = document.getElementById("next-btn").addEventListener("click", toDifficultyGameArea);
let answer1 = document.getElementById("answer1-btn");
let answer2 = document.getElementById("answer2-btn");
let answer3 = document.getElementById("answer3-btn");
let answer4 = document.getElementById("answer4-btn");
let currentQuestion = 0;
let questionText = document.getElementById("question-text");
let answerClicked = false;
let shuffledQuestions = 0;
let quizLength = 10;
let currentQuestionSet = {};


function runQuiz(event) {
  let difficulty = event.target.value;
  if (difficulty === "easy") {
    shuffledQuestions = easyQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
  } else if (difficulty === "medium") {
    shuffledQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
  } else if (difficulty === "hard") {
    shuffledQuestions = hardQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
  }
  document.getElementById("difficulty-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
  buildQuestions();
}
 
function buildQuestions() {
  if (currentQuestion >= quizLength) {
    document.getElementById("question-container").classList.add("hide");
    document.getElementById("results-container").classList.remove("hide");
  } else {
    for (let i = 0; i < currentQuestionSet.length; i++) {
      questionText.innerHTML = currentQuestionSet[currentQuestion].question;
      answer1.innerHTML = currentQuestionSet[currentQuestion].a;
      answer2.innerHTML = currentQuestionSet[currentQuestion].b;
      answer3.innerHTML = currentQuestionSet[currentQuestion].c;
      answer4.innerHTML = currentQuestionSet[currentQuestion].d;
      document.getElementById("answer1-btn").onclick = checkAnswer;
      document.getElementById("answer2-btn").onclick = checkAnswer;
      document.getElementById("answer3-btn").onclick = checkAnswer;
      document.getElementById("answer4-btn").onclick = checkAnswer;
    }
  }
}

function checkAnswer() {
  let userAnswer = this.value;
  if (userAnswer === currentQuestionSet[currentQuestion].answer) {
    answerClicked = true;
    currentQuestion++;
    buildQuestions();
  } else {
    answerClicked = true;
    currentQuestion++;
    buildQuestions();
  }
}

function toDifficultyGameArea() {
  document.getElementById("start-game-area").classList.add("hide");
  document.getElementById("difficulty-game-area").classList.remove("hide");
}


/**
 * Loop through the categories and add a click event listener to load the difficulty that the user has selected
 */
let difficultySelected = document.getElementsByClassName("difficulty-btn");
for (let i = 0; i < difficultySelected.length; i++) {
  difficultySelected[i].addEventListener("click", runQuiz);
}

/**
 * Loop through the "home-icon" class and add a click event listener to refresh the
 * game and load the home page
 */
let goHome = document.getElementsByClassName("home-icon");
for (let i = 0; i < goHome.length; i++) {
  goHome[i].addEventListener("click", () => {
    window.location.reload();
  });
}

/**
 * Loop through both "hamburger" and "menu" class and add a click event listener to open the menu
 * if the user clicks the hamburger
 */
let toggleMenu = document.getElementsByClassName("hamburger");
let menu = document.getElementsByClassName("menu");
for (let i = 0; i < toggleMenu.length && menu.length; i++) {
  toggleMenu[i].addEventListener("click", () => {
    menu[i].classList.toggle("hide");
  });
}

/**
 * Loop through the rules button and add a click event listener to open the rules page and hide the
 * other relevant pages
 */
let goRules = document.getElementsByClassName("rules-btn");
for (let i = 0; i < goRules.length; i++) {
  goRules[i].addEventListener("click", () => {
    document.getElementById("rules-game-area").classList.remove("hide");
    document.getElementById("hiscores-game-area").classList.add("hide");
    document.getElementById("contact-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
  });
}

/**
 * Loop through the hiscores button and add a click event listener to open the hiscores page and hide the
 * other relevant pages
 */
let goHiscores = document.getElementsByClassName("hiscores-btn");
for (let i = 0; i < goHiscores.length; i++) {
  goHiscores[i].addEventListener("click", () => {
    document.getElementById("hiscores-game-area").classList.remove("hide");
    document.getElementById("rules-game-area").classList.add("hide");
    document.getElementById("contact-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
  });
}

/**
 * Loop through the contact button and add a click event listener to open the contact page and hide the
 * other relevant pages
 */
let goContact = document.getElementsByClassName("contact-btn");
for (let i = 0; i < goContact.length; i++) {
  goContact[i].addEventListener("click", () => {
    document.getElementById("contact-game-area").classList.remove("hide");
    document.getElementById("rules-game-area").classList.add("hide");
    document.getElementById("hiscores-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
  });
}
