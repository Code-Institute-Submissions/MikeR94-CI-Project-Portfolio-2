let nextBtn = document.getElementById("next-btn").addEventListener("click", toDifficultyGameArea);
let loadNextQuestion = document.getElementById("next-question").addEventListener("click", nextQuestion);
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
let score = 0;

/**
 * When the player clicks the next button whilst in the question screen, this function will load the next question
 * and reset the answer buttons so that they are not disabled. It also loops through the answer buttons and removes
 * any styles that have been added on checkAnswer()
 */
function nextQuestion() {
  currentQuestion++;
  buildQuestions();
  document.getElementById("next-question").classList.add("hide");
  document.getElementById("answer1-btn").disabled = false;
  document.getElementById("answer2-btn").disabled = false;
  document.getElementById("answer3-btn").disabled = false;
  document.getElementById("answer4-btn").disabled = false;
  let answerButtons = document.getElementsByClassName("answer-btn");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove("correct");
    answerButtons[i].classList.remove("wrong");
  }
}

/**
 * Depending on what difficulty the player selects, this function then randomly shuffles the questions,
 * removes the difficulty screen and displays the question screen. It then calls buildQuestions() to
 * create a list of questions for the player
 * @param {the target value that the player selected} event
 */
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

/**
 * Checks if the player has answered 10 questions and if not, loop through the questions and
 * display them to the player. It also listens for the players answer and then calls checkAnswer()
 * to validate the answer
 */
function buildQuestions() {
  if (currentQuestion >= quizLength) {
    document.getElementById("question-game-area").classList.add("hide");
    document.getElementById("results-game-area").classList.remove("hide");
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

/**
 * Validates the players answer
 */
function checkAnswer() {
  document.getElementById("answer1-btn").disabled = true;
  document.getElementById("answer2-btn").disabled = true;
  document.getElementById("answer3-btn").disabled = true;
  document.getElementById("answer4-btn").disabled = true;
  let playerAnswer = this.value;
  let correctAnswer = currentQuestionSet[currentQuestion].answer;
  if (playerAnswer === correctAnswer) {
    answerClicked = true;
    incrementScore();
    document.getElementById("next-question").classList.remove("hide");
  } else {
    answerClicked = true;
    document.getElementById("next-question").classList.remove("hide");
  }
  /**
   * Loops through the answer buttons and displays the correct answer if the player has selected the wrong
   * answer. If hte player has selected the wrong answer, it will also highlight that red
   */
  let answerButtons = document.getElementsByClassName("answer-btn");
  for (let i = 0; i < answerButtons.length; i++) {
    if (answerButtons[i].value === correctAnswer) {
      answerButtons[i].classList.add("correct");
    } else if (playerAnswer !== correctAnswer) {
      this.classList.add("wrong");
    }
  }
}

/**
 * When the player clicks the next button, hide the start screen and unhide the the difficulty
 * game screen
 */
function toDifficultyGameArea() {
  document.getElementById("start-game-area").classList.add("hide");
  document.getElementById("difficulty-game-area").classList.remove("hide");
}

/**
 * Increments the player score depending on the difficulty of the questions
 */
function incrementScore() {
  if (currentQuestionSet === easyQuestions) {
    document.getElementById("result-score").innerText = score += 10;
  } else if (currentQuestionSet === mediumQuestions) {
    document.getElementById("result-score").innerText = score += 20;
  } else if (currentQuestionSet === hardQuestions) {
    document.getElementById("result-score").innerText = score += 30;
  }
}

/**
 * Loop through the categories and add a click event listener to load the difficulty that the player has selected
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
 * if the player clicks the hamburger
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
