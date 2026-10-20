
// JavaScript is dynamically typed


// # Primitive

// 7 Types

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt 

const id = Symbol("id");
const anotherId = Symbol("id");
// console.log(id === anotherId); // false
const bigInt = 1234567890123456789012345678901234567890n;

// console.log(typeof bigInt); // bigint

// ## Non-Primitive (Reference) Types

// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Map
// 7. Set

const heroes = ["Iron Man", "Spider Man", "Hulk", "Thor"];

const ironMan = {
    name: "Iron Man",
    realName: "Tony Stark",
    powers: ["Genius-level intellect", "Powered armor suit"],
}

const myFunction = function(){
    // console.log("Hello, World!");
}

// console.log(typeof heroes); // object
// console.log(typeof ironMan); // object
// console.log(typeof myFunction); // function // this is a special case, functions are objects but typeof returns function


// ***************************************MEMORY***************************************


// Stack (Primitive), Heap (Non-Primitive)

// when stack is created then a copy of the primitive value is stored in the stack. When a non-primitive value is created, a reference to the value is stored in the stack and the actual value is stored in the heap.

let myYoutubeName = "Codevolution"; // stored in stack

let anotherYoutubeName = myYoutubeName; // stored in stack
anotherYoutubeName = "Codevolution2"; // stored in stack

console.log(myYoutubeName); // Codevolution
console.log(anotherYoutubeName); // Codevolution

let user = {

    email: "user@google.com",
    upi: "user@upi",

}

let anotherUser = user; // stored in stack
anotherUser.email = "Ritik@google.com"; // stored in heap

console.log(user.email); // Ritik@google.com
console.log(anotherUser.email); // Ritik@google.com