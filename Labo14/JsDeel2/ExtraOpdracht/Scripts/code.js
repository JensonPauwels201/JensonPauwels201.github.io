const setup = () => {
    let result = 0;
    let counter = 1;
    let total = 0;
    let txtVeelvouden = document.getElementById("txtVeelvouden");
    let txtSom = document.getElementById("txtSom");

    while(result <= 1000){
        result = 3*counter;
        total+= result;
        ++counter;
        if (result < 1000){
            txtVeelvouden.innerHTML += "<li>"+result+"</li>";
        }

    }
    result = 0;
    counter = 0;
    while (result <= 1000){
        result = 5*counter;
        total +=result;
        ++counter;
        if (result < 1000){
            txtVeelvouden.innerHTML += "<li>"+result+"</li>";
        }
    }
    txtSom.innerHTML = "De som van alle veelvouden is: " + total.toString();

};

window.addEventListener("load", setup);