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
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    const guessInput = document.getElementById("guess");
    const resultDisplay = document.createElement("p"); // 
    document.body.appendChild(resultDisplay); 

    submitButton.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value); 

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            resultDisplay.textContent = "Please enter a valid number between 1 and 10.";
            return;
        }

        const result = makeGuess(userGuess);
        resultDisplay.textContent = result;
        if (result.includes("Congratulations")) {
            resultDisplay.style.color = "green"; // Change text color to green
        } else {
            resultDisplay.style.color = "red"; // Change text color to red
        }
        guessInput.value = "";
    });
});