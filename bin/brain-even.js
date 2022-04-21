#!/usr/bin/env node

import readlineSync from 'readline-sync';
import Greeting from '../src/cli.js';

const username = Greeting();

const getRandomNum = () => Math.floor(Math.random() * 100);

const gameQuestion = (count) => {
  if (count > 2) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const currentNum = getRandomNum();
  const correctAnswer = (currentNum % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${currentNum}`);
  const Answer = readlineSync.question('Your answer: ');

  if (Answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    gameQuestion(count + 1);
    return;
  }
  console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameQuestion(0);
