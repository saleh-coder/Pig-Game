'use strict';

// Element selection
const player0El = document.querySelector('.player--0'); // Select Player 1's section
const player1El = document.querySelector('.player--1'); // Select Player 2's section
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // While getElementById behaves similarly to querySelector, it is generally faster. However, this speed advantage is noticeable only when selecting a large number of elements at once.

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); // Select the dice element
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0; // We are assigning numbers here, not strings, but JavaScript automatically converts these to strings for display on the page.

diceEl.classList.add('hidden'); // Add the 'hidden' class to the dice element to hide it

const scores = [0, 0]; // Total points for both players (index 0: player 1, index 1: player 2)
let currentScore = 0; // The 'currentScore' variable must be outside the function to avoid resetting it to zero every time the button is clicked.
let activePlayer = 0; // Track the active player (0: player 1, 1: player 2)

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // Update current score display
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // Reset current score for active player
    activePlayer = activePlayer === 0 ? 1 : 0; // Toggle active player
    currentScore = 0; // Reset current score
    player0El.classList.toggle('player--active'); // Toggle active class for Player 1
    player1El.classList.toggle('player--active'); // Toggle active class for Player 2
  }
});
