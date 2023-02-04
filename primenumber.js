const number = parseInt (prompt('enter a number'));

let  IsPrime = true;

if (number === 1) {
  console.log("this is not prime number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      IsPrime = false;
      break;
    }
  }
  if (IsPrime) {
    console.log("This is prime number");
  } else {
    console.log("This is not prime number");
  }
}
