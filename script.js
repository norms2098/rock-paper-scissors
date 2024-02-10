const btnStart = document.querySelector('.start-button');
const scoresContainer = document.querySelector('.scores-container')
const gameContainer = document.querySelector('.game-container');
const gameWinContainer = document.querySelector('.game-win-container')
const nextRoundContainer = document.querySelector('.next-round-container')
let playerChoice,computerChoice;

let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;

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
    createScoreElements(scoresContainer)
    createNextRoundElement(nextRoundContainer)

    const UIDisableStartButton = document.getElementById("start-button")
    UIDisableStartButton.disabled=true

    const UIDisableNextRoundButton = document.getElementById("nextround-button")
    UIDisableNextRoundButton.disabled=true
    
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

function createScoreElements(containerScore){
    const divPlayerScoreContainer = document.createElement('div')
    const divComputerScoreContainer = document.createElement('div')

    const textPlayerTitle = document.createElement('p')
    textPlayerTitle.textContent="Player Score:"

    const textComputerTitle = document.createElement('p')
    textComputerTitle.textContent="Computer Score"

    const textPlayerScore = document.createElement('p')
    textPlayerScore.id = "player-score"
    const textComputerScore= document.createElement('p')
    textComputerScore.id = "computer-score"

    containerScore.appendChild(divPlayerScoreContainer)
    divPlayerScoreContainer.appendChild(textPlayerTitle)
    divPlayerScoreContainer.appendChild(textPlayerScore)

    containerScore.appendChild(divComputerScoreContainer)
    divComputerScoreContainer.appendChild(textComputerTitle)
    divComputerScoreContainer.appendChild(textComputerScore)

    textComputerScore.textContent="0"
    textPlayerScore.textContent="0"
}

function createNextRoundElement(containerReset){
    const nextRoundButton = document.createElement('button')
    nextRoundButton.id="nextround-button"
    nextRoundButton.textContent="Next Round";
    containerReset.appendChild(nextRoundButton)
    nextRoundButton.addEventListener('click',()=>{
        const UIDisableRockButton = document.getElementById("rock-button")
        const UIDisablePaperButton = document.getElementById("paper-button")
        const UIDisableScissorsButton = document.getElementById("scissors-button")
        const UIsetComputerChoice = document.getElementById("computer-choice-text-field")
        const UIDisableNextRoundButton = document.getElementById("nextround-button")
        const UIDisableWinnerTextField = document.getElementById("winner-text-field")

        UIDisableNextRoundButton.disabled=true
        UIDisableRockButton.disabled=false;
        UIDisablePaperButton.disabled=false;
        UIDisableScissorsButton.disabled=false;
        UIsetComputerChoice.textContent="";
        UIDisableWinnerTextField.textContent=""
    })

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

function setPlayerChoiceRock(){
    playerChoice="rock"
    const UIDisablePaperButton = document.getElementById("paper-button")
    const UIDisableScissorsButton = document.getElementById("scissors-button")

    UIDisablePaperButton.disabled=true;
    UIDisableScissorsButton.disabled=true;
    playRound()

}

function setPlayerChoicePaper(){
    playerChoice="paper"
    const UIDisableRockButton = document.getElementById("rock-button")
    const UIDisableScissorsButton = document.getElementById("scissors-button")

    UIDisableRockButton.disabled=true;
    UIDisableScissorsButton.disabled=true;
    playRound()

}

function setPlayerChoiceScissors(){
    playerChoice="scissors"
    const UIDisablePaperButton = document.getElementById("paper-button")
    const UIDisableRockButton = document.getElementById("rock-button")

    UIDisablePaperButton.disabled=true;
    UIDisableRockButton.disabled=true;
    playRound()

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

function declareWinnerofGame(){
    const UIPlayerScore = document.getElementById("player-score")
    const UIComputerScore = document.getElementById("computer-score")
    if(playerScore>computerScore){
        UIPlayerScore.setAttribute("style","color:red")
    }
    else if(playerScore<computerScore){
        UIComputerScore.setAttribute("style","color:red")
    }
    else{
        UIPlayerScore.setAttribute("style","color:red")
        UIComputerScore.setAttribute("style","color:red")
    }
}

function playRound(){
    if(roundCounter < 6){
        setComputerChoice()
        switch(playerChoice){
            case 'rock':
                if (computerChoice == 'paper'){
                    setComputerScorePlusOne();
                    setComputerWinnerDeclaration();
                    break;
                }
                else if (computerChoice == 'scissors'){
                    setPlayerScorePlusOne();
    
                    setPlayerWinnerDeclaration();
                    break;
                }
                else {
    
                    setDrawDeclaration();
                    break;
                }
    
            case 'paper':
                if (computerChoice == 'scissors'){
    
                    setComputerScorePlusOne();
                    setComputerWinnerDeclaration();
                    break;
                }
                else if (computerChoice == 'rock'){
    
                    setPlayerScorePlusOne();
                    setPlayerWinnerDeclaration();
                    break;
                }
                else {
    
                    setDrawDeclaration();
                    break;
                }
    
            case 'scissors':
                if (computerChoice == 'rock'){
                    setComputerScorePlusOne();
                    setComputerWinnerDeclaration();
                    break;
                }
                else if (computerChoice == 'paper'){
                    setPlayerScorePlusOne();
                    setPlayerWinnerDeclaration();
                    break;
                }
                else {
                    setDrawDeclaration();
                    break;
                }
    
            default:
                console.log("ERROR");
    
            
        }
        roundCounter++
        const UIDisableNextRoundButton = document.getElementById("nextround-button")
        UIDisableNextRoundButton.disabled=false
    }
    else{
        declareWinnerofGame()
    }
}

function setPlayerScorePlusOne(){
    playerScore++
    const UISetPlayerScore = document.getElementById("player-score")
    UISetPlayerScore.textContent=playerScore 
}

function setComputerScorePlusOne(){
    computerScore++
    const UISetComputerScore = document.getElementById("computer-score")
    UISetComputerScore.textContent=computerScore
}




