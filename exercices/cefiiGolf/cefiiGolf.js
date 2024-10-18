// vérification de l'adresse mail renseignée pour l'inscription à la newsletter

const buttonValidate = document.getElementById('validate')
const email = document.getElementById('mailInput')
const rappel = document.getElementById('emailWarning')

/**
 * vérifie qu'une string correspond à une adresse mail valide
 * @param {string} email
 * @returns {boolean} true si email valide / false si invalide
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ajout d'un gestionnaire d'évènement au bouton "Envoyer"
buttonValidate.addEventListener("click", () => {
    // affichage d'un message demandant de remplir le champ d'email si non rempli
    if (email.value === '') {
        rappel.textContent = "Veuillez renseigner votre email"
    }
    // vérification que l'adresse email soit valide et affichage d'un message avertissant de son invalidité
    else if (isValidEmail(email.value) === false) {
        rappel.textContent = 'adresse email invalide'
    }
    // avertit l'utilisateur que l'adresse mail a bien été reçue
    else {
        rappel.textContent = 'adresse email envoyée avec succès'
    }
})


// passage au "dark mode" ou "light mode" lors du click sur l'icone

const darkModeBtn = document.getElementById("darkMode")
const links = document.getElementsByClassName("black")
const squareItems = document.getElementsByClassName("squareItems")
const container = document.getElementById("container")
var isDarkMode = false

darkModeBtn.addEventListener("click", () => {

    if (!isDarkMode) {
        container.style.backgroundColor = '#2c2c2c'
        container.style.color = 'white'

        for (let index = 0; index < links.length; index++) {
            links[index].classList.add("white")
        }

        for (let index = 0; index < squareItems.length; index++) {
            squareItems[index].classList.add("squareColorDark")
        }
    } else {
        container.style.backgroundColor = 'white'
        container.style.color = '#2c2c2c'

        for (let index = 0; index < links.length; index++) {
            links[index].classList.remove("white")
        }

        for (let index = 0; index < squareItems.length; index++) {
            squareItems[index].classList.remove("squareColorDark")
        }
    }
    isDarkMode = !isDarkMode;
})


// Burger menu

const burgerIcon = document.getElementById("burgerIcon")
const navMenu = document.getElementById("navMenu")
var isDisplayMenu = false

burgerIcon.addEventListener("click", () => {

    if (!isDisplayMenu) {
        navMenu.style.display = "flex"
    } else {
        navMenu.style.display = "none"
    }
    isDisplayMenu = !isDisplayMenu
})