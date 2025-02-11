let humanScore = 0;
let computerScore = 0;
let tieCounter =0;

function getComputerChoice (){
    let choice = "";
    switch (Math.round(Math.random()*2)){
        case 0:
            choice = "Rock"
            break;
        case 1:
            choice = "Paper"
            break;
        default:
            choice = "Scissor"

    }
    return choice;
}

function getHumanChoice (){
    let choice = prompt("What's it gonna be? Rock, Paper or Scissors?");
    choice = choice.toUpperCase();
    switch(choice){
        case "ROCK":
            choice = "Rock";
            return choice;
        case "PAPER":
            choice = "Paper";
            return choice;
        
        case "SCISSOR":
        case "SCISSORS":
            choice = "Scissors";
            return choice;
        default:
            alert("Please choose a valid option.");
            getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice) {
        case "Rock":
            if (computerChoice === "Scissors") {
                console.log("Rock beats Scissors. You win!");
                humanScore++;
            } else if (computerChoice === "Paper") {
                console.log("Paper beats Rock. You lose!");
                computerScore++;
            } else {
                console.log("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        case "Paper":
            if (computerChoice === "Rock") {
                console.log("Paper beats Rock. You win!");
                humanScore++;
            } else if (computerChoice === "Scissors") {
                console.log("Scissors beats Paper. You lose!");
                computerScore++;
            } else {
                console.log("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        case "Scissors":
            if (computerChoice === "Paper") {
                console.log("Scissors beats Paper. You win!");
                humanScore++;
            } else if (computerChoice === "Rock") {
                console.log("Rock beats Scissors. You lose!");
                computerScore++;
            } else {
                console.log("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        default:
            console.log("Invalid choice");
        }
}

function playGame(){

    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        if(tieCounter>0){
            i--;
            tieCounter--;
        }
    }

    if(humanScore > computerScore){
        console.log("YOU WIN!");
    }
    else if(humanScore < computerScore){
        console.log("YOU LOSE!");
    }
    else{
        console.log("IT'S A TIE!");
    }
}


console.log("Let the game begin!");
console.log("The player with most wins from 5 games takes the crown.");
playGame();



