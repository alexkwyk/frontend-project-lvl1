import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGreatestCommonDivisor = (a, b) => {
  let result = 0;
  const maxDivisor = (a > b) ? a : b;
  for (let divisor = 1; divisor <= maxDivisor; divisor += 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      result = divisor;
    }
  }
  return result;
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);
  const answer = calculateGreatestCommonDivisor(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

export default () => {
  startEngine(getRound, description);
};
