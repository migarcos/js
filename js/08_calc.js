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

ocho.addEventListener('click', () => {
    checkResp();
    answer[answer.length] = 8;
    showVals();
} )
seven.onclick = () => {
    checkResp();
    answer[answer.length] = 7;
    showVals();
}

plus.onclick = () => {
    answer[answer.length] = "+";
    showVals();
}
multip.onclick = () => {
    answer[answer.length] = "*";
    showVals();
}
cleanVal.onclick = () => {
    answer = []; values.textContent = "."; temp = ""; resp.textContent = "";
}
function showVals() {
    values.textContent = "";
    temp = "";
    answer.forEach((element) => {temp = temp + `${element}`});
    values.textContent = temp;
}
function checkResp() {
    if (resp.textContent>0) {
        resp.textContent = "";
    }
}
equal.onclick = () => {
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
