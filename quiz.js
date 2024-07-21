
const questions = [
    {
        question: "Who is the PM (current) of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Vladimir Putin", correct: false },
            { text: "Indira Gandhi", correct: false },
            { text: "Volodymyr Zelensky", correct: false },
        ]
    },
    {
        question: "Which country won the FIFA World Cup 2022?",
        answers: [
            { text: "France", correct: false },
            { text: "Croatia", correct: false },
            { text: "Argentina", correct: true },
            { text: "Brazil", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "Who is the current CEO of Twitter?",
        answers: [
            { text: "Elon Musk", correct: true },
            { text: "Mark Zuckerberg", correct: false },
            { text: "Jeff Bezos", correct: false },
            { text: "Tim Cook", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    }
];


        const questionElement = document.getElementsByClassName("question")[0];
        const answerButtons = document.getElementsByClassName("answer")[0];
        const nextButton = document.getElementById("next-question");
        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }

        function showQuestion() {
            resetState();
            let currentQuestion = questions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                button.addEventListener("click", () => selectAnswer(answer));
                answerButtons.appendChild(button);
            });
        }

        function resetState() {
            nextButton.style.display = "none";
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function selectAnswer(answer) {
            if (answer.correct) {
                score++;
            }
            nextButton.style.display = "block";
        }

        nextButton.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            }
        });

        function showScore() {
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Restart";
            nextButton.style.display = "block";
            nextButton.addEventListener("click", startQuiz);
        }

        startQuiz();
    