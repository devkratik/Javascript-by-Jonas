"use strict";
/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
*/
const calcBMI = function (mass, height) {
  return Number((mass / height ** 2).toFixed(1));
};
/*
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
*/
const checkHighBMI = function (massMark, heightMark, massJohn, heightJohn) {
  if (calcBMI(massMark, heightMark) > calcBMI(massJohn, heightJohn)) {
    console.log(`Mark's BMI is higher than John's!`);
  } else if (calcBMI(massMark, heightMark) === calcBMI(massJohn, heightJohn)) {
    console.log(`John's BMI is exactly equal to Mark's!`);
  } else {
    console.log(`John's BMI is higher than Mark's!`);
  }
};

checkHighBMI(78, 1.69, 92, 1.95);
checkHighBMI(95, 1.88, 85, 1.76);
/*
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
const checkHighBMIModified = function (
  massMark,
  heightMark,
  massJohn,
  heightJohn
) {
  if (calcBMI(massMark, heightMark) > calcBMI(massJohn, heightJohn)) {
    console.log(
      `Mark's BMI(${calcBMI(
        massMark,
        heightMark
      )}) is higher than John's(${calcBMI(massJohn, heightJohn)})!`
    );
  } else if (calcBMI(massMark, heightMark) === calcBMI(massJohn, heightJohn)) {
    console.log(
      `John's BMI(${calcBMI(
        massJohn,
        heightJohn
      )}) is exactly equal to Mark's(${calcBMI(massMark, heightMark)})!`
    );
  } else {
    console.log(
      `John's BMI(${calcBMI(
        massJohn,
        heightJohn
      )}) is higher than Mark's(${calcBMI(massMark, heightMark)})!`
    );
  }
};
checkHighBMIModified(78, 1.69, 92, 1.95);
checkHighBMIModified(95, 1.88, 85, 1.76);

/*
Test Data:(same as previous one)

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/
