
function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(roundCounter){
    let computerChoice = getComputerChoice();
    let playerChoice = (prompt("Round"+roundCounter+": Rock, Paper,or Scissors?"));
    console.log("Round "+roundCounter)
    console.log("Player chose " + playerChoice + ", Computer chose "+computerChoice+".")
    let playerWin = "Player wins!"
    let computerWin = "Computer Wins!"
    let drawResult = "It's a draw."
    switch(playerChoice.toLowerCase()){
        case 'rock':
            if (computerChoice == 'paper'){
                ComputerScorePlusOne();
                printScores();
                return computerWin
            }
            else if (computerChoice == 'scissors'){
                PlayerScorePlusOne();
                printScores();
                return playerWin
            }
            else {
                printScores();
                return drawResult
            }

        case 'paper':
            if (computerChoice == 'scissors'){
                printScores();
                ComputerScorePlusOne();
                return computerWin
            }
            else if (computerChoice == 'rock'){
                printScores();
                PlayerScorePlusOne();
                return playerWin
            }
            else {
                printScores();
                return drawResult
            }

        case 'scissors':
            if (computerChoice == 'rock'){
                printScores();
                ComputerScorePlusOne();
                return computerWin
            }
            else if (computerChoice == 'paper'){
                printScores();
                PlayerScorePlusOne();
                return playerWin}
            else {
                printScores();
                return drawResult
            }

        default:
            console.log("Not in the choices!Try again");
            playRound(roundCounter)


    }
}
function PlayerScorePlusOne(){
    playerScore++
}

function ComputerScorePlusOne(){
    computerScore++
}

function getPlayerScore(){
    return playerScore
}

function getComputerScore(){
    return computerScore
}
function printScores(){
    console.log("Player Score: "+getPlayerScore())
    console.log("Computer Score: "+getComputerScore())
}
function playGame(){
    for(let round = 1; round<=5; round++){
        console.log(playRound(round))
    }
    console.log("Player Final Score:" + getPlayerScore())
    console.log("Computer Final Score:" + getComputerScore())
    if(playerScore>computerScore){console.log("Player Wins the Game!")}
    else if(computerScore>playerScore){console.log("Computer Wins the Game!")}
    else if (computerScore == playerScore){console.log("Draw")}
    else{console.log("error.")}
}
let computerScore = 0;
let playerScore=0;
/*playGame();*/

