let nextBtn = document.getElementById("next-btn").addEventListener("click", toCategoryGameArea);
let homeBtn1 = document.getElementById("home-icon-1").addEventListener("click", homeButton);
let homeBtn2 = document.getElementById("home-icon-2").addEventListener("click", homeButton);
let homeBtn3 = document.getElementById("home-icon-3").addEventListener("click", homeButton);


function toCategoryGameArea() {
  document.getElementById("start-game-area").classList.add("hide");
  document.getElementById("category-game-area").classList.remove("hide");
}

function homeButton() {
  window.location.reload();
}
