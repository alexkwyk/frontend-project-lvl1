import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrimeNumber = (num) => {
  const absoluteNumber = Math.abs(num);
  if (absoluteNumber === 1) {
    return false;
  }
  for (let div = 2; div < absoluteNumber / 2; div += 1) {
    if (absoluteNumber % div === 0) {
      return false;
    }
  }
  return true;
};

const getGameValues = () => {
  const question = getRandomNumber(1, 99);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
