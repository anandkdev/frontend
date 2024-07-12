function rollDice(){   //Code eexplaination: https://chatgpt.com/c/6577815b-c865-4d5d-9b9c-3e57202037f2

  const numOfDice=document.getElementById("numOfDice").value;
  const diceResult=document.getElementById("diceResult");
  const diceImages=document.getElementById("diceImages");
  const values=[];
  const image=[];
 
  for(let a=0; a<numOfDice; a++){
    const value=Math.floor(Math.random() * 6) + 1;
    values.push(value);
    image.push(`<img src="diceImage/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent=`dice:${values.join(", ")}`;
  diceImages.innerHTML=image.join("");//link: https://chatgpt.com/c/6577815b-c865-4d5d-9b9c-3e57202037f2
}
//console.log(values);

