const base          = document.querySelector("#base");
const perpendicular = document.querySelector("#perpendicular");
const checkbtn      = document.querySelector("#checkbtn");
const output        = document.querySelector("#output");

function calculateSumOfSquares(side1, side2)
{ 
   const sum = side1 * side1 + side2 * side2;
   return sum;
}

function checkHypotenuse()
{
    var sum= calculateSumOfSquares(Number(base.value), Number(perpendicular.value));
    const hypotenuseLength = Math.sqrt(Number(sum));
    output.innerText = `The length of the hypotenuse is ${hypotenuseLength} cm`;
}


checkbtn.addEventListener("click",checkHypotenuse)