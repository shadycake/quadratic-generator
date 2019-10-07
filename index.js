var quadraticElement = document.getElementById("quadratic");
var solutionElement = document.getElementById("solution");

var fA, fB, fC, fD;
var qA, qB, qC;

var url = "https://latex.codecogs.com/gif.latex?\\huge&space;";

function getRandomNums() {
  return Math.ceil(Math.random()*5);
}

function generate(event){
    [fA, fB, fC, fD] = [getRandomNums(), getRandomNums(), getRandomNums(), getRandomNums()];
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

function solve(event){
    solutionElement.style.visibility = "visible";
}

generate();
