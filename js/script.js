console.log("script-JS-OK");

//* Recovering DOM elements
const grid = document.getElementById('grid');
const button = document.querySelector('.btn-primary')

//* Starting "startGame" function on button click
button.addEventListener('click', startGame);