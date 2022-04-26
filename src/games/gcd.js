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

const getCorrectNumbers = () => {
  let num1 = getRandomNumber(1, 99);
  let num2 = getRandomNumber(1, 99);
  const checkAnswer = calcGCD(num1, num2) === 0;
  if (checkAnswer === true) {
    num1 = getRandomNumber(1, 99);
    num2 = getRandomNumber(1, 99);
    return getCorrectNumbers(num1, num2);
  }
  return [num1, num2];
};

export default () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < gameCount; i += 1) {
    const Numbers = getCorrectNumbers();
    const gameQuestion = `${Numbers[0]} ${Numbers[1]}`;
    const gameCorrectAnswer = calcGCD(Numbers[0], Numbers[1]);
    questions.push(gameQuestion);
    answers.push(String(gameCorrectAnswer));
  }
  checkAnswers(questions, answers, description);
};
