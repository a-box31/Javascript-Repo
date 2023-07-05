const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Earth", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Brazil", "France", "Germany", "Argentina"],
    answer: "France",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = questions[currentQuestion];
  questionElement.textContent = currentQuiz.question;

  optionsElement.innerHTML = "";
  for (let i = 0; i < currentQuiz.options.length; i++) {
    const option = document.createElement("button");
    option.textContent = currentQuiz.options[i];
    option.addEventListener("click", checkAnswer);
    optionsElement.appendChild(option);
  }
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const currentQuiz = questions[currentQuestion];

  if (selectedOption.textContent === currentQuiz.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

loadQuestion();
