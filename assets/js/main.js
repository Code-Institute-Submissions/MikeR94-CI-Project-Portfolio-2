let nextBtn = document.getElementById("next-btn").addEventListener("click", toDifficultyGameArea);
let loadNextQuestion = document.getElementById("next-question").addEventListener("click", nextQuestion);
let reloadWebsite = document.getElementById("play-again-btn").addEventListener("click", reload);
let answer1 = document.getElementById("answer1-btn");
let answer2 = document.getElementById("answer2-btn");
let answer3 = document.getElementById("answer3-btn");
let answer4 = document.getElementById("answer4-btn");
let questionText = document.getElementById("question-text");
let audioOffIcon = document.getElementsByClassName("sound-off");
let audioOnIcon = document.getElementsByClassName("sound-on");
let playerName = document.getElementById("player-name");
let currentQuestion = 0;
let answerClicked = false;
let shuffledQuestions = 0;
let quizLength = 8;
let currentQuestionSet = {};
let score = 0;
let determineColour = "unanswered";
let timeLeft;
let timer;
let isPlaying = true;
let answeredCorrect = 0;
let answeredWrong = 0;
let regEx = /^[A-Za-z]+$/;

/**
 * When the player clicks the next button whilst in the question screen, this function will load the next question
 * and reset the answer buttons so that they are not disabled. It also loops through the answer buttons and removes
 * any styles that have been added on checkAnswer()
 */
function nextQuestion() {
  document.getElementById("timer").innerHTML = 30;
  currentQuestion++;
  buildQuestions();
  startTimer();
  buttonSound();
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
 * Small delay to show the next question icon
 */
function showNextQuestionIcon() {
  setTimeout(function () {
    document.getElementById("next-question").classList.remove("hide");
  }, 500);
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
    playerDifficulty = "easy";
  } else if (difficulty === "medium") {
    shuffledQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
    playerDifficulty = "medium";
  } else if (difficulty === "hard") {
    shuffledQuestions = hardQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
    playerDifficulty = "hard";
  }
  document.getElementById("difficulty-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
  buildQuestions();
  startTimer();
  buttonSound();
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
    let player = playerName.value;
    document.getElementById(
      "results-main-text"
    ).innerText = `${player}, you managed to answer ${answeredCorrect} ${playerDifficulty} questions correctly resulting in the total score below.`;
    updateHiscore();
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
    determineColour = "correct";
    answeredCorrect++;
    incrementScore();
    colorPlanets();
    stopTimer();
    correctSound();
    showNextQuestionIcon();
  } else {
    answerClicked = true;
    determineColour = "incorrect";
    answeredWrong++;
    colorPlanets();
    stopTimer();
    incorrectSound();
    showNextQuestionIcon();
  }

  document.getElementById("question-score").innerText = score;

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
 * game screen. If the player does not enter a name, display the error text
 */
function toDifficultyGameArea() {
  if (playerName.value.match(regEx)) {
    buttonSound();
    document.getElementById("start-game-area").classList.add("hide");
    document.getElementById("difficulty-game-area").classList.remove("hide");
    let player = playerName.value;
    let difficultyText = document.getElementById("difficulty-main-text");
    difficultyText.innerText = `Great stuff ${player},  how difficult would you like your questions?`;
  } else {
    document.getElementById("error-text").classList.remove("hide");
    buttonSound();
  }
}

/**
 * Increments the player score depending on the difficulty of the questions
 */
function incrementScore() {
  if (currentQuestionSet === easyQuestions) {
    document.getElementById("result-score").innerText = score += 10 + timeLeft;
  } else if (currentQuestionSet === mediumQuestions) {
    document.getElementById("result-score").innerText = score += 20 + timeLeft;
  } else if (currentQuestionSet === hardQuestions) {
    document.getElementById("result-score").innerText = score += 40 + timeLeft;
  }
}

/**
 * A switch case statement to change the colour of the lights depending on whether the user answers
 * correctly or not
 */
function colorPlanets() {
  let answerLight = 0;

  switch (determineColour) {
    case "correct":
      answerLight = "grayscale(0%)";
      break;
    case "incorrect":
      answerLight = "grayscale(100%)";
      break;
    case null:
    case undefined:
    case "unanswered":
      answerLight = "grayscale(100%)";
      break;
  }
  document.getElementsByClassName("answer-light")[currentQuestion].style.filter = answerLight;
  determineColour = "unanswered";
}

/**
 * Reload the website
 */
function reload() {
  window.location.reload();
}

/**
 * Loop through the categories and add a click event listener to load the difficulty that the player has selected
 */
let difficultySelected = document.getElementsByClassName("difficulty-btn");
for (let i = 0; i < difficultySelected.length; i++) {
  difficultySelected[i].addEventListener("click", runQuiz);
}

/**
 * Loop through the home-icon-logo situated on the game-bar and add an event listener to reload the
 * website if clicked
 */
let goHomeIcon = document.getElementsByClassName("home-icon-logo");
for (let i = 0; i < goHomeIcon.length; i++) {
  goHomeIcon[i].addEventListener("click", () => {
    window.location.reload();
  });
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
let crossButton = document.getElementsByClassName("cross");
let toggleMenu = document.getElementsByClassName("hamburger");
let menu = document.getElementsByClassName("menu");
for (let i = 0; i < toggleMenu.length && menu.length; i++) {
  toggleMenu[i].addEventListener("click", () => {
    buttonSound();
    menu[i].classList.toggle("hide");
    toggleMenu[i].classList.toggle("hide");
    crossButton[i].classList.toggle("hide");
  });
}

/**
 * Loop through the cross class and add a click event listener to replace the hamburger with a cross
 */
for (let i = 0; i < crossButton.length; i++) {
  crossButton[i].addEventListener("click", () => {
    buttonSound();
    crossButton[i].classList.toggle("hide");
    menu[i].classList.toggle("hide");
    toggleMenu[i].classList.toggle("hide");
  });
}

/**
 * Loop through the rules button and add a click event listener to open the rules page and hide the
 * other relevant pages
 */
let goRules = document.getElementsByClassName("rules-btn");
for (let i = 0; i < goRules.length; i++) {
  goRules[i].addEventListener("click", () => {
    buttonSound();
    document.getElementById("rules-game-area").classList.remove("hide");
    document.getElementById("hiscores-game-area").classList.add("hide");
    document.getElementById("contact-game-area").classList.add("hide");
    document.getElementById("results-game-area").classList.add("hide");
    document.getElementById("start-game-area").classList.add("hide");
    document.getElementById("question-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
    toggleMenu[i].classList.toggle("hide");
    crossButton[i].classList.toggle("hide");
  });
}

/**
 * Loop through the hiscores button and add a click event listener to open the hiscores page and hide the
 * other relevant pages
 */
let goHiscores = document.getElementsByClassName("hiscores-btn");
for (let i = 0; i < goHiscores.length; i++) {
  goHiscores[i].addEventListener("click", () => {
    buttonSound();
    document.getElementById("hiscores-game-area").classList.remove("hide");
    document.getElementById("rules-game-area").classList.add("hide");
    document.getElementById("contact-game-area").classList.add("hide");
    document.getElementById("results-game-area").classList.add("hide");
    document.getElementById("start-game-area").classList.add("hide");
    document.getElementById("question-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
    toggleMenu[i].classList.toggle("hide");
    crossButton[i].classList.toggle("hide");
  });
}

/**
 * Loop through the contact button and add a click event listener to open the contact page and hide the
 * other relevant pages
 */
let goContact = document.getElementsByClassName("contact-btn");
for (let i = 0; i < goContact.length; i++) {
  goContact[i].addEventListener("click", () => {
    buttonSound();
    document.getElementById("contact-game-area").classList.remove("hide");
    document.getElementById("rules-game-area").classList.add("hide");
    document.getElementById("hiscores-game-area").classList.add("hide");
    document.getElementById("results-game-area").classList.add("hide");
    document.getElementById("start-game-area").classList.add("hide");
    document.getElementById("question-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
    toggleMenu[i].classList.toggle("hide");
    crossButton[i].classList.toggle("hide");
  });
}
