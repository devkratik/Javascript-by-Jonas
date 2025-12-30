"use strict";
/* code from previous assignments */
let worldPopulation = 7900;

/* 
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' 
*/
const percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
};

const test = Number(percentageOfWorld3(60).toFixed(2));
console.log(test);
