let marks = [33, 84, 63, 96, 99, 93, 83];

function LargestArrElement(arr){

    // check if the array is null or empty
    if(!arr || arr.length == 0){
        throw new Error('We need some numbers in array!');
    }


    // Logic
    let largestElement = arr[0];
    for(let i = 0; i < arr.length; i++){
        // check types of array element
        if(typeof arr[i] !== 'number'){
            throw new Error('Array Elements must be whole integer value.')
        }
        if(largestElement<arr[i]){
            largestElement = arr[i];
        }
    }
    return `The largest element of this array [${arr}] is ${largestElement}`
}


console.log(LargestArrElement(marks))
// LargestArrElement([]);
// LargestArrElement(null);