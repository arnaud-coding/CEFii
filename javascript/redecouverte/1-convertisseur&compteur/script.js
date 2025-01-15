// -------------------------------
// Portée des variables - calcul de prix TTC
// -------------------------------

/*
const TAUX_TVA = 20;

// fonction utilisant une variable locale
function calculPrixTTC(prixHT) {
    let montantTVA = (prixHT * TAUX_TVA) / 100;
    let prixTTC = montantTVA + prixHT;
    return prixTTC;
}

// Exemple d'utilisation
console.log(`Prix TTC pour 100€ HT : ${calculPrixTTC(100)}€`);
console.log(`Le taux de TVA est de : ${TAUX_TVA}%`);
*/

// -------------------------------
// Types de variables - parseInt(), parseFloat(), isNan() ...
// -------------------------------

/*
// Exemples d'utilisation parseInt et parseFloat
const nombreTexte = prompt('Choisissez un nombre entier');
const nombreDecimalTexte = prompt('Choisissez un nombre décimal');

// conversion en nombre entier avec parseInt
let nombreEntier = parseInt(nombreTexte);
console.log(`Conversion en nombre entier : "${nombreTexte}" ${nombreEntier}`);

// conversion en nombre décimal avec parseFloat
let nombreDecimalRep = nombreDecimalTexte.replace(",", "."); // parseFloat() ne fonctionne pas avec un décimal écrit avec virgule
let nombreDecimal = parseFloat(nombreDecimalRep);
console.log(`Conversion en décimal : "${nombreDecimalTexte}" ${nombreDecimal}`);

// Conversion avec base spécifique
let nombreBinaire = parseFloat("1010", 2);
console.log(`Conversion binaire en décimal : "1010" ${nombreBinaire}`);
*/

// -------------------------------
// EXERCICE 1 : Convertisseur Euro-Dollar
// -------------------------------

// Constantes
const TAUX_CONVERSION = 1.10

// Sélection des éléments du DOM
const inputValue = document.querySelector("#inputValue");
const result = document.querySelector("#result");

// Fonction de conversion
function convertEurosToDollars(valueInEuro) {
    if (valueInEuro === null || valueInEuro === undefined || isNaN(valueInEuro)) {
        return 0;
    } else {
        return valueInEuro * TAUX_CONVERSION;
    }
}

// Procédure d'initialisation
function initialisation() {

    // Ajouter le gestionnaire d'évènements
    inputValue.addEventListener("input", (event) => {
        // mise à jour du résultat quand l'évènement est déclenché
        const euros = parseFloat(event.target.value);
        const dollars = convertEurosToDollars(euros);
        result.textContent = dollars.toFixed(2);
    });

    // initialiser les valeurs
    inputValue.value = "";
    result.textContent = "0.00";
}

// point d'entrée
document.addEventListener("DOMContentLoaded", initialisation());

// -------------------------------
// EXERCICE 2 : Compteur de clicks
// -------------------------------

let count = 0;
const counterBtn = document.querySelector("#counterBtn");
const clickNumber = document.querySelector("#clickNumber");
const reset = document.querySelector("#reset");
console.log(reset);


function Initialisation() {

    counterBtn.addEventListener("click", () => {
        count++;
        clickNumber.textContent = `You clicked ${count} time${count > 1 ? "s" : ""}!`;
    });

    reset.addEventListener("click", () => {
        count = 0;
        clickNumber.textContent = count;
    })

    clickNumber.textContent = count;
}


document.addEventListener("DOMContentLoaded", Initialisation());