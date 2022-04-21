import fullGame from '../index.js';

export default () => {
  const description = 'What number is missing in the progression?';

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const questions = [];
  const answers = [];
  const progressionGame = (count) => {
    if (count > 2) {
      return;
    }

    const questionNumArr = [getRandomNumber(5, 15)];
    const numStep = getRandomNumber(2, 6);
    const generateNumbers = (i, maxcount) => {
      if (i > maxcount - 1) {
        return;
      }
      questionNumArr[i] = questionNumArr[i - 1] + numStep;
      generateNumbers(i + 1, maxcount);
    };
    generateNumbers(1, getRandomNumber(5, 10));

    const randomElementIndex = getRandomNumber(1, questionNumArr.length - 1);
    const correctAnswer = questionNumArr[randomElementIndex];
    questionNumArr[randomElementIndex] = '..';

    const gameQuestion = questionNumArr.join(' ');

    questions.push(gameQuestion);
    answers.push(String(correctAnswer));

    progressionGame(count + 1);
  };

  progressionGame(0);
  fullGame(questions, answers, description);
};
