//conditional operator

let age = 16;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("cannot vote");
}

let mode = "blue";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "pink";
} else {
  color: "white";
}
console.log(color);
// ternary operator
let Totalage = 25;
let result = Totalage >= 18 ? "adult" : "not adult";
console.log(result);
// multiple of 5 or not

let num = prompt("enter a number :");
if (num % 5 === 0) {
  console.log("num is mul of 5");
} else {
  console.log("num is not mul of 5");
}

// practice question
let score = 85;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else {
  grade = "F";
}
console.log("grade", grade);
