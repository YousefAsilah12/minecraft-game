export  {player1};
class player{
  constructor(){
    this.inventory = {dirt:10,sand:10,wood:10,clouds:10,sun:10,treeBranch:10,treeLeaves:10,stones:10,dirtGreen:10};
    this.tools=["axe","pickaxe","shovel","sword","dirt","sand","wood","clouds","sun","treeBranch","treeLeaves","stones","dirtGreen"];

    this.currentTool="axe";
    this.currenntInvItem="dirt";
  }


  sortTools() {
      let currentIndex = this.tools.indexOf(this.currentTool);
      if (currentIndex === -1) {
        return;
      }
      this.tools.splice(currentIndex, 1);
      this.tools.unshift(this.currentTool);
    
    
  }

}

const player1 = new player();
