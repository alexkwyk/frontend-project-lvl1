import fullGame from '../index.js';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const questions = [];
  const answers = [];
  const gcdGame = (count) => {
    if (count > 2) {
      return;
    }
    let a = getRandomNumber(1, 99);
    let b = getRandomNumber(1, 99);

    let gameCorrectAnswer;

    const findAnswer = (num) => {
      if (num > 99) {
        if (gameCorrectAnswer === undefined) {
          a = getRandomNumber(1, 99);
          b = getRandomNumber(1, 99);
          findAnswer(2);
        }
        return;
      }
      if (a % num === 0 && b % num === 0) {
        gameCorrectAnswer = num;
        findAnswer(num + 1);
      }
      findAnswer(num + 1);
    };

    findAnswer(2);
    const gameQuestion = `${a} ${b}`;
    questions.push(gameQuestion);
    answers.push(String(gameCorrectAnswer));
    gcdGame(count + 1);
  };

  gcdGame(0);
  fullGame(questions, answers, description);
};
