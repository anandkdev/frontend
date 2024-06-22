let username;
document.getElementById("MySubmit").onclick= function(){
  username=document.getElementById("Mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`;
}

/*const PI = 3.14159;
let radius;
let cricumstance;
document.getElementById("MySubmit01").onclick = function(){
  radius=document.getElementById("Mytext01").value;
  cricumstance=2*PI*radius;
  document.getElementById("myh03").textContent=cricumstance + "cm";
}
*/

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const count = document.getElementById("count");
let x=0;
increaseBtn.onclick=function(){
  x++;
  count.textContent=x;
}
decreaseBtn.onclick=function(){
  x--;
  count.textContent=x;
}
resetBtn.onclick=function(){
  x=0
  count.textContent=x;
}

//Math = built-in objext that provides collection of properties(PI, E, etc.,) and methods(mentioned)
/*let a = 3;
let y = 2;
let z;*/
//z=Math.round(a); console.log(z);
//z=Math.floor(a); console.log(z);
//z=Math.ceil(a); console.log(z);
//z=Math.trunc(a); console.log(z);
//z=Math.pow(a,y); console.log(z);
//z=Math.sqrt(a); console.log(z);
//z=Math.log(a); console.log(z);
//z=Math.sin(a); console.log(z);
//z=Math.cos(a); console.log(z);
//z=Math.abs(a); console.log(z);
//z=Math.sign(a); console.log(z);
/*let max = Math.max(a,y,z);
let max = Math.max(a,y,z);
console.log(min);*/

const myButton = document.getElementById("myButton");
const label = document.getElementById("label");
const min = 1;
const max = 10;
let randomNum;
myButton.onclick=function(){
  randomNum=Math.floor(Math.random()*(max-min))+min;
  label.textContent=randomNum;
}



const mycheckbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visa");
const rupay = document.getElementById("rupay");
const gpay = document.getElementById("gpay");
const cash = document.getElementById("cash");
const sub = document.getElementById("sub");
const payment = document.getElementById("payment");
const subcribe = document.getElementById("subcribe");
subcribe.onclick= function(){
  if(mycheckbox.checked){
    sub.textContent="subcribed"
  }
  else{
    sub.textContent="subcribed"
  }
}

// SWITCH
let day=5;
 switch(day){
  case 1:
    console.log("Message recieved");
    break;
  case 2:
    console.log("Not recieved");
    break;
  default:
    console.log("Error")
 }

 let testscore=91;
 let grade;
 switch(true){
  case testscore>=90:
    grade="A";
    break;
  case testscore>=80:
    grade="B";
    break;
  default:
    grade="ad";
 }
 console.log(grade);

 //String slicing
const email="anand@gmail.com";
let firstname = email.slice(0,email.indexOf("@"));
let balance = email.slice(email.indexOf("@"));
console.log(firstname);
console.log(balance);

 //Method chaining
//  let myName= window.prompt("Wirte whatever...");
//  myName=myName.trim().charAt(0).toUpperCase() + myName.trim().slice(1).toLowerCase();
//  console.log(myName);

