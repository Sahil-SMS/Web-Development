'use strict';
const myname = 'jonas';
//global variable declaration
function first() {
  const age = 30;
  // if (age >= 30) {
  //   const decde = 3;
  //   var millenial = true;
  // }
  function second() {
    const job = 'teacher';
    console.log(`${myname} is a ${age} - old ${job} `);
    return age;
  }
  const a = second();
  console.log(a);
}
first();
//
function calcage(birthyear) {
  const age = 2023 - birthyear;
  console.log(myname);
  return age;
}
const a = calcage(2001);
console.log(a);
if (myname === 'jonas') {
  const job = 'teacher';
  console.log(`${myname} is a ${job}`);
  const age = 2023 - 2001;
  console.log(age);
}
//this
const jonas = {
  year: 2001,
  calcage: function () {
    console.log(this);
    console.log(2023 - this.year);
    //using arrow function
    const calcage1 = () => console.log(this.year >= 2000 && this.year <= 2010);
    calcage1();
    //using function expression
    const self = this;
    const calcage2 = function () {
      console.log(self.year >= 2000 && self.year <= 2010);
    };
    calcage2();
  },
};
jonas.calcage();

//primitive type
let lastname = 'williams';
let oldlastname = lastname;
lastname = 'davis';
console.log(lastname);
console.log(oldlastname);

//reference type
const jessica = {
  firstname: 'jessica',
  lastname: 'williams',
  age: 21,
};
const marriedjessica = Object.assign({}, jessica);
marriedjessica.lastname = 'davis';
console.log('Before Marriage=', jessica);
console.log('After Marriage=', marriedjessica);
