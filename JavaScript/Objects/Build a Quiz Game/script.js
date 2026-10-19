let questions = [];

let q1 = {
  category: "History",
  question: "In what year did the Berlin Wall fall?",
  choices: ["1975", "1989", "1995"],
  answer: "1989"
};

let q2 = {
  category: "History",
  question: "Which civilization built the ancient city of Machu Picchu?",
  choices: ["The Aztecs", "The Mayans", "The Incas"],
  answer: "The Incas"
};

let q3 = {
  category: "History",
  question: "Who was the first emperor of the Roman Empire?",
  choices: ["Julius Caesar", "Augustus Caesar", "Nero"],
  answer: "Augustus Caesar"
};

let q4 = {
  category: "History",
  question: "What was the name of the first artificial satellite launched into Earth's orbit by the Soviet Union in 1957?",
  choices: ["Vostok 1", "Sputnik 1", "Soyuz 1"],
  answer: "Sputnik 1"
};

let q5 = {
  category: "History",
  question: "Who was the first female Prime Minister of the United Kingdom?",
  choices: ["Theresa May", "Angela Merkel", "Margaret Thatcher"],
  answer: "Margaret Thatcher"
};

questions.push(q1, q2, q3, q4, q5);

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getResults(getQuestion, getChoice) {
  if (getChoice === getQuestion.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${getQuestion.answer}`;
  }
}