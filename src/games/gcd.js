import Greeting from '../cli.js';
import gameRound from '../index.js';

export default () => {
  const username = Greeting();

  console.log('Find the greatest common divisor of given numbers.');

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

  const gcdGameRound = (count) => {
    if (count > 2) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    let a = getRandomNumber(1, 99);
    let b = getRandomNumber(1, 99);

    let gameCorrectAnswer;
    const findAnswer = (num) => {
      if (num > 99) {
        if (gameCorrectAnswer === undefined) {
          a = getRandomNumber(1, 99);
          b = getRandomNumber(1, 99);
          findAnswer(2);
        }
        return;
      }
      if (a % num === 0 && b % num === 0) {
        gameCorrectAnswer = num;
        findAnswer(num + 1);
      }
      findAnswer(num + 1);
    };
    findAnswer(2);

    const gameQuestion = `${a} ${b}`;
    const gameResult = gameRound(gameQuestion, String(gameCorrectAnswer));
    if (gameResult === true) {
      gcdGameRound(count + 1);
    }
  };

  gcdGameRound(0);
};
