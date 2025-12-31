"use strict";
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
*/
/*
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
*/
const calcAverage = (score1, score2, score3) =>
  Number(((score1 + score2 + score3) / 3).toFixed(1));
/*
2. Use the function to calculate the average for both teams
*/
const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);
const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);
/*
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
*/
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} VS ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} VS ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
};
/*
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
*/
checkWinner(dolphinsAverage1, koalasAverage1);
checkWinner(dolphinsAverage2, koalasAverage2);
/*
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/
