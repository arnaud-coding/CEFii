// Constantes
const colors = [
    { name: 'Rouge', value: '#E74C3C' },
    { name: 'Vert', value: '#2ECC71' },
    { name: 'Bleu', value: '#3498DB' },
    { name: 'Jaune', value: '#F1C40F' },
    { name: 'Violet', value: '#9B59B6' },
    { name: 'Orange', value: '#E67E22' },
    { name: 'Rose', value: '#E84393' },
    { name: 'Turquoise', value: '#1ABC9C' }
];

const btnChange = document.querySelector('#btnChange');
console.log("btnChange:", btnChange);
const colorName = document.querySelector('#colorName');
console.log("colorName:", colorName);

// Variables
let currentColorIndex = -1;

// Fonction principale de changement de couleur
function changeColor() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * colors.length);
    } while (newIndex === currentColorIndex);

    // Mettre à jour l'index actuel
    currentColorIndex = newIndex;

    //  Récupération de la couleur et mise à jour de l'interface
    const actualColor = colors[newIndex];
    // console.log(newIndex, colors[newIndex]);

    document.body.style.backgroundColor = actualColor.value;
    colorName.textContent = actualColor.name;
    colorName.style.color = actualColor.value;
    btnChange.style.backgroundColor = actualColor.value;
    btnChange.style.color = "white";
};

function init() {
    changeColor();

    // Change la couleur lors du clic sur le bouton
    btnChange.addEventListener('click', changeColor);
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', init);
