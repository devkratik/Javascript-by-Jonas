"use strict";
/*
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting...'
*/
let totalVoter = 50;
for (let currentVoter = 0; currentVoter < totalVoter; currentVoter++) {
  console.log(`Voter number ${currentVoter + 1} is currently voting...`);
}
