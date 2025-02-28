const setup = () => {
    let paragrafen = document.getElementsByClassName("belangrijk");

    paragrafen[0].className = "belangrijk opvallend";
    paragrafen[1].className = "belangrijk opvallend";
};

window.addEventListener("load", setup);