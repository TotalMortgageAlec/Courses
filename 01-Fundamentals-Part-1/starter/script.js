console.log("");
console.log("");
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable naming conventions
let jonas_matilda = "JM";
let _function = 2;
let $function = 3;
// variables can only start w/ a letter or '_'/'$'

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Assignment: Values and Variables
let country = "United States";
let continent = "North America";
let population = "329.5 million";

// console.log(country, continent, population);
console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;    } illegal
// const job;           } arguments

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


// Math Operators
const now = 2022;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Alec";
const lastName = "DaSilva";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;  //15
x += 10;         //x = x + 10
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 3);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2020);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Concatenation
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// Template Literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Hello world!`);

// old new lines
console.log("String with \n\
multiple \n\
lines");

// with template literal
console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log("Sarah can start her driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");   //number converted to string
console.log("23" - "10" - 3);               //string converted to number
console.log("23" / "2");

let n = "1" + 1;    // n = 11
n = n - 1;          // n = 10
console.log(n);

console.log("19" - "13" + "17");
console.log("19" - "13" + 17);



// Truthy and Falsy Values
/* 5 Falsy values
    0
    '' (empty string)
    undefned
    null
    NaN
*/

/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}



// Equality Operators: == (loose) vs === (strict)
const age = 18;
if (age === 18) {
    console.log("You just became an adult!");
}

if (age == 18) {
    console.log("You just became an adult!");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);


if (favorite === 8) {
    console.log("Cool! 8 is an amazing number");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("number is not 8 or 7");
}

if (favorite !== 8) {
    console.log("Why not 8?");
}



// Boolean logic
// AND, OR, !

// Logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}




// The switch Statement
const day = "monday";

switch (day) {
    case "monday":
        console.log("Plan course Structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record values");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan course Structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record values");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}



// Statements and Expressions
//expressions
3 + 4
1991
true && false && !false

//statements (e.g. if-else STATEMENT)
if (23 > 10) {
    const str = "23 is bigger";     // statements end in ;
}



// Conditional Operator

const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/

