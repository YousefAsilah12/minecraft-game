import {  soundsPlayer} from "./sound.js";
document.querySelector(".startGame").addEventListener("click", (e)=>{
  window.location.href = "game.html";
})


soundsPlayer("menuMusic",true);


