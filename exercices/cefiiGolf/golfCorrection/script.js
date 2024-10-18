window.onload = function() {

    //menu burger
let iconBurger = document.querySelector('.btnMenu');
let menuBurger = document.querySelector('.menu');

iconBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('subMenuBurger');
});

//menu fixe au scroll
const menu = document.querySelector('#principal');
const hauteurMenu = 150;
console.log(hauteurMenu);
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= hauteurMenu) {
    menu.classList.add('fixe');
  } else {
    menu.classList.remove('fixe');
  }
});

//filtrage des colonnes de prix
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));

// Fonction de comparaison pour trier les lignes par ordre croissant
const compareAscending = (rowA, rowB) => {
  const priceA = parseFloat(rowA.cells[1].textContent.replace('$', ''));
  const priceB = parseFloat(rowB.cells[1].textContent.replace('$', ''));
  return priceA - priceB;
};

// Fonction de comparaison pour trier les lignes par ordre décroissant
const compareDescending = (rowA, rowB) => {
  const priceA = parseFloat(rowA.cells[1].textContent.replace('$', ''));
  const priceB = parseFloat(rowB.cells[1].textContent.replace('$', ''));
  return priceB - priceA;
};

// Fonction pour trier et réorganiser les lignes dans le tableau
const sortTable = (comparator) => {
  rows.sort(comparator);
  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
};

// Ajouter des événements de clic pour trier les lignes en fonction des prix
table.querySelector('thead').addEventListener('click', event => {
  const th = event.target;
  if (th.tagName === 'TH') {
    const isAscending = th.classList.contains('ascending');
    const comparator = isAscending ? compareDescending : compareAscending;
    sortTable(comparator);
    th.classList.toggle('ascending', !isAscending);
    th.classList.toggle('descending', isAscending);
  }
});
};
