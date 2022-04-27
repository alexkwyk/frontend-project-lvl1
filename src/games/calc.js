import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calcRandomOperation = (a, b) => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  switch (operator) {
    case '+':
      return [a + b, operator];
    case '-':
      return [a - b, operator];
    case '*':
      return [a * b, operator];
    default:
      return console.log(`Error: invalid operator '${operator}'(calc.js).`);
  }
};

export default () => {
  const data = [];

  for (let i = 0; i < gameCount; i += 1) {
    const firstNumber = getRandomNumber(1, 99);
    const secondNumber = getRandomNumber(1, 99);
    const [answer, operator] = calcRandomOperation(firstNumber, secondNumber);
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    data.push([question, answer]);
  }

  checkAnswers(data, description);
};
