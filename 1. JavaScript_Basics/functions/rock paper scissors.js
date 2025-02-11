console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error işte ne zorluyon');
  }
}

function  getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if(number === 0) {
    return 'rock';
  }
  else if(number === 1) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'bomb') {
    return '+9 dolunay çıkardı adam';
  }
  else if (userChoice === computerChoice) {
    return 'The game is a TIE!!';
  } else if (userChoice === 'rock') {
    return (computerChoice === 'paper') ? 'Computer WON!!!' : 'User WON!!!';
  } else if (userChoice === 'paper') {
    return (computerChoice === 'scissors') ? 'Computer WON!!!' : 'User WON!!!';
  } else if (userChoice === 'scissors') {
    return (computerChoice === 'rock') ? 'Computer WON!!!' : 'User WON!!!';
  }

}


function playGame(userChoice) {
  if (!userChoice) {
    console.log('Error işte ne zorluyon');
    return;
  }
  const computerChoice = getComputerChoice();
  console.log('User choice:', userChoice);
  console.log('Computer choice:', computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame(getUserChoice('bomb'));