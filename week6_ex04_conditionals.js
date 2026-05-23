//variable called score with a value between 0 and 100

let score = 67; //chainging this value will give different outputs

//variable called passingGrade and set it to 60

const passingGrade = 60;

//an if statement to chekc if score is greater than or equal to the passingGrade
if (score >= passingGrade) {
  console.log("Passed");

  //an indented if statement to check if the score is perfect
  if (score == 100) {
    console.log("You achieved a perfect score!");
  }
} else {
  //if score is below passingGrade
  console.log("Failed");
}
