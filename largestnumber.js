let num1 = prompt("Enter first Number");
num1=parseInt(num1);
let num2 = prompt("Enter second Number");
num2=parseInt(num2);
let num3 = prompt("Enter third Number");
num3=parseInt(num3);
let largest;

if (num1 >= num2 && num1 >= num3){
    largest = num1;
} 
else if (num2 >= num1 && num2 >= num3){
    largest = num2;
} 
else {
    largest = num3;
}

console.log(largest);