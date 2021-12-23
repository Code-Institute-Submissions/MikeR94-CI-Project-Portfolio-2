let nextBtn = document.getElementById("next-btn").addEventListener("click", toCategoryGameArea);
let generalKnowledgeBtn = document.getElementById("general-knowledge-btn").addEventListener("click", runGeneralKnowledgeQuiz);
let constructorsBtn = document.getElementById("constructors-btn").addEventListener("click", runConstructorQuiz);
let driversBtn = document.getElementById("drivers-btn").addEventListener("click", runDriverQuiz);


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

let toggleMenu= document.getElementById("hamburger");
let menu = document.getElementById("menu");
toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
