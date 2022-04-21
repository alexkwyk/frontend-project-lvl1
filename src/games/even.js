import fullGame from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const questions = [];
  const answers = [];

  const evenGame = (count) => {
    if (count > 2) {
      return;
    }
    const gameQuestion = getRandomNumber(1, 99);
    const gameCorrectAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);
    evenGame(count + 1);
  };

  evenGame(0);
  fullGame(questions, answers, description);
};
