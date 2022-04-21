import fullGame from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];

  const evenGame = (count) => {
    if (count > 2) {
      return;
    }
    const gameQuestion = Math.floor(Math.random() * 99) + 1;
    const gameCorrectAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
    questions.push(gameQuestion);
    answers.push(String(gameCorrectAnswer));
    evenGame(count + 1);
  };

  evenGame(0);
  fullGame(questions, answers, description);
};
