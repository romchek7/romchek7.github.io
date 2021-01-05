var menuBTN = document.getElementById("burger");

var navMenu = document.getElementById("phoneMenu");
var aText = document.getElementById("aPhoneID");

function showNavMenu() {
    if (navMenu.style.display == "none") {
        navMenu.style.display = "flex";
        aText.style.color = "#E60F0F";
    }
    else {
        navMenu.style.display = "none";
        aText.style.color = "";
    }
}
menuBTN.addEventListener("click", showNavMenu);