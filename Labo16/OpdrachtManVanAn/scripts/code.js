const setup = () => {
    document.getElementById("btnIndexOf").addEventListener("click", countAn);
    document.getElementById("btnLastIndexOf").addEventListener("click", countAnAlt);
};

const countAn = () =>{
    let text = document.getElementById("txtText").textContent.toLowerCase();
    let timesAn = text.indexOf("an");
    document.getElementById("txtOutput").innerHTML = timesAn.toString();

}

const countAnAlt = () =>{
    let text = document.getElementById("txtText").textContent.toLowerCase();
    let timesAn = 0;

}

window.addEventListener("load", setup);