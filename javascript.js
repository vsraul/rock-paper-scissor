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
    let choice = prompt("What's it gonna be? Rock 🪨, Paper 📜 or Scissors ✂️?");
    choice = choice.toUpperCase();
    switch(choice){
        case "ROCK":
        case "R":
        case "🪨":
            choice = "Rock";
            return choice;
        case "PAPER":
        case "P":
        case "📜":
            choice = "Paper";
            return choice;
        
        case "SCISSOR":
        case "SCISSORS":
        case "S":
        case "✂️":
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
                alert("Rock 🪨 beats Scissors ✂️. You win!");
                humanScore++;
            } else if (computerChoice === "Paper") {
                alert("Paper 📜 beats Rock 🪨. You lose!");
                computerScore++;
            } else {
                alert("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        case "Paper":
            if (computerChoice === "Rock") {
                alert("Paper 📜 beats Rock 🪨. You win!");
                humanScore++;
            } else if (computerChoice === "Scissors") {
                alert("Scissors ✂️ beats Paper 📜. You lose!");
                computerScore++;
            } else {
                alert("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        case "Scissors":
            if (computerChoice === "Paper") {
                alert("Scissors ✂️ beats Paper 📜. You win!");
                humanScore++;
            } else if (computerChoice === "Rock") {
                alert("Rock 🪨 beats Scissors ✂️. You lose!");
                computerScore++;
            } else {
                alert("It's a tie. Try again.");
                tieCounter++;
            }
            break;
        default:
            alert("Invalid choice");
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
        showScore();
        alert("YOU WIN!");
    }
    else if(humanScore < computerScore){
        showScore();
        alert("YOU LOSE!");
    }
    else{
        showScore();
        alert("IT'S A TIE!");
    }
    clearScore();
}

function clearScore(){
    humanScore = 0;
    computerScore = 0;
    tieCounter =0;
}

function showScore(){
    alert("Your score is " + humanScore + " vs " + computerScore + " from the computer.");
}

alert("Let the game begin!\n\nThe player with most wins from 5 games takes the crown.");
playGame();



