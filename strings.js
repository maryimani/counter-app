let username = "Faith"
let message = " You have three notifications"
let messageToUser = message + " ".concat(username)
console.log(messageToUser);

let myName = "Faith";
let greeting = "Hi, my name is "
let allGreeting =greeting.concat(myName)

function myGreeting(){

console.log(allGreeting)
}
myGreeting();

let myPoints = 3;

let add3Points=()=> myPoints += 3;

let remove1Point=()=> myPoints -= 1;

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints)



