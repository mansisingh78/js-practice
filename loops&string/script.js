// calculate sum of 1 to 5
//for loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum = ", sum);

//while loop

// let i = 1;
// while (i <= 5) {
//   console.log("i =", i);
// }
//do-while loop
let i = 1;
do {
  console.log("apna college");
  i++;
} while (i <= 10);

//for-of loop
let str = "apnacollege";
let size = 0;

for (let val of str) {
  console.log("val =", val);
  size++;
}
console.log("string size =", size);
//usinf for-of loop string and arrays

//for-in loop
let student = {
  name: "mansi",
  age: 21,
  cgpa: 7.5,
  isPass: true,
};
for (let i in student) {
  console.log(i);
}
//print all even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("i =", i);
  }
}

// strings
let string = "apna college";
console.log(str[4]);
// Template literals
let specialString = `this is a special string`;
console.log(specialString);

let obj = {
  item: "pen",
  price: 18,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees");
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
