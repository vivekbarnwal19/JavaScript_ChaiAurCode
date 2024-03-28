// # Primitive

//  7 types : String, Number, Boolean, NULL, Undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 3455555344222n


// Refrence (NonPrimitive)

// 3 Types : Array, Objects, Functions

const heros= ["Shaktiman", "nagraaj" , "doga"]

let myObj = {
    name: "vivek",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);


// ********************************************************************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "vivekbarnwaldotcom"

let anothrename= myYoutubename
anothrename="chaiaurcode"

console.log(myYoutubename);
console.log(anothrename);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne

userTwo.email= "vivek@google.com"

console.log(userOne.email);
console.log(userTwo.email);
