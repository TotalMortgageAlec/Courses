'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Proper API link
// https://restcountries.com/v2/

// Old method of AJAX
// not used much, but still exists
const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                ).toFixed(1)}M</p>

                <p class="country__row"><span>🗣️</span>${
                    data.languages[0].name
                }</p>

                <p class="country__row"><span>💰</span>${
                    data.currencies[0].name
                }</p>
            </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// Error handling
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbor = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbor country 2
        const neighbor = data.borders?.[0];

        if (!neighbor) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            // Render country 2
            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

*/

// Fetching API
//////////////////////
// Old method
//////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

//////////////////////
// New method
//////////////////////
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response);

//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(([data]) => {
//             renderCountry(data);
//             // const neighbor = data.borders?.[0];
//             const neighbor = 'adhdhds';

//             if (!neighbor) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(
//                 `Something went wrong 💥💥💥 ${err.message}. Try again!`
//             );
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then(([data]) => {
            renderCountry(data);
            const neighbor = data.borders?.[0];

            if (!neighbor) throw new Error('No neighbor found!');

            // Country 2
            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbor}`,
                'Country not found'
            );
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(
                `Something went wrong 💥💥💥 ${err.message}. Try again!`
            );
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

// btn.addEventListener('click', function () {
//     getCountryData('portugal');
// });

// getCountryData('australia');

/*

/////////////////////////////////////////
/////////////////////////////////////////
// Coding Challenge 1

const whereAmI = function (lat, lng) {
    fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    )
        .then(res => {
            if (!res.ok)
                throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.countryName}`);
            return fetch(
                `https://restcountries.com/v2/name/${data.countryName}`
            );
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => {
            renderCountry(data[0]);
        })
        .catch(err => console.error(`${err.message} 💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 10000; i++) {}
    console.log(res);
});
console.log('Test end');

*/

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('The lottery draw is happening!');
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('YOU WIN!!!');
        } else {
            reject(new Error('YOU LOST!!!'));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// Refactoring into arrow functions
const wait2 = seconds => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
};

// wait2(2)
//     .then(() => {
//         console.log('I waited for 2 seconds');
//         return wait2(1);
//     })
//     .then(() => console.log('I waited for 1 second'));

wait2(1)
    .then(() => {
        console.log('1 second passed');
        return wait2(1);
    })
    .then(() => {
        console.log('2 seconds passed');
        return wait2(1);
    })
    .then(() => {
        console.log('3 seconds passed');
        return wait2(1);
    })
    .then(() => console.log('I waited for 4 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
