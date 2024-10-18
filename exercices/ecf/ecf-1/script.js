console.log("hello");

// vérification de l'adresse mail renseignée pour l'inscription à la newsletter

const button = document.querySelector('#validate')
const email = document.querySelector('#email')
const rappel = document.getElementById('emailWarning')
const hiddenLi = document.getElementsByClassName('hideLi')[0]

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

button.addEventListener("click", () => {
    // affichage d'un message demandant de remplir le champ d'email si non rempli
    if (email.value === '') {
        hiddenLi.style.display = 'block'
        rappel.textContent = "Veuillez renseigner votre email"
    }
    // vérification que l'adresse email soit valide et affichage d'un message avertissant de son invalidité
    else if (isValidEmail(email.value) === false) {
        hiddenLi.style.display = 'block'
        rappel.textContent = 'Adresse email invalide'
    }
    // avertit l'utilisateur que l'adresse mail a bien été reçue
    else {
        hiddenLi.style.display = 'block'
        rappel.textContent = 'Adresse email envoyée avec succès'
    }
})

// ---------------------------

// retour au haut de page lors du click sur l'icone de flèche vers le haut

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
});

// ----------------------------

// fermeture de la Popup des Cookies

const popup = document.querySelector("#popup")
console.log("popup:", popup)
const closeButtons = document.querySelectorAll(".closeCookies")
console.log("closeButtons:", closeButtons)

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "none"
    })
});