// Constantes
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const lengthRegex = /^.{8,}$/;
const minRegex = /(?=.*[a-z])/;
const majRegex = /(?=.*[A-Z])/;
const numberRegex = /(?=.*\d)/;
const specialCharRegex = /(?=.*[\W_])/;

const inputPassword = document.querySelector('#password');
const bsProgressBar = document.querySelector('.progress-bar');

const xmarkLength = document.querySelector('#xmarkLength');
const checkLength = document.querySelector('#checkLength');
const xmarkMaj = document.querySelector('#xmarkMaj');
const checkMaj = document.querySelector('#checkMaj');
const xmarkMin = document.querySelector('#xmarkMin');
const checkMin = document.querySelector('#checkMin');
const xmarkNumber = document.querySelector('#xmarkNumber');
const checkNumber = document.querySelector('#checkNumber');
const xmarkSpecialChar = document.querySelector('#xmarkSpecialChar');
const checkSpecialChar = document.querySelector('#checkSpecialChar');

// Masquer icone de validation
const checkIcons = document.querySelectorAll('.fa-check');
checkIcons.forEach(checkIcon => {
    checkIcon.style.display = "none";
});

function validateOne(regex, password, check, xmark) {

    if (regex.exec(password)) {
        check.style.display = "inline-block";
        xmark.style.display = "none";
        return 1;
    } else {
        check.style.display = "none";
        xmark.style.display = "inline-block";
        return 0;
    }
}

function validateAll(password) {

    let checkCount = 0;

    // Validation de la longueur
    checkCount += validateOne(lengthRegex, password, checkLength, xmarkLength);

    // Présence d'une majuscule
    checkCount += validateOne(majRegex, password, checkMaj, xmarkMaj);

    // Présence d'une minuscule
    checkCount += validateOne(minRegex, password, checkMin, xmarkMin);

    // Présence d'une chiffre
    checkCount += validateOne(numberRegex, password, checkNumber, xmarkNumber);

    // Présence d'un caractère spécial
    checkCount += validateOne(specialCharRegex, password, checkSpecialChar, xmarkSpecialChar);


    const percent = `${checkCount * 20}%`;
    bsProgressBar.style.width = percent;

    bsProgressBar.classList.remove('bg-success', 'bg-warning', 'bg-danger');

    switch (checkCount) {
        case 0:
        case 1:
        case 2:
            //red
            bsProgressBar.classList.add('bg-danger');
            break;

        case 5:
            // green
            bsProgressBar.classList.add('bg-success');
            break;

        default:
            // orange
            bsProgressBar.classList.add('bg-warning');
            break;
    }
};

// Ajout du gestionnaire d'évènement pour l'input
inputPassword.addEventListener("input", (event) => {
    const password = event.target.value;
    validateAll(password);
});
