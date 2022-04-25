import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

export default () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < gameCount; i += 1) {
    const operatorNumber = getRandomNumber(0, 2);
    const a = getRandomNumber(1, 99);
    const b = getRandomNumber(1, 99);
    let gameQuestion;
    let gameCorrectAnswer;
    switch (operatorNumber) {
      case 0:
        gameQuestion = `${a} + ${b}`;
        gameCorrectAnswer = a + b;
        break;
      case 1:
        gameQuestion = `${a} - ${b}`;
        gameCorrectAnswer = a - b;
        break;
      case 2:
        gameQuestion = `${a} * ${b}`;
        gameCorrectAnswer = a * b;
        break;
      default:
        break;
    }
    questions.push(gameQuestion);
    answers.push(String(gameCorrectAnswer));
  }

  checkAnswers(questions, answers, description);
};
