const navBar = document.getElementsByClassName("navbar")[0];
const h1 = document.getElementsByTagName("h1")[0];
const search = document.getElementById("search");
const signIn = document.getElementById("nav-item3");
const donate = document.getElementById("nav-item4");
const discover = document.getElementById("nav-item1A");



window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navBar.style.background = "white";
        h1.style.color = "black";
        search.style.color = "black";
        hamburger.style.color = "black";
        signIn.style.color = "black";
        donate.style.color = "black";
        discover.style.color = "black";
    } else {
        navBar.classList.remove("nav-colored");
        h1.style.color = "white";
        search.style.color = "white";
        hamburger.style.color = "white";
        signIn.style.color = "white";
        donate.style.color = "white";
        discover.style.color = "white";
        navBar.style.background = "none";
    }
}