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
    return "red";
  } else if (colors == blue) {
    return console.log("i really like the blue color");
  } else if (colors == pink) {
    return console.log("i too like pink color");
  } else {
    return console.log("i don't like grey");
  }
};
const colors = ["red", "blue", "pink"];
colors.push("grey");
console.log(colors);
console.log(balls(colors[0]));

// const student = {
//   name: "Jason",
//   age: 25,
//   marks: {
//     phy: 98,
//     chem: 99,
//     bio: 100,
//   },
//   total: function total() {
//     return this.marks.bio + this.marks.chem + this.marks.phy;
//   },
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.total());

// const marks = ["hundred", 100, 200];
// console.log(marks);

const student = {
  name: "selva",
  age: 19,
  dept: "cse",
  marks: {
    m1: 80,
    m2: 90,
    m3: 95,
  },
  total: function total() {
    const sum = this.marks.m1 + this.marks.m2 + this.marks.m3;
    return sum;
  },
};
console.log(student.total());

// code challenge 3
const markinfo = {
  name: "Mark Miller",
  mass: 78,
  hight: 1.69,
  calcBmi: function () {
    this.bmi = (this.mass / this.hight) * this.hight;
    return this.bmi;
  },
};
const johninfo = {
  name: "John Smith",
  mass: 92,
  hight: 1.95,
  calcBmi: function () {
    this.bmi = (this.mass / this.hight) * this.hight;
    return this.bmi;
  },
};
console.log(markinfo.calcBmi());
console.log(johninfo.calcBmi());

const compare =
  markinfo.bmi > johninfo.bmi
    ? `Mark has higher BMI ${markinfo.calcBmi()}`
    : `John has higher BMI ${johninfo.calcBmi()}`;

console.log(compare);

const students = [
  {
    name: "Jason",
    age: 25,
    marks: {
      phy: 98,
      chem: 99,
      bio: 100,
    },
    total: function total() {
      return this.marks.bio + this.marks.chem + this.marks.phy;
    },
  },
  {
    name: "selva",
    age: 15,
    marks: {
      phy: 96,
      chem: 97,
      bio: 92,
    },
    total: function total() {
      return this.marks.bio + this.marks.chem + this.marks.phy;
    },
  },
  {
    name: "dinesh",
    age: 17,
    marks: {
      phy: 18,
      chem: 29,
      bio: 30,
    },
    total: function total() {
      return this.marks.bio + this.marks.chem + this.marks.phy;
    },
  },
];
students.map((student) => {
  console.log(student.name);
  console.log(student.age);
  console.log(student.total());
});

let i = 0;
let j = 15;
for (let k = i; k <= j; k++) {
  console.log(k);
}
