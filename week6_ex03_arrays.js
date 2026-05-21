//empty array

let colours = [];

//add 3 colours using push()

colours.push("Green");
colours.push("Blue");
colours.push("Turquoise");

//another array with numbers

const numbers = [1, 2, 3, 4, 5];

//removing the last colour from the colours array

colours.pop();

//add a new colour to the front of the colours array
colours.unshift("Indigo");

//print the length of both the arrays
console.log("Colours array:", colours);
console.log("Colours array lenght:", colours.length);

console.log("Numbers array:", numbers);
console.log("Length of numbers array:", numbers.length);
