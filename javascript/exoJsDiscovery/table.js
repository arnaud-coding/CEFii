const nom = "Charly"
console.log(nom)

let a = 12
a++
console.log(a)

let e = 48
console.log(e % 2)

let age = 29
if (age < 18) {
  console.log("vous etes mineur")
} else {
  console.log("vous avez " + age + " ans")

  // 2e méthode plus rapide que la concaténation
  console.log(`vous avez ${age} ans`)
}

// faire une boucle pour afficher les 100 premiers nombres
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    document.write("<b>" + i + "</b><br>")
  } else {
    document.write(i + "<br>")
  }
}

let client = ["Michel", "Durand", "Angers"]
document.write(
  "Bonjour " +
    client[0] +
    " " +
    client[1] +
    ", vous habitez à " +
    client[2] +
    "<br>"
)

// afficher les 100 premiers nombres pairs
let cpt = 1
let i = 2
while (cpt <= 100) {
  if (i % 2 == 0) {
    document.write("<b>" + i + "</b><br>")
    cpt++
  }
  i++
}

// demander à l'utilisateur de saisir le nombre de chiffres pairs qu'il veut voir
// let nb = prompt("saisissez le nombre de chiffres pairs que vous voulez voir")
// let cpt = 1
// let i = prompt("saisissez un nombre duquel partir")

// while (cpt <= nb) {
//   if (i % 2 == 0) {
//     document.write("<b>" + i + "</b><br>")
//     cpt++
//   }
//   i++
// }
