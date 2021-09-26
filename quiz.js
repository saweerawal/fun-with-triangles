const quizform  = document.querySelector(".quiz-form");
const submitbtn = document.querySelector("#submitbtn");
const output    = document.querySelector("#output");

const correctAnswers = ["90°" , "right angled"];

function calculateScore()
{
    var score = 0;
    var index = 0;
    var form = new FormData(quizform);
    for(let value of form.values()){
        if(value===correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    return score;
}

function checkQuizScore()
{
    const totalScore = calculateScore();
    output.innerText = "Your Score is " + totalScore;

}

submitbtn.addEventListener("click",checkQuizScore)