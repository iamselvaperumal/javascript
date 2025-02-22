// variables declaraition
let bookname;

// variable initialization
bookname = "Javascript";

console.log(bookname);

// Variables
let variableName = "welcome to variable";
console.log(variableName);

var Name = "Jhon";
console.log(Name);

const Age = "18";
console.log(Age);

// Data Types
// String
const SingleQurdes = "Hello";
const doubleQurdes = "Hello";
const backticks = `Hello`;

console.log(SingleQurdes);
console.log(doubleQurdes);
console.log(backticks);

const name = "jason";
const concordenate = ` Hello, ${name}!!`;

console.log(concordenate);

const add = `${2 + 2}`;
console.log(add);

// to finding the datatype
console.log(typeof add);

// Numbers
const wholenumber = 5;
const decimalnumber = 0.5;

console.log(wholenumber);
console.log(decimalnumber);

// logical operater
const firstNum = 10;
const secoundNum = 5;

// here only change the operater
let result = firstNum + secoundNum;
console.log(result);

// Booleans
let boolen = firstNum < secoundNum;
console.log(boolen);

// conditional statement
if (boolen) {
  console.log("hayy Im Very cool");
} else {
  console.log("sorry Im Not Cool");
}

// Null
let age = null;
console.log(age);

// Undefined
let x;
console.log(x);

// giving FLoat popup message on top of web page
// alert("Hi This is Selva");

// here we declered mulitiple variables and assigined value in single var
let student, studname;
studname = "selva";
student = studname;
console.log(student);

// age declaration
const DOB = "31.05.2005";
const AGE = 19;

console.log(DOB);
console.log(AGE);
console.log(typeof AGE);

// 1. Number Datatype

let infi = Infinity;
let neginfi = -Infinity;
let nan = NaN;

console.log(typeof infi);
console.log(Infinity);
console.log(neginfi);
console.log(typeof nan, nan);
//  above mentioned terms are special Number data types
let Power = NaN ** 0;
console.log(Power);
let temp = NaN ** 2;
console.log(temp);
/* NaN is also a number datatype and any number doing the property its also converted to the NaN
only one operater can change the NaN value that is Power Operater  that only for the 0 num if any number is present that as be a NaN */

//  2.Big integer

// the Number Limits in javascript is 2 ^ 53 -1 = 9007199254740991

let limit = 9007199254740991n;

console.log(limit + 1n); //correct
console.log(limit + 2n); //wrong
console.log(limit + 3n); //correct
console.log(typeof limit);

// 3. String datatype
let wel = "hi hello this is selva";

console.log(typeof wel, wel);
// bactic uses
let sum = `1 + 2 = ${1 + 2}`;
console.log(sum);
// backtic is also used in string inheriting
let NAME = "SELVAPERUMAL";
let welc = "My Name Is";
console.log(`${welc} ${NAME}`);

// Twillia Question
let myName = "Selva";
console.log(typeof myName, myName);
myName = 7339201392;
console.log(typeof myName, myName);

let element = document.getElementById("box");
element.innerHTML = "<p>hi hello </p>";
element.style.color = "blue";
console.log(element.textContent);
