const quizDB=[
    {
        question:"Q1: Who was the father of computer?",
         a:"Charlie Babbage",
         b:"Dennis Ritchie",
         c:"Charles Babbage",
         d: "Ken Thompson",
         ans:"ans3"
    },
    {
        question:" What is the full form of CPU?",
        a:"Central Process Unit",
        b:"Central Processing Unit",
        c:"Central Programming Unit",
        d:"Central Progressive Unit",
        ans:"ans2"
    },
    {
        question:" What is the full form of CU?",
        a:"Compound Unit",
        b:"Communication Unit",
        c:"Computer Unit",
        d:"Control Unit",
        ans:"ans4"
  
    },
    {
        question:"What is the full form of ALU?",
        a:"Arithmetic Logic Unit",
        b:"Arithmetic Local Unit",
        c:"Advance Logical Unit",
        d:"None of these",
        ans:"ans1"
    },

    {
        question:"What is the full form of MU?",
       a:"Management Unit",
       b:"Masked Unit",
       c:"Main Unit",
       d:"Memory Unit",
        ans:"ans4"
    },

    {
        question:"What is the full form of EEPROM?",
        a:"Electrically Erasable Read Access Memory",
        b:"Electrically Erasable Read Only Memory",
        c:"Ethical Electrically Read Only Memory",
        d:"None of these",
        ans:"ans2"
    },
    
    {
        question:"What is the full form of SDRAM?",
        a:"Special Dynamic Read Access Memory",
        b:"Synchronous Dynamic Read Access Memory",
        c:"Special Dynamic Random Access Memory",
        d:"Synchronous Dynamic Random Access Memory",
        ans:"ans4"
       },

        {
        question:"Which electronics component is used in first generation computers?",
       a: "Transistors",
       b: "ULSI Chips",
       c: "Vacuum Tubes",
       d: "LSI Chips",
       ans:"ans3"
        },

        {
        question:"Which is not a correct type of a computer?",
       a: "Mini Frame Computer",
       b: "Super Computer",
       c: "Workstations",
       d: "Personal Computer",
       ans:"ans3"
        },

        {
        question:"Which part of the computer is considered as Brain of the Computer?",
       a:"Random Access Memory",
       b:"Central Process Unit",
       c:"Read Only Memory",
       d:"Hard Disk",
       ans:"ans2"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');

let questionCount =0;
let score=0;

const loadQuestion = () => {
      
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

 const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
   
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);

}

submit.addEventListener('click',()=>{

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

     deselectAll();


    if(questionCount< quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick = "location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
});




