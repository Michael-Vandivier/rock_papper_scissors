

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
    
    
function playRound(playerHand, computerSelection, pScore ,cScore)

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
        
    round = 0
    while(round < 5){
        let pScore = 0;
        let cScore = 0;
        const computerSelection = getComputerChoice();
        const playerHand = playerSelection();
        playRound();
        pScore = pScore +pScore;
        cScore = cScore +cScore;
        console.log(playRound(playerHand, computerSelection));
        console.log(`player score is ${pScore}`);
        console.log(`computer score is ${cScore}`)
        round++;
    }