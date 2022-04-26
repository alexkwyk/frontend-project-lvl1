import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  let result = true;
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      result = false;
      break;
    }
  }
  return result;
};

export default () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < gameCount; i += 1) {
    const gameQuestion = getRandomNumber(2, 99);
    const gameCorrectAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);
  }

  checkAnswers(questions, answers, description);
};
