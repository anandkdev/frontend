const submit= document.getElementById("submit");
const enterage=document.getElementById("enterage");
const result=document.getElementById("result");
let age;
console.log("age ",age);
submit.onclick= function(){

  age=enterage.value;  //change the input value string to number
  //age=Number(age);

  if(age>=18){
    result.textContent="Passed";
  }
  else if(age == 0){
    result.textContent="Zero";
  }
  else{
    result.textContent="you are failed";
  }
}