const name = "Ritik"
const repoCount = 50
// console.log(name + repoCount + " repos") // Ritik50 repos

// this above syntax is outdated and not recommended to use. Instead we can use template literals which is a new feature in ES6.


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 

const gameName = new String('Ritiksh') // this is a string object and not a primitive string. It is not recommended to use string objects(key value pairs).

// console.log(gameName[0])

// console.log(gameName.__proto__) // this is the prototype of the string object. It contains all the methods and properties of the string object.

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('R'))


const newString = gameName.substring(0, 3)// this will return the substring from index 0 to index 3 (not including index 3)

console.log(newString)

const anotherString = gameName.slice(-7, 3) // this will return the substring from index 0 to index 3 (not including index 3)

console.log(anotherString)
// r  i  t  i  k  s  h
// 0  1  2  3  4  5  6  
// -7 -6 -5 -4 -3 -2 -1

const newStringOne = "   ritik    ";

console.log(newStringOne.trim()) // this will remove the white spaces from the start and end of the string.


const url = "https://www.youtube.com/riti%20ksharma"

console.log(url.replace("%20", '-')) // this will replace the %20 with - in the url
console.log(url.includes("youtube"))


con(gameName.split('')) // this will split the string into an array of characters
console.log(gameName)