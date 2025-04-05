let personen = [];

const bewaarBewerktePersoon = () => {
    let lstLijst = document.getElementById("lstPersonen");
    let errors = document.getElementsByClassName("errorMessage");
    let hasErrors = false;
    valideer();
    for (let i=0; i<errors.length;++i){
        if (errors[i].textContent !== ""){
            hasErrors=true;
        }
    }
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    if (!hasErrors){
        let nieuwePersoon={
            voornaam: document.getElementById("txtVoornaam").value,
            achternaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        }
        personen.push(JSON.stringify(nieuwePersoon));
        lstLijst.innerHTML += '<option value="' + nieuwePersoon.voornaam + '" id="' + (personen.length-1).toString() + '">'+ nieuwePersoon.voornaam + " " + nieuwePersoon.achternaam + '</option>';
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const updateForm = () => {
    let personenKeuzes = document.getElementById("lstPersonen").children;
    let keuze=0
    for (let i=0; i<personenKeuzes.length; ++i){
        if (personenKeuzes[i].selected){
            keuze = parseInt(personenKeuzes[i].getAttribute("id"));
        }
    }

    let geselecteerdePersoon = JSON.parse(personen[keuze]);

    document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
    document.getElementById("txtFamilienaam").value = geselecteerdePersoon.achternaam;
    document.getElementById("txtGeboorteDatum").value = geselecteerdePersoon.Geboortedatum;
    document.getElementById("txtEmail").value = geselecteerdePersoon.email;
    document.getElementById("txtAantalKinderen").value = geselecteerdePersoon.aantalKinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", updateForm);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);