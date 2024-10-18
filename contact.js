const button = document.getElementById("btn")
console.log("button:", button)

const entrepriseName = document.getElementById("entrepriseInput")
console.log("entrepriseName:", entrepriseName)

const lastName = document.getElementById("lastName")
console.log("lastName:", lastName)

const firstName = document.getElementById("firstName")
console.log("firstName:", firstName)

const hello = document.getElementById("hello")
console.log("hello:", hello)


button.addEventListener("click", () => {
  if (entrepriseName.value === "" || lastName.value === "" || firstName.value === "") {
    alert("Veuillez remplir tous les champs")
  } else {
    hello.textContent = "Bonjour " + firstName.value
  }
})