
var quizName= document.getElementById('quiz');
var resultsShown= document.getElementById('results');
var sumbitButton= document.getElementById('sumbit');

function buildquiz() {
}

function showresults() {}

buildquiz();
sumbitButton.addEventListener('click', showresults);

myQuestions = [ {
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