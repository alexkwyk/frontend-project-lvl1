import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startEngine(getRound, description);
};
