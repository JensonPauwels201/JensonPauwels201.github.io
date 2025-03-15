const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", showResults);

};

const showResults = () => {
    let radMotherLanguage = document.getElementsByName("moedertaal");
    let lstFavoriteNeighboringCountry = document.getElementById("lstBuurland").options;
    let lstOrders = document.getElementById("lstBestelling").options;
    let OrderedItems = "";
    if (document.getElementById("chkIsRoker").checked === true){
        console.log("Is een roker");
    }
    else{
        console.log("Is geen roker");
    }

    for (let i = 0; i < radMotherLanguage.length; ++i){
        if (radMotherLanguage[i].checked === true){
            console.log("Moedertaal is " + radMotherLanguage[i].value);
        }
    }

    for (let i = 0; i < lstFavoriteNeighboringCountry.length; ++i){
        if (lstFavoriteNeighboringCountry[i].selected === true){
            console.log("Favoriete buurland is " + lstFavoriteNeighboringCountry[i].value);
        }
    }

    for (let i = 0; i < lstOrders.length; ++i){
        if (lstOrders[i].selected === true){
            OrderedItems += lstOrders[i].value + " ";
        }
    }
    console.log("Bestelling bestaat uit " + OrderedItems.trim());

}

window.addEventListener("load", setup);