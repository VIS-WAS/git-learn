"use strict";

// let myCar = {
//   make: "volvo",
//   model: "s60",
//   engine: {
//     cylinder: 4,
//     displacement: 200,
//   },
// };

// function printCarDetails() {
//   console.log(` make: ${this.make}
// Model:${this.model}
// engine: ${this.engine.cylinder}`);
// }

// function printEngine() {
//   console.log(`cyclinder ${this.cylinder}
//     displacement ${this.displacement}`);
// }

// console.log("car details: \n");
// printCarDetails.call(myCar);

//printEngine.call(myCar.engine);

const setOfvalue = [1, 2, 3, 5, 6, 5, 6, 3, 7, 1];

const dupRemove = new Set(setOfvalue);

var newSetof = [...dupRemove];

console.log(setOfvalue);
console.log(dupRemove);

console.log(newSetof);
