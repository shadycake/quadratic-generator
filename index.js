var quadraticElement = document.getElementById("quadratic");
var solutionElement = document.getElementById("solution");
// (ax + b)(cx + d)
var fA, fB, fC, fD;

// ax^2 + bx + c
var qA, qB, qC;

var url = "https://latex.codecogs.com/gif.latex?\\huge&space;";

function generate(event){
    fA = Math.ceil(Math.random()*5);
    fB = Math.ceil(Math.random()*5);
    fC = Math.ceil(Math.random()*5);
    fD = Math.ceil(Math.random()*5);
    qA = fA * fC;
    qB = fA * fD + fB * fC;
    qC = fB * fD;

    var qSource = url + qA.toString() + "x^2&plus;"+ qB.toString() + "x&plus;" + qC.toString();
    qSource = qSource.replace("1x", "x");
    quadraticElement.src = qSource;

    var sSource = url + "(" + fA + "x&plus;" + fB + ")(" + fC + "x&plus;" + fD + ")";
    sSource = sSource.replace("1x", "x");
    solutionElement.src = sSource;


    solutionElement.style.visibility = "hidden";
}

function solution(event){
    solutionElement.style.visibility = "visible";
}

generate();
