
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
const markWeight=78;
const martkHeight=1.69;
const johnWeight=95;
const johnHeight=1.88;

const BMIMark=markWeight/martkHeight**2;
const BMIJohn=johnWeight/johnHeight**2;

console.log(BMIMark,BMIJohn);
const markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI); 

if(BMIJohn>BMIMark){
  console.log("John's BMI is higher than Mark! ");
}
else{
  console.log( "Mark's BMI is higher than John's!")
}
if(BMIMark>BMIJohn){
  console.log(`Marks BMI ${BMIMark} is higher than Johns ${BMIJohn}`)
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
const teamDolphins=(97+112+101)/3;
const teamKoalas=(109+95+123)/3;
console.log(teamDolphins,teamKoalas);
if(teamDolphins > teamKoalas &&teamDolphins >=100){
console.log("The Dolphins have won!");
}
else if(teamKoalas > teamDolphins &&teamKoalas>=100){
  console.log("The Koalas have won!");
}
else if(teamDolphins === teamKoalas &&teamDolphins>=100 &&teamKoalas>=100){
  console.log('Both have won!');

}
else{
  console.log("No-one wins the trophy");
}

// Test 4
const bill= 300;
const tip=bill<=300 && bill>=50 ? bill*0.15: bill*0.2;
console.log(`The bill was ${bill} and the tip was ${tip}`)