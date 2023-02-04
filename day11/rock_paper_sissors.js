const getUserChoise = userInput => {
  const userChoice = userInput.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    return userChoice;
  }
  return 'Error';
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  } if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')) {
    return 'Computer won';
  }
  return 'User won';
};

const playGame = () => {
  const winner = determineWinner(getUserChoise('paper'), getComputerChoice());
  console.log(winner);
};

playGame();
