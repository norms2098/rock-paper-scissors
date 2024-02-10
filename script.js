const btnStart = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game-container');
const gameWinContainer = document.querySelector('.game-win-container')

btnStart.addEventListener('click',()=>{
    const playerChoicesContainer = document.createElement('div')
    playerChoicesContainer.classList.add('player-choices-container')

    const computerChoiceContainer = document.createElement('div')
    computerChoiceContainer.classList.add('computer-choice-container')

    gameContainer.appendChild(playerChoicesContainer);
    gameContainer.appendChild(computerChoiceContainer);

    createRockButton(playerChoicesContainer);
    createPaperButton(playerChoicesContainer);
    createScissorsButton(playerChoicesContainer);
    createComputerSide(computerChoiceContainer);
    createWinElements(gameWinContainer)
})

function createRockButton(container){
    const rockButton = document.createElement('button');
    rockButton.classList.add('rock-button');
    rockButton.textContent="ROCK";
    container.appendChild(rockButton)
}

function createPaperButton(container){
    const paperButton = document.createElement('button');
    paperButton.classList.add('paper-button');
    paperButton.textContent="PAPER";
    container.appendChild(paperButton)
}

function createScissorsButton(container){
    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('scissors-button');
    scissorsButton.textContent="SCISSORS";
    container.appendChild(scissorsButton)
}

function createComputerSide(containerComputer){
    const pcTitle = document.createElement('p')
    const pcChoiceTextField = document.createElement('p')
    pcTitle.textContent="Computer Chooses: "

    containerComputer.appendChild(pcTitle)
    containerComputer.appendChild(pcChoiceTextField)
    
}

function createWinElements(containerWin){
    const winTitle = document.createElement('p')
    winTitle.textContent="Winner is: "
    const winTextField = document.createElement('p')

    containerWin.appendChild(winTitle)
    containerWin.appendChild(winTextField)
}
function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = (prompt("Round"+roundCounter+": Rock, Paper,or Scissors?"));
    //console.log("Round "+roundCounter)
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
            //playRound(roundCounter)


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
/*function playGame(){
    for(let round = 1; round<=5; round++){
        console.log(playRound(round))
    }
    console.log("Player Final Score:" + getPlayerScore())
    console.log("Computer Final Score:" + getComputerScore())
    if(playerScore>computerScore){console.log("Player Wins the Game!")}
    else if(computerScore>playerScore){console.log("Computer Wins the Game!")}
    else if (computerScore == playerScore){console.log("Draw")}
    else{console.log("error.")}
}*/
let computerScore = 0;
let playerScore=0;
/*playGame();*/

