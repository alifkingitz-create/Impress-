const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = localStorage.getItem("play") === "true";

if(isPlaying) music.play();

btn.onclick=()=>{
  if(isPlaying){
    music.pause();
  }else{
    music.play();
  }
  isPlaying=!isPlaying;
  localStorage.setItem("play",isPlaying);
};
