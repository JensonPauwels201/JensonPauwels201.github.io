const setup = () => {
    let btnApplySpaces = document.getElementById("btnApplySpaces");

    btnApplySpaces.addEventListener("click", addSpaces)
};

const addSpaces = () => {
    let text = document.getElementById("txtInput").value;
    console.log(text.split("").join(' '));
};

window.addEventListener("load", setup);