"use strict";
/* Code from previous assignments */
const countryModified = "India";
let languageModified = "Hindi";
let populationModified = 1450;
const isIslandModified = false;
const continentModified = "Asia";
/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
*/
let populationDivided = populationModified / 2;
console.log(populationDivided);
/*
2. Increase the population of your country by 1 and log the result to the console
*/
populationModified += 1;
console.log(populationModified);
/*
3. Finland has a population of 6 million. Does your country have more people than
Finland?
*/
let finlandPopulation = 6;
console.log(populationModified > finlandPopulation);
/*
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
*/
let populationAverage = 33;
console.log(populationModified < populationAverage);
/*
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
let countryDescription =
  "India is in Asia, and its 1450 million people speak Hindi";
