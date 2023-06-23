{
    const welcome = () => {
        console.log("Hello!")
        console.log("Miłego dnia;)")
    }

    const toggleHeaderColor = () => {
        const header = document.querySelector(".js-title");
        const theName = document.querySelector(".js-themeName");

        header.classList.toggle("js-newClass");
        theName.innerText = header.classList.contains("js-newClass") ? "biały" : "czerwony";
    }

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", toggleHeaderColor);

        welcome();
    }

    init();
}