// passage au "dark mode" ou "light mode" lors du click sur l'icone

const darkModeBtn = document.getElementById("darkMode")
const links = document.getElementsByClassName("black")
const squareItems = document.getElementsByClassName("squareItems")
const container = document.getElementById("container")
var isDarkMode = false

darkModeBtn.addEventListener("click", () => {

    if (!isDarkMode) {
        container.style.backgroundColor = '#2c2c2c'
        container.style.color = 'white'

        for (let index = 0; index < links.length; index++) {
            links[index].classList.add("white")
        }

        for (let index = 0; index < squareItems.length; index++) {
            squareItems[index].classList.add("squareColorDark")
        }
    } else {
        container.style.backgroundColor = 'white'
        container.style.color = '#2c2c2c'

        for (let index = 0; index < links.length; index++) {
            links[index].classList.remove("white")
        }

        for (let index = 0; index < squareItems.length; index++) {
            squareItems[index].classList.remove("squareColorDark")
        }
    }
    isDarkMode = !isDarkMode;
})


// Burger menu

const burgerIcon = document.getElementById("burgerIcon")
const navMenu = document.getElementById("navMenu")
var isDisplayMenu = false

burgerIcon.addEventListener("click", () => {

    if (!isDisplayMenu) {
        navMenu.style.display = "flex"
    } else {
        navMenu.style.display = "none"
    }
    isDisplayMenu = !isDisplayMenu
})