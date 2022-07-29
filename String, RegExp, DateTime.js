//Task 1: Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that
// matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const firstText = 'ahb acb aeb aeeb adcb axeb';
const firstResult =firstText.match(/a.b/g);
console.log(firstResult);

//Task 2: Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3
// without capturing the rest

const secondText = '2 + 3 223 2223';
const secondResult = secondText.match(/2 \+ 3/g);
console.log(secondResult);

//const secondResult = secondText.matchAll(/2\s+\s3/g);
//const arrSecondResult = Array.from(secondResult)
//console.log(arrSecondResult);

//Task 3: Get the day, month and year of the current date and output it to the console separately
const now = new Date();
const year = now.getFullYear();
const day = now.getDate();

console.log("Task 3: year is " + year + ", month is " + realMonth() +", day is "+ day + ", day of week is " + dayOfWeek(now));

function dayOfWeek(date) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

function realMonth() {
    const monthes = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return monthes[now.getMonth()];
}
