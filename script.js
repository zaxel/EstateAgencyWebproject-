let stepbl1 = document.getElementById("stepbl1");
let stepborder1 = document.getElementById("stepborder1");

let stepbl2 = document.getElementById("stepbl2");
let stepborder2 = document.getElementById("stepborder2");

let stepbl3 = document.getElementById("stepbl3");
let stepborder3 = document.getElementById("stepborder3");

stepbl1.onmouseover = function(){
    stepborder1.style.borderBottom = "3px solid white";
}
stepbl1.onmouseout = function(){
    stepborder1.style.borderBottom = "3px solid black";
}

stepbl2.onmouseover = function(){
    stepborder2.style.borderBottom = "3px solid white";
}
stepbl2.onmouseout = function(){
    stepborder2.style.borderBottom = "3px solid black";
}

stepbl3.onmouseover = function(){
    stepborder3.style.borderBottom = "3px solid white";
}
stepbl3.onmouseout = function(){
    stepborder3.style.borderBottom = "3px solid black";
}