const question= document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
const timerEl = document.getElementById("time");
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");



let timer 
let timeLeft = 10

let currentQuestion = {};
let acceptingAnswers =false;
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

const correct= 10;
const MAX_QUESTION= 3;

startTimer = () => {
    console.log('inside timer')
    timer = setInterval(function() {
timerEl.textContent = timeLeft 
timeLeft--
if(timeLeft < 0) {
    endgame()
}
    }, 1000 )
}
endgame = () => {
    clearInterval(timer);
    console.log('end of game logic goes here');
}

startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        startTimer();
        getNewQuestion();
    
};

getNewQuestion = () => {

        if(availableQuestions.length === 0 || questionCounter > MAX_QUESTION){
            return window.location.assign("/end.html");
        
        }       

questionCounter++;
questionCounterText.innerText = `${questionCounter}/${MAX_QUESTION}`;

//console.log(availableQuestions)


const questionIndex = Math.floor(Math.random() * availableQuestions.length);
console.log(questionIndex)
currentQuestion = availableQuestions[questionIndex];
console.log("currentQuestion", currentQuestion);
question.innerText = currentQuestion.question;

choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
})

availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e =>
    {
       if (!acceptingAnswers) return;
       
       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];

       const classToapply = 
       selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
       
selectedChoice.parentElement.classList.add(classToapply);
setTimeout( () => {
selectedChoice.parentElement.classList.remove(classToapply);
     getNewQuestion();   


}, 1000);

    
      


    });
});

startGame();