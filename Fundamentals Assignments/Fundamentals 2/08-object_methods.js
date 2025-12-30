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
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment - 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.', but this time using the 'this' keyword.
*/
myCountry.describe = function () {
  console.log(
    `${this.countryName} has ${this.population} million people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};
/*
2. Call the 'describe' method
*/
myCountry.describe();
/*
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
myCountry.checkIsland = function () {
  this.neighbours.length === 0
    ? (this.isIsland = true)
    : (this.isIsland = false);
};
myCountry.checkIsland();
console.log(myCountry); // property added!
