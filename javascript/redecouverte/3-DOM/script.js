const titre = document.getElementById('titre');
console.log(titre);
const container = document.querySelector('#container');
console.log(container);

const liste = document.querySelectorAll('#maListe li'); // récupération des "noeuds" contenus dans #maListe (elle aussi un noeud)
console.log(liste);

liste.forEach(li => {
    console.log(li.textContent);
});

// Modification du contenu d'un texte
const btnModifier = document.querySelector('#btnModifier');
const texte = document.querySelector('#texte');

btnModifier.addEventListener("click", () => {
    texte.textContent = "IT'S A TRAAAP !!!"
})
