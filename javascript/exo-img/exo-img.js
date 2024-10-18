// @ts-nocheck

// alterner l'affichage des 2 photos de Voldemort lors du click sur celles-ci

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const title = document.getElementById("avadaKedavra")
img2.style = "display: none"
title.style = "display: none ; color: green"

img1.addEventListener("click", () => {
    img1.style.display = "none"
    img2.style.display = "inline-block"
    title.style.display = "inline-block"
})

img2.addEventListener("click", () => {
    img2.style.display = "none"
    img1.style.display = "inline-block"
    title.style.display = "none"
})
