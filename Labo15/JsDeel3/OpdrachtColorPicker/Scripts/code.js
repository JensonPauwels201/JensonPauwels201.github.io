const setup = () => {
    let colorSliders = document.getElementsByClassName("slider");

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

window.addEventListener("load", setup);