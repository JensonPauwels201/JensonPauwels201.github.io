const setup = () => {
    let btnWijzig = document.getElementById("btnChangeText");

    btnWijzig.addEventListener("click", changeText);
};

window.addEventListener("load", setup);

const changeText = () =>{
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}