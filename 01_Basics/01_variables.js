const accountId = 144553 
// accountId = 2
// const - no change is possible 

let accountEmail = "ritiksinghal11@gmail.com"
// accountEmail = "rsab@ab"
// let - change is possible

var accountPassword = "1234"
accountCity = "Jaipur" // we can save space in memory by not declaring a variable, but it is not a good practice to do so.

let accountSpace;


console.log(accountId);
console.log(accountEmail);
console.table([accountPassword, accountCity, accountId, accountEmail, accountSpace]);


/*
Prefer not to use var,
due to functional scope and conditional scope issues, use let and const instead.
*/



