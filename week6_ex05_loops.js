//array with number 1-5
const numbers = [1, 2, 3, 4, 5];

//the for loop that prints each nummber in the array
console.log("Numbers in the array: ");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//the while loop that counts down from 5 to 1
console.log("Count down:");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

//loop to print only even numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum of all the numbers: ", sum);
