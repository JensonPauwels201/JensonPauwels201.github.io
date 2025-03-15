const setup = () => {
    let userInput ="";
    let gemeenten = [];
    while (userInput !== "stop"){
        userInput = prompt("Geef een gemeente op");
        if (userInput !== "stop"){
            gemeenten.push(userInput);
        }
    }
    gemeenten.sort();
    for (let i = 0; i < gemeenten.length; ++i){
        document.getElementById("userInput").innerHTML += "<option value=\"" + gemeenten[i] + "\">";
    }
};

window.addEventListener("load", setup);