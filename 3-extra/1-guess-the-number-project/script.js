let generateRandomNum = () => Math.floor(Math.random() * 100 + 1);
let messageGuessOutput = document.querySelector(".final-output");
let input = document.querySelector(".inputs-Values");
let triesOutput = document.querySelector(".Tries-output");

let triesTaken = 0;
let totalTries = 7;

randomNumber = generateRandomNum();

triesOutput.innerHTML = `Number of tries left: ${totalTries}`;
const guessNumber = () => {
  //Collect input from the user
  console.log(randomNumber);
  let guess = Number(input.value);
  console.log(guess);
  totalTries--;
  triesTaken++;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 0 || guess === 0 || !guess || guess > 100) {
    messageGuessOutput.innerHTML = `Please enter a number between 1 and 100`;
    totalTries++;
  } else if (guess < randomNumber) {
    messageGuessOutput.innerHTML = `Number is too low, try again`;
  } else if (guess > randomNumber) {
    messageGuessOutput.innerHTML = `Number is too high, try again`;
  } else if (guess === randomNumber) {
    messageGuessOutput.innerHTML = `Guess is correct. You win!`;
  }

  triesOutput.innerHTML = `Number of tries left: ${totalTries}`;
};

const newGame = () => {
  randomNumber = generateRandomNum();
  console.log(randomNumber);
  //Your code here
  //Reset randomNumber
  randomNumber = generateRandomNum();
  //Reset users input field
  input.value = "";
  //Reset tries, and triesTaken by the user
  // triesTaken = 0;
  totalTries = 7;
  triesOutput.innerHTML = `Number of tries left: ${totalTries}`;
  messageGuessOutput.innerHTML = `Guess a number between 1 and 100`;
};

//keyboard exception
const keyBoardEvents = (e) => {
  if (e.keyCode === 13) {
    guessNumber();
  }
};

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
