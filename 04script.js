let num1= new Number(100.654848466484);   // now we cant change its type by normal means
console.log(num1);

console.log(num1.toString());

console.log(num1.toPrecision(9));           // total pricision 9----- returns string

console.log(num1);

let num2= new Number(56);

console.log(num2.toFixed(3));                   // digits after decimal

let max= Number.MAX_VALUE;
console.log(max);

// Math.abs();  Math.round();  Math.ceil(); Math.floor(); 


console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());              // gives values between 0 and 1 >> play with it