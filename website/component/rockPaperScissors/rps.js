const choices=["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let result="";
computerScore=0;
playerScore=0;
function playGame(playerChoice){
  const computerChoice=choices[Math.floor(Math.random()*3)];
  let result="";
  if (playerChoice===computerChoice){
    result="its ite";
  }
  else{
    switch(playerChoice){
      case "rock":
        result=(computerChoice==="scissors")? "you win":"you loss";
        break;
      case "paper":
        result=(computerChoice==="rock")? "you win":"you loss";
        break;
      case "scissors":
        result=(computerChoice==="paper")? "you win":"you loss";
        break;
      }
    } 
    playerDisplay.textContent= `Player:${playerChoice}`;
    computerDisplay.textContent=`Computer:${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
      case "you win":
        resultDisplay.classList.add("greenText");
        playerScore++
        playerScoreDisplay.textContent=playerScore;
        break;
      case "you loss":
        resultDisplay.classList.add("redText");
        computerScore++
        computerScoreDisplay.textContent=computerScore;
        break;
    }
 
  }


// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * 3)];
//   playerDisplay.innerHTML = `Player: ${playerChoice}`;
//   computerDisplay.innerHTML = `Computer: ${computerChoice}`;

//   let result = "";
//   if (playerChoice === computerChoice) {
//     result = "It's a tie!";  
//   } else if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
//   ) {
//     result = "Player wins!";
//   } else {
//     result = "Computer wins!";
//   }

//   resultDisplay.innerHTML = result;
// }
  