'use strict';

// Element selection
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // While getElementById behaves similarly to querySelector, it is generally faster. However, this speed advantage is noticeable only when selecting a large number of elements at once.

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); // Select the dice element
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

score0El.textContent = 0;
score1El.textContent = 0; // We are assigning numbers here, not strings, but JavaScript automatically converts these to strings for display on the page.

diceEl.classList.add('hidden'); // Add the 'hidden' class to the dice element to hide it

let currentScore = 0; // The 'currentScore' variable must be outside the function to avoid resetting it to zero every time the button is clicked.

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Gererating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
