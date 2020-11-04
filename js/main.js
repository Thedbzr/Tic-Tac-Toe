/*----- constants -----*/
const PLAYER = {
  '1': "url('https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif')",
  '-1': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')",
  'null': 'white'
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];



/*----- app's state (variables) -----*/
let gameBoard;
let winner;
let turn;



/*----- cached element references -----*/
const boxes = document.querySelectorAll('.box');
const msg = document.querySelector('#msg');
const resetBtn = document.querySelector('#resetBtn');


/*----- event listeners -----*/
document.getElementById('container').addEventListener('click', handleClick);
document.getElementById('resetBtn').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
  turn = 1;
  gameBoard = [null, null, null, null, null, null, null, null, null,];
  winner = null;
  render()
}


function render() {
  //button hidden on init
  resetBtn.style.display = 'none';
  //fill grid
  gameBoard.forEach(function (element, idx) {
    document.getElementById(idx).style.backgroundImage = element && PLAYER[element];
  })

  //check for winner using ternary op. player is -1 or 1  so eval > 0 to get player
  //check if there is a tie if every spot in board is taken either the gamebaord is full  1 -1 or nulls so if no nulls its a tie
  // else no one won change turn ternary again display message using ` ${}`
  if (winner) {
    msg.textContent = `Player ${winner > 0 ? 1 : 2} wins!`;
    resetBtn.style.display = null;
  } else if (!gameBoard.includes(null)) {
    msg.textContent = 'Oh no its a tie!'
    resetBtn.style.display = null;
  } else {
    msg.textContent = `Player ${turn > 0 ? 1 : 2}'s turn!`
  }
}


function handleClick(event) {
  //if box has been clicked on dont do anything
  if (gameBoard[event.target.id]) return;
  //dont do anything if anything that is not a box is clicked
  if (event.target.id === 'container') return;
  //check if someone one already clikced / dont allow to click
  if (winner) return
  // assign the turn to correct gameboard index
  gameBoard[event.target.id] = turn;
  checkForWin();
  //switch turn and render
  turn *= -1;
  render();
}

function checkForWin() {
  let check = winConditions.some(conditions => (
    Math.abs(gameBoard[conditions[0]] + gameBoard[conditions[1]] + gameBoard[conditions[2]]) === 3)
  )
  if (check) winner = turn;
}



// turn = !turn

   // let blank = true;
  // for(let i = 0; i < boxes.length; i++){
  //     if(event.target.style.backgroundColor){
  //         blank = false;
  //     }
  // }
  // if (blank && turn = 1) {
  //   event.target.style.backgroundImage = PLAYER[turn];
  // } else if (blank && turn = -1) {
  //   event.target.style.backgroundImage = PLAYER[turn];
  // } else {
  //   return;
  // 