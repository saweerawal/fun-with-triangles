const base      = document.querySelector("#base");
const height    = document.querySelector("#height");
const checkbtn  = document.querySelector("#checkbtn");
const output    = document.querySelector("#output");

function calculateProduct(side1, side2)
{ 
   const sum = side1 * side2;
   return sum;
}

function checkArea()
{
    if(Number(base.value) < 0 || Number(height.value)< 0){
        output.innerText = `Enter Positive Values`;
    }
    else{
    var product = calculateProduct(Number(base.value), Number(height.value));
    const area = 1/2 * Number(product);
    output.innerText = `The Area of the triangle is ${area} cm²`;
    }
}


checkbtn.addEventListener("click",checkArea)