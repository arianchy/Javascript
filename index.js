let math = Number(prompt("Enter your math mark"));
let english = Number(prompt("Enter your english mark"));
let bangla = Number(prompt("Enter your bangla mark"));

let totalmark = math + english + bangla;
console.log("totalmark = " + totalmark);

let average = totalmark / 3;
console.log("Average = " + average);

if (average >= 80) {
  console.log("Your gpa: 5.00");
} else if (average >= 70) {
  console.log("Your GPA: 4.00");
} else if (average >= 60) {
  console.log("Your GPA: 3.50");
} else if (average >= 50) {
  console.log("Your GPA: 3.00");
} else if (average >= 40) {
  console.log("Your GPA: 2.50");
} else if (average >= 33) {
  console.log("Your GPA: 2.00");
} else {
  console.log("You are failed.");
}
