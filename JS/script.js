{
    const welcome = () => {

        console.log("Hello!")
        console.log("Miłego dnia;)")
    }

    const toggleHeaderColor = () => {
        const header = document.querySelector(".header__title");
        const theName = document.querySelector(".header__theName");

        header.classList.toggle("header__newClass");
        theName.innerText = header.classList.contains("header__newClass") ? "biały" : "czerwony";
    }

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", toggleHeaderColor);

        welcome();
    }

    init();
}