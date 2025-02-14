// contional statement

//if contion
let licence = 1989;
let year = 2025;
let expire = year - licence;
if (expire < 15) {
  console.log("your licence is not expired");
  // else if condition
} else if (expire < 2) {
  console.log("Get ready to renew your licence");
  // else contion
} else {
  console.log("Your licence is expired");
}

// code challenge
/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

***TEST DATA 1:*** Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
***TEST DATA 2:*** Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

const markweight = 78;
const markhight = 1.69;
const johnweight = 92;
const johnhight = 1.95;
const markBMI = markweight / markhight ** 2;
const JhonBMI = johnweight / (johnhight * johnhight);
console.log(markBMI);
console.log(JhonBMI);
if (markBMI > JhonBMI) {
  console.log(`"markBMI is (${markBMI}) Greaterthen johnBMI (${JhonBMI})!`);
} else {
  console.log(`JhonBMI is (${JhonBMI}) Greaterthen MarkBMI (${markBMI})!`);
}

// code challenge 2
/* ### Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

const Dolphins = (116 + 108 + 89) / 3;
const Koalas = (118 + 91 + 110) / 3;
const minimum = 100;

if (Dolphins < Koalas && Koalas >= minimum) {
  console.log("Koalas is the winner");
} else if (Dolphins > Koalas && Dolphins >= minimum) {
  console.log("Dolphins is the winner");
} else if (Dolphins === Koalas) {
  console.log("Match is Draw");
} else {
  console.log("No one is Winner");
}

// conditional ternery:
// code Challenge 1;
const bill = 290;
const tip =
  bill >= 50 && bill <= 300 ? (15 / 100) * bill : bill <= 300(20 / 100) * bill;
console.log(
  `The Bill amount is ${bill}, The Tipes is ${tip} and The Total Amount is ${
    bill + tip
  }`
);
// code challenge 2;
const attendance = "not in class";
switch (attendance) {
  case "not in class":
    console.log("The Student is Absent");
    break;
  case "in class":
    console.log("The Student is Precent");
    break;
  case "halfday":
    console.log("The student Precent Halfday");
    break;
  default:
    console.log("Invalid Input");
}
