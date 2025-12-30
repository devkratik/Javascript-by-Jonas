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
// let numNeighbours = Number(prompt("How many neighbour does your country have?"));
/*
1. Comment out the previous code so the prompt doesn't get in the way
*/
console.log(`Challenge 1 done above already!`);
/*
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
*/

if (
  languageModified === "English" &&
  populationModified < 50 &&
  !isIslandModified
) {
  console.log(`You should live in ${countryModified} :)`);
} else {
  console.log(`${countryModified} does not meet your criteria :(`);
}
/*
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/
populationModified = 30;
languageModified = "English";

if (
  languageModified === "English" &&
  populationModified < 50 &&
  !isIslandModified
) {
  console.log(`You should live in ${countryModified} :)`);
} else {
  console.log(`${countryModified} does not meet your criteria :(`);
}
