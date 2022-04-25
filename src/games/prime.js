import checkAnswers, { gameCount } from '../index.js';
import getRandomNumber from '../utils.js';

export default () => {
  const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

  const questions = [];
  const answers = [];

  const primeGame = (count) => {
    if (count > 2) {
      return;
    }

    const gameQuestion = getRandomNumber(2, 99);

    const numIsPrime = (divisor, number) => {
      if (divisor === number) {
        return true;
      }
      if (number % divisor === 0) {
        return false;
      }
      return numIsPrime(divisor + 1, number);
    };

    const gameCorrectAnswer = (numIsPrime(2, gameQuestion)) ? 'yes' : 'no';

    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);

    primeGame(count + 1);
  };

  primeGame(0);
  checkAnswers(questions, answers, description);
};
