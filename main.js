

var num = prompt("Enter a number:");
console.log(num);




var num = prompt("Enter a number:");
if (num % 3 === 0 && num % 4 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}





var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
if (num1 > num2) {
  console.log("Max element = " + num1);
} else {
  console.log("Max element = " + num2);
}





var num = prompt("Enter a number:");
if (num < 0) {
  console.log("negative");
} else {
  console.log("positive");
}





var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var num3 = prompt("Enter the third number:");
var max = Math.max(num1, num2, num3);
var min = Math.min(num1, num2, num3);
console.log("Max element = " + max);
console.log("Min element = " + min);





var num = prompt("Enter a number:");
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}





var char = prompt("Enter a character:");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  console.log("vowel");
} else {
  console.log("consonant");
}





var num = prompt("Enter a number:");
for (var i = 1; i <= num; i++) {
  console.log(i);
}





var num = prompt("Enter a number:");
for (var i = 1; i <= 12; i++) {
  console.log(num + " x " + i + " = " + num * i);
}




var num = prompt("Enter a number:");
for (var i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}





var num1 = prompt("Enter the base number:");
var num2 = prompt("Enter the exponent:");
var result = 1;
for (var i = 1; i <= num2; i++) {
  result *= num1;
}
console.log("Output: " + result);





var marks = [];
for (var i = 0; i < 5; i++) {
  marks.push(parseInt(prompt("Enter the marks of subject " + (i+1) + ":")));
}
var totalMarks = marks.reduce((acc, curr) => acc + curr);
var averageMarks = totalMarks / marks.length;
var percentage = (totalMarks / (marks.length * 100)) * 100;
console.log("Total marks = " + totalMarks);
console.log("Average marks = " + averageMarks.toFixed(2));
console.log("Percentage = " + percentage.toFixed(2));





var month = parseInt(prompt("Enter the month number:"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Days in Month: 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Days in Month: 30");
    break;
  case 2:
    console.log("Days in Month: 28 or 29");
    break;
  default:
    console.log("Invalid Month Number");
}




var physics = parseInt(prompt("Enter the marks of Physics:"));
var chemistry = parseInt(prompt("Enter the marks of Chemistry:"));
var biology = parseInt(prompt("Enter the marks of Biology:"));
var mathematics = parseInt(prompt("Enter the marks of Mathematics:"));
var computer = parseInt(prompt("Enter the marks of Computer:"));
var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;
var grade;
switch (true) {
  case percentage >= 90:
    grade = "A";
    break;
  case percentage >= 80:
   grade = "B";
    break;
  case percentage >= 70:
    grade = "C";
    break;
  case percentage >= 60:
    grade = "D";
    break;
  case percentage >= 40:
    grade = "E";
    break;
  default:
    grade = "F";
}
console.log("Total marks = " + totalMarks);
console.log("Percentage = " + percentage.toFixed(2));
console.log("Grade = " + grade); 





var month = parseInt(prompt("Enter the month number:"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Total number of days in month: 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Total number of days in month: 30");
    break;
  case 2:
    console.log("Total number of days in month: 28 or 29");
    break;
  default:
    console.log("Invalid month number");
}





var alphabet = prompt("Enter an alphabet:");
switch (alphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}





var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
if (num1 > num2) {
  console.log("Maximum number is " + num1);
} else {
  console.log("Maximum number is " + num2);
}





var num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}





var num = parseInt(prompt("Enter a number:"));
if (num === 0) {
  console.log("Zero");
} else if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}





var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
}
console.log("Result: " + result);