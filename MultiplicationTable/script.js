function multiplication(num, range){
    // check if arguments are messing 
    if(num === undefined || range === undefined){
        throw new Error('Missing argument: number and range are required.')
    }
    
    // check for correct types
    if(typeof num !== 'number' || typeof range !== 'number'){
        throw new Error('Inputs must be number.')
    }
    
    // check for negative numbers and zero
    
    if(num < 0 || range < 0){
        throw new Error('Inputs must be positive for both values');
    }
    // check for Integer validation 
    if(!Number.isInteger(num) || !Number.isInteger(num)){
        throw new Error('Inputs must be whole integers.')
    }
    
    // Logic
    for(let i = 1; i <= range; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
// multiplication(3, 10); 
// multiplication("33", 10); will throw error
// multiplication(0, 10); 
// multiplication(-5, 10); will throw error 
multiplication(5, 10);

