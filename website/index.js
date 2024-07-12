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
for(let i=veg.length-1; i>=0; i--){
  console.log(veg[i]);
}
for(let i=0; i>=0; i--){
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

// object
const perSon={
  firstName: "Ananda",
  lastName: "kumar",
  age: 25,
  isEmployeed: false,
  sayHello: ()=> console.log("Hello"),
}
console.log(perSon.firstName);
perSon.sayHello();

// this
const perSon1={
  firstName: "Ananda",
  lastName: "kumar",
  age: 25,
  isEmployeed: false,
  eat: function(){console.log(`My name is ${this.firstName}${this.lastName}`)},
  sayHello1: function(){console.log("Hello")},
  eat1: ()=>console.log(`My name is ${perSon1.firstName}${perSon1.lastName}`),
  sayHello: ()=>{console.log("Hello")},
}
console.log(perSon1.age);
perSon1.eat();
perSon1.eat1();
perSon1.sayHello();

// construtor
function car(make,model,year,color){
  this.make=make,
  this.model=model,
  this.year=year,
  this.color=color,
  this.drive= function(){console.log(`you are driving ${this.model} model`)}
}
const car1= new car(1,2,3,4);
car1.drive();

// class
class Product{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  displayProduct(){
    console.log(`product: ${this.name}`);
    console.log(`price: ${this.price.toFixed(2)}`);
  }
  calTotal(salesTax){
    return this.price+(this.price*salesTax);
  }
}
const salesTax=0.05;
const product1= new Product("anand", 100.00);
product1.displayProduct();
const totAl= product1.calTotal(salesTax);
console.log(toTal);

// inheritance
class Animal{
  alive=true;
  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}
class Fish extends Animal{
  name="Fish";
}
class Rabbit extends Animal{
  name="rabbit";
}
class Hawk extends Animal{
  name="Hawk";
}const fish= new Fish();
console.log(fish.alive);
fish.eat();

// super

class Animal{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed pf ${speed}mph`);
  }
  
}
class Fish extends Animal{
  constructor(name,age,swimspeed){
    super(name,age);
    this.swimspeed=swimspeed;
  }
  swim(){
    console.log(`The ${this.name} can run`);
    super.move(this.swimspeed);
  }
}
class Rabbit extends Animal{
  constructor(name,age,runspeed){
    super(name,age);
    this.runspeed=runspeed;
  }
  run(){
    console.log(`The ${this.name} can run`);
    super.move(this.runspeed);
  }
  
} 
class Hawk extends Animal{
  constructor(name,age,flyspeed){
    super(name,age);
    this.flyspeed=flyspeed;
  }
  fly(){
    console.log(`The ${this.name} can fly`);
    super.move(this.flyspeed);
  }
}

const fish1= new Rabbit("rabbit",12,25);
console.log(fish1.runspeed);
fish1.run();

// setter and getter
class Person{
  constructor(firstnAme,lastnAme,agE){
    this.firstnAme=firstnAme;
    this.lastnAme=lastnAme;
    this.agE=agE;
  }
  set firstnAme(firstnAme){
    if(typeof firstnAme==="string" && firstnAme.length>0){
      return this._firstnAme=firstnAme;
    }
    else{
      console.log('some message');
    }
  }
  set lastnAme(lastnAme){
    if(typeof lastnAme==="string" && lastnAme.length>0){
      return this._lastnAme=lastnAme;
    }
    else{
      console.log('some message errro');
    }
  }
  set agE(agE){
    if(typeof agE=== "number" && agE>=0){
      return this._agE=agE;
    }
    else{
      console.log('some message 01');
    }
  }
  get firstnAme(){
    return this._firstnAme;
  }
  get lastnAme(){
    return this._lastnAme;
  }
  get agE(){
    return this._agE;
  }
  get fullName(){
    return this._firstnAme+" "+this._lastnAme;
  }
}
const person= new Person('AD',"DK",2);
console.log(person.firstnAme);
console.log(person.lastnAme);
console.log(person.fullName);
console.log(person.agE);

// nested object
class Person{
  constructor(nAme,agE,...address){
    this.nAme=nAme;
    this.agE=agE;
    this.address=new Address(...address);
  }
}
class Address{
  constructor(street,city,country){
    this.street=street;
    this.city=city;
    this.country=country;
  }
}

const person1= new Person("AD",1,"gandhi Nagar","coimbatore","Tamil Nadu")
console.log(person.address);

// error handling
try{
  const dividend=Number(window.prompt("Enter the dividend: "));
  const divisor=Number(window.prompt("Enter the divisor: "));
  if(divisor == 0){
    console.log("enter valid no. ");
  }
  if (isNaN(dividend) || isNaN(divisor)){
    console.log("values must be a num");
  }
}
catch(error){
  console.log("something");
}
finally{
  console.log("something crazy");
}

// eventListener
/*const mybox = document.getElementById("myBox");
mybox.addEventListener("click",event =>{
  event.target.style.backgroundColor="tomato";
  onclick.target.textContent="OUCH";
})
mybox.addEventListener("mouseover",event =>{
  onclick.target.style.backgroundColor="yellow";
  onclick.target.textContent="Don't do it";
})
mybox.addEventListener("mouseout",event =>{
  onclick.target.style.backgroundColor="lightgreen";
  onclick.target.textContent="Click Me";
})*/

const mybOx = document.getElementById("myBox");

mybOx.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH";
});

mybOx.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it";
});

mybOx.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me";
});
