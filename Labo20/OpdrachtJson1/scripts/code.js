const setup = () => {
    let student ={
        voornaam: "Jenson",
        achternaam: "Pauwels",
        Geboortedatum: new Date(2004,11,21),
        adres:{
            straat: "Pioenstraat 12",
            postcode: "2310",
            gemeente: "Rijkevorsel"
        }
    }

    console.log(JSON.stringify(student));
};

window.addEventListener("load", setup);