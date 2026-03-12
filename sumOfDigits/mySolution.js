/*
Problem statement:
    Write a function that calculates and prints the sum of the digits of a given number

 */
// I have solve this problem without any help so this one is my solution and that rest of solution in other js files of sumOfDigits folder are solved with help of tutorial and AI. So that I can aware of the the possible and best solution method.


function sumOfDigits(num) {
    if(num < 0){
        throw new Error('number must be positive');
    }
    let sum = 0;
    
    for(let i = 0; i<num.length; i++){
        sum += parseInt(num[i]);
    }
    console.log(`The sum of these ${num} is ${sum}`);
}
sumOfDigits("12345"); // 15
sumOfDigits("0112"); // 4
sumOfDigits("1064"); // 11
sumOfDigits("6969"); // 30
sumOfDigits("8438"); // 23
sumOfDigits("8989"); // 34
sumOfDigits("-8989"); // error: number must be positive
