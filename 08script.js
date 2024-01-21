                  //Arrow function and IIFE

let user={
    username:"Aman",
    age: 23,
    welcomeMessage: function(){                            // function as object's entity
        uNmae="Rai";
        console.log(`hi ${this.username}, Welcome`);
        console.log(this.uNmae);                           // undefined
        console.log(this);                                  // returns current context
    },
    
}
user.welcomeMessage();
console.log(this);              // returns empty braces

xyz=(num1,num2) =>{                   // Array function stored in variable xyz
 return num1+num2;
}
console.log(xyz(4,5) );

addtwo = (num3,num4) => num3+num4          // Array function in 1 line          
console.log(addtwo(7,9));                    // add semicolon


( function iifex(){                    // immediatly invoked function expression-- to eascape global pollution
    console.log(`DB Connected`);          // iife-- ()()
})()
