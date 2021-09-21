'use strict';

const randomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = randomNumber();
console.log(secretNumber);

let score = 20;

let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHighScore = function (value) {
  document.querySelector('.highscore').textContent = value;
};

const displayScore = function (value) {
  document.querySelector('.score').textContent = value;
};

const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

const displayBackground = function (str) {
  document.querySelector('body').style.backgroundColor = str;
};

const displayWidth = function (str) {
  document.querySelector('.number').style.width = str;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');
    //When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);

    displayBackground('#60b347');
    displayWidth('30rem');

    if (score > hightScore) {
      hightScore = score;
      displayHighScore(hightScore);
    }
    //When the Player Lose
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      //Everytime the player do not guess the number the score is decreasing
      score--;
      displayScore(score);
      //Score is 0
    } else {
      displayMessage('You lost game!');
      displayScore(0);
    }
  }
});

//Button to play again - everything will be reset except the HightScore
document.querySelector('.again').addEventListener('click', function () {
  //Restore score and secretNumber
  score = 20;
  secretNumber = randomNumber();
  console.log(secretNumber);

  //Restore message, number, score, guess
  displayMessage('Starting guessing...');
  displayNumber('?');
  displayScore(score);
  displayGuess('');

  //Restore backgroundColor and number Width
  displayBackground('#222');
  displayWidth('15rem');
});
