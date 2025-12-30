"use strict";
/* code from previous assignments */
const myCountry = {
  countryName: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1450,
  neighbours: ["China", "Nepal", "Sri Lanka"],
};
/*
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
*/
console.log(
  `${myCountry.countryName} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
/*
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
