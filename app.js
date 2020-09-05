const DOMstrings = {
  word: document.querySelector('#word'),
  remaining: document.querySelector('#remaining'),
  message: document.querySelector('#message')
}

let game1 = new Hangman('Cat', 2);
//let game2 = new Hangman('Doom slayer', 6, 's');

game1.getPuzzle();

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  game1.getPuzzle();
  //game1.calculateStatus();
  //renderPuzzle(game1)
});