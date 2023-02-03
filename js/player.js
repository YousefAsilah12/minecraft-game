export  {player1};
class player{
  constructor(){
    this.inventory = {dirt:10,sand:10,wood:10,clouds:10,sun:10,treeBranch:10,treeLeaves:10,stones:10,dirtGreen:10};
    this.tools=["axe","pickaxe","shovel","sword","dirt","sand","wood","clouds","sun","treeBranch","treeLeaves","stones","dirtGreen"];

    this.currentTool="axe";
    this.currenntInvItem="dirt";
  }

}

const player1 = new player();
