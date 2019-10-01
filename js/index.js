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






// document.querySelectorAll(".card-title").forEach(el => {
//     el.addEventListener("click", () => {
//       el.style.color= "#e62739";
//     })
//   })