/*
    -SPREAD OPERATOR

        -The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
        -It takes in a iterable object/object and expands it into individual elements. The spread operator is commonly used to make copies.
            -Allows to amnipulate both arrays and objects.
        -Denoted by the ellipsis (...)
        
*/

let students = ["Sterling", "Mitch"];
//WRONG SYNTAX

//...students // "Sterling", "Mitch"


//the spread operator is good at making  a new copy of that array.
console.log(students);

students.push("Rodney");
let copiedStudents = [...students];
console.log(students);
console.log(copiedStudents);

console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices))


//PASS ARGUMENTS
let sentence = ["oh hi mark", false, 2];

function sent(a,b,c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

sent(...sentence);