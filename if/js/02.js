let selection = document.querySelector("select");
let paragraph = document.querySelector("p");

selection.addEventListener("change", setWeather);

function setWeather() {
    let weather = selection.value;

    if (weather === "soleado") {
        paragraph.textContent = "Vamo a la Playa";
    } else if (weather === "lluvioso") {
        paragraph.textContent = "Tarde de Pelis";
    } else {
        paragraph.textContent = "No planeado";
    }
}