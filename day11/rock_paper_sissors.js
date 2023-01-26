const getUserChoise = userInput => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
      return userInput;
    case 'paper':
      return userInput;
    case 'scissors':
      return userInput;
    default:
      return 'Error';
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
const determineWinner = (userChoice, ComputerChoice) => {
  if (userChoice === ComputerChoice) {
    console.log('Game was a tie');
  } else if (userChoice === 'rock') {
    if (ComputerChoice === 'paper') {
      console.log('Computer won');
    } else {
      console.log('User won');
    }
  } else if (userChoice === 'paper') {
    if (ComputerChoice === 'scissors') {
      console.log('Computer won');
    } else {
      console.log('User won');
    }
  } else if (userChoice === 'scissors') {
    if (ComputerChoice === 'rock') {
      console.log('Computer won');
    } else {
      console.log('User won');
    }
  }
};
const playGame = () => {
  console.log(determineWinner(getUserChoise('rock'), getComputerChoice()));
};
playGame();
