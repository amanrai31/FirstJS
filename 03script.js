                        // Strings

let str="rai"
const x= 34;
let xy="123"
let xx= Number(xy);           //changes string to nmbr// if you add new before Number, it will be object
let str1= new String("aman");

console.log(typeof str);
console.log(typeof x);                   // typeof used to check type of a variable
console.log(typeof xx);
console.log(typeof str1);
console.log(typeof null);           // type of null is object

accID=3
firstname="rai"
password="gfjdj"
console.table([accID,firstname, password]);

//if you dont intilize a variable then is value will be undefined
// play with all string functions

// Primitive Data types- boolean,number,string,null,undefined, simple, BigInt
// Non Primitive Data types- Array, object, function-- 9th lecture

console.log(`Value of x is ${x}`);  // String interpolation

//String functions-- str[index]=str.charAt(index); str.length
// str.toUpperCase(); str.toLowerCase(); str.substring(0,4);
// str.trim()--trims white space
// str.replace('%20','-')-- Replace %20 to -
// str.indexOf(); str.includes();

console.log(str1[1]);

str2="aman-rai-xyz";
console.log(str2.split('-'));