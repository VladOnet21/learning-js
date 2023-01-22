console.log('hi');
const getUserChoise = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
      return userInput;
      break;
    case 'paper':
      return userInput;
      break;
    case 'scissors':
      return userInput;
      break;
    default:
      return 'Error';
      break;
  }
};
const getComputerChoice = () => {
  if (Math.floor(Math.random() * 3) === 0) {
    return 'rock';
  } else if (Math.floor(Math.random() * 3) === 1) {
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