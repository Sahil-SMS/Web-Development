/*let a = "sahil ";
console.log(a);
a = true;
console.log(typeof a);
const now = 2023
const agesahil = now - 2001
console.log(agesahil);
//math operator
const ageshaikh = now - 2003;

console.log(agesahil * ageshaikh);
console.log(agesahil + ageshaikh);*/

// Coding challenge 1
// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;
// console.log(marksHeight, marksWeight, johnHeight, johnWeight);

// const marksBMI = marksWeight / (marksHeight * marksHeight);
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(marksBMI, johnBMI);

// let markHeigherBMI = marksBMI > johnBMI;
// console.log(markHeigherBMI);
// // Coding challenge 2
// if (marksBMI > johnBMI) {
//   console.log(`mark's BMI (${marksBMI}) is higher than john's BMI(${johnBMI})!`);
// } else {
//   console.log(`john's BMI (${johnBMI}) is higher than mark's BMI(${marksBMI})!`);
// }
// const year = 1991;
// console.log(year + 18);

// const favourite = prompt("Which is you favourite number ?");
// console.log(favourite);
// Coding Challenge 3
// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;
// console.log('dolphins ' + dolphinsScore + ' koalas ' + koalasScore);
// if (dolphinsScore > koalasScore) {
//   console.log('winner is dolphin');
// } else if (koalasScore > dolphinsScore) {
//   console.log('winner is koalas');
// } else if (koalasScore === dolphinsScore) {
//   console.log('match is draw');
// }
// const bdolphinScore = (97 + 112 + 101) / 3;
// const bkoalasScore = (109 + 95 + 123) / 3;
// if (bdolphinScore > bkoalasScore && bdolphinScore >= 100) {
//   console.log('dolphin wins');
// } else if (koalasScore > dolphinsScore && bdolphinScore >= 100) {
//   console.log('koalas wins');
// } else if (koalasScore === dolphinsScore && bdolphinScore >= 100 && bdolphinScore >= 100) console.log('match is draw');
// else console.log("no one wins the trophy");
// Coding challenge 4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(tip);
console.log(`The Bill value is ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);