let date = new Date() // add date object
let n= date.toDateString() // convert date portion of date object
let time = date.toLocaleTimeString() // convert time portion of date object

console.log("Date: " + n) // display date
console.log("Time: " + time) // display time