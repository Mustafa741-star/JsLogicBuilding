// Chatgpt suggested this method and said this is very logic and memory efficent solution

// And also said that make habit of writing js code in this logical way

function calculateSumOfDigits(inputNumber){
    let number = Math.abs(inputNumber);
    let sum = 0;
    
    while(number > 0){
         sum += number % 10;
        number = Math.floor(number/10);
    }
    
    return sum;
}

console.log(calculateSumOfDigits(45));
console.log(calculateSumOfDigits(-45));