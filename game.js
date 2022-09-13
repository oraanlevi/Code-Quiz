const question= document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers =true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions =[
    {
        question: "What is the method to console log?",
        choice1: 'HTML',
        choice2: 'console.log',
        choice3: 'Javascript', 
        choice4: 'Css',
        answer: 2
    },
    {
    question: "What is a commonly used variable name?",
    choice1:'var',
    choice2:'Index',
    choice3:'Grab',
    choice4:'Css',
    answer: 1
},
   {
    question: "What are some Javascript Data Types?",
        choice1: 'HTML', 
         choice2:'Boolean', 
         choice3:'Javascript', 
         choice4:'Css',
         answer:2
   }
    ];

    const Correct= 10;
    const max= 3;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    
    };

    getNewQuestion = () => {
        questionCounter++;
        const questionIndex =Math.floor(Math.random() * availableQuestions.length);
currentQuestion =availableQuestions[questionIndex];
question.innerText = currentQuestion.question;

choices.forEach( choice => {
    const number = choice.dataset
})

};