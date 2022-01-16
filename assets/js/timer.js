/**
 * Used to start the time for the player and counts down every 1 second. Works in conjunction with countdown()
 * and takes in the timeLeft parameter to set the time
 */
function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown();
    document.getElementById("timer").innerHTML = timeLeft;
    if (timeLeft < 11) {
      document.getElementById("timer").style.color = "red";
    } else {
      document.getElementById("timer").style.color = "#faf9f6";
    }
  }, 1000);
}

/**
 * Function to countdown the timeLeft and check if the timeLeft is 0. If no time left then the timer stops and
 * all answer buttons are disabled so the player can't select an answer. It also loops through the answerButtons
 * and displays the correct answer to the player if the time is up.
 */
function countdown() {
  let correctAnswer = currentQuestionSet[currentQuestion].answer;
  let answerButtons = document.getElementsByClassName("answer-btn");

  if (timeLeft === 0) {
    stopTimer();
    document.getElementById("next-question").classList.remove("greyscale");
    document.getElementById("next-question").removeAttribute("disabled", "disabled");
    document.getElementById("next-question").classList.add("hover");
    document.getElementById("answer1-btn").setAttribute("disabled", "disabled");
    document.getElementById("answer2-btn").setAttribute("disabled", "disabled");
    document.getElementById("answer3-btn").setAttribute("disabled", "disabled");
    document.getElementById("answer4-btn").setAttribute("disabled", "disabled");
    document.getElementById("answer1-btn").classList.remove("answer-buttons-hover");
    document.getElementById("answer2-btn").classList.remove("answer-buttons-hover");
    document.getElementById("answer3-btn").classList.remove("answer-buttons-hover");
    document.getElementById("answer4-btn").classList.remove("answer-buttons-hover");
  } else {
    timeLeft -= 1;
  }

  for (let i = 0; i < answerButtons.length; i++) {
    if (answerButtons[i].value === correctAnswer && timeLeft === 0) {
      answerButtons[i].classList.add("correct");
    } else if (answerButtons[i] !== correctAnswer && timeLeft === 0) {
      answerButtons[i].classList.add("wrong");
    }
  }
}

/**
 * Stops the timer
 */
function stopTimer() {
  clearInterval(timer);
}
