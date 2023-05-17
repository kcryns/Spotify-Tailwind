const toggle = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");
const ddark = document.querySelector(".dark-background");


toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
    ddark.classList.toggle("show");
});


const dropp = document.querySelectorAll(".links__item h4");
dropp.forEach((dropps) => {
    dropps.addEventListener("click", () => {
        dropps.nextElementSibling.classList.toggle("open");
        dropps.querySelector("i").classList.toggle("open");
    })
})