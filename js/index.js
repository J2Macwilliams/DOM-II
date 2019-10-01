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


