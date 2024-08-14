// Variables
let a = prompt('Enter a number:'); //btw prompt requires a browser so you need to connect this with an html page
let b = prompt('Enter another number:');
let firstNumber = parseFloat(a); //Convert the strings taken from prompt into floating point numbers (basically decimals)
let secondNumber = parseFloat(b);

let operator = prompt('Enter the operator:');

let addOperator = '+';
let subtractOperator = '-';
let multiplyOperator = '*';
let divideOperator = '/';

const random = Math.random()

// Operator Functions
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return (a / b)
}

// Print Answer (basically we match the value taken through the prompt in operator variable and match it with some defined variables, if they match, we perform a certain function, so if the value of the operator variable matches the value of any of the defined operator 'string' values, it performs the mathematical function)

//Note: Here is the extended code for faulty calculator, where instead of a normal calculator, this calculator perform correwct operation only 66.66% of the time, and the rest of the time switches up the operators

if (random >= 0.3) {
    if (operator === addOperator) {
        console.log(add(firstNumber, secondNumber));
    } else if (operator === subtractOperator) {
        console.log(subtract(firstNumber, secondNumber));
    } else if (operator === multiplyOperator) {
        console.log(multiply(firstNumber, secondNumber));
    } else if (operator === divideOperator) {
        console.log(divide(firstNumber, secondNumber));
    } else {
        console.log('Please enter a correct operator.');
    }
}

else {
    if (operator === addOperator) {
        console.log(subtract(firstNumber, secondNumber));
    } else if (operator === subtractOperator) {
        console.log(add(firstNumber, secondNumber));
    } else if (operator === multiplyOperator) {
        console.log(divide(firstNumber, secondNumber));
    } else if (operator === divideOperator) {
        console.log(multiply(firstNumber, secondNumber));
    } else {
        console.log('Please enter a correct operator.');
    }
}

//Made by Nabeel Sadiq 14th/August/2024 (Independence day of Pakistan btw)
//Ayo day of celebrationnnn.......independence day + my first calculator! (with faults) sheeeshhhhh.....
