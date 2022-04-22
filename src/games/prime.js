import fullGame from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is prime, otherwise answer "no".';

  const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

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
    const primeNum = numIsPrime(2, gameQuestion);
    console.log(primeNum);
    const gameCorrectAnswer = (primeNum) ? 'yes' : 'no';

    questions.push(gameQuestion);
    answers.push(gameCorrectAnswer);

    primeGame(count + 1);
  };

  primeGame(0);
  fullGame(questions, answers, description);
};
