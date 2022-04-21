import Greeting from '../cli.js';
import gameRound from '../index.js';

const startEvenGame = () => {
  const username = Greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const evenGameRound = (count) => {
    if (count > 2) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const gameQuestion = Math.floor(Math.random() * 99) + 1;
    const gameCorrectAnswer = (gameQuestion % 2 === 0) ? 'yes' : 'no';
    const gameResult = gameRound(gameQuestion, gameCorrectAnswer);

    if (gameResult === true) {
      evenGameRound(count + 1);
    }
  };

  evenGameRound(0);
};

export default startEvenGame;
