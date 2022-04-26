import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getNumbers = (maxcount) => {
  const firstNum = getRandomNumber(5, 15);
  const result = [firstNum];
  const numStep = getRandomNumber(2, 6);
  for (let i = 1; i < maxcount; i += 1) {
    result.push(result[i - 1] + numStep);
  }
  return result;
};

const getAnswer = (coll) => {
  const randomElementIndex = getRandomNumber(1, coll.length - 1);
  const answer = coll[randomElementIndex];
  return answer;
};

const hideItem = (coll, item) => {
  const result = [...coll];
  const answerIndex = result.indexOf(item);
  result[answerIndex] = '..';
  return result;
};

export default () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < gameCount; i += 1) {
    const progressionLength = getRandomNumber(5, 10);
    const Numbers = getNumbers(progressionLength);
    const correctAnswer = getAnswer(Numbers);
    const questionNumbers = hideItem(Numbers, correctAnswer);
    const gameQuestion = questionNumbers.join(' ');
    questions.push(gameQuestion);
    answers.push(String(correctAnswer));
  }

  checkAnswers(questions, answers, description);
};
