const setup = () => {
    findAndReplace("Gisteren zat de jongen op de stoep en at de helft van de appel");
};

const findAndReplace = (sentence) => {
    sentence = sentence.toLowerCase();
    let firstIndexOfWord = 0;
    let lastIndexOfWord = sentence.indexOf(' ');
    let newSentence = "";

    while (lastIndexOfWord !== -1){
        if (sentence.substring(firstIndexOfWord,lastIndexOfWord) === "de"){
            newSentence += "het ";
        }
        else if (sentence.substring(firstIndexOfWord,lastIndexOfWord) === "het"){
            newSentence += "de ";
        }
        else{
            newSentence += sentence.substring(firstIndexOfWord,lastIndexOfWord) + " ";
        }
        firstIndexOfWord = lastIndexOfWord+1;
        lastIndexOfWord = sentence.indexOf(' ', firstIndexOfWord);
    }

    lastIndexOfWord = sentence.length;
    if (sentence.substring(firstIndexOfWord,lastIndexOfWord) === "de"){
        newSentence += "het ";
    }
    else if (sentence.substring(firstIndexOfWord,lastIndexOfWord) === "het"){
        newSentence += "de ";
    }
    else{
        newSentence += sentence.substring(firstIndexOfWord,lastIndexOfWord);
    }

    console.log(newSentence);
}

window.addEventListener("load", setup);