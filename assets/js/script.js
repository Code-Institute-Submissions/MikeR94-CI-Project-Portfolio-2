let nextBtn = document.getElementById("next-btn").addEventListener("click", toCategoryGameArea);
let generalKnowledgeBtn = document.getElementById("general-knowledge-btn").addEventListener("click", runGeneralKnowledgeQuiz);
let constructorsBtn = document.getElementById("constructors-btn").addEventListener("click", runConstructorQuiz);
let driversBtn = document.getElementById("drivers-btn").addEventListener("click", runDriverQuiz);
let answer1 = document.getElementById("answer1-btn");
let answer2 = document.getElementById("answer2-btn");
let answer3 = document.getElementById("answer3-btn");
let answer4 = document.getElementById("answer4-btn");
let currentQuestion = 0;
let questionText = document.getElementById("question-text");
let answerClicked = false;
let shuffledQuestions = 0;

function buildDriverQuestion() {
  for (let i = 0; i < driverQuestions.length; i++) {
    questionText.innerHTML = driverQuestions[currentQuestion].question;
    answer1.innerHTML = driverQuestions[currentQuestion].a;
    answer2.innerHTML = driverQuestions[currentQuestion].b;
    answer3.innerHTML = driverQuestions[currentQuestion].c;
    answer4.innerHTML = driverQuestions[currentQuestion].d;
    document.getElementById("answer1-btn").onclick = checkDriverAnswer;
    document.getElementById("answer2-btn").onclick = checkDriverAnswer;
    document.getElementById("answer3-btn").onclick = checkDriverAnswer;
    document.getElementById("answer4-btn").onclick = checkDriverAnswer;
  }
}

function buildConstructorQuestion() {
  for (let i = 0; i < constructorQuestions.length; i++) {
    questionText.innerHTML = constructorQuestions[currentQuestion].question;
    answer1.innerHTML = constructorQuestions[currentQuestion].a;
    answer2.innerHTML = constructorQuestions[currentQuestion].b;
    answer3.innerHTML = constructorQuestions[currentQuestion].c;
    answer4.innerHTML = constructorQuestions[currentQuestion].d;
    document.getElementById("answer1-btn").onclick = checkConstructorAnswer;
    document.getElementById("answer2-btn").onclick = checkConstructorAnswer;
    document.getElementById("answer3-btn").onclick = checkConstructorAnswer;
    document.getElementById("answer4-btn").onclick = checkConstructorAnswer;
  }
}

function buildGeneralKnowledgeQuestion() {
  for (let i = 0; i < generalKnowledgeQuestions.length; i++) {
    questionText.innerHTML = generalKnowledgeQuestions[currentQuestion].question;
    answer1.innerHTML = generalKnowledgeQuestions[currentQuestion].a;
    answer2.innerHTML = generalKnowledgeQuestions[currentQuestion].b;
    answer3.innerHTML = generalKnowledgeQuestions[currentQuestion].c;
    answer4.innerHTML = generalKnowledgeQuestions[currentQuestion].d;
    document.getElementById("answer1-btn").onclick = checkGeneralKnowledgeAnswer;
    document.getElementById("answer2-btn").onclick = checkGeneralKnowledgeAnswer;
    document.getElementById("answer3-btn").onclick = checkGeneralKnowledgeAnswer;
    document.getElementById("answer4-btn").onclick = checkGeneralKnowledgeAnswer;
  }
}

function checkDriverAnswer() {
  let playerAnswer = this.value;
  if (playerAnswer === driverQuestions[currentQuestion].answer) {
    answerClicked = true;
    currentQuestion++;
    buildDriverQuestion();
  } else {
    answerClicked = true;
    currentQuestion++;
    buildDriverQuestion();
  }
}

function checkGeneralKnowledgeAnswer() {
  let playerAnswer = this.value;
  if (playerAnswer === driverQuestions[currentQuestion].answer) {
    answerClicked = true;
    currentQuestion++;
    buildGeneralKnowledgeQuestion();
  } else {
    answerClicked = true;
    currentQuestion++;
    buildGeneralKnowledgeQuestion();
  }
}

function checkConstructorAnswer() {
  let playerAnswer = this.value;
  if (playerAnswer === driverQuestions[currentQuestion].answer) {
    answerClicked = true;
    currentQuestion++;
    buildConstructorQuestion();
  } else {
    answerClicked = true;
    currentQuestion++;
    buildConstructorQuestion();
  }
}

function toCategoryGameArea() {
  document.getElementById("start-game-area").classList.add("hide");
  document.getElementById("category-game-area").classList.remove("hide");
}

function runDriverQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
  shuffledQuestions = driverQuestions.sort(() => Math.random() - 0.5);
  buildDriverQuestion();
}

function runConstructorQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
  shuffledQuestions = constructorQuestions.sort(() => Math.random() - 0.5);
  buildConstructorQuestion();
}

function runGeneralKnowledgeQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
  shuffledQuestions = generalKnowledgeQuestions.sort(() => Math.random() - 0.5);
  buildGeneralKnowledgeQuestion();
}


/**
 * Loop through the "home-icon" class and add a click event listener to refresh the
 * game and load the home page
 */
let goHome = document.getElementsByClassName("home-icon");
for (let i = 0; i < goHome.length; i++) {
  goHome[i].addEventListener("click", () => {
    window.location.reload();
  })
};

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
    document.getElementById("contact-game-area").classList.add("hide")
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
    document.getElementById("contact-game-area").classList.add("hide")
    menu[i].classList.toggle("hide");
  });
}

/**
 * Loop through the contact button and add a click event listener to open the contact page and hide the
 * other relevant pages
 */
let goContact = document.getElementsByClassName("contact-btn")
for (let i = 0; i < goContact.length; i++) {
  goContact[i].addEventListener("click", () => {
    document.getElementById("contact-game-area").classList.remove("hide")
    document.getElementById("rules-game-area").classList.add("hide");
    document.getElementById("hiscores-game-area").classList.add("hide");
    menu[i].classList.toggle("hide");
  })
}