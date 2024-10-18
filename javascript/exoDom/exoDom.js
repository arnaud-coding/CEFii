// ;(() => {
// ====================================
// Accéder aux éléments du DOM
// ====================================

let title = document.getElementById("title")
console.log("title:", title)

let paragraph = document.getElementsByClassName("description") // getElementsByClassName retourne un tableau d'éléments ("HTMLCollection")
console.log(paragraph)

let line = document.getElementsByTagName("li") // getElementsByTagName retourne un tableau d'éléments ("HTMLCollection")
console.log(line)
console.log(line[0])

let nameInput = document.getElementsByName("userName")
console.log(nameInput)

// ----------------------------------------
// querrySelector() et querrySelectorAll()
// ----------------------------------------
// ces méthodes sont très puissantes car elles permettent de sélectionner n'importe quel sélecteur CSS

title = document.querySelector("#title") // querySelector() attend qu'on lui passe le sélecteur CSS en argument ===> ne renvoie pas une HTMLCollection
console.log(title)

paragraph = document.querySelectorAll(".description")
console.log(paragraph)

// ------------------------
// innerHTML - textContent
// ------------------------
// permet d'accéder au contenu HTML d'une balise

title = document.getElementById("title").innerHTML
console.log(title);

paragraph = document.querySelector(".description").textContent
console.log(paragraph);

paragraph = document.querySelector(".description").innerHTML
console.log(paragraph);

// ====================================
// Modifier le contenu du DOM
// ====================================

title = document.getElementById("title").innerHTML = "Javascript Exercice"

paragraph = document.querySelector(".description")
paragraph.innerHTML = "<strong>" + paragraph.textContent + "</strong>"

// sélection de tous les <p> ayant la class "description"
paragraph = document.querySelectorAll(".description") // on pourrait aussi sélectionner tous les <p> du DOM en écrivant : querySelectorAll("p")
console.log(paragraph);

// mettre tous ces <p> en gras dans l'HTML
// for (let i = 0; i < paragraph.length; i++) {
//   paragraph[i].innerHTML =
//     "<strong>" + paragraph[i].textContent + "</strong>"
// }

// Même résultat mais avec la boucle forEach (plus rapide ici)
paragraph.forEach(p => {
  p.innerHTML = "<strong>" + p.textContent + "</strong>"
})

// -------------------------
// Modidfier les attributs
// -------------------------

// Ici, on sélectionne uniquement le <input> qui a l'attribut name = userName   ==> plus précis
nameInput = document.getElementsByName("userName")
console.log(nameInput)
for (let i = 0; i < nameInput.length; i++) {
  nameInput[i].innerHTML = nameInput[i].placeholder = "Enter your firstname";
}

// 2 méthodes qui se valent:

// Ici, on sélectionne tous les <input> du DOM
document.querySelector("input").setAttribute("placeholder", "Firstname")
document.querySelector("input").placeholder = "Your firstname"

// -------------------------
// Modidfier le style
// -------------------------


document.querySelector("h1").style.color = "red";
document.querySelector("body").style.backgroundColor = "lightgreen"

let button = document.querySelector("button");
button.style.backgroundColor = "blue"
button.style.color = "yellow"
button.style.borderRadius = "0.4rem"
button.style.width = "10rem"
button.style.height = "3rem"
document.querySelector("button").style.fontSize = "1.5rem"


paragraph = document.querySelectorAll(".description");
console.log(paragraph);
for (let i = 0; i < 2; i++) {
  paragraph[i].style = "color: blue ; font-size: 20px ; font-style: italic"  // permet de modifier plusieurs propriétés CSS
}

// ====================================
// Ajout d'évènements
// ====================================

// ajout d'un évènement au click du bouton qui va déclencher une boite d'alerte
document.getElementById("submitBtn").addEventListener("click", () => {
  alert("cliqué !")
})

// })()
