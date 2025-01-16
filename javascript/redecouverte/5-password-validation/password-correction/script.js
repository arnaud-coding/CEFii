// Configuration des règles de validation
const exigences = {
    longueur: { regex: /.{8,}/, element: 'length' },
    majuscule: { regex: /[A-Z]/, element: 'uppercase' },
    minuscule: { regex: /[a-z]/, element: 'lowercase' },
    chiffre: { regex: /[0-9]/, element: 'number' },
    special: { regex: /[!@#$%^&*(),.?":{}|<>]/, element: 'special' }
};

// Sélection des éléments du DOM
const barreProgression = document.querySelector('.progress-bar');
const champMotDePasse = document.getElementById('password');

// Fonction principale de validation
function validerMotDePasse(motDePasse) {
    let score = 0;

    // Vérifie chaque exigence
    for (const [cle, exigence] of Object.entries(exigences)) {
        const element = document.getElementById(exigence.element);
        const estValide = exigence.regex.test(motDePasse);

        // Met à jour le statut visuel de l'exigence
        // Si estValide est true : La classe 'valid' sera ajoutée à l'élément
        // Si estValide est false : La classe 'valid' sera retirée de l'élément
        element.classList.toggle('valid', estValide);
        if (estValide) score++;
    }

    return score;
}

// Mise à jour de la barre de progression
function mettreAJourBarreProgression(score) {
    const pourcentage = (score / Object.keys(exigences).length) * 100;
    barreProgression.style.width = `${pourcentage}%`;

    // Définit la couleur selon le score
    if (pourcentage <= 40) {
        barreProgression.style.backgroundColor = 'var(--weak)';
    } else if (pourcentage <= 80) {
        barreProgression.style.backgroundColor = 'var(--medium)';
    } else {
        barreProgression.style.backgroundColor = 'var(--strong)';
    }
}

// Gestionnaire d'événement pour la saisie
function gererSaisieMotDePasse(evenement) {
    const score = validerMotDePasse(evenement.target.value);
    mettreAJourBarreProgression(score);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    champMotDePasse.addEventListener('input', gererSaisieMotDePasse);
});