import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
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

export default () => {
  const questions = [];
  const answers = [];

  const operators = ['+', '-', '*'];

  for (let i = 0; i < gameCount; i += 1) {
    const operator = operators[getRandomNumber(0, 2)];
    const firstNum = getRandomNumber(1, 99);
    const secondNum = getRandomNumber(1, 99);
    const gameQuestion = `${firstNum} ${operator} ${secondNum}`;
    const gameCorrectAnswer = calculate(firstNum, secondNum, operator);
    questions.push(gameQuestion);
    answers.push(String(gameCorrectAnswer));
  }

  checkAnswers(questions, answers, description);
};
