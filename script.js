'use strict';

// Element selection
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// While getElementById behaves similarly to querySelector, it is generally faster. However, this speed advantage is noticeable only when selecting a large number of elements at once.

const diceEl = document.querySelector('.dice'); // Select the dice element

score0El.textContent = 0;
score1El.textContent = 0;
// We are assigning numbers here, not strings, but JavaScript automatically converts these to strings for display on the page.

diceEl.classList.add('hidden'); // Add the 'hidden' class to the dice element to hide it
