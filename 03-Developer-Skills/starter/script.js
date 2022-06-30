// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Given an array of temps, calculate the amplitude

// what is amplitude?
// difference between highest and lowest temps

// const smartThermo = function (temps) {
//     let min = 0;
//     let max = 0;
//     for (let i = 0; i < temps.length; i++) {
//         if (temps[i] > max) {
//             max = temps[i];
//         } else if (temps[i] < max) {
//             if (temps[i] < min) {
//                 min = temps[i];
//             }
//         }
//     }

//     return max - min;
// };

// console.log(smartThermo(temps));

/*

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const smartThermo = function (temps) {
    let min = temps[0];
    let max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }

    return max - min;
};

console.log(smartThermo(temps));

// Same problem with two arrays -----------------------------------------
// merge the arrays

const temps1 = [23, -30, 12, 4];
const temps2 = [17, 13, -9, -6];

const smartThermo2 = function (temps1, temps2) {
    const tempsTotal = temps1.concat(temps2);

    let min = tempsTotal[0];
    let max = tempsTotal[0];

    for (let i = 0; i < tempsTotal.length; i++) {
        if (tempsTotal[i] > max) max = tempsTotal[i];
        if (tempsTotal[i] < min) min = tempsTotal[i];
    }

    return max - min;
};

console.log(smartThermo2(temps1, temps2));



const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: Number(prompt("Degrees celsius")),
    };

    console.table(measurement);

    //console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

*/

// Coding Challenge

// first attempt (incorrect format for console logs)
const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}°C in ${i + 1} days...`);
    }
};

printForecast(arr);
console.log("");
printForecast(arr2);

// correct format
const printForecast2 = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log("... " + str);
};

printForecast2(arr2);
