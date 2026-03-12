// Method no. 2 with help of yt tutorial

function calculateSumOfDigits(inputNumber){
    let sum = 0;
    if(inputNumber < 0){
        throw new Error("inputNumber must be positive!")
    }
    const inputNumberToString = inputNumber.toString();
    const splittedInputString = inputNumberToString.split('');
    splittedInputString.forEach(num =>{
        sum += parseInt(num);
    })
    return sum;
}

console.log(calculateSumOfDigits(123));