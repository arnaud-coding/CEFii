const button = document.getElementById("btn")
const form = document.querySelector("#form")


// const lastName = document.getElementById("lastName")
// const firstName = document.getElementById("firstName")
// const paragraph = document.getElementById("bonjour")

// button.addEventListener("click", () => {

//     if (lastName.value === "" || firstName.value === "") {
//         alert("remplir les champs du form")
//     } else {
//         paragraph.textContent = "Bonjour " + firstName.value + " " + lastName.value
//     }
// })

// -------------------

button.addEventListener("click", () => {

    console.log(form.reportValidity());
})
