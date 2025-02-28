const setup = () => {
    let buttons = document.getElementsByClassName("btn");

    buttons[0].addEventListener("click",() => toggleClass(0));
    buttons[1].addEventListener("click",() => toggleClass(1));
    buttons[2].addEventListener("click",() => toggleClass(2));
};

const toggleClass = (btnNum) => {
    let buttons = document.getElementsByClassName("btn");
    buttons[btnNum].classList.toggle("btnAlt")
}

window.addEventListener("load", setup);