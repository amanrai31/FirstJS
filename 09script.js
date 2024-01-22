                        // Special iterators(forof; forin; foreach)

let arr=[1,2,3,4];
for (const num of arr) {                  // forof loop(works on array, string,map)
    process.stdout.write(num + " ");     // line wont change while printing array
}
console.log();

let str="aman";
for (const n of str) {
    console.log(n);
}

let hmap= new Map();                     // key value pair, no duplicate, maintains order.
hmap.set("91","in");
hmap.set("01","USA");
console.log(hmap);
for (const [key,value] of hmap) {
    console.log(key, ":", value);       // we can print key and value individually,
}

let obj={
    game1:"NFS",
    game2:"COD",
    game3:"GTA"
}

for (const key in obj) {                        //forin loop
   console.log(`${key} is: ${obj[key]}`);
}

// arr.forEach( function (element){      -----------//foreach loop needs a callback function//
// console.log(element);
// });
arr.forEach((element) => {               // foreach loop with arrow f/n--- most commonly used
    console.log(element);
});

let arr1=[
    {
        langName: "Javascript",
        fileName: ".js"
    },
    {
        langName: "Java",
        fileName: ".java"
    },
    {
        langName: "python",
        fileName: ".py"
    }

]

arr1.forEach((element) => {
    console.log(`File name for ${element.langName} is ${element.fileName}`);
});

arr2=[1,2,3,4,5,6,7,8,9];

const ar2=arr2.filter((num)=> {             // filter can return value
    return num > 4                         // filters can be operated on array, string & objects
})
console.log(ar2);
// const ar2 = arr2.filter((num)=> num>4);   // Alternate for 61 to 63, if u declear in 1line-no need for explicit return 
// console.log(ar2);

   

// see reduce-- lecture 30 (chai aur JS);