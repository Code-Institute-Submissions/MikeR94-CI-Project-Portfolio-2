// Variables
let hiscores = JSON.parse(localStorage.getItem("hiscores")) || [];
let hiscoreBoard = document.getElementById("hiscore");

// Event Listeners
document.getElementById("clear-hiscores").addEventListener("click", clearHiscores);

/**
 * Gets the hiscore list from the HTML and then creates a new list item with the players score
 */
hiscoreBoard.innerHTML = hiscores
  .map((playerScore) => {
    return `<li>${playerScore.name} - ${playerScore.score} points</li>`;
  })
  .join("");

/**
 * Creates an object called playerScore and then pushes it the variable hiscores declared on line 17.
 */
function updateHiscore() {
  let playerScore = {
    score: score,
    name: playerName.value,
  };

  hiscores.push(playerScore);
  hiscores.sort((first, second) => second.score - first.score);
  hiscores.splice(3);

  localStorage.setItem("hiscores", JSON.stringify(hiscores));
}

/**
 * Clears the hiscores and reloads the website (currently not is use)
 */
function clearHiscores() {
  localStorage.clear();
  window.location.reload();
}
