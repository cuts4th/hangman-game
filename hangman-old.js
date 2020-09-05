const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split(''),
  this.remainingGuesses = remainingGuesses,
  this.guessed = [],
  this.status = 'playing'
}

Hangman.prototype.calculateStatus = function() {
  const finished = this.word.every(letter => this.guessed.includes(letter))

  // let count = 0;
  // this.word.forEach(letter => {
  //   if (this.guessed.includes(letter) && this.remainingGuesses > 0) {
  //     count++
  //   }
  // });
  DOMstrings.message.textContent = `Guesses left ${this.remainingGuesses}.`;
  if(this.remainingGuesses === 0){
    this.status = 'failed';
    DOMstrings.message.textContent = `Nice try, the word is "${this.word.join('')}".`;
  // } else if (count === this.word.length){
  }else if(finished){
    this.status = 'finished';
    DOMstrings.message.textContent = `Great work! you guessed the word`;
  }
  console.log(this.status)
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.forEach(letter => {
    if (this.guessed.includes(letter) || letter === ' ') {
      puzzle += letter;
    }else{
      puzzle += '*';
    }
  });
  DOMstrings.remaining.textContent = `${this.remainingGuesses} left`;
  DOMstrings.word.textContent = puzzle;
  return puzzle;
}

Hangman.prototype.makeGuess = function(guess) {
  if (this.status === 'playing') {
  guess = guess.toLowerCase();
  const isUnique = !this.guessed.includes(guess);
  const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessed.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

  console.log(`${this.remainingGuesses} left`)
  DOMstrings.remaining.textContent = `${this.remainingGuesses} left`;
  this.calculateStatus();
  }
}