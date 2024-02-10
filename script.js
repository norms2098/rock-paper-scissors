const btnStart = document.querySelector('.start-button');

const gameContainer = document.querySelector('.game-container');
const gameWinContainer = document.querySelector('.game-win-container')

let playerChoice,computerChoice;


//let playerScore = 0;
//let ComputerScore = 0;

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
    createWinElements(gameWinContainer);
    const UIDisableStartButton = document.getElementById("start-button")
    UIDisableStartButton.disabled=true
})

function createRockButton(container){
    const rockButton = document.createElement('button');
    rockButton.classList.add('rock-button');
    rockButton.id="rock-button"
    rockButton.textContent="ROCK";
    container.appendChild(rockButton);
    rockButton.addEventListener('click',()=>{
        setPlayerChoiceRock();
        
    })
}

function createPaperButton(container){
    const paperButton = document.createElement('button');
    paperButton.classList.add('paper-button');
    paperButton.id="paper-button"
    paperButton.textContent="PAPER";
    container.appendChild(paperButton)
    paperButton.addEventListener('click',()=>{
        setPlayerChoicePaper();
    })
}

function createScissorsButton(container){
    const scissorsButton = document.createElement('button');
    scissorsButton.classList.add('scissors-button');
    scissorsButton.id="scissors-button"
    scissorsButton.textContent="SCISSORS";
    container.appendChild(scissorsButton)
    scissorsButton.addEventListener('click',()=>{
        setPlayerChoiceScissors();
        
    })
}

function createComputerSide(containerComputer){
    const pcTitle = document.createElement('p')
    const pcChoiceTextField = document.createElement('p')
    pcTitle.textContent="Computer Chooses: "
    pcChoiceTextField.id="computer-choice-text-field"
    containerComputer.appendChild(pcTitle)
    containerComputer.appendChild(pcChoiceTextField)
    
}

function createWinElements(containerWin){
    const winTitle = document.createElement('p')
    winTitle.textContent="Winner: "
    const winTextField = document.createElement('p')
    winTextField.id="winner-text-field"
    containerWin.appendChild(winTitle)
    containerWin.appendChild(winTextField)
}

function setPlayerChoiceRock(){
    playerChoice="rock"
    const UIDisablePaperButton = document.getElementById("paper-button")
    const UIDisableScissorsButton = document.getElementById("scissors-button")

    UIDisablePaperButton.disabled=true;
    UIDisableScissorsButton.disabled=true;
    playRound();
}

function setPlayerChoicePaper(){
    playerChoice="paper"
    const UIDisableRockButton = document.getElementById("rock-button")
    const UIDisableScissorsButton = document.getElementById("scissors-button")

    UIDisableRockButton.disabled=true;
    UIDisableScissorsButton.disabled=true;
    playRound();
}

function setPlayerChoiceScissors(){
    playerChoice="scissors"
    const UIDisablePaperButton = document.getElementById("paper-button")
    const UIDisableRockButton = document.getElementById("rock-button")

    UIDisablePaperButton.disabled=true;
    UIDisableRockButton.disabled=true;
    playRound();
}

function setPlayerWinnerDeclaration(){
    const UISetWinnerDeclaration = document.getElementById("winner-text-field")
    UISetWinnerDeclaration.textContent="Player Wins!"
}
function setComputerWinnerDeclaration(){
    const UISetWinnerDeclaration = document.getElementById("winner-text-field")
    UISetWinnerDeclaration.textContent="Computer Wins!"
}
function setDrawDeclaration(){
    const UISetWinnerDeclaration = document.getElementById("winner-text-field")
    UISetWinnerDeclaration.textContent="It's a draw!"
}

function setComputerChoice(){
    let choices = ['rock','paper','scissors']
    computerChoice=choices[Math.floor(Math.random()*choices.length)]
    const UIsetComputerChoice = document.getElementById("computer-choice-text-field")
    if (computerChoice == 'rock'){
        UIsetComputerChoice.textContent='Rock';
    }
    else if(computerChoice == 'paper'){
        UIsetComputerChoice.textContent='Paper';
    }
    else{
        UIsetComputerChoice.textContent='Scissors';
    }
    
    
}

function playRound(){
    setComputerChoice();

    switch(playerChoice){
        case 'rock':
            if (computerChoice == 'paper'){
                //ComputerScorePlusOne();
                //printScores();
                setComputerWinnerDeclaration();
                break;
            }
            else if (computerChoice == 'scissors'){
                //PlayerScorePlusOne();
                //printScores();
                setPlayerWinnerDeclaration();
                break;
            }
            else {
                //printScores();
                setDrawDeclaration();
                break;
            }

        case 'paper':
            if (computerChoice == 'scissors'){
                //printScores();
                //ComputerScorePlusOne();
                setComputerWinnerDeclaration();
                break;
            }
            else if (computerChoice == 'rock'){
                //printScores();
                //PlayerScorePlusOne();
                setPlayerWinnerDeclaration();
                break;
            }
            else {
                //printScores();
                setDrawDeclaration();
                break;
            }

        case 'scissors':
            if (computerChoice == 'rock'){
                //printScores();
                //ComputerScorePlusOne();
                setComputerWinnerDeclaration();
                break;
            }
            else if (computerChoice == 'paper'){
                //printScores();
                //PlayerScorePlusOne();
                setPlayerWinnerDeclaration();
                break;
            }
            else {
                //printScores();
                setDrawDeclaration();
                break;
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

/*playGame();*/

