let handChoice=['rock', 'paper', 'scissors'];

// Function to randomly roll a number between 1 and 3 to aid in choosing a selection.
function getComputerChoice()
{
    let roll = Math.floor(Math.random() * handChoice.length)+1;  
    
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
        
    let playerHand = prompt('Please enter: rock, paper, or scissors!');
    while(playerHand == null){
        playerHand = prompt('Please enter: rock, paper, or scissors!');
    }
    playerHand = playerHand.toLowerCase();
    let handCheck = validatePlayerHand(playerHand);
    console.log(handCheck);

    while(handCheck == false)
    {
        playerHand = prompt('Please enter: rock, paper, or scissors!');
        playerHand = playerHand.toLowerCase();
        handCheck = validatePlayerHand(playerHand);
        console.log(handCheck);
    }


    return playerHand;


    }
    
function validatePlayerHand(choice){
    return handChoice.includes(choice);

}
let playerRoll = playerSelection();
let computerSelection = getComputerChoice();  

// Function to play a round with playerHand and computerSelection as Parameters.  These are compared and a winner is decided.
function playRound(playerRoll, computerSelection)
    
{


    if(playerRoll === computerSelection){
        return null;
    }
        
    else if (playerRoll === 'rock' && computerSelection === 'paper'){
        return 'paper';}
        
    else if (playerRoll === 'rock' && computerSelection === 'scissors'){
        return 'rock';        }
    
    else if (playerRoll === 'scissors' && computerSelection === 'paper'){
        return 'scissors';        }

    else if (playerRoll === 'scissors' && computerSelection === 'rock'){
        return 'rock';        }

    else if (playerRoll === 'paper' && computerSelection === 'scissors'){
        return 'scissors';        }
    else if(playerRoll === 'paper' && computerSelection === 'rock'){
        return 'paper';
    }
    
}


// Function for awarding points to associated winner of each round.  playerHand and computerSelection are compared.
function getRoundWinner(playerRoll, computerSelection){

    if(playerRoll = playRound()){
        return playerRoll;
    }

    else if(computerSelection = playRound()){
        return computerSelection;
    }

}

function game()
{
    
    console.log("Welcome!");
    for (let round = 1; round < 6; round++)
    {
        let scorePlayer = 0;
        let scoreComputer = 0;
        console.log(`this is round ${round} of 5 rounds`);
        let playerRoll = playerSelection();
        let computerSelection = getComputerChoice();
        console.log(`player chose ${playerRoll}`);
        console.log(`computer chose ${computerSelection}`);
        playRound(playerRoll, computerSelection);
        let singleRound = playRound(playerRoll,computerSelection);

        console.log('------')
        console.log(playerRoll);
        console.log(computerSelection);
        // console.log(getRoundWinner(playerRoll,computerSelection));
        console.log(singleRound);
        console.log('------');
        if(singleRound == playerRoll){
            console.log(`The winner of this round is ${singleRound}`);
            return scorePlayer++;
        }
        else if(singleRound == computerSelection){
            console.log(`The winner of this round is ${singleRound}`);
            return scoreComputer++;
        }
        console.log(scoreComputer);
        console.log(scorePlayer);

    }

    console.log("Game Over!");
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

// console.log(playerRoll);
// console.log(computerSelection);
game();