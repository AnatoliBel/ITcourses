//-        Create a car object, add a color property to it with the value equals 'black'
let car = {    
    color: "black",  
  };
  
//  -        Change the color property of the car object to 'green'

  car.color = "green"

//-        Add the power property to the car object, which is a function and displays the engine power to the console

car.power = pow

function pow(RPM, T) {
  return (RPM * T) / 5252;
}

var result = pow(5252, 250)
console.log(car)
console.log("The engine power is " + result + " Horse power")

//Pears and apples are accepted to the warehouse, write a function that returns 
//the result of adding the number of accepted pears and apples

function sum(pears, apples) {
  return pears + apples;
}

let total = sum(346, 224);
console.log("Total pears and apples on the warehouse " + total)

// Your name is saved in the payment terminal, write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)

let UserName = ""
function Welcome () {
  let NoName = Boolean (UserName);
  if (NoName == true)
{console.log("hello " + UserName);}
  else
  {console.log("hello ");}
}
Welcome ()

// Write a function for calculating the type of argument and type output to the console
let Arg = 12
function DefineArg () {
 console.log(typeof Arg)
}
DefineArg ()

// Write a function that determines whether a number is prime or not
let val = 467
function DeterPrime () {
 var step = 2;
 var balance = true;
 for (step=2; step < val; step++){
 if (val % step == 0) {balance = false}
 console.log("Statement, 'a number in the variable Val is prime' is  " + balance)
}}

 DeterPrime ()