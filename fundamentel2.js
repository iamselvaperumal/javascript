// functions in java script
function sample() {
  console.log("this is the sample function");
}
sample();
function flowers(rose, sunflower) {
  console.log(rose, sunflower);
  const order = `I need ${rose} Rose's and ${sunflower} Sunflower's`;
  return order;
}
console.log(flowers(3, 5));

// function expression
let a = 5,
  b = 4;
function operation(var1, var2) {
  console.log(var1 * 10 + var2 * 10);
}
operation(a, b);
operation(10, 20);

function oddEven(a) {
  c = a % 2 === 0 ? "even" : "odd";
  return c;
}
console.log(oddEven(8));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const teamA = (score1, score2, score3) => calcAverage(score1, score2, score3);
const teamB = (score4, score5, score6) => calcAverage(score4, score5, score6);

const checkwinner = (teamA, teamB) => {
  if (teamA >= teamB) {
    console.log(`Team A is the winner`);
  } else if (teamB >= teamA) {
    console.log(`Team B is the winner`);
  } else {
    console.log(`Match is Draw`);
  }
};
checkwinner(teamA(116, 108, 89), teamB(118, 91, 110));

// Arrays concept
// it accepts different data types
const arr = ["selva", "sathiya", "jason"];
console.log(arr[3]);

// code challenge using arrays and functions
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// code challenge2
let red = "red",
  blue = "blue",
  pink = "pink";
const balls = (colors) => {
  if (colors == red) {
    console.log("i don't like red color");
  } else if (colors == blue) {
    console.log("i really like the blue color");
  } else if (colors == pink) {
    console.log("i too like pink color");
  } else {
    console.log("i don't like any color");
  }
};
const colors = ["red", "blue", "pink"];
console.log(balls(colors[2]));
