// ---------------------------------
// BOUCLES
// ---------------------------------

// norme écriture constantes : un nom de constante doit normalement s'écrire en majuscules pour les différencier des variables (pas obligé)
// const BOB = "hello bob"
// console.log(BOB)

// let toto = 43
// if (true) {
//   toto = 44
//   console.log(toto)
// }

// A savoir : on n'est pas obligé d'appeler "window" (depuis certaines mises à jour de JS)
// écrire un message d'alerte :
// window.alert("There will be questions for you")

// boite de saisie (peu utilisé) :
// window.prompt("what's your age?")

// boite de confirmation :
// window.confirm("are you sure?")

// ---------------------------------------
// Exercice
// ---------

// let age = prompt("what's your age?")
// if (age < 12) {
//   console.log("you are a children, " + age + " years")
// } else if (age >= 12 && age < 18) {
//   console.log("you are an teenager, " + age + " years")
// } else {
//   console.log("you are an adult, " + age + " years")
// }

// -------------------
// Correction
// -----------

// var age = prompt("what's your age?")

// if (age !== null) {
//   var message

//   if (age < 12) {
//     message = "you're a children"
//   } else if (age >= 12 && age < 18) {
//     message = "you're a teenager"
//   } else if (age >= 18) {
//     message = "you're an adult"
//   } else {
//     message = "invalid age"
//   }

//   console.log(message)
// }

// ---------------------------------------
// Exercice - switch/break
// -----------------------

// Exemple d'utilisation de switch/break : POUR TESTER DES EGALITES UNIQUEMENT
// var key = 5
// switch (key) {
//   case 5:
//     console.log("valeur de 5")
//     break
//   case 6:
//     console.log("valeur de 6")
//     break
//   case 7:
//     console.log("valeur de 7")
//     break
//   default:
//     console.log("valeur par défault")
//     break
// }

// -------------------
// Exercice
// ---------

// Consigne: afficher la boite de saisie
// var region = prompt("What's your region number")
// console.log(region)

// region = parseInt(region) // convertir l'entrée en nombre
// console.log(region)

// Consigne: afficher un message en fonction de la region
// switch (region) {
//   case 49:
//     console.log("you live in region Pays de Loire")
//     break
//   case 37:
//     console.log("you live in region Centre")
//     break
//   case 75:
//     console.log("you live in region Ile de France")
//     break
//   case 69:
//     console.log("you live in region Rhônes-Alpes")
//     break
//   default:
//     console.log("Sorry, i don't know your region")
//     break
// }

// --------------------
// Exercice
// ---------

// const str = "The quick brown fox jumps over the lazy dog."

// const words = str.split(" ")
// console.log(words)

// Consigne: afficher les 5 premiers mots de la phrase
// for (let index = 0; index < 5; index++) {
//   console.log(words[index])
// }

// Consigne: afficher les 3 derniers mots
// for (let index = words.length - 3; index < words.length; index++) {
//   console.log(words[index])
// }

// ---------------------------------
// FONCTIONS
// ---------------------------------

// déclaration dle fonction
// function addition(a, b) {
//   var sum = a + b
//   return sum
// }

// exécution de la fonction
// var calcul = addition(5, 3)
// console.log(calcul)

// ---------------
// Exercice

// let userName = prompt("what's your name?")

// function welcome(name) {
//   if (name !== null) {
//     return console.log("hello " + name + ", welcome in our programm!")
//   }
// }
// welcome(userName)

// let phrase = welcome(userName)
// console.log(phrase)

// --------------------------
