let buttonAudio = new Audio("assets/sounds/button-click.mp3");
let correctAudio = new Audio("assets/sounds/correct-sound.mp3");
let incorrectAudio = new Audio("assets/sounds/incorrect-sound.mp3");

/**
 * Lets the player have the option whether to have sounds on or not
 */
function toggleAudio() {
  isPlaying ? toggleAudioOff() : toggleAudioOn();
}

/**
 * Toggle audio on
 */
function toggleAudioOn() {
  isPlaying = true;
  for (let i = 0; i < audioOffIcon.length && audioOnIcon.length; i++) {
    audioOffIcon[i].classList.add("hide");
    audioOnIcon[i].classList.remove("hide");
  }
}

/**
 * Toggle audio off
 */
function toggleAudioOff() {
  isPlaying = false;
  for (let i = 0; i < audioOffIcon.length && audioOnIcon.length; i++) {
    audioOffIcon[i].classList.remove("hide");
    audioOnIcon[i].classList.add("hide");
  }
}

/**
 * Play a sound when the player answers correctly
 */
function correctSound() {
  if (isPlaying) {
    correctAudio.play();
  } else {
    correctAudio.pause();
  }
}

/**
 * Play a sound when the player answers incorrectly
 */
function incorrectSound() {
  if (isPlaying) {
    incorrectAudio.play();
  } else {
    incorrectAudio.pause();
  }
}

/**
 * Play a sound when the player clicks a button
 */
function buttonSound() {
  if (isPlaying) {
    buttonAudio.play();
  } else {
    buttonAudio.pause();
  }
}


/**
 * Loop through the audio-icon-logo and call toggleAudio() when the player clicks
 */
let audioIconLogo = document.getElementsByClassName("audio-icon-logo");
for (let i = 0; i < audioIconLogo.length; i++) {
  audioIconLogo[i].addEventListener("click", () => {
    toggleAudio();
  });
}
