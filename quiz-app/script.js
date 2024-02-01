// instances.
const questionPackages = [
	{
		question: "What does 日本語 mean?",
		a: "English",
		b: "Japanese",
		c: "Spanish",
		d: "Vietnamese",
		correct: "b",
		message: "Incorrect:　日本語 means Japanese."
	},
	{
		question: "What does 始め mean?",
		a: "Begin",
		b: "End",
		c: "Middle",
		d: "Run",
		correct: "a",
		message: "Incorrect: 始め means Begin."
	},
	{
		question: "What does 先生 mean?",
		a: "Teacher",
		b: "Student",
		c: "Pupil",
		d: "Staff",
		correct: "a",
		message: "Incorrect: 先生 means Begin."
	},
];
let currentIndex = 0;
let isWrong = false;
let trueCount = 0;

// imoprt elements.
const quizContainerElement = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerAElement = document.getElementById("answer-a");
const answerBElement = document.getElementById("answer-b");
const answerCElement = document.getElementById("answer-c");
const answerDElement = document.getElementById("answer-d");
const answerElements = document.querySelectorAll(".quiz-app-answer");
const submitElement = document.getElementById("submit");
const messageElement = document.getElementById("quiz-app-message");

function initializeQuiz() {
	const currentQuestion = questionPackages[currentIndex];
	
	questionElement.innerHTML = currentQuestion.question;
	answerAElement.innerHTML = currentQuestion.a;
	answerBElement.innerHTML = currentQuestion.b;
	answerCElement.innerHTML = currentQuestion.c;
	answerDElement.innerHTML = currentQuestion.d;
}

initializeQuiz();

function getAnswer() {
	let checkedAnswer = undefined;

	answerElements.forEach((answer) => {
		if (answer.checked) {
			checkedAnswer = answer.id;
		}
	});	

	return checkedAnswer;
}

function deselectAnswer() {
	answerElements.forEach((answer) => {
		answer.checked = false;
	});
}

submitElement.addEventListener("click", () => {
	if (isWrong) {
		deselectAnswer();

		messageElement.innerHTML = "";
		submitElement.innerHTML = "submit";
		isWrong = false;

		currentIndex++;
		initializeQuiz();
	}
	else {
		const answer = getAnswer();

		if (answer) {
			if (answer === questionPackages[currentIndex].correct) {
				trueCount++;
				currentIndex++;

				if (currentIndex < questionPackages.length) {
					deselectAnswer();
					initializeQuiz();
				}
				else {
					quizContainerElement.style.alignItems = "center";
					quizContainerElement.innerHTML = `
						<h2>You answered correctly ${trueCount}/3.</h2>
						<button onclick="location.reload()">
							do it again
						</button>
					`
				}
			}
			else {
				if (currentIndex >= questionPackages.length) {
					quizContainerElement.style.alignItems = "center";
					quizContainerElement.innerHTML = `
						<h2>You answered correctly ${trueCount}/3.</h2>
						<button onclick="location.reload()">
							do it again
						</button>
					`
				}
				else {
					deselectAnswer();
					messageElement.innerHTML = questionPackages[currentIndex].message;
					submitElement.innerHTML = "next question";
					isWrong = true;
				}
			}
		}
		else {
			messageElement.innerHTML = "Please select an answer.";	
		}
	}
});
