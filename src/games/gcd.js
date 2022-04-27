import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => {
  let result = 0;
  for (let num = 2; num < 100; num += 1) {
    if (a % num === 0 && b % num === 0) {
      result = num;
    }
  }
  return result;
};

const getNumbersWithDiv = () => {
  let num1 = getRandomNumber(1, 99);
  let num2 = getRandomNumber(1, 99);
  const isHaveDiv = calcGCD(num1, num2) !== 0;
  if (isHaveDiv === false) {
    num1 = getRandomNumber(1, 99);
    num2 = getRandomNumber(1, 99);
    return getNumbersWithDiv(num1, num2);
  }
  return [num1, num2];
};

export default () => {
  const data = [];

  for (let i = 0; i < gameCount; i += 1) {
    const [firstNumber, secondNumber] = getNumbersWithDiv();
    const answer = calcGCD(firstNumber, secondNumber);
    const question = `${firstNumber} ${secondNumber}`;
    data.push([question, answer]);
  }
  checkAnswers(data, description);
};
