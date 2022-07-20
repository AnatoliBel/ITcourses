// 1.Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console 

const movies = ['Matrix', 'Blade', 'Django', 'StarWars']
for (let mov of movies){
    console.log(mov)
}

// 2.Given an array of car manufacturers, convert 
//the array to a string and back to an array 

const matrix = ["Nissan", "Daihatsu", "Isuzu", "Toyota", "Honda"];
const NoMatrix = String(matrix);
console.log(NoMatrix);
const NewMatrix = NoMatrix.split(',');
console.log(NewMatrix)


// 3.Given an array of the names of your friends, 
//add the words hello to each element of the array 

const Friends = ['Aleksei', 'RadhikaRaman', 'KrishnaNam', 'Anton']
const HelloFriends = []
for (let i = 0; i < Friends.length; i++) {
    HelloFriends[i] = Friends[i] + ", Hello"; }
console.log('task 3: ' + HelloFriends) 

// 4.Convert numeric array to Boolean 
const NumArr = [1,0,7,6]
const BoolArr = []
for (let i = 0; i < NumArr.length; i++) {
    BoolArr[i] = Boolean(NumArr[i]); }
console.log('task 4: ' + BoolArr) 

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order 
const Numeric = [1,6,7,8,3,4,5,6]
function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }
Numeric.sort(compareNumeric);
console.log('task 5: ' + Numeric)

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3 
const ArrayForFilter = [1,6,7,8,3,4,5,6]
function FilterArray(ArrayForFilter, a) {
    return ArrayForFilter.filter(value => (a < value));
  }
let filtered = FilterArray(ArrayForFilter, 3);
console.log('task 6: ' + filtered); 

// 7. Write a function that takes two parameters - 
//an array and a number and outputs the index of an array element equal to a number 
function MatrixIndex(MatrArr, b){
console.log('task 7: ' + MatrArr[b-1])
}
MatrixIndex ([4,5,7,8,3,1,5,2], 3)

// 8. Implement a loop that will print the number 'a' until it is less than 10 
  let a = 0;
do {
    console.log ('task 8: ' + a);
    a++;
} while (a < 10);

// 9. Implement a loop that prints prime numbers to the console

const lowerNumber = 2;
const higherNumber = 15;

console.log("Task 9: The prime numbers between " + lowerNumber + " and " + higherNumber +" are:");

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// 10. Implement a loop that prints odd numbers to the console
const lowNumber = 2;
const higNumber = 15;

console.log("Task 10: The odd numbers between " + lowNumber + " and " + higNumber +" are:");

for (let i = lowNumber; i <= higNumber; i++) {
    let flag = 0;
    for (let j = 1; j < i; j++) {
        if (i % 2 == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}