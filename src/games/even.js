import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getGameValues = () => {
  const question = getRandomNumber(1, 99);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
