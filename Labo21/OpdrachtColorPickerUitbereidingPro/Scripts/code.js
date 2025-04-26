let swatchColors = [];

const setup = () => {
    let colorSliders = document.getElementsByClassName("slider");
    document.getElementById("btnSaveSwatch").addEventListener("click", saveSwatch);

    for(let i =0; i < colorSliders.length; ++i){
        colorSliders[i].addEventListener("change", update);
        colorSliders[i].addEventListener("input", update);
    }

    if (localStorage.getItem("colorSliderRed") === null && localStorage.getItem("colorSliderGreen") === null && localStorage.getItem("colorSliderBlue") === null){
        colorSliders[0].value = 128;
        colorSliders[1].value = 255;
        colorSliders[2].value = 128;
    }
    else{
        colorSliders[0].value = parseInt(localStorage.getItem("colorSliderRed"));
        colorSliders[1].value = parseInt(localStorage.getItem("colorSliderGreen"));
        colorSliders[2].value = parseInt(localStorage.getItem("colorSliderBlue"));
    }
    if (localStorage.getItem("savedSwatches") !== null){
        swatchColors = JSON.parse(localStorage.getItem("savedSwatches"));
    }


    update();
    generateSwatches();
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

    localStorage.setItem("colorSliderRed", colorSliders[0].value.toString());
    localStorage.setItem("colorSliderGreen", colorSliders[1].value.toString());
    localStorage.setItem("colorSliderBlue", colorSliders[2].value.toString());
}

const saveSwatch = () => {
    let newSwatch =  document.createElement("div");
    let colorValues = document.getElementsByClassName("slider");
    newSwatch.classList.add("savedSwatch");
    newSwatch.style.backgroundColor = "rgb(" + colorValues[0].value + ", " + colorValues[1].value + ", " + colorValues[2].value + ")";
    newSwatch.setAttribute("data-index-num", document.getElementById("divSwatches").children.length.toString());
    newSwatch.setAttribute("data-color-red-value", colorValues[0].value.toString());
    newSwatch.setAttribute("data-color-green-value", colorValues[1].value.toString());
    newSwatch.setAttribute("data-color-blue-value", colorValues[2].value.toString());
    newSwatch.addEventListener("click", () => applySwatch(newSwatch));
    swatchColors.push("rgb(" + colorValues[0].value + ", " + colorValues[1].value + ", " + colorValues[2].value + ")");
    localStorage.setItem("savedSwatches", JSON.stringify(swatchColors));
    let closeButton = document.createElement("input");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("value", "x");
    closeButton.addEventListener("click", () => deleteSwatch(newSwatch));
    newSwatch.appendChild(closeButton);
    document.getElementById("divSwatches").appendChild(newSwatch);
}

const deleteSwatch = (swatch) => {
    let swatchesList = document.getElementById("divSwatches");
    swatchesList.removeChild(swatchesList.children[parseInt(swatch.getAttribute("data-index-num"))]);
    swatchColors.splice(parseInt(swatch.getAttribute("data-index-num")),1);
    localStorage.setItem("savedSwatches", JSON.stringify(swatchColors));

    for (let i=0; i<swatchesList.children.length; ++i){
        swatchesList.children[i].setAttribute("data-index-num", i.toString());
    }
}

const applySwatch = (swatch) =>{
    document.getElementById("colorBlock").style.backgroundColor = "rgb(" + swatch.getAttribute("data-color-red-value") + "," + swatch.getAttribute("data-color-green-value") + "," + swatch.getAttribute("data-color-blue-value") + ")";
    let sliders = document.getElementsByClassName("slider");
    sliders[0].value = parseInt(swatch.getAttribute("data-color-red-value"));
    sliders[1].value = parseInt(swatch.getAttribute("data-color-green-value"));
    sliders[2].value = parseInt(swatch.getAttribute("data-color-blue-value"));

    localStorage.setItem("colorSliderRed", sliders[0].value.toString());
    localStorage.setItem("colorSliderGreen", sliders[1].value.toString());
    localStorage.setItem("colorSliderBlue", sliders[2].value.toString());
}

const generateSwatches =() => {
    for (let i=0; i<swatchColors.length; ++i){
        let newSwatch = document.createElement("div");
        newSwatch.classList.add("savedSwatch");
        newSwatch.style.backgroundColor = swatchColors[i];
        newSwatch.setAttribute("data-index-num", i.toString())
        let colorVals = swatchColors[i].split(','); //For retrieving individual RGB values
        newSwatch.setAttribute("data-color-red-value", colorVals[0].slice(4)); //Slices off rgb(
        newSwatch.setAttribute("data-color-green-value", colorVals[1]);
        newSwatch.setAttribute("data-color-blue-value", colorVals[2].slice(0,-1)) //Slices off )
        newSwatch.addEventListener("click", () => applySwatch(newSwatch));
        let closeButton = document.createElement("input");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("value", "x");
        closeButton.addEventListener("click", () => deleteSwatch(newSwatch));
        newSwatch.appendChild(closeButton);
        document.getElementById("divSwatches").appendChild(newSwatch);
    }
}

window.addEventListener("load", setup);