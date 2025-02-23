const resturent = {
  name: "selva resturent",
  location: "15/13, kalarampatty main road-4",
  categories: ["veg", "NonVeg", "SeaFoods"],
  starterMenu: ["parota", "dose", "idly", "puri"],
  mainMenu: ["Full Meals", "Biriyani", "Fried Rice"],

  openingTime: {
    Tus: {
      open: 8,
      close: 11,
    },
    Fri: {
      open: 8,
      close: 12,
    },
    Sun: {
      open: 0,
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
let [main, , secondary] = resturent.categories;
console.log(main, secondary);
[main, , secondary] = [secondary, , main];
console.log(main, secondary);
console.log(resturent.order(0, 0));
