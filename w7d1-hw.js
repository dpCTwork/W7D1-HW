// Q1. Write a function that takes a string(sentence) and an array of strings(in this example dog_names) and check if one of the list members(dog names) is in the string(sentence).Return an array of the dog names found in the array

// hint: filter, includes

// for information on includes see:

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

let testString2 = "My Dog is fast, her name is Tippi"
//Expect []

let testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']

var dogNames = ["Max", "Fido", "Gizmo", "Nala"]

function checkDogName(sentence, dogNames){
    return dogNames.filter(dogName => sentence.includes(dogName))
}

console.log(checkDogName(testString3,dogNames))


//==========================================================================

// Q2. Write a Function using map to convert an array of number from inches to feet

    // 1 foot = 12 inches

    // const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
console.log(heightsInInches.map((height)=>height/12))


//==========================================================================
//Q3. Question #3
/*Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.*/

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]

for (let name of tmnt){
    if (name.charAt(name.length-1) === 'o'){console.log(`${name} is eating pizza`)}
    else {console.log(`${name} is being rude`);}
}


//==========================================================================
// Q.4
// Write an arrow function to find the max number in a list.Do not use the Math.max Function.

// The List will be all positive numbers

let findAMax = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]
//Expect
// 234125

const findMax = (list) => list.reduce((max, current) => (current > max ? current : max))
console.log(findMax(findAMax));
// got help for this one, learning in process that '?' (ternary operator) paired with ':' can serve as alternative to if-else statements


//==========================================================================
//Q5. At the end of the third Iteration(the third time the loop has ran) of this for Loop, define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for (let i = bingo.length - 1; i >= 0; i--) {
    ognib += (bingo[i])
//define state from this line on the third iteration
}
//bingo value is "B-I-N-G-O"
//ognib value is "O-G"
// i value is 6


//==========================================================================
// Q6. Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link here to the 3 questions you completed

// 1: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
    if (year % 100 === 0 && year > 0) {
        return Math.floor(year / 100)
    } else if (year % 100 !== 0) {
        return Math.floor(year / 100) + 1
    }
}

// 2:

// 3:
