"use strict";
/* Code from previous assignments */
const countryModified = "India";
let languageModified = "Hindi";
let populationModified = 1450;
const isIslandModified = false;
const continentModified = "Asia";
let countryDescription =
  "India is in Asia, and its 1450 million people speak Hindi";
/*
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/
let countryDescriptionModified = `${countryModified} is in ${continentModified}, and its ${populationModified} million people speak ${languageModified}`;

console.log(countryDescriptionModified);
