
const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "dd",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "bb",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "aa",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "bb",
    },
];
// console.log(quizData[0].correct)
const the_question = document.getElementById('question')
const atext =document.getElementById("a1")
const btext =document.getElementById('a2')
const ctext =document.getElementById('a3')
const dtext =document.getElementById('a4')
let submitBtn = document.getElementById("submit");
const options =document.getElementsByTagName("input");
const answerEls = document.querySelectorAll(".an");
let submitBtnh = document.getElementById("bt");
let retakebutton = document.getElementById("btnt");



 curent_question = 0;
let answer = undefined;
let score = 0

add_date()

function add_date (){
    const current_qus =quizData[curent_question]
the_question.innerHTML=current_qus.question
atext.innerHTML=current_qus.a
btext.innerHTML=current_qus.b
ctext.innerHTML=current_qus.c
dtext.innerHTML=current_qus.d
}
function get_the_selected_one (){

    answerEls.forEach(element => {
        if(element.checked){
            answer=element.id
        }
    })
    return answer
}
function get_the_score(){
    if(answer){
        if(answer===quizData[ curent_question].correct)
        score++
        curent_question++;
        answerEls.forEach(el=>{
            el.checked=false
        })   
    }
}
function final_page (){
    if(curent_question==quizData.length){
 document.getElementById("main").innerHTML = `<h1>congratolation</h1>your score is ${score} out of ${quizData.length}<button id="btnt" onclick="location.reload()">retake</button> `;
    }
}

 
submitBtn.addEventListener("click",()=>{
    get_the_selected_one ()
    get_the_score()
    final_page ()
    add_date()
}

)
