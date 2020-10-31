/*----- constants -----*/





/*----- app's state (variables) -----*/





/*----- cached element references -----*/
const containerEl = document.getElementById('container');




/*----- event listeners -----*/





/*----- functions -----*/

for(let i = 0; i < 9 ; i++){
    let divEL = document.createElement('div');
    divEL.id = i;
    divEL.classList.add('box');
    containerEl.appendChild(divEL);
}