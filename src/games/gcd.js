import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => {
  let result = 0;
  for (let divisor = 2; divisor < 100; divisor += 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      result = divisor;
    }
  }
  return result;
};

const isHaveCommonDivisor = (num1, num2) => calcGCD(num1, num2) !== 0;

const generateNumbersWithCommonDivisor = () => {
  const num1 = getRandomNumber(1, 99);
  const num2 = getRandomNumber(1, 99);

  const checkNumbersToHaveCommonDivisor = (a, b) => {
    if (isHaveCommonDivisor(a, b) === false) {
      const newNum1 = getRandomNumber(1, 99);
      const newNum2 = getRandomNumber(1, 99);
      return checkNumbersToHaveCommonDivisor(newNum1, newNum2);
    }
    return [a, b];
  };

  return checkNumbersToHaveCommonDivisor(num1, num2);
};

const getGameValues = () => {
  const [firstNumber, secondNumber] = generateNumbersWithCommonDivisor();
  const answer = calcGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
