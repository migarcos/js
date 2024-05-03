// Variables declaration

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const ocho = document.querySelector("#ocho");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const cleanVal = document.querySelector("#clear");

const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const resp = document.querySelector("#resp");
const multip = document.querySelector("#multip");

const values = document.querySelector("#values");
let answer = [];
let temp = "";
let opera = "";

// Primary Events
one.onclick = () => {
    checkResp();
    answer.forEach((element) => {opera = opera + `${element}`});
    temp = temp + 1;
    values.textContent = opera + temp;
}
ocho.addEventListener('click', () => {
    checkResp();
    answer.forEach((element) => {opera = opera + `${element}`});
    temp = temp + 8;
    values.textContent = opera + temp;
} )
seven.onclick = () => {
    checkResp();
    answer.forEach((element) => {opera = opera + `${element}`});
    temp = temp + 7;
    values.textContent = opera + temp;
}
// Operator Events
plus.onclick = () => {
    answer[answer.length] = temp;
    temp = "";
    answer[answer.length] = "+";
    showVals();
}
multip.onclick = () => {
    answer[answer.length] = temp;
    temp = "";
    answer[answer.length] = "*";
}
cleanVal.onclick = () => {
    answer = []; values.textContent = "."; temp = ""; opera = ""; resp.textContent = "";
}
// **  Main Functions   **
function showVals() {
    values.textContent = "";
    temp = "";
    answer.forEach((element) => {temp = temp + `${element}`});
    values.textContent = temp;
    temp = "";
}
function checkResp() {
    if (resp.textContent > 0) {
        resp.textContent = "";
    }
}
equal.onclick = () => {
    answer[answer.length] = temp;
    showVals();
    switch (answer[1]) {
        case "+":
            resp.textContent = `${parseInt(answer[0])+parseInt(answer[2])}`;
            answer = []; temp = "";
            break;
        case "*":
            resp.textContent = `${parseInt(answer[0]) * parseInt(answer[2])}`;
            answer = []; temp = "";
            break;
    }
}
