"use strict";
/* code from previous assignments */
let worldPopulation = 7900;
const percentageOfWorld3 = (population) => {
  return Number(((population / worldPopulation) * 100).toFixed(2));
};
/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
*/
const describePopulation = function (country, population) {
  return `${country} has ${population} people, which is about ${percentageOfWorld3(
    population
  )}% of the world `;
};
/*
3. Call 'describePopulation' with data for 3 countries of your choice
*/
console.log(describePopulation("India", 1450));
console.log(describePopulation("Russia", 12));
console.log(describePopulation("South Africa", 64));
