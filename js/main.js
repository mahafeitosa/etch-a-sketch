'use strict';

// Global variables
let color = 'black';
let click = false;

// Let the DOM be loaded before
document.addEventListener('DOMContentLoaded', function () {
  createBoard(16); // Change number to set default board size
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'button') {
      click = !click;
      let draw = document.querySelector('#draw');
      if (click) {
        draw.innerHTML = 'Click to stop drawing';
      } else {
        draw.innerHTML = 'Click to draw';
      }
    }
  });

  // Button onclick will prompt user to select size of board
  let btnPopup = document.querySelector('#popup');
  btnPopup.addEventListener('click', () => {
    let size = getSize();
    createBoard(size);
  });
});

// Function to set size of board
function createBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    board.insertAdjacentElement('beforeend', div);
  }
}

// Get user's input to choose board size
function getSize() {
  let userInput = prompt('Choose size of the board between 1 and 100');
  let message = document.querySelector('#message');
  if (userInput == '') {
    message.innerHTML = 'Please choose a number';
  } else if (userInput < 0 || userInput > 100) {
    message.innerHTML = 'Please choose a number above 0 and below 100';
  } else {
    message.innerHTML = 'Have fun sketching!';
    return userInput;
  }
}

// Add functionality to random button to generate random color
function colorDiv() {
  if (click) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = 'black';
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

// Reset board to white
function resetBoard() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => (div.style.backgroundColor = 'White'));
}
