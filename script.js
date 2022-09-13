const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const username = document.querySelector('username')
const saveScorebtn = document.querySelector('saveScorebtn')
const finalScore = document.querySelector('finalScore')
const mostRecentScore = document.querySelector('mostRecentScore')

const highScores= JSON.parse(local.storage.getItem('highScores')) || []
const MaxScore = 5


highScoresList.innerHtml =
highScores.map(score => {
    return `<li class="high-score">${score.name} -{$score.score}</li>`
}).join("")

finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () => {
    saveScorebtn.disabled = !username.value
})

saveHighScore = e =>
e.preventDefault()

const score = {
    score: mostRecentScore,
    name: username.value
}

highScores.push(score)

highScores.sort((a,b) => {
    return b.score - a.score
})

highScores.splice(5)
localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('/')



function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textcontent= time;
        time--;
        if(time < 9) 
        timeCount.textcontent
    }
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})

let shuffledQuestions, currentQuestionIndex

function startGame() {
console.log('started')
startButton.classList.add('hide')
shuffledQuestions =questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>
        {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
        })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild) }
    
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }  else {
            startButton.innertext = 'restart'
            startButton.classList.remove('hide')  
        }
        
    }
    nextButton.classList.remove('hide')

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
    }


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ 
    {
    question: "What are some Javascript Data Types?",
    answers: [
        {text: 'HTML', correct: false},
        {text: 'Boolean', correct: true},
        {text: 'Javascript', correct: false},
        {text: 'Css', correct: false}
    ]
},
 {
    question: "What is the method to console log?",
    answers: [
        {text: 'HTML', correct: false},
        {text: 'console.log', correct: true},
        {text: 'Javascript', correct: false},
        {text: 'Css', correct: false}
    ]
},
    {
    question: "What is a commonly used variable name?",
    answers: [
    {text: 'var', correct: true},
    {text: 'Index', correct: false},
    {text: 'Grab', correct: false},
    {text: 'Css', correct: false}
    ]
}
]