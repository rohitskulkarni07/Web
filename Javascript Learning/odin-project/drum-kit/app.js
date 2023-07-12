const key = document.querySelectorAll(".key");

function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.key.charCodeAt()}"]`
  );
  const key = document.querySelector(`.key[data-key="${e.key.charCodeAt()}"]`);
  if (!audio) {
    return;
  }
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; //skip if no transformation
  }
  this.classList.remove("playing");
}

key.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keyup", playSound);
