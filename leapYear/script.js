// I am creating a function that determine a leap year;

function isLeapYear(year){
    if(year % 4 == 0){
        console.log(`${year} is a leap year.`);
        
    }
    else {
        console.log(`${year} is not a leap year.`);
        
    }
}

isLeapYear(2026);
isLeapYear(2027);
isLeapYear(2028);
isLeapYear(2029);
isLeapYear(2030);
isLeapYear(2031);