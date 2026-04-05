"use strict";
/* Data Created */

//textarea:
const textArea = document.createElement("textarea");
textArea.id = "text-area";
textArea.style.resize = "none";
textArea.style.fontSize = "1.2rem";
textArea.style.width = "100%";
textArea.style.maxWidth = "250px";

//button
const button = document.createElement("button");
button.id = "btn-click";
button.style.width = "fit-content";
button.style.padding = "0.5rem 1.2rem";
button.style.cursor = "pointer";
button.textContent = "Click";

//container
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "1rem";
container.style.width = "100%";
container.style.maxWidth = "400px";
container.style.padding = "2rem 0.8rem";
container.style.marginInline = "auto";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "1px solid gray";
container.append(textArea);
container.append(button);

//body
document.body.append(container);

/* 
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/

//  ['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']

const transformToCamelCase = function () {
  let text = textArea.value.trim();

  let textSplitted = text.split("\n");

  for (const [i, item] of textSplitted.entries()) {
    if (!item.trim()) continue;
    let result = "";
    let name = item.toLowerCase();
    let splittedName = name.split("_").filter(Boolean);
    for (let curName of splittedName) {
      if (curName === splittedName[0]) {
        result += curName;
      } else {
        result += curName[0].toUpperCase() + curName.slice(1);
      }
    }
    console.log(`${result.padEnd(40)}${"✅".repeat(i + 1)}`);
  }
};

button.addEventListener("click", transformToCamelCase);
