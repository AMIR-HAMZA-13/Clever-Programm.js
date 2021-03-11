/*

console.log('hello');
//alert('hello this is quazy');

// how to write a comment inline

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);




//var age =  prompt('What is your age ?');

//document.getElementById('someText').innerHTML = age;

// Numbers in javascript

var num1 = 10;

// Increment num1 by 1;

num1++
num1++;

//decrement num1 by 1;
num1--;
num1--;

console.log(num1);

// divide /, multiply *, remainder %,

console.log(num1 % 6);
console.log(num1 / 6);


// increment, decrement by 10;
num1 += 10;
console.log(num1);

/* Function
1.create a funciton
2.call a function

//creting
function fun() {
    console.log('this is a funncion');
}
//call
fun();

/* let's create a function that take in a name and says hello followed by your name


for exampel
name:"Qazi"
return: "Hello Qazi"


function greeting(yourName) {

    var result = 'hello' + ' ' + yourName; //String Concatinatin
    console.log(result);
}
//var name = prompt('what is youur name?');
// greeting(name);


//how do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers('hello', ' Amir Hamza');
sumNumbers(10, 10);



// While loops
var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}


//for loops
for (let num = 0; num < 100; num++) {
    console.log(num);
}

//Data types
var yourAge = 18; //number
let yourName = 'Bob' //string
let name = { first: 'jane', last: 'Doe' }; //object
let truth = false; // boolean
let grocerise = ['Apple', 'banana', 'orange']; //array
let random // undifined
let nothing = null; // value null

// String in Javascript (common method)
let fruit = 'banana';
let moreFruits = 'banana\apple';  // new line

console.log(fruit.length);
console.log(fruit.slice(2, 6));
console.log(fruit.indexOf('nan'));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','))//split by a comma
console.log(fruit.split(''))//split by a characters


// array
let = fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');
console.log(fruits[3]); // access value at index 2nd
fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(' * '));

console.log(fruits.pop(), fruits);// remove last Items


console.log(fruits.push('blackberries'), fruits); // appends one

console.log(fruits[2]);
fruits[3] = 'new fruit';
console.log(fruits);
fruits.shift();// remove first element an array
console.log(fruits);
fruits.unshift('kiwi');// add first a element an array
console.log(fruits);


let vagetables = ['asparagus', 'tomato', 'brocroli'];
let allGroceries = fruits.concat(vagetables);// combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
let someNumbers = [5, 10, 2, 25, 255, 1, 2, 334, 321, 2];
console.log(someNumbers.sort(function (a, b) { return a - b })); //sorted in a asceding order
console.log(someNumbers.sort(function (a, b) { return b - a }));// sorted in a deaseding order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);



//Object in Javascript
// dictionaries in Phython

let student = {
    first: 'Rafeh',
    last: 'Qazi',
    age: 25,
    height: 170,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;  // '\n' it's a new line.
    }
};

student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
//18-35 is my target demographic
//var age = prompt('what is your age?');
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}


// Switch statments
// differentiate between weekday vs. weekend
// day 0 --> Sunday
//day 6 --> Saturday
// day 4 --> Thursday weekday

*/