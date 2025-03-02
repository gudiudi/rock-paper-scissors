const CHOICES = ['rock', 'paper', 'scissors'];
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getPlayerChoice() {
  while (true) {
    let playerChoice = prompt("Enter your choice: rock, paper or scissors");
    const correctPlayerChoice = CHOICES.find((x) => x === playerChoice.toLowerCase());
    if (!correctPlayerChoice) {
      alert('Wrong choice!')
    } else {
      return playerChoice.toLowerCase();
    }
  }
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)]; // 0: Rock, 1: Paper, 2: Scissors
}

function createResultMsg(outcome, playerChoice, computerChoice) {
  let message;
  if (outcome === 'win') {
    message = `You ${outcome}! ${playerChoice} beats ${computerChoice}.`;
  } else if (outcome === 'lose') {
    message = `You ${outcome}! ${computerChoice} beats ${playerChoice}.`;
  } else {
    message = `It's a draw! You both chose ${playerChoice}.`;
  }
  return message;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    COMPUTER_SCORE++;
    alert(createResultMsg('lose', playerChoice, computerChoice));
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    COMPUTER_SCORE++;
    alert(createResultMsg('lose', playerChoice, computerChoice));
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    COMPUTER_SCORE++;
    alert(createResultMsg('lose', playerChoice, computerChoice));
  } else if (playerChoice === computerChoice) {
    COMPUTER_SCORE++;
    PLAYER_SCORE++;
    alert(createResultMsg('draw', playerChoice, computerChoice));
  } else {
    PLAYER_SCORE++;
    alert(createResultMsg('win', playerChoice, computerChoice));
  }

  console.log(`Player Score: ${PLAYER_SCORE}`);
  console.log(`Computer Score: ${COMPUTER_SCORE}`);
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);