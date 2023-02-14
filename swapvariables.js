let a = prompt("Enter value of a");
let b = prompt("Enter value of b");  // take input from the user

[a,b] = [b,a]; //using destructor

console.log(`a is after swapping ${a}`)
console.log(`b is after swapping ${b}`)