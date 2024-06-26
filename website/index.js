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

//array
let fruits=["apple","orange","bannana"];
console.log(fruits.length);
fruits.pop();
fruits.sort();
fruits.sort().reverse();
fruits.push("coconut");
//etc.,
console.log(fruits[0]);
console.log(fruits.indexOf("apple"));
let veg=["apple","orange","bannana"];
for(let i=0; i<veg.length; i++){
  console.log(veg[i]);
}
for(let i=veg.length; i>=0; i--){
  console.log(veg[i]);
}
for(let fruit of veg){
  console.log(fruit);
}

//spread operator
let og=["apple","orange","bannana"];
let of=["orange","bannana","apple"];
let A=[...og,...of, "egg","onion"];
console.log(A);
let myNameIs= "Anand";
let last=[...myNameIs].join("-");
console.log(last);

//rest parameters
const fullName=combineStrings("Mr.","Anandakumar","R");
function combineStrings(...strings){
  return strings.join(" ");
}
console.log(fullName);

// forEach

let eater=["apple","orange","bannana"];

eater.forEach(capitalize);
eater.forEach(display);
function capitalize(element,index,array){
  array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
function display(element){
  console.log(element);
}

// .map
const date=["2024-02-01","2025-05-12","2026-06-23"];
const formateDates=date.map(formatDate);
console.log(formateDates);
function formatDate(element){
  const part=element.split("-");
  return`${part[1]}/${part[2]}/${part[0]}`;
}

// .reduce()
const mark=[0,80,20,51,20,23];
const maximum=mark.reduce(findMax);
console.log(maximum);
function findMax(accumulator, element){
  return Math.max(accumulator, element);
}

// function expressions
const numberS=[1,2,3,4,5,6,7,8];
const square=numberS.map(function(element){
  return Math.pow(element,2);
})
const cube=numberS.map(function(element){
  return Math.pow(element,3);
})
const eveNum=numberS.filter(function(element){
  return element%2===0;
})
const oddNum=numberS.filter(function(element){
  return element%2!==0;
})
const toTal=numberS.reduce(function(accumulator,element){
  return accumulator+element;
})
console.log(toTal);

// arrow function
const numbeR=[1,2,3,4,5,6,7,8];

const sQuare=numbeR.map((element)=>Math.pow(element,2));
const cUbe=numbeR.map((element)=>Math.pow(element,3));
const evenUm=numbeR.filter((element)=>element%2===0);
const oDdnum=numbeR.filter((element)=>element%2!==0);
const tOtal=numbeR.reduce((accumulator,element)=>accumulator+element);
console.log(oDdnum);