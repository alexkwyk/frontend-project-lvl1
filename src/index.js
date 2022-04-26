import readlineSync from 'readline-sync';

export const gameCount = 3;

const checkAnswers = (questions, answers, description) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(`${description}`);
  for (let gameRound = 0; gameRound < gameCount; gameRound += 1) {
    const question = questions[gameRound];
    const correctAnswer = answers[gameRound];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default checkAnswers;
