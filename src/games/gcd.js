import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGreatestCommonDivisor = (a, b) => {
  let result = 0;
  for (let divisor = 2; divisor < 100; divisor += 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      result = divisor;
    }
  }
  return result;
};

const getGameValues = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);
  const isHaveCommonDivisor = calculateGreatestCommonDivisor(firstNumber, secondNumber) !== 0;
  if (isHaveCommonDivisor === false) {
    return getGameValues();
  }
  const answer = calculateGreatestCommonDivisor(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
