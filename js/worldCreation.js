     const container = document.querySelector('#game-window')

     // function createMap(){
     //   for (let i = 0; i < 21; i++) {
     //     for (let j = 0; j < 21; j++) {
     //       let div = document.createElement('div');
     //       div.classList.add('block');
     //       //craeting the dirt block
     //       if (i > 15) {
     //         div.classList.add('dirt');
     //       }

     //       //dirt with grass on it
     //       if (i === 15) {
     //         div.classList.add('dirtGreen');
     //       }

     //       //crating the tree-1
     //       if(j===14 && i>7&&i <15){
     //         div.classList.add('treeBranch') 
     //       }
     //        if(i===7&&j>=12&&j<=16||i===6&&j>=13&&j<=15||i===5&&j===14){
     //         div.classList.add('treeLeaves');
     //       }

     //       // tree-2
     //       if(j===2 && i>8&&i <15){
     //         div.classList.add('treeBranch') 
     //       }
     //        if(i===8&&j>=1&&j<=3||i===7&&j>=1&&j<=3||i===6&&j===2){
     //         div.classList.add('treeLeaves');
     //       }

     //       // clouds
     //       if(i===4&&j>5&&j<=10||i===3&&j>6&&j<=10||i===2&&j>6&&j<=8){
     //         div.classList.add('clouds');
     //       }

     //      // sun
     //       if(i===2&&j>0&&j<6||i===3&&j>1&&j<5||i===4&&j>2&&j<4||i===1&&j>1&&j<5||i===0&&j>2&&j<4){
     //         div.classList.add('sun');
     //       }
     //       container.appendChild(div);

     //     }
     //   }

     // }


     //random number between 15 - 21 



     const randomDirt = Math.floor(Math.random() * (16 - 14 + 1) + 14);
     let stone = randomDirt - 20 + 23;
     let grass = randomDirt + 1
     let startTree = grass
     let treeNumbers = Math.floor(Math.random() * 10) + 3;
     let treeTall = getTreeTalls(treeNumbers, startTree - 2, 8)
     let trees = generateNumbers(treeNumbers);
     let cloudsNumber = Math.floor(Math.random() * 3) + 1;
     let cloudTall = getTreeTalls(cloudsNumber, Math.floor(Math.random() * 1) + 2, 3)
     let clouds = generateNumbers(cloudsNumber);

     let cloudsX = generateNumbers(cloudsNumber);
     let cloudsY = getTreeTalls(cloudsNumber, Math.floor(Math.random() * 1) + 2, 3);

     const sunTall = Math.floor(Math.random() * 3) + 1;
     const sunWidth = Math.floor(Math.random() * 3) + 1;
     const sunStart = Math.floor(Math.random() * (21 - sunWidth)) + 1;

     function createMap() {
       let width = Math.floor(Math.random() * 6);

       for (let i = 0; i < 21; i++) {
         for (let j = 0; j < 21; j++) {
           let div = document.createElement('div');
           div.classList.add('block');

           //dirt
           if (i > randomDirt) {
             div.classList.add('dirt');
           }

           //stone
           if (i > stone) {
             div.classList.remove('dirt');
             div.classList.add('stones');
           }

           //grass
           if (i === grass) {
             div.classList.add('dirtGreen');
           }

           //trees
           for (let k = 0; k < treeNumbers; k++) {
             if (j === trees[k] && i > treeTall[k] && i < startTree) {
               div.classList.add('treeBranch')
             }
             if (i === treeTall[k] && j >= trees[k] - width && j <= trees[k] + width || i === treeTall[k] - 1 && j >= trees[k] - width && j <= trees[k] + width || i === treeTall[k] - 2 && j >= trees[k] - width && j <= trees[k] + width) {
               div.classList.add('treeLeaves')
             }
           }

           // ...
           // clouds
           for (let k = 0; k < cloudsNumber; k++) {
             if (i === cloudTall[k] && j > clouds[k] && j < clouds[k] + 3 ||
               i === cloudTall[k] - 1 && j > clouds[k] - 1 && j <= clouds[k] + 3 ||
               i === cloudTall[k] + 1 && j > clouds[k] - 1 && j <= clouds[k] + 3) {
               div.classList.add('clouds');
             }
           }

           // sun

           if (i >= sunTall - sunWidth / 2 && i <= sunTall + sunWidth / 2 &&
             j >= sunStart && j < sunStart + sunWidth) {
             div.classList.add('sun');
           }



           container.appendChild(div);
         }
       }
     }









     createMap();

     function generateNumbers(count) {
       let numbers = [];
       let prevNumber = Math.floor(Math.random() * 15 + 2);
       numbers.push(prevNumber);
       for (let i = 1; i < count; i++) {
         let nextNumber = prevNumber + Math.floor(Math.random() * 5 + 2);
         if (nextNumber > 18) {
           nextNumber = 18;
         }
         numbers.push(nextNumber);
         prevNumber = nextNumber;
       }
       return numbers;
     }

     function getTreeTalls(count, start, max) {
       let arr = [];
       for (let i = 0; i < count; i++) {
         arr.push(Math.floor(Math.random() * (start - max + 1) + max));
       }
       return arr;
     }