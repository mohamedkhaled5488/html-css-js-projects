const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
const myopen = document.querySelector('.open')
const myclose = document.querySelector('.close')



let shuffledQuestions, currentQuestionIndex
// console.log(myopen)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setnextquestion()
  })
function startGame (){
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setnextquestion()
  function addsign(){
      if(setStatusClass(document.body, correct)){
        myopen.classList.remove('hide')
      }if(setStatusClass(document.body, wrong)){
        myclose.classList.remove('hide')
    
      }
    }
  
}
 function setnextquestion (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }
 function showQuestion(question) {
    questionElement.innerText = question.question
  question.answers.forEach(answer => {
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
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
 
  
 function selectanswer (e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
    
 }
//  function addsign(){
//   if(document.body.style.color='black'){
//     myopen.classList.remove('hide')

//   }else{
//     myclose.classList.remove('hide')

//   }
// }
// addsign()

 
 function setStatusClass(element, correct) {
    clearStatusClass(element)
    myopen.classList.add('hide')
    myclose.classList.add('hide')
    if (correct) {
      element.classList.add('correct')
      myopen.classList.remove('hide')

      
    } else {

      element.classList.add('wrong')
      myopen.classList.remove('hide')

    }
    
    
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  

 const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]
 
