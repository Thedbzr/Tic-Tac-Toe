/*----- constants -----*/





/*----- app's state (variables) -----*/
let winner;
let gameStatus;
let playerX;
let playerO;




/*----- cached element references -----*/
const containerEl = document.getElementById('container');
const replayBtn = document.getElementById('resetBtn') 
const boxes = document.querySelectorAll('#container.box')



/*----- event listeners -----*/





/*----- functions -----*/

// init();

//Creates the Boxes/Cells 
for(let i = 0; i < 9 ; i++){
    let divEL = document.createElement('div');
    divEL.id = i;
    divEL.classList.add('box');
    containerEl.appendChild(divEL);
}

// function getGameStatus(){
//     if()
// }