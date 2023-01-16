function getAIChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getPlayerSelection() {
  const choice = prompt("Rock, paper or scissors? Let's play!")
  return choice.toLowerCase();
}

function playRound(playerSelection, AIChoice, playerScore, AIScore){
  console.log(`Player picked ${playerSelection} and AI picked ${AIChoice}`)
  if(playerSelection == "rock"){ 
    if(AIChoice == "scissors") playerScore++
    if(AIChoice == "paper") AIScore++
    if(AIChoice == "rock") return "draw"
  }
  if(playerSelection == "scissors"){
    if(AIChoice == "scissors") return "draw"
    if(AIChoice == "paper") playerScore++
    if(AIChoice == "rock") AIScore++
  }
  if(playerSelection == "paper"){
    if(AIChoice == "scissors") return AIScore++
    if(AIChoice == "paper") return
    if(AIChoice == "rock") return  playerScore++
  }
  return
}

function playGame(){
  let playerScore = 0
  let AIScore = 0
  for(let i = 0; i<=5; i++){
    console.log(`Player: ${playerScore}`)
    console.log(`AI: ${AIScore}`)
    playRound(getPlayerSelection(), getAIChoice(), playerScore, AIScore);
    if(playerScore == 5 || AIScore == 5){
      playerScore == 5 ? console.log("Yeah Player wins!") : console.log("AI wins!")
      return
    }
  }
}

playGame();