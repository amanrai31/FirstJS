                     //OPERATIONS, Numbers, Maths


let num1= new Number(100.654848466484);   // now we cant change its type by normal means, see properties in console
console.log(num1);

console.log(num1.toString());

console.log(num1.toPrecision(9));           // total pricision 9----- returns string

let num2= new Number(56);

console.log(num2.toFixed(2));           // digits after decimal, usually used upto 2 digit pricision

let max= Number.MAX_VALUE;
console.log(max);

// Math.abs();  Math.round();  Math.ceil(); Math.floor(); 


console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());              // gives values between 0 and 1 >> play with it
console.log(45%7);

//Math.sqrt(); Math.cbrt(); Math.floor(); Math.ceil(); Math.abs();

// Arithmatic operations>> +,-,*,/,%
