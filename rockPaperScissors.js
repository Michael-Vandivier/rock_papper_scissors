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

    }
    
    
function playerSelection()
    {
        
        let playerHand = prompt("Please make a choice: Rock, Paper or Scissors").toLowerCase();
        return playerHand;
    }
    
    
function playRound(playerHand, computerSelection)
    
{
    if(playerHand === computerSelection){
        results = `The computer chose ${computerSelection}. This round is a tie, no points awarded`;
        return `${results}, ${pScore =0}, ${cScore = 0}`;
    }
        
    else if (playerHand === 'rock' && computerSelection === 'paper'){
        results = `The computer chose ${computerSelection}. Paper beats Rock, computer wins this round!`
        return `${results}, ${pScore=0}, ${cScore = 0}`;
        }
        
    else if (playerHand === 'rock' && computerSelection === 'scissors'){
        results = `The computer chose ${computerSelection}. Rock  beats Scissors, Player wins this round!`
        return `${results}, ${pScore=1}, ${cScore = 0}`;        }
    
    else if (playerHand === 'scissors' && computerSelection === 'paper'){
        results = `The computer chose ${computerSelection}. Scissors beats Paper, Player wins this round!`
        return `${results}, ${pScore=1}, ${cScore = 0}`;        }

    else if (playerHand === 'scissors' && computerSelection === 'rock'){
        results = `The computer chose ${computerSelection}. Rock beats Scissors, Computer wins this round!`
        return `${results}, ${pScore=0}, ${cScore = 1}`;        }

    else if (playerHand === 'paper' && computerSelection === 'scissors'){
        results = `The computer chose ${computerSelection}. Scissors beats Paper, Computer wins this round!`
        return `${results}, ${pScore=0}, ${cScore = 1}`;        }
    
}