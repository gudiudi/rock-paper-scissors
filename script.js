let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;
let ROUNDS = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)]; // 0: Rock, 1: Paper, 2: Scissors
}

function updateMessageBoard(outcome, playerChoice, computerChoice) {
  let message;
  if (outcome === 'win') {
    message = `You ${outcome}! ${playerChoice} beats ${computerChoice}.`;
  } else if (outcome === 'lose') {
    message = `You ${outcome}! ${computerChoice} beats ${playerChoice}.`;
  } else {
    message = `It's a draw! You both chose ${playerChoice}.`;
  }
  
  const messageBoard = document.querySelector(".message-board");
  messageBoard.textContent = message;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    COMPUTER_SCORE++;
    updateMessageBoard('lose', playerChoice, computerChoice);
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    COMPUTER_SCORE++;
    updateMessageBoard('lose', playerChoice, computerChoice);
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    COMPUTER_SCORE++;
    updateMessageBoard('lose', playerChoice, computerChoice);
  } else if (playerChoice === computerChoice) {
    COMPUTER_SCORE++;
    PLAYER_SCORE++;
    updateMessageBoard('draw', playerChoice, computerChoice);
  } else {
    PLAYER_SCORE++;
    updateMessageBoard('win', playerChoice, computerChoice);
  }
  
  updateScoreBoard(PLAYER_SCORE, COMPUTER_SCORE);

  ROUNDS++;
  if (ROUNDS === 5) {
    if (PLAYER_SCORE > COMPUTER_SCORE) {
      updateGameOutcomeBoard('You won the game!');
    } else if (PLAYER_SCORE < COMPUTER_SCORE) {
      updateGameOutcomeBoard('You lost the game!');
    } else {
      updateGameOutcomeBoard('It\'s a tie!');
    }
  }
}

function updateGameOutcomeBoard(message) {
  const gameOutcomeBoard = document.querySelector(".game-outcome-board");
  gameOutcomeBoard.textContent = message;
}

function updateScoreBoard(playerScore, computerScore) {
  const playerScoreBoard = document.querySelector(".player-score");
  const computerScoreBoard = document.querySelector(".computer-score");

  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { // For alternative use Event Delegation?
  button.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    playRound(e.target.id, computerChoice);
  });
})