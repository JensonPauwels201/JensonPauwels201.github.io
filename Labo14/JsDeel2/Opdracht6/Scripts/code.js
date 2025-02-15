const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
};

window.addEventListener("load", setup);

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput")
    let text = txtInput.value;
    txtOutput.innerHTML = text;
}