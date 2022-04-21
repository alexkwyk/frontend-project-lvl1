import readlineSync from 'readline-sync';

const fullGame = (questions, answers, description) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(`${description}`);

  const checkAnswers = (count = 0) => {
    if (count > 2) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const checkAnswerCycle = (question, correctAnswer) => {
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer.toLowerCase() === correctAnswer) {
        console.log('Correct!');
        return true;
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return false;
    };

    const gameResult = checkAnswerCycle(questions[count], answers[count]);
    if (gameResult === true) {
      checkAnswers(count + 1);
    }
  };
  checkAnswers();
};

export default fullGame;
