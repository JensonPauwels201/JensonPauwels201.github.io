let teller=0; // de globale variabele voor onze teller

const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
};

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	teller++;
	txtResult.innerHTML="De waarde van de teller is " + teller;
};

window.addEventListener("load", setup);

//Blijft de data behouden als je de pagina herlaadt? Neen
//Blijft de data behouden als je het tabblad sluit en weer opent? Neen
//Gebruik 2 tabbladen die dezelfde pagina tonen, dezelfde data? Neen