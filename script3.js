"use strict";
const x = 23;
console.log(x);

const age = (birthyear) => 2058 - birthyear;
console.log(age(2002));

const calctemp = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp != "number") continue;
    if (max < curtemp) max = curtemp;
    if (min > curtemp) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calctemp([2, 5, 8, "error", 4, 9], [5, 3, 1]);
console.log(amplitude);

//Coding Challenge 1
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} day... `;
  }
  console.log("..." + str);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

//challenge
let obj = {
  a: 100,
  fun1() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    };
    fun2();
  },
};

obj.fun1();
