                           // Function
function add(num1,num2){
    console.log("hey");
    return num1+num2;
}

let added= add(4,6);

console.log(added);

function usermessage(username){
    if(!username){                           // if username is undefined instead of a string
        console.log("please enter name");
        return;
    }
    console.log(`${username}, you are loggedIN`);
}
usermessage();

function usermsg(username="Sam"){    // sets a default value for username, incase if you leave arguments empty,it wont say undefined;

    console.log(`${username}, you are loggedIN`);
}
usermsg();
usermsg("aman");

function calculateCartPrice(...num3){            // Here it is rest operator not spread
return num3;
}
console.log(calculateCartPrice(200,400,500,600));

function calculateCartPrice2(val1,val2,val3,...num3){            // remaining values will be assigned to num3
    return num3;
}
console.log(calculateCartPrice2(200,400,500,600,700,800));

let user={
    itemName:"s23",
    price: 150000
}

function handleObjects(anyobject){          // This function can handle any object
console.log(`item name is ${anyobject.itemName} and price is ${anyobject.price}`);
}

handleObjects(user);    // we can directly paas object

handleObjects({
    itemName: "15pro",
    price: 130000
})