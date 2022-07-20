//- Create a car object, add a color property to it with the value equals 'black'
const car = {}
car.color = "black"

//- Change the color property of the car object to 'green'
car.color = "green"

//-Add the power property to the car object, 
//which is a function and displays the engine power to the console
car.power = function (RPM, T) {
    console.log("The engine power is " + (RPM * T) / 5252 + " Horse power");
}
car.power(5252, 250)

//Pears and apples are accepted to the warehouse, write a function that returns 
//the result of adding the number of accepted pears and apples
function TotalFruit(pears, apples) {
    console.log("Total pears and apples on the warehouse " + (pears + apples));
}
TotalFruit(346, 224);

// Your name is saved in the payment terminal, write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)
const UserName = ""
function Welcome() {
    const NoName = Boolean(UserName);
    if (NoName == true) { console.log("hello " + UserName); }
    else { console.log("hello "); }
}
Welcome()

// Write a function for calculating the type of argument and type output to the console

function DefineArg(Arg) {
    console.log('Argument ' + Arg + ' is ' + typeof Arg)
}
DefineArg(true)
//DefineArg('departure')
//DefineArg(45)

// Write a function that determines whether a number is prime or not
function DeterPrime(val) {
    let step = 2;
    let balance = true;
    for (step = 2; step < val; step++) {
        if (val % step == 0) { balance = false }   
    }
    console.log("Statement '" + val + " is prime number' is  " + balance)
}

DeterPrime(4)
