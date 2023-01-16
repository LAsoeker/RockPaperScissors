function getAIChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getPlayerSelection() {
  const choice = prompt("Rock, paper or scissors? Let's play!")
  return choice.toLowerCase();
}

function playRound(playerSelection, AIChoice){
  console.log(`Player picked ${playerSelection} and AI picked ${AIChoice}`)
  if(playerSelection == "rock"){ 
    if(AIChoice == "scissors") return true
    if(AIChoice == "paper") return false
    if(AIChoice == "rock") return "draw"
  }
  if(playerSelection == "scissors"){
    if(AIChoice == "scissors") return "draw"
    if(AIChoice == "paper")  return true
    if(AIChoice == "rock") return false
  }
  if(playerSelection == "paper"){
    if(AIChoice == "scissors") return false
    if(AIChoice == "paper") return "draw"
    if(AIChoice == "rock") return true
  }
  return
}

function playGame(){
  let playerScore = 0
  let AIScore = 0
  let result
  for(let i = 1; i<=5; i++){
    console.log(`Round ${i}! Let's go!`)
    result = playRound(getPlayerSelection(), getAIChoice())
    if (result == "draw"){
      console.log("DRAW! Play again!")
    }else if(result){
      playerScore++
      console.log("Round goes to Player!")
    }else{
      AIScore++
      console.log("Round goes to AI!")
    }
    console.log(`Player: ${playerScore}`)
    console.log(`AI: ${AIScore}`)
  }
  if(playerScore==AIScore){
    console.log("DRAW! No one wins the game")
  }else{
    playerScore > AIScore ? console.log("Yeah Player wins!") : console.log("AI wins!")
  }
  return
}

playGame();