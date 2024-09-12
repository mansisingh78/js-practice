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

// upper or lowercase
let strs = "Apna college";
console.log(strs.toUpperCase());
console.log(strs.toLowerCase());

//trim method
//removes whitespaces
let strr = "   apna college js     ";
console.log(strr.trim());

// slice (start,end?)//returns part of string
let sttr = "0123456";
console.log(sttr.slice(0, 5));

//concat// joins str2 with str1

let str1 = "apna";
let str2 = "college";

let res = str1.concat(str2);
//2nd method
let ress = str1 + str2;
// 3rd method
let rees = "i am learning coding from " + str1 + str2;
console.log(res);
console.log(ress);
console.log(rees);

// replace //(searchVal,newVal)
let name = "hello";
console.log(name.replace("h", "y"));

// charAt(idx)
let strss = "ilovejs";
console.log(strss.charAt(2)); //output o
