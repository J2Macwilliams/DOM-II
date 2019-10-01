// Your code goes here
//1------------------------------------
const logoSize = document.querySelector(".logo-heading");

logoSize.addEventListener("mouseenter" , () => {
 logoSize.style.transform = "scale(1.3)";
 logoSize.style.trasition = "all 0.4s"
})

logoSize.addEventListener("mouseleave" , () => {
    logoSize.style.transform = "scale(1)";
    logoSize.style.trasition = "all 0.4s"
   })

//2------------------------------------

const bodyBackground = document.querySelector("body");

bodyBackground.addEventListener("click", () => {
    bodyBackground.style.backgroundColor = "#fde250"
})

const navBackground = document.querySelector(".main-navigation");

navBackground.addEventListener("click", () => {
    navBackground.style.backgroundColor = "#98cc9e"
})

document.querySelectorAll(".nav-link").forEach(e => {
    e.addEventListener("click" , () => {
        e.style.color = "white";
    })
})

const hiddenBackground = document.querySelector("body");

const fontColorChange = document.querySelector(".content-pick")

const bottomFontTitle = document.querySelectorAll(".content-pick h4")

const bottomFontContent = document.querySelectorAll(".content-pick p")

hiddenBackground.addEventListener("dblclick", () => {
    hiddenBackground.style.background = "url('img/confetti.jpg')";
    hiddenBackground.style.backgroundSize = "cover";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    fontColorChange.style.color = "white";
   

})



