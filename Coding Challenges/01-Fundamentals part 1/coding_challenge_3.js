"use strict";
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
*/
/*
1. Calculate the average score for each team, using the test data below
*/
const calcAverage = (score1, score2, score3) => {
  return Number(((score1 + score2 + score3) / 3).toFixed(1));
};

//test1
const dolphinsAverage = calcAverage(96, 108, 89);
const koalasAverage = calcAverage(88, 91, 110);
/*
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
*/
dolphinsAverage > koalasAverage
  ? console.log(`Dolphins(${dolphinsAverage}) are winner!`)
  : dolphinsAverage === koalasAverage
  ? console.log(`Match Draw!`)
  : console.log(`Koalas(${koalasAverage}) are winner!`);
/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks or ternary operator.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

//test2
const dolphinsAverage2 = calcAverage(97, 112, 101);
const koalasAverage2 = calcAverage(109, 95, 123);

dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100
  ? console.log(`Dolphins(${dolphinsAverage2}) are winner!`)
  : dolphinsAverage2 === koalasAverage2 &&
    koalasAverage2 >= 100 &&
    dolphinsAverage2 >= 100
  ? console.log(`Match Draw!`)
  : koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100
  ? console.log(`Koalas(${koalasAverage2}) are winner!`)
  : console.log(`No team wins the trophy!`);

//test3
const dolphinsAverage3 = calcAverage(97, 112, 101);
const koalasAverage3 = calcAverage(109, 95, 106);

dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100
  ? console.log(`Dolphins(${dolphinsAverage3}) are winner!`)
  : dolphinsAverage3 === koalasAverage3 &&
    koalasAverage3 >= 100 &&
    dolphinsAverage3 >= 100
  ? console.log(`Match Draw!`)
  : koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100
  ? console.log(`Koalas(${koalasAverage3}) are winner!`)
  : console.log(`No team wins the trophy!`);

/*
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
