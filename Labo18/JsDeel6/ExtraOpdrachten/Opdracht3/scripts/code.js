const setup = () => {
    document.getElementById("btnNewParagraph").addEventListener("click", newParagraph);
};

const newParagraph = () => {
    let paragraph = document.createElement("p");
    paragraph.textContent = "The paragraph takeover";
    document.getElementById("myDiv").appendChild(paragraph);
}

window.addEventListener("load", setup);