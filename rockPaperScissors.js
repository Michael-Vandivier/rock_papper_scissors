

// getComputerChoice is a function that uses the random module to
// randomly select a number between 1-3 in order to select a choice of Rock Paper or Scissors

function getComputerChoice()
    {
    let roll = Math.floor(Math.random() * 4);  
    
    if(roll === 1){
        hand ="rock";
        return computerHand;
    } else if(roll === 2){
        hand = "paper";
        return computerHand;
    } else if (roll === 3){
        hand = "scissors";
        return computerHand;
    } else{
        console.log("Please reroll!");
    }
    }


console.log(getComputerChoice());

function playerSelection()
    {

    let playerHand = prompt("Please make a choice: Rock, Paper or Scissors");
    return playerHand;
    }
