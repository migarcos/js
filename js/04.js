let add = function(num1, num2) {
    return num1 + num2;
}

// let addNumbers = () =>
function addNumbers() {
    let fst = document.getElementById("inOne").value;
    let snd = document.getElementById("inTwo").value;

    if (fst === "" || snd === "") {
        document.getElementById("answer").value = 'No values';
    } else {
        document.getElementById("answer").value = add(parseInt(fst), parseInt(snd));
    }
}

function cleanFunc() {
    document.getElementById("inOne").value = '';
    document.getElementById("inTwo").value = '';
    document.getElementById("answer").value = '';
}

const resp = document.getElementById("makeOperation");
const clean = document.getElementById("limpiar");

resp.addEventListener("click",addNumbers);
clean.addEventListener("click",cleanFunc);