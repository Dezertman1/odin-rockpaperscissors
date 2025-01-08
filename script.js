let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randInt = Math.trunc(Math.random() * 3); // Create a random number from 0 - 2
  let computerChoice = 'Undecided';
  switch (randInt) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
    default: // Fallback case for if something other than the accepted values are passes as randInt
      computerChoice = 'rock';
      console.log(
        'The computer could not choose properly! Falling back to rock.'
      );
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = window.prompt('Enter your choice.');
  let humanChoiceClean = humanChoice.toLowerCase().trim(); // Forces the player's input to lowercase and removes whitespace
  
  // Check if the input is a real option
  if (
    humanChoiceClean === 'rock' ||
    humanChoiceClean === 'paper' ||
    humanChoiceClean === 'scissors'
  ) {
    return humanChoiceClean;
  } else {
    alert('Incorrect input!');
  }
}

function playRound(humanChoice, computerChoice) {
  // Iterate through all possible combinations, giving points to the winner or none when it is a tie
  switch (true) {
    case humanChoice === 'rock' && computerChoice === 'scissors':
      console.log('Rock beats scissors! You win!');
      humanScore++;
      break;
    case humanChoice === 'rock' && computerChoice === 'paper':
      console.log('Paper beats rock! You lose!');
      computerScore++;
      break;
    case humanChoice === 'scissors' && computerChoice === 'paper':
      console.log('Scissors beats paper! You win!');
      humanScore++;
      break;
    case humanChoice === 'scissors' && computerChoice === 'rock':
      console.log('Rock beats scissors! You lose!');
      computerScore++;
      break;
    case humanChoice === 'paper' && computerChoice === 'rock':
      console.log('Paper beats rock! You win!');
      humanScore++;
      break;
    case humanChoice === 'paper' && computerChoice === 'scissors':
      console.log('Scissors beats paper! You lose!');
      computerScore++;
      break;
    default:
      console.log("It's a tie! Nobody wins!");
  }
}

function playGame() {
  // Loop the game 5 times
  for (let i = 0; i <= 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  // Compare score and deliver relevant message
  switch (true) {
    case humanScore > computerScore:
      console.log(`You win! ${humanScore} wins and ${computerScore} losses!`);
      break;
    case humanScore < computerScore:
      console.log(`You lose! ${humanScore} wins and ${computerScore} losses!`);
      break;
    default:
      console.log(
        `It's a tie! ${humanScore} wins and ${computerScore} losses!`
      );
      break;
  }
}

playGame(); // Start the game