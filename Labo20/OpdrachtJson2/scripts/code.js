const setup = () => {
    let JsonString = '{"voornaam":"Jenson","achternaam":"Pauwels","Geboortedatum":"2004-12-20T23:00:00.000Z","adres":{"straat":"Pioenstraat 12","postcode":"2310","gemeente":"Rijkevorsel"}}';
    let student = JSON.parse(JsonString);
    console.log(student.voornaam);
};

window.addEventListener("load", setup);