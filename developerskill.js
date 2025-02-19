// developer Skills

const pays = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const gifts = [];
const totals = [];

function tipCalc(pay) {
  return pay >= 50 && pay <= 300 ? pay * 0.15 : pay * 0.2;
}
for (let i = 0; i <= pays.length; i++) {
  gifts.push(tipCalc(pays[i]));
  totals.push(gifts[i] + pays[i]);
}
console.log(gifts);
console.log(totals);

function average(bill) {
  let average = 0;
  for (let i = 0; i <= bill.length; i++) {
    average += bill[i];
  }
  return average / bill.length;
}
console.log(average(totals));

const temperatures = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTemp = function (temperature) {
  let min = temperature[0];
  let max = temperature[0];
  for (let i = 1; i < temperature.length; i++) {
    const currentTemp = temperature[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(min, max);
  return max - min;
};
// temperatures.push * [82, -40, 24];
console.log(calcTemp(temperatures));

const temp1 = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [8, 12, 21];
calcTempNew = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  let min = temp[0];
  let max = temp[0];
  for (let i = 1; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(temp);
  console.log(min, max);
  return max - min;
};

console.log(calcTempNew(temp1, temp2));

// debugging Concept
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} Day..., `;
  }

  return str;
};

console.log(printForecast(arr1, arr2));
console.log(printForecast(arr));
