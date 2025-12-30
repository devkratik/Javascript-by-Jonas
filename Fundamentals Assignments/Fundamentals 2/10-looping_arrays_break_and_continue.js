"use strict";
/* code from previous assignments */
let worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
// percentages was [ 18.35, 0.56, 0.81, 0.38 ]
/*
1. Let's bring back the 'populations' array from a previous assignment
*/
const populations = [1450, 44, 64, 30];
/*
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier.
*/
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(Number(percentageOfWorld1(populations[i]).toFixed(2)));
}
/*
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/
console.log(percentages2); // [ 18.35, 0.56, 0.81, 0.38 ] - same as percentages
