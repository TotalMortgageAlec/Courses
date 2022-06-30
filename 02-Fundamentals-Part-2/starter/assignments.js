"use strict";

// Coding Challenge 1 ---------------------------------------------------
// console.log("Coding Challenge 1");

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let avgDolphin = calcAverage(44, 23, 71);
// let avgKoala = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphin, avgKoala) {
//     if (avgDolphin >= (2 * avgKoala)) {
//         console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`);
//     } else if (avgKoala >= (2 * avgDolphin)) {
//         console.log(`Koalas win (${avgKoala} vs ${avgDolphin})`);
//     } else {
//         console.log("No one wins!");
//     }
// }

// checkWinner(avgDolphin, avgKoala);

// avgDolphin = calcAverage(85, 54, 41);
// avgKoala = calcAverage(23, 34, 27);

// checkWinner(avgDolphin, avgKoala);


// Coding Challenge 2 ---------------------------------------------------
console.log("");
console.log("Coding Challenge 2");

// const bill = 275;
// const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}`);

// const bill = 100;

// const calcTip = function (bill) {
//     const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
//     return tip;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

// console.log(total);

// console.log(bills, tips, total);


// Coding Challenge 3 ---------------------------------------------------
console.log("");
console.log("Coding Challenge 3");
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
}

// Coding Challenge 4 ---------------------------------------------------
console.log("");
console.log("Challenge 4");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
    return tip;

    // for (let i = 0; i <= bills.length - 1; i++) {

    //     tips[i] = (bills[i] >= 50 && bills[i] <= 300) ? (bills[i] * 0.15) : (bills[i] * 0.2);

    //     totals[i] = tips[i] + bills[i];
    // }
}

for (let i = 0; i <= bills.length - 1; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const avg = sum / arr.length;
    return avg;
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

// console.log(total);

// console.log(bills, tips, total);