"use strict";
/* code from previous assignments */
let worldPopulation = 7900;
const percentageOfWorld3 = (population) => {
  return Number(((population / worldPopulation) * 100).toFixed(2));
};
/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
*/
const populations = [1450, 44, 64, 30];
/*
2. Log to the console whether the array has 4 elements or not (true or false)
*/
console.log(populations.length === 4);
/*
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld3' that you created earlier to compute the 4
percentage values
*/
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentages);
