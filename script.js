let playerScore = 0
let AIScore = 0

const resultOutput = document.querySelector('.output-result');
const choicePlayerOutput = document.querySelector('#output-player');
const choiceAIOutput = document.querySelector('#output-AI');
const playerScoreOutput = document.querySelector('#score-player');
const AIScoreOutput = document.querySelector('#score-AI');
const winnerOutput = document.querySelector('.output-winner')

console.log(playerScoreOutput)

playerScoreOutput.textContent = playerScore;
AIScoreOutput.textContent = AIScore;

function getAIChoice() {
  const choices = ["rock", "paper", "scissors"];
  const AIChoice = choices[Math.floor(Math.random() * 3)];
  choiceAIOutput.textContent = AIChoice;
  return AIChoice;
}

function playRound(playerSelection, AIChoice){
  if(playerSelection === AIChoice) return "draw";
  else if (playerSelection === 'rock' && AIChoice === 'scissors' || playerSelection === 'scissors' && AIChoice === 'paper' || playerSelection === 'paper' && AIChoice === 'rock') return true;
  else return false;
}

function checkGameWinner(playerScore, AIScore){
  if(playerScore === 5 || AIScore === 5){
    playerScore > AIScore ? winnerOutput.textContent = "Yeah Player wins!" : winnerOutput.textContent = "AI wins!"
    resetGame();
  }
  return
}

function playGame(result){
  if (result == "draw"){
    resultOutput.textContent = "DRAW! Play again!";
  }else if(result){
    playerScore++
    playerScoreOutput.textContent = playerScore;
    resultOutput.textContent = "Round goes to Player!";
  }else{
    AIScore++
    AIScoreOutput.textContent = AIScore;
    resultOutput.textContent = "Round goes to AI!";
  }
  checkGameWinner(playerScore, AIScore)
  return
}

function resetGame(){
  playerScore = 0;
  AIScore = 0;
  playerScoreOutput.textContent = playerScore;
  AIScoreOutput.textContent = AIScore;
  resultOutput.textContent = "";
  choiceAIOutput.textContent = "";
  choicePlayerOutput.textContent = "";
  winnerOutput.textContent = "Play Rock, Paper, Scissors!";

}

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', function(e) {
  choicePlayerOutput.textContent = e.target.dataset.choice;
  playGame(playRound(e.target.dataset.choice , getAIChoice()));
}));