import {
  player1
} from './player.js';

//first get all the blocks
const blocks = document.querySelectorAll('.block');
console.log(blocks);
blocks.forEach(block => {
  block.addEventListener('click', (event) => {
    debugger;
    console.log("in for each top", player1.currentTool);
    let tool = player1.currentTool.replace(/[^a-zA-Z]/g, "");

    // remove
    if (tool === "axe" || tool === "sword" || tool === "shovel" || tool === "pickaxe") {
      removeBlocks(block);

    }
    //add
    else {
      if(player1.inventory[tool]>0)
      addBlock(block, tool);
    }

  });
});


console.log("outside the function", player1.currentTool);

function removeBlockPermissions(block, tool) {
  debugger;

  if (block === 'treeBranch' || block === 'treeLeaves' && tool === 'axe') {
    return true;
  } else if (block === 'stoness' && tool === 'pickaxe') {
    return true;
  } else if (block === 'dirt' && tool === 'shovel' || block === 'dirtGreen' && tool === 'shovel') {
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

function removeBlocks(block) {
  debugger
  if (block.classList.contains('dirt') && removeBlockPermissions("dirt", player1.currentTool)) {
    block.classList.remove('dirt');
    player1.inventory.dirt += 1;
    document.querySelector('.scoredirt').innerText = player1.inventory.dirt;
  } else if (block.classList.contains('dirtGreen') && removeBlockPermissions("dirtGreen", player1.currentTool)) {
    block.classList.remove('dirtGreen');
    player1.inventory.dirt += 1;
    document.querySelector('.scoredirtGreen').innerText = player1.inventory.dirt;
  } else if (block.classList.contains('treeLeaves') && removeBlockPermissions("treeLeaves", player1.currentTool)) {
    block.classList.remove('treeLeaves');
    player1.inventory.treeLeaves += 1;
    document.querySelector('.scoretreeLeaves').innerText = player1.inventory.dirt;
  } else if (block.classList.contains('treeBranch') && removeBlockPermissions("treeBranch", player1.currentTool)) {
    block.classList.remove('treeBranch');
    player1.inventory.treeBranch += 1;
    document.querySelector('.scoretreeBranch').innerText = player1.inventory.dirt;
  } else if (block.classList.contains('sun') && removeBlockPermissions("sun", player1.currentTool)) {
    block.classList.remove('sun');
    player1.inventory.treeBranch += 1;
    document.querySelector('.scoresun').innerText = player1.inventory.dirt;
  } else if (block.classList.contains('clouds') && removeBlockPermissions("clouds", player1.currentTool)) {
    block.classList.remove('clouds');
    player1.inventory.treeBranch += 1;
    document.querySelector('.scoreclouds').innerText = player1.inventory.dirt;
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
    player1.inventory[tool]-=1;
    document.querySelector('.score'+tool).innerText = player1.inventory[tool];

  }
}