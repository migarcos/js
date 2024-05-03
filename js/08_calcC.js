const values = document.querySelector("#pantalla");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => 
    btn.onclick = () =>{
        if (btn.id === "=") {
            values.value = eval(values.value);
        } else {
            values.value += btn.id;
        }
    });