const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = localStorage.getItem("musicPlaying") === "true";
let currentTime = localStorage.getItem("musicTime");

/* Load previous state */
window.onload = () => {
  if(currentTime){
    music.currentTime = currentTime;
  }

  if(isPlaying){
    music.play();
  }
};

/* Music toggle */
btn.onclick = () => {
  if(isPlaying){
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
  localStorage.setItem("musicPlaying", isPlaying);
};

/* Save time when leaving page */
window.onbeforeunload = () => {
  localStorage.setItem("musicTime", music.currentTime);
};

/* Navigation (optional use) */
function go(page){
  window.location.href = page;
}
