console.log("hello world");

const patronus = document.getElementById("patronus")
const baguette = document.getElementById("baguette_dumbledore")
const button = document.getElementById("btn")
// déclaration et initialisation d'une variable "degrees" à la valeur 0
let degrees = 0;

button.addEventListener("click", () => {
    document.body.style = "background-color: black"
    patronus.style = "display: block"
    // à chaque click, la valeur de la variable degrees augmente de 15 par rapport à sa valeur précédente
    // degrees += 15;
    degrees = (degrees + 15) % 360
    console.log(degrees);

    // valeur pour la rotation ===> la variable degrees
    baguette.style = `transform: rotate(${degrees}deg)`;
})

setInterval(() => {
    degrees = (degrees + 2) % 360
    baguette.style = `transform: rotate(${degrees}deg)`;
}, 40);
