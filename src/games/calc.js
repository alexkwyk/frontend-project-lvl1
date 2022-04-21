import Greeting from '../cli.js';
import gameRound from '../index.js';

export default () => {
  const username = Greeting();

  console.log('What is the result of the expression?');

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

  const calcGameRound = (count) => {
    if (count > 2) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const operatorNumber = getRandomNumber(0, 2);
    const a = getRandomNumber(1, 99);
    const b = getRandomNumber(1, 99);
    let gameQuestion;
    let gamePreAnswer;
    switch (operatorNumber) {
      case 0:
        gameQuestion = `${a} + ${b}`;
        gamePreAnswer = a + b;
        break;
      case 1:
        gameQuestion = `${a} - ${b}`;
        gamePreAnswer = a - b;
        break;
      case 2:
        gameQuestion = `${a} * ${b}`;
        gamePreAnswer = a * b;
        break;
      default:
        break;
    }
    const gameCorrectAnswer = String(gamePreAnswer);
    const gameResult = gameRound(gameQuestion, gameCorrectAnswer);

    if (gameResult === true) {
      calcGameRound(count + 1);
    }
  };

  calcGameRound(0);
};
