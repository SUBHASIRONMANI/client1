const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markup Link"], answer: "Hyper Text Markup Language" },
    { question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<h3>"], answer: "<h1>" },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<newline>"], answer: "<br>" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets", "Cascading Style System"], answer: "Cascading Style Sheets" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["style", "styles", "class", "font"], answer: "style" },
    { question: "Which CSS property controls the text size?", options: ["text-style", "font-size", "text-size", "font-style"], answer: "font-size" },
    { question: "How do you select an element with id 'header' in CSS?", options: ["#header", ".header", "header", "header.id"], answer: "#header" },
    { question: "What is the correct syntax to change the background color in CSS?", options: ["background-color: blue;", "bgcolor: blue;", "background: blue;", "color: blue;"], answer: "background-color: blue;" },
    { question: "In JavaScript, what is the correct way to write an array?", options: ["var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"], answer: "var colors = ['red', 'green', 'blue']" },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseover", "onclick", "onchange", "onmouseclick"], answer: "onclick" },
    { question: "How do you create a function in JavaScript?", options: ["function myFunction[]", "function:myFunction()", "function myFunction()", "myFunction() function"], answer: "function myFunction()" },
    { question: "What is the HTML element for defining navigation links?", options: ["<nav>", "<navigation>", "<ul>", "<link>"], answer: "<nav>" },
    { question: "Which property is used to change the font of an element in CSS?", options: ["font-weight", "font-family", "font-style", "text-style"], answer: "font-family" },
    { question: "How do you add a comment in JavaScript?", options: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "# This is a comment"], answer: "// This is a comment" },
    { question: "What does the 'this' keyword refer to in JavaScript?", options: ["The current object", "The parent object", "The global object", "The function itself"], answer: "The current object" },
    { question: "What is the HTML element for defining a footer for a document or section?", options: ["<footer>", "<bottom>", "<section>", "<div>"], answer: "<footer>" },
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
    { question: "Which CSS property is used to set the spacing between words?", options: ["word-spacing", "letter-spacing", "text-spacing", "space-between"], answer: "word-spacing" },
    { question: "What is the output of 2 + '2' in JavaScript?", options: ["22", "4", "Error", "undefined"], answer: "22" },
    { question: "Which method is used to access an HTML element by its id in JavaScript?", options: ["getElementById()", "getElement()", "querySelector()", "getId()"], answer: "getElementById()" },
    { question: "What does NaN stand for in JavaScript?", options: ["Not a Number", "Not a Name", "Null and None", "Negative Number"], answer: "Not a Number" },
    { question: "What is the correct way to declare a constant in JavaScript?", options: ["const myConst;", "const myConst = 5;", "constant myConst = 5;", "let myConst = 5;"], answer: "const myConst = 5;" },
    { question: "How do you define an inline frame in HTML?", options: ["<iframe>", "<frame>", "<inline>", "<iframe src=''>"], answer: "<iframe>" },
    { question: "Which property is used to set the color of text in CSS?", options: ["color", "text-color", "font-color", "background-color"], answer: "color" },
    { question: "What is the correct HTML for creating a checkbox?", options: ["<checkbox>", "<input type='checkbox'>", "<input type='check'>", "<check>"], answer: "<input type='checkbox'>" },
    { question: "Which HTML element is used to define an interactive button?", options: ["<button>", "<input type='button'>", "<btn>", "<click>"], answer: "<button>" },
    { question: "What does the CSS 'display' property control?", options: ["The visibility of an element", "The layout of an element", "The color of an element", "The size of an element"], answer: "The layout of an element" },
    { question: "How can you add a background color in CSS?", options: ["background: color;", "background-color: color;", "bg-color: color;", "color: background;"], answer: "background-color: color;" },
    { question: "What does the alert() function do in JavaScript?", options: ["Displays a message to the user", "Creates a new alert element", "Logs a message in the console", "Changes the background color"], answer: "Displays a message to the user" },
    { question: "How do you create a new object in JavaScript?", options: ["var obj = new Object();", "var obj = {};", "var obj = Object.create();", "Both a and b"], answer: "Both a and b" }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('instruction-page').classList.remove('hidden');
}

function beginQuiz() {
    document.getElementById('instruction-page').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden'); // Hide feedback initially
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');

    // Clear previous feedback styles
    feedbackElement.classList.remove('correct', 'incorrect');

    if (selectedOption === currentQuestion.answer) {
        score++;
        feedbackElement.innerText = "Correct!";
        feedbackElement.classList.add('correct'); // Add correct class
    } else {
        feedbackElement.innerText = `Incorrect! The correct answer is: ${currentQuestion.answer}`;
        feedbackElement.classList.add('incorrect'); // Add incorrect class
    }

    feedbackElement.classList.remove('hidden'); // Show feedback
    document.getElementById('next-button').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = `${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}

// Load the quiz on window load
window.onload = () => {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('instruction-page').classList.add('hidden');
};
``
