"use strict";
console.log("");
console.log("");

/*

// Functions ------------------------------------------------------------

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log("I can drive :D");
}

// const interface = "Audio";
// const private = 534;



function logger() {
    console.log("My name is Alec");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");




// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow function

// Arrow function with one parameter

const calcAge3 = birthYear => 2037 - birthYear;

calcAge3(1991);

// Arrow function with multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, "Alec"));
console.log(yearsUntilRetirement(1980, "Bob"));



// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



// Review ---------------------------------------------------------------

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1999, "Alec"));
console.log(yearsUntilRetirement(1955, "Mike"));


// 3 types of functions
function calcAge1(birthYear) {                      // function declaration
    return 2022 - birthYear;
}

const calcAge2 = function (birthYear) {             // function expression
    return 2022 - birthYear;
}

const calcAge3 = birthYear => 2022 - birthYear;     // arrow function



// Arrays ---------------------------------------------------------------


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);


const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);



// Array Methods --------------------------------------------------------


// Add elements
const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");  // push adds to end


console.log(friends);                   // both return the new length
console.log(newLength);

friends.unshift("John");                // unshift adds to beginning
console.log(friends);


// Remove elements
friends.pop();                          // pop removes last element
const popped = friends.pop();           // stores the removed element in var
console.log(popped);
console.log(friends);

friends.shift();                        // shift removes first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}



// Objects --------------------------------------------------------------

// review
const alecArray = [
    "Alec",
    "DaSilva",
    2022 - 1999,
    "developer",
    ["Scott", "Paco", "Jose"]
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"]
};

console.log(jonas);

console.log(jonas.lastName);

console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Invalid request")
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);


// Challenege
// "Jonas has 3 friends and his best friend is called Michael"

console.log(`${jonas["firstName"]} has ${jonas["friends"].length} friends, and his best friend is called ${jonas["friends"][0]} `);

// using keys instead of index
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);




// Object Methods -------------------------------------------------------

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old teacher, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};


console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](jonas["1991"]));

// Challenge
// "Jonas is a 46 year old teacher, and has a driver's license"

console.log(jonas.getSummary());




// Loops ----------------------------------------------------------------
// the for loop


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}



// Looping through arrays

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // adding elements to an array
    // types.push(typeof jonas[i]);
    types[i] = typeof jonas[i];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // console.log(years[i]);
    ages[i] = 2037 - years[i];
}

console.log(ages);

// continue and break statements
// continue: exit current iteration, skip to next one
// break: terminates whole loop

// continue
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") {
        continue;                           // skips non-string values
    }
    console.log(jonas[i], typeof jonas[i]);
}

// break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") {
        break;                           // breaks at first number
    }
    console.log(jonas[i], typeof jonas[i]);
}



// Looping backwards and Nested Loops

// looping backwards
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// looping inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`);
    }
}


// While loop -----------------------------------------------------------
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Loop is about to end...");
    }
}

*/