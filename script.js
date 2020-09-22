import { startConfetti, stopConfetti, removeConfetti} from './confetti.js'

const playerScore = document.querySelector('#playerScore')
const playerChoiceEl = document.querySelector('#playerChoice')
const computerScore = document.querySelector('#computerScore')
const computerChoiceEl = document.querySelector('#computerChoice')
const resultText = document.querySelector('#resultText')

const playerRock = document.querySelector('#playerRock')
const playerPaper = document.querySelector('#playerPaper')
const playerScissors = document.querySelector('#playerScissors')
const playerLizard = document.querySelector('#playerLizard')
const playerSpock = document.querySelector('#playerSpock')

const computerRock = document.querySelector('#computerRock')
const computerPaper = document.querySelector('#computerPaper')
const computerScissors = document.querySelector('#computerScissors')
const computerLizard = document.querySelector('#computerLizard')
const computerSpock = document.querySelector('#computerSpock')

const allGameIcons = document.querySelectorAll('.far')


let compChoice = ''
let playerScoreNum = 0;
let computerScoreNum = 0;
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// REset select
function resetSelected () {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected')
  });
  stopConfetti()
  removeConfetti()
}

// ADD SELECTED AND COMP CHOICE

function displayCompChoice () {
  switch (compChoice) {
    case 'rock' : 
    computerRock.classList.add('selected')
    computerChoiceEl.textContent = ' --- Rock';
    break;
    case 'paper' : 
    computerPaper.classList.add('selected');
    computerChoiceEl.textContent = ' --- Paper';
    break;
    case 'lizard' : 
    computerLizard.classList.add('selected');
    computerChoiceEl.textContent = ' --- Lizard';
    break;
    case 'scissors' : 
    computerScissors.classList.add('selected');
    computerChoiceEl.textContent = ' --- Scissors';
    break;
    case 'spock' : 
    computerSpock.classList.add('selected')
    computerChoiceEl.textContent = ' --- Spock';
    break;
    default :
    break
  }
}

function computerRandom() {
  const computerChoiceNum = Math.random()
  if (computerChoiceNum < 0.2) {
    compChoice = 'rock'
  }
  else if (computerChoiceNum <= 0.4) {
    compChoice = 'paper'
  }
  else if (computerChoiceNum <= 0.6) {
    compChoice = 'scissors'
  }
  else if (computerChoiceNum <= 0.8) {
    compChoice = 'lizard'
  }
  else {
    compChoice= 'spock'
  }
}

function updateScore (playerChoice) {
  if (playerChoice === compChoice) {
    resultText.textContent = "It's a tie :)"
    stopConfetti()
    removeConfetti()

  }else {
    const choice =choices[playerChoice]
    if (choice.defeats.indexOf(compChoice) > -1) {
      resultText.textContent = "YOU WON :)"
      playerScoreNum++
      playerScore.textContent = playerScoreNum
      startConfetti()
 
    }else {
      resultText.textContent = "DEFEATED! (:"
      computerScoreNum++
      computerScore.textContent = computerScoreNum
      stopConfetti()
      removeConfetti()

    }
  }
}

function checkResult (playerChoice) {
  resetSelected();
  computerRandom();
  displayCompChoice();
  updateScore(playerChoice)
}

function select (playerChoice) {
  checkResult (playerChoice)
  // ADD SELECTED STYLING AND PLAYERCHOICE
  switch (playerChoice) {
    case 'rock' : 
    playerRock.classList.add('selected')
    playerChoiceEl.textContent = ' --- Rock';
    break;
    case 'paper' : 
    playerPaper.classList.add('selected');
    playerChoiceEl.textContent = ' --- Paper';
    break;
    case 'lizard' : 
    playerLizard.classList.add('selected');
    playerChoiceEl.textContent = ' --- Lizard';
    break;
    case 'scissors' : 
    playerScissors.classList.add('selected');
    playerChoiceEl.textContent = ' --- Scissors';
    break;
    case 'spock' : 
    playerSpock.classList.add('selected')
    playerChoiceEl.textContent = ' --- Spock';
    break;
    default :
    break
  }
}
window.select = select

// RESET ALL GAME
function reset () {
  playerScoreNum = 0;
  computerScoreNum = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  resultText.textContent = "LET THE GAME BEGIN";
  playerChoiceEl.textContent = ''
  computerChoiceEl.textContent = ''
  resetSelected();
  stopConfetti()
}
window.reset = reset;
