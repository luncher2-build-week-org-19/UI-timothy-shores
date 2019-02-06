// const navbar = document.getElementsByClassName('navbar')[0];
// window.onscroll = function () {
//     // "use strict";
//     if (document.body.scrollTop >= 200) {
//         navbar.classList.add("nav-colored");
//         navbar.classList.remove("nav-transparent");
//     }
//     else {
//         navbar.classList.add("nav-transparent");
//         navbar.classList.remove("nav-colored");
//     }
// };

const navBar = document.getElementsByClassName("navbar")[0];
const h1 = document.getElementsByTagName("h1")[0];
const search = document.getElementById("search");
const hamburger = document.getElementById("hamburger");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navBar.classList.add("nav-colored");
        h1.style.color = "black";
        search.style.color = "black";
        hamburger.style.color = "black";
    } else {
        navBar.classList.remove("nav-colored");
        h1.style.color = "white";
        search.style.color = "white";
        hamburger.style.color = "white";
    }
}