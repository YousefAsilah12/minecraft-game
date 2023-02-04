import {
  player1
} from './player.js';
import { soundsPlayer } from "./sound.js";

//first get all the blocks
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
  block.addEventListener('click', (event) => {  
    // get Crr Block Class
    let curBlock = formateBlockName( event.target.classList.toString());

    // get cur Tool only Letters
    let tool = player1.currentTool.replace(/[^a-zA-Z]/g, "");

    // remove if its not Tool 
    if (tool === "axe" || tool === "sword" || tool === "shovel" || tool === "pickaxe") {
      removeBlocks(block,curBlock);
    }

    //add
    else {
      if (player1.inventory[tool] > 0)
        addBlock(block, tool);
    }
    soundsPlayer(player1.currentTool)

  });
});



function removeBlockPermissions(block, tool) {
  debugger;

  if (block === 'treeBranch' || block === 'treeLeaves' && tool === 'axe' ||block === 'wood' && tool === 'axe' ) {
    return true;
  } else if (block === 'stones' && tool === 'pickaxe') {
    return true;
  } else if (block === 'dirt' && tool === 'shovel' || block === 'dirtGreen' && tool === 'shovel'|| block === 'sand' && tool === 'shovel') {
    return true;

  } else if (block === 'sun' && tool === 'sword' || block === "clouds" && tool === 'sword' || block === "treeBranch" && tool === "sword") {
    return true;
  } else if (block === 'sun' && tool === 'pickaxe' || block === "clouds" && tool === 'pickaxe' || block === "treeBranch" && tool === "pickaxe") {
    return true;
  } else if (block === 'sun' && tool === 'shovel' || block === "clouds" && tool === 'shovel' || block === "treeBranch" && tool === "shovel") {
    return true;
  }

  return false;

}

function removeBlocks(block,curBlock) {
  debugger
  
  if (block.classList.contains(curBlock) && removeBlockPermissions(curBlock, player1.currentTool)) {
    block.classList.remove(curBlock);
    player1.inventory[curBlock] += 1;
    document.querySelector('.score'+curBlock).innerText = player1.inventory[curBlock];
    
  }
}

function addBlock(block, tool) {
  debugger
  // check if this place contains block before
  if (block.classList.contains('dirt') || block.classList.contains('dirtGreen') ||
    block.classList.contains('tree-leaves') || block.classList.contains('treeBranch') ||
    block.classList.contains('sun') || block.classList.contains('clouds') ||
    block.classList.contains('stones') || block.classList.contains('sand') ||
    block.classList.contains('wood')
  ) {

    return;
  } else {
    block.classList.add(tool);
    player1.inventory[tool] -= 1;
    document.querySelector('.score' + tool).innerText = player1.inventory[tool];

  }
}


function formateBlockName(curBlock) {
  curBlock = curBlock.replace('block', "")
  curBlock = curBlock.replace(' ', "")
  return curBlock;
}



