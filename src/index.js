import readlineSync from 'readline-sync';

export const gameCount = 3;

export default (getGameValues, description) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(`${description}`);

  for (let gameRound = 0; gameRound < gameCount; gameRound += 1) {
    const values = getGameValues();
    const [question, answer] = values;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = (userAnswer.toLowerCase() === String(answer));
    if (isAnswerCorrect === false) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
