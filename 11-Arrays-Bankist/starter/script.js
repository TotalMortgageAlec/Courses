"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const account5 = {
    owner: "Alec DaSilva",
    movements: [800, 888, 445, 900, -300, -250],
    interestRate: 0.9,
    pin: 8888,
};

const accounts = [account1, account2, account3, account4, account5];

///////////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}€</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map(name => name[0])
            .join("");
    });
};

createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

/////////////////////////////////////////////////////////
// Event Handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
    // prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );

    inputTransferAmount.value = inputTransferTo.value = "";

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);

        // Delete Account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputTransferAmount.value = inputTransferTo.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();

    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));



const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("Jonas".at(0));
console.log("Jonas".at(-1));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited $${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
    }
}

console.log("----FOREACH----");

movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited $${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew $${Math.abs(mov)}`);
    }
});



const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GDP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
});


// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaFix = dogsJulia.slice(1, -2);
    const allDogs = dogsJuliaFix.concat(dogsKate);
    allDogs.forEach(function (val, i, arr) {
        if (val >= 3) {
            console.log(
                `Dog number ${i + 1} is an adult, and ${val} years old`
            );
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUSD;
// });

const movementsUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUSD);
}

console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
    return `Movement ${i + 1}: You ${
        mov > 0 ? "deposited" : "withdrew"
    } $${Math.abs(mov)}`;
});

console.log(movementsDescriptions);


const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);

console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);


console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration number ${i}: ${acc}`);
//     return (acc += cur);
// }, 0);

const balance = movements.reduce((acc, cur) => (acc += cur), 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value of movements array
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
    // return acc > mov ? acc : mov;
}, movements[0]);
console.log(max);

*/

/*

const calcAverageHumanAge = function (ages) {
    const humanYears = ages.map(dogAge =>
        dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2
    );

    const adults = humanYears.filter(humanAge => humanAge >= 18);
    const avgAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return avgAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

const calcAverageHumanAge2 = ages =>
    ages
        .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2))
        .filter(humanAge => humanAge >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg3, avg4);

*/

/*
const eurToUSD = 1.1;

const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUSD)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

*/

/*

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);



// EQUALITY
console.log(movements);
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY: CONDITION
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));



const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// flat
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);



const owners = ["Jonas", "Zach", "adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (b > a) {
//         return -1;
//     }
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
// });
movements.sort((a, b) => b - a);
console.log(movements);



// Empty arrays + fill method
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
    const movementsUI = Array.from(
        document.querySelectorAll(".movements__value"),
        el => Number(el.textContent.replace("€", ""))
    );

    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});

*/

/*

////////////////////////////
// Array Methods Practice

console.log(accounts.flatMap(acc => acc.movements));

// 1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits1000Two = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov >= 1000) // this becomes redundant
    .reduce((count, _) => count + 1, 0); // because reduce is just counting the length
console.log(numDeposits1000Two);

const numDeposits1000Three = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000Three);

// prefixed ++ operator increments and returns the incremented value
// postfixed ++ DOES increment, but returns the original value

// 3.
const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
            sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
            return sums;
        },
        { deposits: 0, withdrawals: 0 }
    );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = [
        "a",
        "an",
        "and",
        "the",
        "but",
        "or",
        "on",
        "in",
        "with",
    ];

    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map(word => (exceptions.includes(word) ? word : capitalize(word)))
        .join(" ");
    return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title"));
console.log(convertTitleCase("and here is a nice title with an EXAMPLE"));

*/

//////////////////////////////////
// Coding Challenge #4

const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
const recommendedFood = function (dogs) {
    dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
};
recommendedFood(dogs);
console.log(dogs);

//2.
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${
        dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
    }`
);

// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const dogsFedRight = dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(dogsFedRight));

// 7.
console.log(dogs.filter(dogsFedRight));

// 8.
const dogsSorted = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
