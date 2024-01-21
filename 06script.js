                  // OBJECTS
        // We can add variables,Array,objects and functions in an Object

let mysym= Symbol("key1");                  
let obj1={
    name: "Aman",                       // Object.create---- singleton
    "full name": "Aman rai",
    age: 23,
    location: "Buxar",
    email: "aman970rai@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "saturday"],
    [mysym]:"mykey1",
    

}                                           
obj1.greeting= function(){                             // ADDING FUNCTION TO AN OBJECT
    console.log(`Hello JS master, ${this.name}`)
}
console.log(obj1.name);
console.log(obj1["name"]);                        // other way to log object
console.log(obj1.isLoggedIn);
console.log(obj1["full name"]);                    // you cant find full name by obj1.fullname
console.log(obj1[mysym]);
console.log(".......................................................................");
console.log(obj1);

obj1.email="amanrai@hotmail.com"
console.log(obj1.email);
Object.freeze(obj1);                             // frezze changes in obj1
obj1.email="aman07rai@yahoo.com"                // this will not reflect as obj1 frezzed
console.log(obj1.email);
console.log(obj1.greeting());

console.log(".............................................................................");

let tinderUser = new Object();                                // singleton obj
tinderUser.id= 1;
tinderUser.name="am";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularUser={
    email:"example@eg.com",
    fullname: {
        usersfullname:{                                 // nesting
            firstname: "ama",
            lastname:"ray",
        }

    }
}
console.log(regularUser.fullname.usersfullname.lastname);

const ob1={1:"a",2:"b"};
const ob2={ 3:"c", 4:"d"};
const ob3={5:"e", 6:"f"};
const ob4={...ob1,...ob2,...ob3};
console.log(ob4);

console.log(Object.keys(tinderUser));   //returns the keys in form of array- we can operate loops then
console.log(Object.values(tinderUser));   // returns values in array
console.log(Object.entries(tinderUser));  // returns key value pair

// object de-structuring --- lecture 18
// JSON Formatter--- tool to understand JSON file structure
