const setup = () => {

};

window.addEventListener("load", setup);

const voegNaamToe = (array) =>{
    familieLeden.push(prompt('Geef een naam op'));
}

let familieLeden = ['Jenson', 'Jamie', 'Tom', 'Wendy', 'Maria'];
console.log(familieLeden.length);
console.log(familieLeden[0]);
console.log(familieLeden[2]);
console.log(familieLeden[4]);

voegNaamToe(familieLeden);
console.log(familieLeden.toString());