import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default () => {
  const data = [];

  for (let i = 0; i < gameCount; i += 1) {
    const question = getRandomNumber(1, 99);
    const answer = isEven(question) ? 'yes' : 'no';
    data.push([question, answer]);
  }
  checkAnswers(data, description);
};
