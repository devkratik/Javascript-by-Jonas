"use strict";
/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
*/
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

/*
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
const test1 = describeCountry("India", 1450, "New Delhi");
const test2 = describeCountry("Russia", 14, "Moscow");
const test3 = describeCountry("South Africa", 64, "Capetown");

console.log(test1);
console.log(test2);
console.log(test3);
