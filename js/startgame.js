import {  soundsPlayer} from "./sound.js";
document.querySelector(".startGame").addEventListener("click", (e)=>{
  debugger
soundsPlayer("button")
  showLoading("Map");
  setTimeout(function() {
  window.location.href = "/game.html";

}, 2000);
})


// soundsPlayer("menuMusic",true);

document.querySelector(".btn").addEventListener("click",()=>{
 
})

const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const loadingBar = document.getElementById("loading-bar");



//Loading bar
function showLoading(loadingName) {
  loadingText.innerText = `Loading ${loadingName}...`;
  loadingScreen.style.display = "flex";
  
  let width = 0;
  const interval = setInterval(function() {
    if (width >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      return;
    }
    width += 40;
    loadingBar.style.width = `${width}%`;
  }, 500);
}

