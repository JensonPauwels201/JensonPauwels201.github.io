const setup = () => {
    getTrigrams("Onoorbaar");
};

const getTrigrams = (word) =>{
    for (let i=0; i <word.length-2; ++i){
        console.log(word.substring(i,i+3));
    }
}

window.addEventListener("load", setup);