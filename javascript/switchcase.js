//calculator using js and switch case
//we need this library module to accept user input 
const prompt = require('prompt-sync')();

let results;

//accepet the operator input
const operator= prompt('enter opertaor (either + , - , * or /): ');

//accept an operand input
const num1= parseFloat(prompt('Enter the first number: '));
const num2= parseFloat(prompt('Enter the second number: '));

switch(operator){
    case '+' :
    results = num1+num2;
    console.log(`${num1} + ${num2}= ${results}`);
    break;

    case '-' :
    results = num1-num2;
    console.log(`${num1}-${num2}= ${results}`);
    break;

    case '*' :
    results = num1*num2;
    console.log(`${num1} * ${num2}= ${results}`);
    break;

    case '/' :
    results = num1/num2;
    console.log(`${num1} / ${num2}= ${results}`);
    break;

    default:
        console.log('Please select the correct operator')
}



