const setup = () => {
    let paragraph = document.querySelectorAll('p');
    paragraph[0].textContent = "Good job!";
};

window.addEventListener("load", setup);