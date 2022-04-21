import fullGame from '../index.js';

export default () => {
  const description = 'What is the result of the expression?';

  const questions = [];
  const answers = [];

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

  const calcGame = (count) => {
    if (count > 2) {
      return;
    }
    const operatorNumber = getRandomNumber(0, 2);
    const a = getRandomNumber(1, 99);
    const b = getRandomNumber(1, 99);
    let gameQuestion;
    let gamePreAnswer;
    switch (operatorNumber) {
      case 0:
        gameQuestion = `${a} + ${b}`;
        gamePreAnswer = a + b;
        break;
      case 1:
        gameQuestion = `${a} - ${b}`;
        gamePreAnswer = a - b;
        break;
      case 2:
        gameQuestion = `${a} * ${b}`;
        gamePreAnswer = a * b;
        break;
      default:
        break;
    }
    const gameCorrectAnswer = String(gamePreAnswer);
    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);
    calcGame(count + 1);
  };

  calcGame(0);
  fullGame(questions, answers, description);
};
