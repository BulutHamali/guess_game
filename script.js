let game = {
    secretNumber: Math.floor(Math.random() * 10) + 1,
    maxGuesses: 3,
    currentGuesses: 0,
  };


  function makeGuess(guess) {
    if (game.currentGuesses >= game.maxGuesses) {
      return "No more guesses left! Game over.";
    }
   
    game.currentGuesses++;
   
    if (guess === game.secretNumber) {
      return "Congratulations! You guessed the secret number.";
    } else if (guess > game.secretNumber) {
      return "Too high! Try again.";
    } else {
      return "Too low! Try again.";
    }
  }


  // Add event listener to the submit button
  const submitButton = document.getElementById("submit");
  const guessInput = document.getElementById("guess");
  const resultDisplay = document.createElement("p");
  document.body.appendChild(resultDisplay);
  
  submitButton.addEventListener("click", () => {
      const userGuess = parseInt(guessInput.value);
      resultDisplay.textContent = makeGuess(userGuess);
  });