const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array
const [x, y, z] = arr;
console.log(x, y, z); //  2 3 4

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

// Switch main and secondary
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

console.log(restaurant.order(2, 0)); // (2) ['Garlic Bread', 'Pizza']

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6+++=

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
console.log(p, q, r); // 8 9 1
