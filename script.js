
var quizName = document.getElementById('quiz');
var resultsShown = document.getElementById('results');
var sumbitButton = document.getElementById('sumbit');

function buildquiz() {
    cost output =[];

    myQuestions.foreach(
        (currentQuestion, questionNumber) => {
            cost answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                );
                }
output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join()} </div>`
);
        }
    );
quizName.innerHTML = output.join();
    }
    myQuestions.foreach( (currentQuestion, questionNumber) {

    });



        
    


function showresults() { }

buildquiz();
sumbitButton.addEventListener('click', showresults);

myQuestions = [{
}
{

    question: "What are some Javascript Data Types?",
    answers: {
        a: HTML
    b: JavaScript
    c: Boolean
    d: CSS
    },
    correctAnswer: "C"
},

{

    question: "What is the method to console log?",
    answers: {
        a: HTML
        b: JavaScript
        c: console.log
        d: console.group
    },
    correctAnswer: "c"
},

{

    question: "What is a commonly used variable name?",
    answers: {
        a: Var
            b: JavaScript
            c: Index
            d: Grab
    },
    correctAnswer: "a"
},
]

