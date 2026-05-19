//first step creating a fixed variable firstName

const firstName = "Liam";

//then lastName

const lastName = "De Wet";

//next a changable variable

let age = 19;

//combining the two
const fullName = firstName + " " + lastName;

//print to screen

console.log(
  "Hey there, my name is " + fullName + " and I am " + age + " years old.",
);

//changing the age variable

age = 20;

//updated console
console.log("Next year I will be " + age + " years old.");
