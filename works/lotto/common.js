'use strict';
// let started = !started;
const ballWrap = document.querySelector('.num__container');
const numberBall = document.querySelectorAll('.num');
const color = [
  '#EE6C4D',
  '#F38D68',
  '#662C91',
  '#17A398',
  '#3AAFB9',
  '#750D37',
];
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  for (let i = 0; i < numberBall.length; i++) {
    numRolling(i);
  }
  newNumberArray();
});

function startNumCatch() {
  for (var i = 0; i < numberBall.length; i++) {
    numberBall[i].style.backgroundColor = color[i];
  }
}

function newNumberArray() {
  let randomNumber = [];
  for (let i = 0; i < numberBall.length; i++) {
    let ballNumber = randomNum(1, 45);
    if (randomNumber.indexOf(ballNumber) === -1) {
      randomNumber.push(ballNumber);
      numberBall[i].setAttribute('data-rate', randomNumber[i]);
      console.log(numberBall[i]);
    } else {
      i--;
    }
  }
}

function numRolling(idx) {
  let num = 0;
  var targetNum = numberBall[idx].getAttribute('data-rate');
  console.log(targetNum);
  var timer = setInterval(function () {
    ++num;
    numberBall[idx].innerText = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, 20);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
  startNumCatch();
  newNumberArray();
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
