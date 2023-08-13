'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 12,
    },
  },
  order: function (starterindex, mainmenuindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainmenuindex]];
  },
  orderpasta: function (ing1, ing2, ing3) {
    console.log(`You have ordered pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderpizza: function (mainingredients, ...otheringredients) {
    console.log(mainingredients);
    console.log(otheringredients);
  },
};

//destructing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//changing names of object property
const {
  name: restaurantname,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantname, hours, tags);

//default variable
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variable
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//destructing array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching/swapping variables using destructing
[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieving values from object fuction and destructing it
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

//nested object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//spread operator
const arr = [1, 2, 3, 4, 5];
const newarr = [7, 8, ...arr];
console.log(newarr);
const newmenu = [...restaurant.mainMenu, 'biryani'];
console.log(newmenu);

//copying array
const mainmenucopy = [...restaurant.mainMenu];

//joining 2 or  more array
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//spread operator in function
const ingredints = [
  // prompt("Let's make pasta, ingredints1 ?"),
  // prompt('ingredint2?'),
  // prompt('ingredient3?'),
];
restaurant.orderpasta(...ingredints);

// spread operator in object
const newrestaurant = { foundedin: 1997, ...restaurant, founder: 'sahil' };
console.log(newrestaurant);

const restaurantcopy = { ...restaurant };
restaurantcopy.name = 'shaikh';
console.log(restaurantcopy.name);
console.log(restaurant.name);

//Spread because it is used on right side of =
const arr1 = [1, 2, ...[3, 4, 5]];
console.log(arr1);

//Rest because it is used on left side of =
const [A, B, ...others] = [1, 2, 3, 4, 5];
console.log(A, B, others);
const [sai, , sha, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(sai, sha, otherfood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function (...number) {
  console.log(number);
};
add(2, 3);
add(4, 5, 6, 7);
add(7, 8, 9, 1, 2, 3);

restaurant.orderpizza('mushroom', 'egg', 'veg', 'non veg');

//short circuiting
console.log(2 || 0); // in OR it returns first truty value
console.log(2 && 0); //in AND it returns first falsy value

//Nullish Coalesing Opeartor
restaurant.numguest = 0;
const guest = restaurant.numguest ?? 10;
console.log(guest);

const rest1 = {
  names: 'capri',
  numguest: 0,
};
const rest2 = {
  names: 'La Pizza',
};

//OR assingnment operator
// rest1.numguest ||= 10;
// rest2.numguest ||= 10;

//nullish assingnment operator
rest1.numguest ??= 10;
rest2.numguest ??= 10;

console.log(rest1);
console.log(rest2);

//for of loop
for (const item of menu1) console.log(item);

//entries
for (const item of menu1.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}

//optional chaining
console.log(restaurant.openingHours.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we provide service at ${open}`);
}
const user = [{ name: 'jonas', email: 'jonas@atos.in' }, { sex: 'male' }];
console.log(user[1]?.sex ?? 'user array is empty');

//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openstr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openstr += `${day}, `;
}
console.log(openstr);

//property values
const values = Object.values(openingHours);
console.log(values);

//entries object
const entry = Object.entries(openingHours);
console.log(entry);

//[key,values]
for (const [key, { open, close }] of entry) {
  console.log(`on ${key}, we are open at ${open} and closes at ${close} `);
}
