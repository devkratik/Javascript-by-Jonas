"use strict";
let worldPopulation = 7900;

/*
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
*/

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

/*
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
*/

const test1 = Number(percentageOfWorld1(60).toFixed(2));
const test2 = Number(percentageOfWorld1(64).toFixed(2));
const test3 = Number(percentageOfWorld1(33).toFixed(2));

console.log(test1);
console.log(test2);
console.log(test3);

/*
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const test11 = Number(percentageOfWorld2(1450).toFixed(2));
const test22 = Number(percentageOfWorld2(50).toFixed(2));
const test33 = Number(percentageOfWorld2(30).toFixed(2));

console.log(test11);
console.log(test22);
console.log(test33);
