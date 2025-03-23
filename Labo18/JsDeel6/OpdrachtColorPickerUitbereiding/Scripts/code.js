const setup = () => {
    let colorSliders = document.getElementsByClassName("slider");
    document.getElementById("btnSaveSwatch").addEventListener("click", saveSwatch);

    for(let i =0; i < colorSliders.length; ++i){
        colorSliders[i].addEventListener("change", update);
        colorSliders[i].addEventListener("input", update);
    }

    colorSliders[0].value = 128;
    colorSliders[1].value = 255;
    colorSliders[2].value = 128;

    update();
};

const update = () =>{
    let colorSliders = document.getElementsByClassName("slider");
    let colorBlock = document.getElementById("colorBlock");
    let txtRed = document.getElementById("txtRed");
    let txtGreen = document.getElementById("txtGreen");
    let txtBlue = document.getElementById("txtBlue");

    colorBlock.style.backgroundColor = "rgb(" + colorSliders[0].value + ", " + colorSliders[1].value + ", " + colorSliders[2].value + ")";
    txtRed.innerHTML = "Red: " + colorSliders[0].value;
    txtGreen.innerHTML = "Green: " + colorSliders[1].value;
    txtBlue.innerHTML = "Blue: " + colorSliders[2].value;
}

const saveSwatch = () => {
    let newSwatch =  document.createElement("div");
    let colorValues = document.getElementsByClassName("slider");
    document.getElementById("divSwatches").appendChild(newSwatch);
    newSwatch = document.getElementById("divSwatches").lastElementChild;
    newSwatch.classList.add("savedSwatch");
    newSwatch.style.backgroundColor = "rgb(" + colorValues[0].value + ", " + colorValues[1].value + ", " + colorValues[2].value + ")";
    let closeButton = document.createElement("input");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("value", "x");
    closeButton.addEventListener("click", deleteSwatch);
    newSwatch.appendChild(closeButton);
}

const deleteSwatch = () => {
    let swatchesList = document.getElementById("divSwatches");
    swatchesList.removeChild(swatchesList.children[0]);
}

window.addEventListener("load", setup);