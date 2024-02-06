
function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(computerChoice,playerChoice){
    
}

function playGame(){
    for(let round = 1; round<=5; round++){
        console.log("Round "+round)
        let computerChoice = getComputerChoice();
        let playerChoice = (prompt("Rock, Paper,or Scissors?")).toLowerCase();
        console.log("Player chose " + playerChoice + ", Computer chose "+computerChoice+".")
    
    switch(playerChoice){
        case 'rock':
            if (computerChoice == 'paper'){return computerWin}
            else if (computerChoice == 'scissors'){return playerWin}
            else {return drawResult}

        case 'paper':
            if (computerChoice == 'scissors'){return computerWin}
            else if (computerChoice == 'rock'){return playerWin}
            else {return drawResult}

        case 'scissors':
            if (computerChoice == 'rock'){return computerWin}
            else if (computerChoice == 'paper'){return playerWin}
            else {return drawResult}

        default:
            console.log("Error. Wrong Choice");
            break;

    }
    }
}

let playerWin = "Player wins!"
let computerWin = "Computer Wins!"
let drawResult = "It's a draw."
