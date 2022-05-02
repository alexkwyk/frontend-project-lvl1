import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculateOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return console.log(`Error: invalid operator '${operator}'(calc.js).`);
  }
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomNumber(0, (operators.length - 1));
  const operator = operators[randomOperatorIndex];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateOperation(firstNumber, secondNumber, operator);
  return [question, answer];
};

export default () => {
  startEngine(getRound, description);
};
