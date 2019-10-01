// Your code goes here
// Fun Bus Logo change size
//1--------------(mouseenter)-------------------
const logoSize = document.querySelector(".logo-heading");

logoSize.addEventListener("mouseenter" , () => {
 logoSize.style.transform = "scale(1.3)";
 logoSize.style.trasition = "all 0.4s"
})

//2---------------(mouseleave)------------------
logoSize.addEventListener("mouseleave" , () => {
    logoSize.style.transform = "scale(1)";
    logoSize.style.trasition = "all 0.4s"
   })


//Background Change Color
// 3------------------(click)----------------
const bodyBackground = document.querySelector("body");

bodyBackground.addEventListener("click", () => {
    bodyBackground.style.backgroundColor = "#fde250"
})

//NavBackground Change Color
// 3------------------(click)----------------
const navBackground = document.querySelector(".main-navigation");

navBackground.addEventListener("click", (event) => {
    navBackground.style.backgroundColor = "#98cc9e";
    event.stopPropagation();
})

//Nav Links change color
// 3------------------(click)----------------
document.querySelectorAll(".nav-link").forEach(e => {
    e.addEventListener("click" , () => {
        e.style.color = "white";
    })
})

//add Hidden Background
// 4------------------(dblclick)----------------
const hiddenBackground = document.querySelector("body");
//Change Font Color
const fontColorChange = document.querySelector(".content-pick")

hiddenBackground.addEventListener("dblclick", () => {
    hiddenBackground.style.background = "url('img/confetti.jpg')";
    hiddenBackground.style.backgroundSize = "cover";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    fontColorChange.style.color = "white";
})

//Change Image
//5--------------------(resize)--------------
const changeImg = document.querySelector(".img-fluid");

window.addEventListener("resize", () => {
    changeImg.src = "img/partybus.jpg"
})

//Change Image
//6--------------------(mouseover)----------------
const maneuverOn = document.querySelector(".south-seas");

maneuverOn.addEventListener("mouseover", () => {
    maneuver.src = "img/mountain-lake.jpg"
})

//Chnage Image back
//7----------------------(mouseout)-------------------
