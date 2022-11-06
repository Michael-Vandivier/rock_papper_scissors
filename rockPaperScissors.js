
// Function to randomly roll a number between 1 and 3 to aid in choosing a selection.
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
    
// Function to grab User Input in order to play against the computer. 
function playerSelection()
    {
        
        let playerHand = prompt("Please make a choice: Rock, Paper or Scissors");
        return playerHand;
    }

    
const playerHand = playerSelection().toLowerCase();
const computerSelection = getComputerChoice();  

// Function to play a round with playerHand and computerSelection as Parameters.  These are compared and a winner is decided.
function playRound(playerHand, computerSelection)
    
{
    if(playerHand === computerSelection){
        return null;
    }
        
    else if (playerHand === 'rock' && computerSelection === 'paper'){
        return computerSelection;}
        
    else if (playerHand === 'rock' && computerSelection === 'scissors'){
        return playerHand;        }
    
    else if (playerHand === 'scissors' && computerSelection === 'paper'){
        return playerHand;        }

    else if (playerHand === 'scissors' && computerSelection === 'rock'){
        return computerSelection;        }

    else if (playerHand === 'paper' && computerSelection === 'scissors'){
        return computerSelection;        }
    
}


// Function for awarding points to associated winner of each round.  playerHand and computerSelection are compared.
function getRoundWinner(playerHand, computerSelection){

    if(playerHand = playRound()){
        return playerHand;
    }

    else if(computerSelection = playRound()){
        return computerSelection;
    }

}

function game(){
    console.log("Welcome!");
    for (let round = 0; round < 5; round++)
    {
        let scorePlayer = 0;
        let scoreComputer = 0;
        console.log(`this is round ${round}`);
        const playerHand = playerSelection();
        const computerSelection = getComputerChoice();
        console.log(`player chose ${playerHand}`);
        console.log(`computer chose ${computerSelection}`);
        playRound(playerHand, computerSelection);
        // console.log(playRound(playerHand, computerSelection));
        // console.log(`winner of this round is: ${playRound(playerHand,computerSelection)}`);
        // console.log(getRoundWinner());
        if(getRoundWinner(playerHand, computerSelection) === playerHand){
            return scorePlayer++;
        }
        else if(getRoundWinner(playerHand, computerSelection) === computerSelection){
            return scoreComputer++;
        }
        console.log(scoreComputer);
        console.log(scorePlayer);

    }

    console.log("Game Over!")
    if(scorePlayer > scoreComputer){
        console.log(`Player was the winner with ${scorePlayer} points!`);
    }

    else if(scoreComputer > scorePlayer){
        console.log(`Computer was the winner with ${scoreComputer} points!`);
    }

    else{
        console.log(`There was a tie! the computer scored ${scoreComputer} and the player scored ${scorePlayer}`);
    }
    console.log("------");
    console.log(scoreComputer);
    console.log("------");
    console.log(scorePlayer);
}

game();