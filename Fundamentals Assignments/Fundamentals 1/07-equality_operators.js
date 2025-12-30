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
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
*/

let numNeighbours = prompt("How many neighbour does your country have?"); // check index.html liveserver

/*
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
*/

if (numNeighbours == 1) {
  console.log(`Only 1 border!`);
}

/*
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
*/

if (numNeighbours == 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
}

/*
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
*/

if (numNeighbours == 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No border!`);
}

/*
5. Test the code with different values of 'numNeighbours', including 1 and 0.
*/

console.log(`Tested with 0 , 1 -1 etc `);

/*
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
*/

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No border!`);
}

console.log(
  `On testing with strict euqality it gives no border even when input is 1 because JS is not doing any type coercion here !`
);

/*
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
*/

numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No border!`);
}

console.log(
  `After changin prompt input to Number type manually, it works good with strict equality!`
);

/*
8. Reflect on why we should use the === operator and type conversion in this
situation
*/
console.log(`Done already!`);
