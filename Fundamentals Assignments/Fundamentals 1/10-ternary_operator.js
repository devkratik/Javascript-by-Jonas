"use strict";
/* Code from previous assignments */
const countryModified = "India";
let languageModified = "Hindi";
let populationModified = 1450;
let isIslandModified = false;
const continentModified = "Asia";
let populationAverage = 33;
let countryDescription =
  "India is in Asia, and its 1450 million people speak Hindi";
/*
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
*/
console.log(
  populationModified > populationAverage
    ? `${countryModified}'s population is above average`
    : `${countryModified}'s population is below average`
);
/*

2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original


*/
populationModified = 13;

console.log(
  populationModified > populationAverage
    ? `${countryModified}'s population is above average`
    : `${countryModified}'s population is below average`
);

populationModified = 1450;
