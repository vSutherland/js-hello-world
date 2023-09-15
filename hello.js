const input = require('readline-sync');

// instantiate variables 
let hoursInWeek = 168;

let sleepHours = 56;
let workHours = 40;
let miscHours = 21;
let studyHours = 18;

// create variable to reduce clutter
let necessities = sleepHours + workHours + miscHours + studyHours;


// instantiate hours spent gaming on teh daily, then multiply by 7 to update leisureHours
let dailyGaming = Number(input.question("How many hours a day would you like to spend playing Baldur's Gate 3? "));
let leisureHours = dailyGaming * 7;

// give user feedback
console.log("\nGotcha. You want to spend at least " + dailyGaming + " hours a day playing Baldur's Gate. That comes out to " + leisureHours + " hours spent across seven daily gaming sessions.\n");

// additional feedback based on whether they have exceeded total hours in a week
if (necessities + leisureHours > hoursInWeek) {
  console.log("I think you need to reconsider your priorities. There are only " + hoursInWeek + " hours in a week, and with all your other obligations you only have " + (hoursInWeek - necessities) + " hours throughout the week to spend on leisurely activities.");
} else {
  console.log("Cool. That sounds like a balanced schedule. You'll have about " + (hoursInWeek -(necessities + leisureHours)) + " hours leftover to spend how you'd like.");
}