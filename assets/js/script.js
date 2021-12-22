let nextBtn = document.getElementById("next-btn").addEventListener("click", toCategoryGameArea);
let homeBtn1 = document.getElementById("home-icon-1").addEventListener("click", homeButton);
let homeBtn2 = document.getElementById("home-icon-2").addEventListener("click", homeButton);
let homeBtn3 = document.getElementById("home-icon-3").addEventListener("click", homeButton);
let generalKnowledgeBtn = document.getElementById("general-knowledge-btn").addEventListener("click", runGeneralKnowledgeQuiz);
let constructorsBtn = document.getElementById("constructors-btn").addEventListener("click", runConstructorQuiz);
let driversBtn = document.getElementById("drivers-btn").addEventListener("click", runDriverQuiz);

let toggleButton = document.getElementById("hamburger");
let menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function toCategoryGameArea() {
  document.getElementById("start-game-area").classList.add("hide");
  document.getElementById("category-game-area").classList.remove("hide");
}

function runDriverQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
}

function runConstructorQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
}

function runGeneralKnowledgeQuiz() {
  document.getElementById("category-game-area").classList.add("hide");
  document.getElementById("question-game-area").classList.remove("hide");
}

function homeButton() {
  window.location.reload();
}
