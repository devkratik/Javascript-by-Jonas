"use strict";
/* code from previous assignments */
let worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const populations = [1450, 44, 64, 30];
/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
*/
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(Number(percentageOfWorld1(populations[i]).toFixed(2)));
  i++;
}
/*
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/
console.log(percentages3);
