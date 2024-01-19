                      // Arrays

let arr= [1,2,3,"aman"];   // variable length, mixed type
console.log(arr[2]);

arr.push(7);                       // add at last
console.log(arr);
arr.unshift(9);
console.log(arr);                  // adds at 1st-- time complexity--n

arr.pop();                         // removes last-- no argument

arr.shift();                        // removes 1st element

 // arr.includes(); arr.indexof(somevalue);

 //arr.slice(1,3); 
 //arr.splice(1,4); --- it maniputes the array;

 let arr1=[9,8,7,6];
 let arr2=['a','b','c'];
 let arr3=["aman","appu"];
 console.log(...arr1,...arr2,...arr3);    // spread operator--concats all
 
 // arr.flat();

 console.log(Array.from("amanrai"));             // converts the content's contents in an array
 console.log(Array.from({name:"amanrai"}));     // intersting case,, do you want to convert key or value?

 let n1= 10, n2=22, n3=69;
 console.log(Array.of(n1,n2,n3));              // converts the contents into array
 
