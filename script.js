const gameValues = ["rock", "paper", "scissors"];
let winner;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  return gameValues[Math.floor(Math.random() * gameValues.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerValue;
    playerValue = playerSelection.toLowerCase();
     if(playerValue === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        return `You Win! ${playerValue} beats ${computerSelection}`;
    } else if (playerValue === 'paper' && computerSelection === 'rock') {
        playerWins++;
        return `You Win! ${playerValue} beats ${computerSelection}`;
    } else if (playerValue === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        return `You Win! ${playerValue} beats ${computerSelection}`; 
    } else if (playerValue === computerSelection){
        return `Tie`;
    } else {
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerValue}`;
    }
}

function game() {
    /* Call playRound() 5 times to keep score
       and report winner or loser
    */
    for (let i = 1; i <=5; i++) {
     const computerSelection =  getComputerChoice();
     let playerSelection =  prompt("Enter either rock, paper or scissors", " ");
      if(playerSelection) {
        
        result = playRound(playerSelection, computerSelection);
         console.log(result);
      } else if (playerSelection = ''){
        console.log('No value entered');
        break;
      } else {
        console.log('Exit Game');
        break;
      }
     
     //return result;
     
    // Report a winner or loser
  
   }
   console.log(playerWins);
   console.log(computerWins);
   if (playerWins > computerWins) {
    console.log("Player Wins");
   } else {
    console.log("Computer Wins");
   }
  

}   

game();
    
