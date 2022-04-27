import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const data = [];
  for (let i = 0; i < gameCount; i += 1) {
    const question = getRandomNumber(2, 99);
    const answer = isPrime(question) ? 'yes' : 'no';
    data.push([question, answer]);
  }

  checkAnswers(data, description);
};
