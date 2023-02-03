import{player1}from "./player.js";

const element = document.querySelector('#game-window');
const menu = document.querySelector('#custom-menu');
  
window.addEventListener('load', function() {
  
  document.body.classList.add(player1.currentTool+'Tool');
});


// append the tool of player to screen
for (let i = 0; i < player1.tools.length; i++) {
  debugger
  let tool =player1.tools[i];
  let li = document.createElement('li');
  li.classList.add('menu-item');
  li.innerText= tool
  let div  = document.createElement('div');
  let img = document.createElement("img")
  div.appendChild(img);
  img.src = "/imgs/"+player1.tools[i]+".png";
  let count =document.createElement('p');
  count.innerText=""
  count.classList.add('score'+tool);
  if(tool!=='axe'&&tool!=='shovel'&&tool!=='pickaxe'&&player1.inventory[tool]>=0){
    
    count.innerText = player1.inventory[tool];
    
  } 
  div.appendChild(count);
  li.appendChild(div);
  menu.appendChild(li);
}



element.addEventListener('contextmenu', event => {
  event.preventDefault();
  menu.style.left = event.clientX + 'px';
  menu.style.top = event.clientY + 'px';
  menu.style.display = 'block';
});

menu.addEventListener('click', event => {
  debugger
  event.stopPropagation();
  changeCurrTool(event.target.innerText);
  player1.currentTool = event.target.innerText;

  menu.style.display = 'none';
});


 function changeCurrTool(tool){
  debugger
  tool=tool.replace(/[^a-zA-Z]/g, "");
  player1.currentTool=tool;
  document.body.className = "";
  console.log('url(/imgs/ico/'+tool+'.ico), auto !important');
  document.body.classList.add(tool+"Tool");
  
  
}