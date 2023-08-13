"use strict";
// let hasDriversLicence = false;
// let pass = true;
// if (pass) hasDriversLicence = true;
// if (hasDriversLicence) console.log("has licence");
// function logger() {
//   console.log('my name is sahil');
// }

// //calling function
// logger();
// logger();

// //function declaration
// function frurit(mango, orange) {
//   console.log(mango, orange);
//   let juice = `mango is ${mango} and orange is ${orange}`;
//   return juice;
// }
// let appleOrange = frurit(5, 6);
// console.log(appleOrange);

// //fuction experssion
// let calcage = function (birthyear) {
//   return 2023 - birthyear;
// }
// let age = calcage(2001);
// console.log(calcage(2001));

// //Arrow function
// let calcage2 = birthyear => 2023 - birthyear;
// let age1 = calcage2(2001);
// console.log(age1);
// let yearsleft = (birthyear, firstname) => {
//   let age2 = 2037 - birthyear;
//   let retirement = 65 - age2;
//   return `my name is ${firstname} years left ${age2}`;
// }
// console.log(yearsleft(2001, 'sahil'));

// //fuction calling function
// function fruitpieces(fruits) {
//   return fruits * 4;
// }
// function frurits(mango, orange) {
//   let mangopieces = fruitpieces(mango);
//   let orangepieces = fruitpieces(orange);
//   let juice = `mango has ${mangopieces} pieces and orange has ${orangepieces} pieces`;
//   return juice;
// }
// console.log(frurits(2, 3));

// //coding challenge 1
// //Test 1
// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let scoreDolphin = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);
// let winner = function (avgdolphin, avgkoalas) {
//   if (avgdolphin >= avgkoalas * 2) {
//     console.log(`dolphin win ${avgdolphin} vs. ${avgkoalas}`);
//   } else if (avgkoalas >= avgdolphin * 2) {
//     console.log(`koalas win ${avgkoalas} vs. ${avgdolphin}`);
//   } else console.log('no team wins');
// }
// winner(scoreDolphin, scoreKoalas);
// //Test 2
// scoreDolphin = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphin, scoreKoalas);
// winner(scoreDolphin, scoreKoalas);

// //Array
// let year = new Array(2001, 2002, 2003);
// console.log(year);
// let y = function (birthyea) {
//   return 2023 - birthyea;
// }
// let y1 = [1997, 2001, 2003];
// let ag1 = y(year[0]);
// let ag2 = y(y1[2]);
// console.log(ag1, ag2);

// //array functions
// let friend = ['michael', 'john', 'petter'];
// friend.unshift('jay');
// console.log(friend);
// let s = ['sahil is', 23, 'age'];
// console.log(s);

// //coding challenge 2
let calcTip = function (value) {
  let tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
  return tip;
};
// }
// let a = calcTip(100);
// console.log(a);
// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// let totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(totals);

// //Object
// let jonas = {
//   firstname: 'jonas',
//   lastname: 'shaikh',
//   birthyear: 2005,
//   job: 'teacher',
//   friends: ['michael', 'bob', 'peter'],
//   hasDriversLicence: true,
//   calcage1: function () {
//     this.age = 2023 - this.birthyear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${jonas.firstname} is a ${jonas.calcage1()} - years old, and he has ${jonas.hasDriversLicence ? 'a' : 'no'} drivers licence`
//   }
// };
// console.log(jonas.getSummary());
// console.log(jonas.friends);
// console.log(jonas['age']);
// console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// console.log(jonas.calcage1());

// //Coding challenge 3
// let mark = {
//   name: 'mark miller',
//   mass: 78,
//   Height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.Height * this.Height);
//     return this.BMI;
//   }
// }
// let john = {
//   name: 'john smith',
//   mass: 92,
//   Height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.Height * this.Height);
//     return this.BMI;
//   }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.BMI, john.BMI);
// if (mark.BMI > john.BMI) {
//   console.log(`${mark.name} BMI (${mark.BMI}) is higher than ${john.name} (${john.BMI})`);
// } else if (john.BMI > mark.BMI) {
//   console.log(`${john.name} BMI (${john.BMI}) is higher than ${mark.name} (${mark.BMI})`);
// }

// //NOT operation
// let sa;
// if (!sa) {
//   console.log("aa");
// } else console.log("bb");

//For loop
// let yy = ['sahil', 'shaikh', 22, 'teacher'];
// let type = [];
// for (let i = 0; i < yy.length; i++) {
//   //Reading yy array
//   console.log(yy[i], typeof yy[i]);
//   //filling type array
//   //type[i] = typeof yy[i];
//   type.push(typeof yy[i]);
// }
// console.log(type);

// const year = [1991, 2007, 1969, 2010];
// const age = [];
// for (let i = 0; i < year.length; i++) {
//   age[i] = 2023 - year[i];
// }
// console.log(age);

// //continue
// let jonass = ['sahil', 'shaikh', 22, 'teacher'];
// for (let i = 0; i < jonass.length; i++) {
//   if (typeof jonass[i] !== 'string') continue;
//   console.log(jonass[i], typeof jonass[i]);
// }

// //break
// let jonas = ['sahil', 'shaikh', 22, 'teacher'];
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonass[i], typeof jonass[i]);
// }

// //backward loop
// for (let i = jonass.length - 1; i >= 0; i--) {
//   console.log(i, jonass[i]);
// }

// //While loop
// let i = 1;
// while (i <= 10) {
//   console.log(`While : lifting weight ${i} `);
//   i++;
// }

//coding challenge 4
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}
console.log(bills, tips, total);
const calcaverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcaverage1(total));
console.log(calcaverage1([2, 3, 7]));
