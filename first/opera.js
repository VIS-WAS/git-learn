"use strict";
console.log("20" * 20);
console.log("20" + 20);

var x = 3.4567;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(5));

var y = 25.678;
console.log(y.toPrecision());
console.log(y.toPrecision(2));
console.log(y.toPrecision(4));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

var line = "Fundamental rihgts";
console.log(line.slice(-1));

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("Random Number between 1 and 100: ");

// try {
//   document.write("welcome");
//   document.write(Null);
//   console.log("No error");
// } catch (err) {
//   console.log(err.message);
// }
