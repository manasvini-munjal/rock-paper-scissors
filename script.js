const gameValues = ["rock", "paper", "scissors"];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
 
rock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

const result = document.querySelector('.result p');
const playerScore = document.querySelector('.player-score em');
const computerScore = document.querySelector('.computer-score em');
const winner = document.querySelector('.winner p')
const reset = document.querySelector('.play-again');

let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  return gameValues[Math.floor(Math.random() * gameValues.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerValue;
    playerValue = playerSelection.toLowerCase();
     if(playerValue === 'rock' && computerSelection === 'scissors') {
       result.textContent = `You Win! ${playerValue} beats ${computerSelection}`;
       incrementPlayerWins();
    } else if (playerValue === 'paper' && computerSelection === 'rock') {
        result.textContent = `You Win! ${playerValue} beats ${computerSelection}`;
        incrementPlayerWins();
    } else if (playerValue === 'scissors' && computerSelection === 'paper') { 
       result.textContent = `You Win! ${playerValue} beats ${computerSelection}`;
       incrementPlayerWins();
    } else if (playerValue === computerSelection){
       result.textContent = `Tie`;
    } else {
       result.textContent = `You Lose! ${computerSelection} beats ${playerValue}`;
       incrementComputerWins();
    } 
}

/* Function that updates the score variable and the HTML element value */
const updateScore = (player, computer) => {
  //if(isNaN(score)) return;
  if( player < 6 || computer < 6) {
   playerScore.textContent = `${player}`;
   computerScore.textContent = `${computer}`;
  } 
  if (player === 5) {
    winner.textContent  = `Player Wins! `;
    reset.classList.add('reset');
  }
  if (computer === 5) {
    winner.textContent  = ` Computer Wins! `;
    reset.classList.add('reset');
  }
}

const incrementPlayerWins = () => {
  updateScore(++playerWins, computerWins);
}

const incrementComputerWins = () => {
  updateScore(playerWins, ++computerWins);
}
const resetGame = () => {
  updateScore(playerWins = 0, computerWins = 0);
  reset.classList.remove('reset');
}

reset.addEventListener('click', resetGame);
    
