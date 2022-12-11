'use strict';

// // Selecting parent element to insert HTML elements inside
// const body = document.querySelector('body');
//
// // Creating elements
// // Main Container div = <div class="container"></div>
// const mainContainer = document.createElement('div'); // Create main Container div
// mainContainer.textContent = 'Main container here'; // Add text into the div
// mainContainer.classList.add('container'); // Add class name to the div element
// body.appendChild(mainContainer); // Insert the element inside the HTML

const container = document.querySelector('.container'); // Selecting div with container class
//CSS styles
container.style.backgroundColor = '#44475a';
container.style.color = 'white';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.maxWidth = '800px';
container.style.margin = '0 auto';

console.log(container);

// Create 16x16 grid of divs
let cardEle = document.createElement('div');
cardEle.classList.add('card');
cardEle.textContent = 'Card div';
// CSS Styles
cardEle.style.backgroundColor = '#6272a4';
cardEle.style.width = '48px';
cardEle.style.height = '48px';
cardEle.style.textAlign = 'center';
cardEle.style.border = '1px solid #44475a';
cardEle.style.cursor = 'pointer';
// Change color on hover
cardEle.addEventListener('mouseover', () => {
  cardEle.style.backgroundColor = 'black';
});

// Loop the div element 256 times ( 16 * 16 ) and append to HTML
for (let i = 0; i < 256; i++) {
  container.appendChild(cardEle.cloneNode(true));
}
