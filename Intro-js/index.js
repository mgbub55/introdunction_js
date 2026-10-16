let name = 'Douglas';
console.log(name);

// using const to assign a variable
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

// primitive types
let surName = 'Crockford'; //string literal
let age = 25;
let isApproved = true;
let selectColor = null;

// objects
let person = {
    name: 'Douglas',
    age: 25
}

console.log(person);

// dot notation
person.name = 'John';
console.log(person.name);   

// bracket notation
person['name'] = 'Mary';
console.log(person.name);

// arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);


// functions
function greet(name) {
    console.log('Hello ' + name);
}
greet('Douglas');

// conditions
let hour = 10;
if (hour == 10) {
    console.log('It is 10 AM');
} else {
    console.log('It is not 10 AM'); 
}

// ==
// >=
// <=
// ===
// logical operators
// &&
// ||
// !

let booking = true;
let date = '2024-06-10';
let time = 10;
let duration = 30;
let countdown = 30;
let activeMessage = 'Meeting started, Please join the room';
let inactiveMessage = 'Meeting has not started yet, Please wait for the host to start the meeting';

if (booking && date === '2024-06-10' && time >= 10 && duration <= 30 && countdown > 0) {
    console.log(activeMessage);
}
else {
    console.log(inactiveMessage);
}


let user = 'Admin';
let role = 'moderator';

if (!user && role) {
    console.log('Access granted');
}
else {
    console.log('Access denied');
}

// Age based ticket pricing
let ageBase = 11;

let ageBaseMessage = {
    ageBaseChildMessage: 'You get a free ticket',
    ageBasePreTeenMessage: 'You will be charged $5',
    ageBaseTeenMessage: 'You will be charged $7',
    ageBaseAdultMessage: 'You will be charged $10',
    ageBaseSeniorMessage: 'You will be charged $6'
};

// Special Discounts
// Note: discounts dont apply to free tickets
let day = 'Tuesday'; 
let dayMessage = 'You will be charged $5 because it is Tuesday';
let loyaltyCard = true; 
let loyaltyCardMessage = 'You get $2 off your ticket price';



if (ageBase < 3 && day === 'Tuesday') {
    console.log(ageBaseMessage.ageBaseChildMessage + ' Tuesday is also a free day for children under 3');
}
else if (ageBase >= 3 && ageBase <= 12) {
    console.log(ageBaseMessage.ageBasePreTeenMessage + ' and because it is Tuesday, your price will still be $5');
}
else if (ageBase > 12 && ageBase < 18 && day === 'Tuesday' && loyaltyCard) {
    console.log(dayMessage + ' and ' + loyaltyCardMessage);
}
else if (ageBase >= 18 && ageBase < 65) {
    console.log(ageBaseMessage.ageBaseAdultMessage);
}
else {
    console.log(ageBaseMessage.ageBaseSeniorMessage);
}

// Loops
let count  = 1;
while (count <= 10){
    console.log(count);
    count = count + 1;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

function greet() {
    console.log('Good Morning');
}

greet();

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(5, 10);
console.log(result);

let userList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
userList.push('fig');
for (let i = 0; i < userList.length; i++) {
    console.log(userList[i]);
}

let userNameList = ['Alice', 'Bob', 'Charlie', 'David'];

function greetUsers(userUpdate) {
    userNameList.push(userUpdate);
}
greetUsers('Eve');
greetUsers('Frank');
console.log(userNameList);

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let resultOfEven = isEven(4);
console.log(resultOfEven); // Output: true

students = ["John", "Jane", "Jim", "Jill"];
students.forEach(function(student, i, arr) {
    arr[i] = student.toUpperCase();
});

products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

//  %5 discount on all products
products.forEach((product) => {
    product.price = product.price * 0.95;
});

// arrow functions
const square = (number) => {
    return number * number;
};

