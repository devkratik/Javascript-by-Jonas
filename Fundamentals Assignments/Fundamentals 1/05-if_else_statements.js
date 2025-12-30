"use strict";
/* Code from previous assignments */
const countryModified = "India";
let languageModified = "Hindi";
let populationModified = 1450;
const isIslandModified = false;
const continentModified = "Asia";
let populationAverage = 33;
let countryDescription =
  "India is in Asia, and its 1450 million people speak Hindi";
/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
*/
if (populationModified > 33) {
  console.log(`${countryModified}'s population is above average.`);
} else {
  console.log(
    `${countryModified}'s population is ${
      populationAverage - populationModified
    } million below average`
  );
}
/*
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
populationModified = 13;
if (populationModified > 33) {
  console.log(`${countryModified}'s population is above average.`);
} else {
  console.log(
    `${countryModified}'s population is ${
      populationAverage - populationModified
    } million below average`
  );
}
populationModified = 130;
if (populationModified > 33) {
  console.log(`${countryModified}'s population is above average.`);
} else {
  console.log(
    `${countryModified}'s population is ${
      populationAverage - populationModified
    } million below average`
  );
}
populationModified = 1450;
