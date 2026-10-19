"use strict"; // treat all JS code as newer version

// alert("Hello") // we are using nodejs not browser
// JavaScript runs in an environment: Browsers and Node.js both run JavaScript, but browsers provide features like alert() and document, while Node.js provides features like file-system access. That’s why alert() works in a browser but not in Node.js.  

// console.log(3+3); console.log() // there is not code readability in this type 

console.log(3 + 3);
console.log() // this is a better way to write code, it is more readable and understandable

let name = "Ritik Singhal"
let age = 18
let isLoggedIn = false

// PRIMITIVE DATA TYPES

// number ==> 2 to the power 53
// bitint
// string ==> ""
// boolean ==> true/false
// null - standalone value | representation of empty value 
// undefined - standalone value
// symbol - unique and cannot be changed

// OBJECT 

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null); // object (this is a known issue in JS)
console.log(typeof undefined); // undefined