const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", validateForm);
};

const validateForm = () => {
    resetForm();
    let errorBoxes = document.getElementsByClassName("errorMessage");
    if (document.getElementById("txtVoornaam").value.length > 30){
        errorBoxes[0].textContent = "Max 30 karakters"
    }
    if (document.getElementById("txtAchternaam").value.length > 50){
        errorBoxes[1].textContent = "Max 50 karakters";
    }
    if ( document.getElementById("txtAchternaam").value === ""){
        errorBoxes[1].textContent = "Verplicht veld";
    }
    if (parseInt(document.getElementById("txtAantalKinderen").value) < 0){
        errorBoxes[4].textContent = "Is geen positief getal";
    }
    if (isNumber(parseInt(document.getElementById("txtAantalKinderen").value))){
        errorBoxes[4].textContent = "Is geen positief getal";
    }
    if (parseInt(document.getElementById("txtAantalKinderen").value) > 99){
        errorBoxes[4].textContent = "Is te vruchtbaar";
    }

    if (errorBoxes[0].textContent === "" && errorBoxes[1].textContent === "" && errorBoxes[2].textContent === "" && errorBoxes[3].textContent === "" && errorBoxes[4].textContent === ""){
        window.alert("Proficiat");
    }
}

const resetForm = () =>{
    let errorBoxes = document.getElementsByClassName("errorMessage");
    for (let i = 0; i < errorBoxes.length; ++i){
        errorBoxes[i].textContent = "";
    }
}

const isNumber = (text) =>{
    return isNaN(text);
}

window.addEventListener("load", setup);