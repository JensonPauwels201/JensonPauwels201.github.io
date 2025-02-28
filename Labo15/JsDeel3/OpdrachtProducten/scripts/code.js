const setup = () => {
    let btnCalculate = document.getElementById("btnCalculate");
    let txtTotals = document.getElementsByClassName("subtotal")

    for (let counter=0; counter < txtTotals.length; ++counter){
        txtTotals[counter].innerHTML = "0.00 Eur";
    }
    document.getElementById("txtTotalPrice").innerHTML = "0.00 Eur";

    btnCalculate.addEventListener("click", calculate)
};

const calculate = () => {
    let prices = document.getElementsByClassName("price");
    let amounts = document.getElementsByClassName("txtAmount");
    let btw = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("subtotal");
    let totalPrice =0.0;

    for (let counter =0; counter < prices.length; ++counter){
        totalPrice += parseFloat(amounts[counter].value) * (parseFloat(prices[counter].textContent) + parseFloat(btw[counter].textContent)/100 * parseFloat(prices[counter].textContent));
        subtotals[counter].innerHTML = (parseFloat(amounts[counter].value) * (parseFloat(prices[counter].textContent) + parseFloat(btw[counter].textContent)/100 * parseFloat(prices[counter].textContent))).toFixed(2).toString() + " Eur";
    }

    document.getElementById("txtTotalPrice").innerHTML = totalPrice.toFixed(2).toString() + " Eur";
};

window.addEventListener("load", setup);