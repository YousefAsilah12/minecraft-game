import {
  player1
} from "./player.js";
import {
  soundsPlayer
} from "./sound.js";
const element = document.querySelector('#game-window');
const menu = document.querySelector('#custom-menu');

window.addEventListener('load', function () {

  document.body.classList.add(player1.currentTool + 'Tool');
});

appendTool();
// append the tool of player to screen
function appendTool() {
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
  for (let i = 0; i < player1.tools.length; i++) {
    debugger
    let tool = player1.tools[i];
    let li = document.createElement('li');
    li.classList.add('menu-item');
    li.innerText = tool
    let div = document.createElement('div');
    div.classList.add('imgPlusCount');
    let img = document.createElement("img")
    div.appendChild(img);
    img.src = "/imgs/" + player1.tools[i] + ".png";
    let count = document.createElement('p');
    count.innerText = ""
    count.classList.add('score' + tool);
    if (tool !== 'axe' && tool !== 'shovel' && tool !== 'pickaxe' && player1.inventory[tool] >= 0) {

      count.innerText = player1.inventory[tool];

    }
    div.appendChild(count);
    li.appendChild(div);
    menu.appendChild(li);
  }

}



element.addEventListener('contextmenu', event => {
  event.preventDefault();
  menu.style.left = event.clientX + 'px';
  menu.style.top = event.clientY + 'px';
  menu.style.display = 'block';
  soundsPlayer("inventoryOpen")

});

let touchStart = null;
let touchMove = null;

element.addEventListener('touchstart', event => {
  touchStart = Date.now();
});

element.addEventListener('touchmove', event => {
  touchMove = Date.now();
});

element.addEventListener('touchend', event => {
  if (touchMove && Date.now() - touchMove > 500) {
    // 500 is the hold time in milliseconds, you can adjust it to the desired value
    event.preventDefault();
    menu.style.left = event.changedTouches[0].clientX + 'px';
    menu.style.top = event.changedTouches[0].clientY + 'px';
    menu.style.display = 'block';
    soundsPlayer("inventoryOpen");
  }
  touchStart = null;
  touchMove = null;
});


menu.addEventListener('click', event => {
  debugger
  event.stopPropagation();
  changeCurrTool(event.target.innerText);
  menu.style.display = 'none';
  player1.sortTools();
  appendTool()
  soundsPlayer("inventoryClose")

});


function changeCurrTool(tool) {
  debugger
  tool = tool.replace(/[^a-zA-Z]/g, "");
  player1.currentTool = tool;
  document.body.className = "";
  console.log('url(/imgs/ico/' + tool + '.ico), auto !important');
  document.body.classList.add(tool + "Tool");


}