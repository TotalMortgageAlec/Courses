
// Assignment: Values and Variables
console.log("Assignment 1");
const country = "The United States";
const continent = "North America";
let population = 47;

console.log(country);
console.log(continent);
console.log(population);


// Assignment: Data Types
console.log("");
console.log("Assignment 2");
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// Assignment: let, const, var
console.log("");
console.log("Assignment 3");
language = "English";
// country, continent, and isIsland changed
// from 'let' to 'const'


// Assignment: Basic Operators
console.log("");
console.log("Assignment 4");
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;

console.log(description);


// Coding Challenge 1
console.log("");
console.log("Coding Challenge 1");

// variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// bmi calculation
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

// comparison
const markHigherBMI = (bmiMark > bmiJohn);

console.log(markHigherBMI);

// Part 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = (bmiMark2 > bmiJohn2);

console.log(markHigherBMI2);


// Assignment: Strings and Template Literals
console.log("");
console.log("Assignment 5");
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);


// Coding Challenge 2
console.log("");
console.log("Coding Challenge 2");

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

// Assignment: Type Conversion and Coercion
console.log("");
console.log("Assignment 6");
console.log("9" - "5");                 // 4        v
console.log("19" - "13" + "17");        // 617      v
console.log("19" - "13" + 17);          // 23       v
console.log("123" < 57);                // false    v
console.log(5 + 6 + "4" + 9 - 4 - 2);   // 117      x (1143)

/*
// Assignment: Equality Operators == vs ===
console.log("");
console.log("Assignment 7");

const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
    console.log("Only 1 border!");
} else if (numNeighbors > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}
*/

// Assigment: Logical Operators
console.log("");
console.log("Assignment 8");

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should move to ${country}!`);
} else {
    console.log(`${country} does not meet your criteria`);
}


// Coding Challenge 3
console.log("");
console.log("Coding Challenge 3");

const dolphinScore = (97 + 112 + 101) / 3;
console.log(dolphinScore);
const koalaScore = (109 + 95 + 106) / 3;
console.log(koalaScore);

if (dolphinScore === koalaScore && dolphinScore >= 100 && koalaScore >= 100) {
    console.log("It's a draw!");
} else if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log("Dolphins win!");
} else if (koalaScore > dolphinScore && koalaScore >= 100) {
    console.log("Koalas win!");
} else {
    console.log("No one wins!");
}


// Assignment: Switch Statement
console.log("");
console.log("Assignment 9");
language = "english";

switch (language) {
    case "chinese":
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}


// Assignment: The Conditional (Ternary) Operator
console.log("");
console.log("Assignment 10");

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);

// Coding Challenge 4
console.log("");
console.log("Coding Challenge 4");


const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}`);
