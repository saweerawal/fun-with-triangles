const angles        = document.querySelectorAll(".angle");
const istrianglebtn = document.querySelector("#istrianglebtn");
const output        = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3)
{ 
   var sum=0;
   sum = sum + Number(angle1) + Number(angle2) + Number(angle3);
   return sum;
}

function checkIsTriangle()
{
    var sum = calculateSumOfAngles(angles[0].value, angles[1].value, angles[2].value);
    
    if(sum===180){
        output.innerText = "Yayy, the angles form a triangle!";
    }
    else{
        output.innerText = "No, the angles do not form a triangle!";
    }
}


istrianglebtn.addEventListener("click",checkIsTriangle)




