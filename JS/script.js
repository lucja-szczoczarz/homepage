console.log("Hello!")
console.log("Miłego dnia;)")

let button = document.querySelector(".js-button");
let header = document.querySelector(".header__title");
let newClass = document.querySelector(".header__newClass");
let theName = document.querySelector(".header__theName");

button.addEventListener("click", () => {
    header.classList.toggle("header__newClass");

    theName.innerText = header.classList.contains("header__newClass") ? "biały" : "czerwony";
})