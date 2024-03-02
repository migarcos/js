/*
https://www.w3schools.com/jsref/dom_obj_event.asp
*/

const fromUsr = document.getElementById("intro");
const toUsr = document.getElementById("output");

const fromUsr2 = document.getElementById("in2");
const toUsr2 = document.getElementById("out2");
let btn = document.getElementById("submit");

// let entrada = prompt("Escribe un número");

// document.getElementById("intro").value = parseInt(fromUsr);
let salida;

function doThis(vr, salida) {
    if (vr == '') {    
        document.getElementById(salida).value = '';
    } else {
        document.getElementById(salida).value = parseInt(vr) ** 2;
    }
}

function operation() {
    let valor = document.getElementById("intro").value;
    salida = "output";
    doThis(valor, salida);
}
fromUsr.addEventListener("input", operation);

function operation2() {
    let valor = document.getElementById("in2").value;
    salida = "out2";
    doThis(valor, salida);
}

btn.addEventListener("click", operation2);

// output.addEventListener("click", () => {
//     let valor = document.getElementById("intro").value;
//     document.getElementById("output").value = parseInt(valor) * 3;
// });

