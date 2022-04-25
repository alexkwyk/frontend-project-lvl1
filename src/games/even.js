import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < gameCount; i += 1) {
    const gameQuestion = getRandomNumber(1, 99);
    const gameCorrectAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);
  }
  checkAnswers(questions, answers, description);
};
