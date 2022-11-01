const computerSelection = getComputerChoice();
const playerHand = playerSelection();


// getComputerChoice is a function that uses the random module to
// randomly select a number between 1-3 in order to select a choice of Rock Paper or Scissors
function getComputerChoice()
    {
    let roll = Math.floor(Math.random() * 3)+1;  
    
    if(roll === 1){
        computerHand ="rock";
        return computerHand;
    } else if(roll === 2){
        computerHand = "paper";
        return computerHand;
    } else{
        computerHand = "scissors";
        return computerHand;
    }
    // } else{
    //     console.log("Please reroll!");
    // }
    }

    
function playerSelection()
    {
        
        let playerHand = prompt("Please make a choice: Rock, Paper or Scissors");
        return playerHand;
    }
    
    
function playRound(playerHand, computerSelection)
    {
        if(playerHand === computerSelection){
            results = `The computer chose ${computerSelection} This round is a tie, no points awarded`;
            return results;
        }
        
        else if (playerHand === 'rock' && computerSelection === 'paper'){
            results = `The computer chose ${computerSelection} Paper beats Rock, computer wins this round!`
            return results;
        }
        
        else if (playerHand === 'rock' && computerSelection === 'scissors'){
            results = `The computer chose ${computerSelection} Rock  beats Scissors, Player wins this round!`
            return results;
        }
        
        else if (playerHand === 'scissors' && computerSelection === 'paper'){
            results = `The computer chose ${computerSelection} Scissors beats Paper, Player wins this round!`
            return results;
        }
        
        
    }

// getComputerChoice();
// console.log(getComputerChoice());
    
round = 0
while(round < 6){
playRound();
console.log(playRound(playerHand, computerSelection));
round++;
}