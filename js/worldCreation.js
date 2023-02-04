    const container = document.querySelector('#game-window')
    
    createMap();
    function createMap(){
      for (let i = 0; i < 21; i++) {
        for (let j = 0; j < 21; j++) {
          let div = document.createElement('div');
          div.classList.add('block');
          //craeting the dirt block
          if (i > 15) {
            div.classList.add('dirt');
          }

          //dirt with grass on it
          if (i === 15) {
            div.classList.add('dirtGreen');
          }

          //crating the tree-1
          if(j===14 && i>7&&i <15){
            div.classList.add('treeBranch') 
          }
           if(i===7&&j>=12&&j<=16||i===6&&j>=13&&j<=15||i===5&&j===14){
            div.classList.add('treeLeaves');
          }
  
          // tree-2
          if(j===2 && i>8&&i <15){
            div.classList.add('treeBranch') 
          }
           if(i===8&&j>=1&&j<=3||i===7&&j>=1&&j<=3||i===6&&j===2){
            div.classList.add('treeLeaves');
          }
         
          // clouds
          if(i===4&&j>5&&j<=10||i===3&&j>6&&j<=10||i===2&&j>6&&j<=8){
            div.classList.add('clouds');
          }

         // sun
          if(i===2&&j>0&&j<6||i===3&&j>1&&j<5||i===4&&j>2&&j<4||i===1&&j>1&&j<5||i===0&&j>2&&j<4){
            div.classList.add('sun');
          }
          container.appendChild(div);
  
        }
      }
  
    }