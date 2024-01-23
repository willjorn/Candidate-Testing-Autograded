const input = require('readline-sync');

let candidateName;
let question;
let correctAnswer;
let candidateAnswer;
let questions;  // Added array for questions
let correctAnswers;  // Added array for correct answers
let candidateAnswers = [];  // Initialize array for candidate answers

// Call the runProgram function to start the quiz

function askForName() {
  candidateName = input.question("What is your name? ");
  console.log(`Hello, ${candidateName}!\n`);
}

function askQuestion() {
  questions = [
    "Who was the first American woman in space? ",
    "True or false: 5 kilometer == 5000 meters? ",
    "(5 + 3)/2 * 10 = ? ",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? "
  ];

  correctAnswers = [
    "Sally Ride",
    "true",
    "40",
    "Trajectory",
    "3"
  ];

  for (let i = 0; i < questions.length; i++) {
    question = questions[i];
    correctAnswer = correctAnswers[i];

    candidateAnswer = input.question(question);
    candidateAnswers.push(candidateAnswer);

    console.log(`Your answer: ${candidateAnswer}`);
    console.log(`Correct answer: ${correctAnswer}\n`);
  }
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0;

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("Question " + (i + 1) + ": Correct!");
      correctCount++;
    } else {
      console.log("Question " + (i + 1) + ": Incorrect. The correct answer is: " + correctAnswers[i]);
    }
  }

  const score = (correctCount / questions.length) * 100;
  console.log(`\nCandidate's Score: ${score}%`);

  if (score >= 80) {
    console.log(`${candidateName}, you passed the quiz!`);
  } else {
    console.log(`${candidateName}, you failed the quiz. Better luck next time.`);
  }
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// Call the runProgram function to start the quiz
runProgram();

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
