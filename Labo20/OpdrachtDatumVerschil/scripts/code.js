const setup = () => {
    let dateNow = new Date();
    let dateBirth = new Date(2004,11,21);
    console.log(Math.floor((dateNow-dateBirth)/1000/60/60/24));
};

window.addEventListener("load", setup);