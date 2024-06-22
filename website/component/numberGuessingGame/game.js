//Number Guessing Game
let gamemin=1;
let gamemax=10;
let answer= Math.floor(Math.random()*(gamemax-gamemin)+gamemin);
console.log("answer",answer);
let attempt=0;
let guess;
let running=true;
while(running){
  guess=window.prompt("Guess the correct number");
  guess=Number(guess);
  
  if(isNaN(guess)){
    window.alert("Please enter valid number");
  }
  else if(guess<gamemin || guess>gamemax){
    window.alert("Please enter valid number");
  }
  else{
    attempt++;
    if(guess>answer){
      window.alert("Too high");
    }
    else if(guess<answer){
      window.alert("Too low")
    }
    else{
      window.alert(`Correct! The answer is ${answer}. You have taken ${attempt}attemptd`)
      running=false;
    }
  }
}
