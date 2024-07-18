const choices=["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
let result="";
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
        break;
      case "you loss":
        resultDisplay.classList.add("redText");
        break;
    }
 
  }
  