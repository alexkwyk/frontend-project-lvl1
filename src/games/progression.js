import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, progressionStep, progressionLength) => {
  const result = [firstElement];
  for (let i = 1; i < progressionLength; i += 1) {
    result.push(result[i - 1] + progressionStep);
  }
  return result;
};

const getRandomElement = (coll) => {
  const randomElementIndex = getRandomNumber(1, coll.length - 1);
  const answer = coll[randomElementIndex];
  return answer;
};

const hideElement = (coll, item) => {
  const result = [...coll];
  const answerIndex = result.indexOf(item);
  result[answerIndex] = '..';
  return result.join(' ');
};

const getGameValues = () => {
  const firstElement = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(2, 6);
  const progressionLength = getRandomNumber(5, 10);
  const progression = generateProgression(firstElement, progressionStep, progressionLength);
  const answer = getRandomElement(progression);
  const question = hideElement(progression, answer);
  return [question, answer];
};

export default () => {
  startEngine(getGameValues, description);
};
