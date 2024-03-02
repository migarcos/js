//  ** Este código hace lo mismo que el que no está comentado **
// document.getElementById("in01").addEventListener("input", () => {
//     let entrada = document.getElementById("in01").value;
//     document.getElementById("out01").value = `${parseInt(entrada) ** 2}`;
// })

const entrada = document.getElementById("in01");

function calcular() {
    let entrada = document.getElementById("in01").value;
    document.getElementById("out01").value = parseInt(entrada) * 9;
}

entrada.addEventListener("input", calcular);

// -------------------------------------------
const entrada2 = document.getElementById("in02");

function calcular2() {
    let entrada = document.getElementById("in02").value;
    document.getElementById("out02").value = parseInt(entrada) * 8;
}

document.getElementById("btn").addEventListener("click", calcular2);