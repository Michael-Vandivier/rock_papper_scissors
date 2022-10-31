// let roll = 1
// let hand = ""

function getComputerChoice()
    {
    let roll = Math.floor(Math.random() * 4);  
    
    if(roll === 1){
        hand ="rock";
        return hand;
    } else if(roll === 2){
        hand = "paper";
        return hand;
    } else if (roll === 3){
        hand = "scissors";
        return hand;
    } else{
        console.log("Please reroll!");
    }
    }


console.log(getComputerChoice())