import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, length) => {
  const result = [firstElement];
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const hideElementByIndex = (coll, index) => {
  const result = [...coll];
  result[index] = '..';
  return result;
};

const getRound = () => {
  const firstElement = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(2, 6);
  const progressionLength = getRandomNumber(5, 10);
  const progression = generateProgression(firstElement, progressionStep, progressionLength);
  const answerIndex = getRandomNumber(1, progression.length - 1);
  const answer = progression[answerIndex];
  const question = hideElementByIndex(progression, answerIndex).join(' ');
  return [question, answer];
};

export default () => {
  startEngine(getRound, description);
};
