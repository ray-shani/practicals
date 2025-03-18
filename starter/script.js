const scoreDolphins = 96 + 108 + 89 / 3;
const scoreKoalas = 88 + 91 + 110 / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("The dolphins are the winners");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas have won");
} else if (scoreDolphins === scoreKoalas) {
  console.log("It is a tie");
}
