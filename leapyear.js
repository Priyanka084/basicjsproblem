//create function
function checkLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){ // leap year conditions
        console.log (year + ' is Leap Year'); 
    } else {
        console.log ( year + ' is not a Leap Year');
    }
}
const year = prompt('Enter a year'); // take input from the user
checkLeapYear(year); // return function