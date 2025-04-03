// TEST ONE

const scoreDolphins = 96 + 108 + 89 / 3;
const scoreKoalas = 88 + 91 + 110 / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("The dolphins are the winners");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas have won");
} else if (scoreDolphins === scoreKoalas) {
  console.log("It is a tie");
}

// TEST TWO
const markWeight = 78;
const martkHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

const BMIMark = markWeight / martkHeight ** 2;
const BMIJohn = johnWeight / johnHeight ** 2;

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIJohn > BMIMark) {
  console.log("John's BMI is higher than Mark! ");
} else {
  console.log("Mark's BMI is higher than John's!");
}
if (BMIMark > BMIJohn) {
  console.log(`Marks BMI ${BMIMark} is higher than Johns ${BMIJohn}`);
}

const markMiller = {
  fullName: "Mak Miller",
  mass: "78kg",
  height: "1.69m",
};
function BMI(mass, height) {
  const totalBMI = mass / height ** 2;
  return totalBMI;
}
const calcBMI = BMI(78, 1.69);
console.log(calcBMI);

const johnSmith = {
  fullName: "John Smith",
  mass: "92kg",
  height: "1.95m",
};
function BMI(mass, height) {
  const totalBMI = mass / height ** 2;
  return totalBMI;
}
const calcBMI1 = BMI(92, 1.95);
console.log(calcBMI1);

if (calcBMI > calcBMI1) {
  console.log(`Marks BMI ${calcBMI} is higher than Johns ${calcBMI1}`);
}

// TEST THREE
// const teamDolphins=(96+96+89)/3;
// const teamKoalas=(96+96+89)/3;
// console.log(teamDolphins,teamKoalas);
// if(teamDolphins > teamKoalas){
// console.log("The Dolphins have won!");
// }
// else if(teamKoalas > teamDolphins){
//   console.log("The Koalas have won!");
// }
// else if(teamDolphins === teamKoalas){
//   console.log('Both have won!');

// }
// Bonus 1
const teamDolphins = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 123) / 3;
console.log(teamDolphins, teamKoalas);
if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log("The Dolphins have won!");
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log("The Koalas have won!");
} else if (
  teamDolphins === teamKoalas &&
  teamDolphins >= 100 &&
  teamKoalas >= 100
) {
  console.log("Both have won!");
} else {
  console.log("No-one wins the trophy");
}

// Test Again
const calcAverage = (Dolphins = (44 + 23 + 71) / 3),
  Koalas = (65 + 54 + 49) / 3;
console.log(calcAverage);

// function checkwinner(avgDolphins,avgKoalas){
//   const winners=`Koalas win(${avgDolphins} vs ${avgKoalas})`;
//   return winners;
// }
// const results=winners;
// console.log(results);

// Test 4
const bill = 300;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} and the tip was ${tip}`);
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// Functions
function shani() {
  console.log("My name is Ray Shani");
}
shani();
shani();
shani();

function fruits(apples, pineapple) {
  const juice = `Juice with ${apples} apples
  and ${pineapple} pineapple`;
  return juice;
}
const appleJuice = fruits(10, 8);
console.log(appleJuice);

const pineappleJuice = fruits(7, 15);
console.log(pineappleJuice);

// Function declarations and expressions
function calcAge(birthyear) {
  return 2025 - birthyear;
}
const age1 = calcAge(1996);
console.log(age1);

// Arrow function
const newAge = (birthyear) => 2025 - birthyear;
const ageNew = newAge(1997);
console.log(ageNew);

// Arrays
const food1 = "chapati";
const food2 = "meat-stew";
const food = "kachumbari";
const meal = ["chapati", "meat-stew", "kachumbari"];
meal.push("ugali");
console.log(meal);
console.log(meal[1]);
console.log(meal[0]);
console.log(meal[3]);
console.log(meal[meal.length - 1]);
console.log(meal.indexOf("meat-stew"));
console.log(meal.includes("meat-stew"));

// Array dot annotation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2025 - 1996,
  job: "teacher",
  friends: ["Jonas", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.friends);
console.log(jonas["job"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["second" + nameKey]);

// const interestedIn= prompt('What do you want to know about jonas? Choose between his firstName, lastName, age, job, and friends');
// console.log(interestedIn);
// if(jonas(interestedIn)){
//   console.log(jonas[interestedIn]);
// }
// else{
//   console.log('Wrong request!What do you want to know about jonas? Choose between his firstName, lastName, age, job, and friend');
// }
console.log(
  `${jonas.firstName} has ${jonas.friends.length} and his bestfriend is called ${jonas.friends[2]} `
);

// The for loop
for (let num = 1; num <= 15; num++) {
  console.log(`We mzee ${num}`);
}

// Looping arrays
const jonas2 = [
  "Jonas",
  "Wozza",
  2037 - 1991,
  "Teacher",
  ["Jonas", "Peter", "Steven"],
];
for (let i = 0; i < jonas2.length; i++) {
  console.log(jonas2[i]);
}

// Running the loop backwards
const jonas3 = [
  "Jonas",
  "Wozza",
  2037 - 1991,
  "Teacher",
  ["Jonas", "Peter", "Steven"],
];
for (let i = jonas3.length - 1; i >= 0; i--) {
  console.log(jonas3[i]);
}
for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-----------Starting excercise ${excercise}`);
  for (let rep = 1; rep < 4; rep++) {
    console.log(`-----------wozaa ${rep}`);
  }
}

// The while loop
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end......");
  }
}

//Switch statement
const day = "thursday";
switch (day) {
  case "monday":
    console.log("I wake up early");
    console.log("I dont take alchohol");
    break;
  case "tuesday":
    console.log("wozaaaa");
    console.log("wozaaaa");
  case "thursday":
    console.log("we call it a weekend");
}

// Else if practicals
let days = "thursday";
if(days==="monday"){
  console.log("Monday is a good day.");
}
else if (days==="tuesday"){
  console.log("The week is going on by fast");
}
else if (days==="wednesday"||days=="thursday"){
  console.log("wozza wozaa");
}

