let myName = input.question("What's your name? ");
let myAge = Number(input.question("\nHow old are you? "));
let myPhrase;

if (myAge < 18) {
    myPhrase = "Parental supervision advised.";
} else if (myAge < 26) {
    myPhrase = "Imagine paying for health insurance...";
} else {
    myPhrase = "Imagine having health insurance... ☹️";
}

console.log("\nHello, " + myName + ". " + myPhrase);