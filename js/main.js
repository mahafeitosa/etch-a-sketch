'use strict';

document.addEventListener('DOMContentLoaded', function () {
  createBoard(16); // Change number to set board size
  console.log('Hello there!');
});

// Function to set size of board
function createBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    board.insertAdjacentElement('beforeend', div);
  }
}
