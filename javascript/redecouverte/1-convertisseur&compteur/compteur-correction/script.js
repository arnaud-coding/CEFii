// Sélection des éléments
const countDisplay = document.getElementById('count');
const clickButton = document.getElementById('clickBtn');
const resetButton = document.getElementById('resetBtn');

// État du compteur
let count = 0;

// Animation du compteur
function animateCount() {
    countDisplay.classList.add('bump');
    setTimeout(() => countDisplay.classList.remove('bump'), 200);
}

// Mise à jour de l'affichage
function updateDisplay() {
    countDisplay.textContent = count;
    animateCount();
}

// Gestionnaire du clic
function handleClick() {
    count++;
    updateDisplay();
}

// Réinitialisation du compteur
function resetCount() {
    count = 0;
    updateDisplay();
}

// Initialisation
function init() {
    clickButton.addEventListener('click', handleClick);
    resetButton.addEventListener('click', resetCount);

    // Easter egg : double-clic ajoute 2 points
    clickButton.addEventListener('dblclick', (e) => {
        e.preventDefault(); // Évite la sélection du texte
        count += 2;
        updateDisplay();
    });
}

// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', init);