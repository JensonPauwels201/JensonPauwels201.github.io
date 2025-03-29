let importantData={
    CARD_COUNT: 12,
    flippedCards: [],
    timeoutId: 0
}

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", startGame);
};

const startGame = () => {
    document.getElementById("btnStart").classList.toggle("hidden");
    let field = document.getElementById("cardField")
    for (let i =0; i < importantData.CARD_COUNT; ++i){
        let newCard = document.createElement("img");
        newCard.setAttribute("src", "images/CardBack.jpg");
        newCard.setAttribute("alt", "card");
        newCard.setAttribute("data-card-num", i.toString());
        newCard.setAttribute("data-card-img-num", setCard());
        field.appendChild(newCard);
        field.lastChild.addEventListener("click", () => flipCards(newCard));
    }
}

const setCard = () => {
    let cardList = document.getElementById("cardField").children;

    if (cardList.length < 2){
        return Math.round((Math.random() * 5)+1).toString();
    }
    else{
        let newCardNum = Math.round((Math.random() * 5) +1);
        let numCount = 0;
        let numIsNew = false
        while (!numIsNew){ //This will continue to run until the number it has does not appear twice or more
            for (let i=0; i < cardList.length; ++i){
                if (newCardNum.toString() === cardList[i].getAttribute("data-card-img-num")){
                    ++numCount;
                }
            }
            if (numCount < 2){
                numIsNew = true;
            }
            else{
                numCount = 0;
                ++newCardNum;
                if (newCardNum > 6){
                    newCardNum = 1
                }
            }
        }
        return  newCardNum.toString();
    }
}

const flipCards = (card) => {
    if (importantData.flippedCards.length !== 2 && card.src.slice(-12) === "CardBack.jpg"){
        let imgNum = card.getAttribute("data-card-img-num");
        card.src = "images/kaart" + imgNum +".png";
        importantData.flippedCards.push(card.getAttribute("data-card-num"));
    }
    if (importantData.flippedCards.length === 2){
        compareCards(card.getAttribute("data-card-img-num"));
    }
}

const compareCards = (cardImage) =>{
    let field = document.getElementById("cardField");
    let allCards = field.children;
    if (allCards[importantData.flippedCards[0]].getAttribute("data-card-img-num") === allCards[importantData.flippedCards[1]].getAttribute("data-card-img-num")){
        allCards[importantData.flippedCards[0]].setAttribute("class", "correct");
        allCards[importantData.flippedCards[1]].setAttribute("class", "correct");
        timeoutId = setTimeout(() => removeCards(allCards, cardImage), 1000);
    }
    else{
        allCards[importantData.flippedCards[0]].setAttribute("class", "incorrect");
        allCards[importantData.flippedCards[1]].setAttribute("class", "incorrect");
        timeoutId = setTimeout(() => unflipCards(allCards),1000);
    }
}

const unflipCards = (allCards) =>{
    allCards[parseInt(importantData.flippedCards[0])].src = "images/CardBack.jpg";
    allCards[parseInt(importantData.flippedCards[1])].src = "images/CardBack.jpg";
    allCards[importantData.flippedCards[0]].classList.toggle("incorrect");
    allCards[importantData.flippedCards[1]].classList.toggle("incorrect");
    importantData.flippedCards = [];
}

const removeCards = (allCards, cardImage) => {
    let field = document.getElementById("cardField");
    for (let i=0; i<allCards.length; ++i){
        if (allCards[i].getAttribute("data-card-img-num") === cardImage){
            field.removeChild(allCards[i]);
            removeCards(allCards, cardImage);
        }
    }
    for (let i=0; i<allCards.length; ++i){
        allCards[i].setAttribute("data-card-num", i.toString());
    }
    importantData.flippedCards = [];
    if (allCards.length === 0){
        document.getElementById("btnStart").classList.toggle("hidden");
    }
}

window.addEventListener("load", setup);