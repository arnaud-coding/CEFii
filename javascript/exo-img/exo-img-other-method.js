// ajout d'un évènement au click sur la <img>
image.addEventListener("click", () => {

    // récupération de la <img> dans une variable
    const image = document.getElementById("image")

    // SI la variable image a un attribut alt="voldemort1"
    if (image.alt === "voldemort1") {

        // affichage de la grande photo
        image.setAttribute("src", "../../img/voldemort-big-photo_720.jpg")
        image.setAttribute("alt", "voldemort2")
        affichage();
    } else { // SINON (si la variable image n'a pas l'attribut alt="voldemort1")

        // affichage de la petite photo
        image.setAttribute("src", "../../img/lordvoldemort-1-_360.png")
        image.setAttribute("alt", "voldemort1")
        desaffichage()
    }
})

function affichage() {
    // récupération de la <div> contenant juste l'image
    const message = document.querySelector(".contenu");

    // création d'un <h1> dans la <div>
    const titre = document.createElement("h1");

    // ajout de texte et de style au <h1>
    titre.textContent = "Avada Kedavra !!!"
    titre.style = "display: inline-block ; color : lightgreen"

    // on ajoute à la <div> un enfant : le <h1>
    message.appendChild(titre);
    titre.setAttribute("id", "montitre")
}

// enlève la variable titre contenant le <h1>
function desaffichage() {
    const titre = document.getElementById("montitre");
    titre.remove()
}