const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
};

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCount=0;
	if(typeof(Storage)=="undefined") {
	  txtResult.innerHTML="Sorry, uw browser ondersteunt geen web storage...";
	} else {
		clickCount=sessionStorage.getItem("demo.clickCount");
		if (clickCount) {
			clickCount=parseInt(clickCount)+1;
		} else {
			clickCount=1;
			
		}
		sessionStorage.setItem("demo.clickCount", clickCount.toString());
		txtResult.innerHTML="De waarde van de teller is " + clickCount;
	}
};

window.addEventListener("load", setup);

//Blijft de data behouden als je het tabblad sluit en opnieuw opent? Als je shift+crtl+t doet wel, anders niet
//Blijft de data behouden als je de pagina opnieuw laadt? Ja
//Wordt de data door verschillende tabbladen gedeeld? Neen
//Denk je dat een andere pagina aan de data als je ze in hetzelfde tabblad opent? Neen