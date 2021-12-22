let nextBtn = document.getElementById("next-btn").addEventListener("click", toCategoryGameArea);

function toCategoryGameArea() {
    document.getElementById("start-game-area").classList.add("hide");
    document.getElementById("category-game-area").classList.remove("hide");
}