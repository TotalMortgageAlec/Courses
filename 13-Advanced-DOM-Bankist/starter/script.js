'use strict';

// Selecting Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)               ^^ same result, less concise
//     btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.scrollX, scrollY); // legacy: scrollX/scrollY = pageXOffset/pageYOffset

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // older techniques
    // window.scrollTo(
    //     s1coords.left + window.scrollX,
    //     s1coords.top + window.scrollY
    // ); // 'top' references the top of the viewport (visible screen)

    // window.scrollTo({
    //     left: s1coords.left + window.scrollX,
    //     top: s1coords.top + window.scrollY,
    //     behavior: 'smooth',
    // });

    // new technique, only works on modern browsers
    section1.scrollIntoView({ behavior: 'smooth' }); // modern method
});

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clase
    if (!clicked) return;

    // Active tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');
    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

/*

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML              **USED IN SECTION 12: 2nd HALF OF BANKIST APP**  Creates elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));      allows duplicates of a node instead of moving it

// header.before(message);
// header.after(message);

// Delete elements
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.remove();
        // message.parentElement.removeChild(message);
    });

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '103.3%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //height is a computed style

message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful, minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // contains, not includes (arrays)

// Don't use - overrides all existing classes and only put one class on any element
// logo.className = 'jonas';
console.log('Testing dev branch');

*/

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
    alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // mouseenter event times out after 3 seconds

// h1.onmouseenter = function (e) {
//     alert('onmouseenter: Great! You are reading the heading :D'); // can call directly on event, but
// }; // cannot add event listeners to same actions
*/

/*

// rgb(255,255,255)
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // Stop propagation
    // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
    'click',
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log('NAV', e.target, e.currentTarget);
    }
    // true // default is false, used for capturing
);

*/

/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) {
        el.style.transform = 'scale(0.5)';
    }
});
*/
