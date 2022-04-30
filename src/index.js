import readlineSync from 'readline-sync';

export const gameCount = 3;

export default (getGameValues, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);

  for (let gameRound = 0; gameRound < gameCount; gameRound += 1) {
    const values = getGameValues();
    const [question, correctAnswer] = values;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = (userAnswer.toLowerCase() === String(correctAnswer));
    if (isAnswerCorrect === false) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
