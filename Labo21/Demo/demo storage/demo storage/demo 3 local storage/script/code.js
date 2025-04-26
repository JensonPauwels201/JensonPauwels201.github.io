const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
}

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCount=0;
	if(typeof(Storage)=="undefined") {
	  txtResult.innerHTML="Sorry, uw browser ondersteunt geen web storage...";
	} else {
		clickCount=localStorage.getItem("demo.clickCount");
		if (clickCount) {
			clickCount=parseInt(clickCount)+1;
		} else {
			clickCount=1;
			
		}
		localStorage.setItem("demo.clickCount", clickCount.toString());
		txtResult.innerHTML="De waarde van de teller is " + clickCount;
	}
}
window.addEventListener("load", setup);

//Blijft de data behouden als je het tabblad sluit en de pagina opnieuw opent? Ja
//Blijft de data behouden als je de pagina herlaadt? Ja
//Blijft de data behouden als je de browser afsluit, opnieuw start en de pagina weer opent? Ja
//Blijft de data behouden als je de pagina in een andere browser opent? Ja
//Wordt de data gedeeld door verschillende tabbladen als je de pagina meermaals opent? Ja
//Denk je dat een andere pagina (andere file of url) aan de data geraakt? Ja