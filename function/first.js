"use strict";

let mphToKm = (mph) => {
  console.log("mph is", mph);
  return mph * 1.61;
};

console.log(mphToKm(65));

let mphtoKms = (mph) => 1.61 * mph;

console.log(mphtoKms(65));

//document.write(Hello);
try {
  document.write("welcome to home");
  document.write(Hello);
  console.log("welcome to console");
} catch (err) {
  console.log(err.message);
}

let arr = [1, 4, 6, 2, 4];

for (var i in arr) {
  console.log(i);
}
console.log(typeof arr);

let newArr = new Array(2, 4, 6, 8);
console.log(typeof newArr);

const USD_EUR = 0.9;

let itemVal = {
  price: 84,
  priceEur: function () {
    return this.price * USD_EUR;
  },
};

console.log(itemVal.priceEur());
itemVal = {
  price: 84,
  priceEur() {
    return this.price * USD_EUR;
  },
};

console.log(itemVal.priceEur());
