/*
    - ARRAY METHODS
*/
//Array methods allow us to manipulate elements in an array.
//They allow us to combine, remove, add, update, and reverse elements.

//JOIN METHOD
/*
    The join method allos us to concatenate all of the elements in an array. It creates and then returns a string using a separator. NOTE: a separator can be anything!

*/

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join(" * "))

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join(" AND "))

//REVERSE METHOD
/*
    The reverse method reverses the order of the lements in an array. It sorts it in descending order.
*/

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.reverse())

//SPLIT METHOD
/*
    Splits an element into multiple elements and returns an array. NOTE: t does not change the original array.
*/
let str = "Sailor moon is one of my favorite cartoons";

//Splitting by whitespace
let strWords = str.split(" ");
console.log(strWords)

let strChar = str.split("");
console.log(strChar[8]);

//REPLACE METHOD
/*
    used to search for a certain string and replace it with another.
*/

let wrong = "who's monitor is this?";

let correct = wrong.replace("Who's", "Whose")
console.log(correct);

let str2 = "I have experience with HTML, C#, and javascript. javascript is the one i love the most";
let strNew = str2.replace(/JavAscript/gi, "Javascipt");

//g stands for global and i stand for cas insensitive

console.log(strNew)

//SPLICE METHOD


//MAP METHOD
/*
    Used to update all the elements in an array based on a function that you create.
    NOTE: This method does NOT create a new array.
*/

let wheelOfTime = [
    {firstName : "Rand", lastName: "al'Thor"},
    {firstName : "Egwene", lastName: "al'Vere"},
    {firstName : "Nynaeve", lastName: "al'Meara"}
];

let charsName = wheelOfTime.map(function(name) {
    return [name.firstName, name.lastName].join(" ")
})

console.log(charsName)
console.log(wheelOfTime)