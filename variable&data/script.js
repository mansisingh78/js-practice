// fullName = "tony stark";
age = 24;
price = 99.99;
// x = null;
y = undefined;
isFollow = true;
console.log(isFollow);

let name = "tony stark";
let totalPrice = 234;
console.log(totalPrice);

//data types
//primitive data types
let totalAge = 24;
console.log(totalAge);

let fullName = "tony stark";
console.log(fullName);

let x;

let z = null;
let a = BigInt("123");
let b = Symbol("hello!");
//non-primitive data types

const student = {
  name: "mansi singh",
  age: 21,
  cgpa: 6.2,
  isPass: true,
};
//changing value in object
student["age"] = student["age"] + 2;
student["name"] = "shradha";

// object acess with 2 types
console.log(student["age"]);
console.log(student.age);

//practice
const product = {
  title: " Ball pen",
  price: 30,
  offer: 20,
  rating: 4,
};
console.log(product["rating"]);
//practice

const profile = {
  userName: "shradha",
  followers: 2345,
  following: 145,
  isFollow: true,
};
console.log(profile);
console.log(typeof profile["userName"]);
