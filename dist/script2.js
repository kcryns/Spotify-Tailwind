const tOpen = document.querySelector(".dev__menu");
const slidee = document.querySelector(".slidee");

tOpen.addEventListener("click", () => {
    slidee.classList.toggle("show");
});

const comm = document.querySelector("ul .comm");
const commDrop = document.querySelector(".community__drop");

// comm.addEventListener("mouseenter", () => {
//     commDrop.classList.toggle("drop");
//     commDrop.addEventListener("mouseleave", () => {
//     commDrop.classList.remove("drop");
//     })
// })
