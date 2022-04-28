import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const firstNum = getRandomNumber(5, 15);
  const result = [firstNum];
  const numStep = getRandomNumber(2, 6);
  for (let i = 1; i < progressionLength; i += 1) {
    result.push(result[i - 1] + numStep);
  }
  return result;
};

const hideItem = (coll, item) => {
  const result = [...coll];
  const answerIndex = result.indexOf(item);
  result[answerIndex] = '..';
  return result.join(' ');
};

const getRandomItem = (coll) => {
  const randomElementIndex = getRandomNumber(1, coll.length - 1);
  const answer = coll[randomElementIndex];
  return answer;
};

const getGameValues = () => {
  const progression = generateProgression();
  const answer = getRandomItem(progression);
  const question = hideItem(progression, answer);
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
