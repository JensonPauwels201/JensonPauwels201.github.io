const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
};

window.addEventListener("load", setup);

const substring = () =>{
    let txtInput = document.getElementById("txtInput");
    let txtStartNum = document.getElementById("txtStartNum");
    let txtEndNum = document.getElementById("txtEndNum");
    let txtOutput = document.getElementById("txtOutput");

    let text = txtInput.value;
    txtOutput.innerHTML = ") = " + text.slice(txtStartNum.value, txtEndNum.value);
}