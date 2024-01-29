const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for the candidate's name //
  candidateName = input.question("What is your name? ");
  console.log(`Hello, ${candidateName}!`);
}

function askQuestion() {
  // TODO 1.2b: Ask the candidate each question and push the response to candidateAnswers //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the questions correctly or incorrectly // 
  let correctCount = 0;

  for (let i = 0; i < questions.length; i++) {
    console.log(`\nQuestion ${i + 1}: ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("Correct!");
      correctCount++;
    } else {
      console.log("Incorrect.");
    }
  }

  let grade = (correctCount / questions.length) * 100; // Calculate the percentage
  console.log(`\nOverall Grade: ${grade}%`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet the candidate using their name //
  console.log();
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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
