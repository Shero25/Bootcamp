//create a program that calculates positive numbers only
//if a user eters a negative number that number is skipped
let prompt= require('prompt-sync')();

//if a negative the loop must terminate
//non numeric number---> skip iteration

let sum=0;
let num = 0;
while (num>=0){
    sum+=num;

    //user input number
    num= parseInt(prompt('Enter a number: '));

    if(isNaN(num)){
        console.log('you entered a string that is not a number ');
        num=0;
        continue;
    }
    console.log(`the sum is ${sum}`);
}
