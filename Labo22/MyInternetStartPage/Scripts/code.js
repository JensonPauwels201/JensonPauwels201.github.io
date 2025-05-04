let global ={
    searchHistory: []
}

const setup = () => {
    document.getElementById("searchButton").addEventListener("click", search)

    if (localStorage.getItem("browserHistory") !== null){
        generateCards();
    }
};

const search = () =>{
    let searchCommand = document.getElementById("searchbar").value;
    let command = searchCommand.substring(0, searchCommand.indexOf(' '));
    let hyperlink = "";
    let isCorrectLink = true;
    let searchTitle

    switch (command){
        case "/g":
            hyperlink = "https://www.google.com/search?q=";
            searchTitle = "Google";
            break;
        case "/y":
            hyperlink = "https://www.youtube.com/results?search_query=";
            searchTitle = "Youtube";
            break;
        case "/x":
            hyperlink ="https://x.com/hashtag/";
            searchTitle = "X";
            break;
        case "/i":
            hyperlink = "https://www.instagram.com/explore/tags/";
            searchTitle = "Instagram";
            break;
        default:
            if (command[0] === '/'){
                window.alert("Unknown command prefix");
            }
            else {
                window.alert("Invalid command");
            }
            isCorrectLink = false;
    }

    let firstIndexOfWord = searchCommand.indexOf(' ') + 1;
    let lastIndexOfWord = searchCommand.indexOf(' ', firstIndexOfWord);

    while (lastIndexOfWord !== -1) {
        hyperlink += searchCommand.substring(firstIndexOfWord, lastIndexOfWord);

        firstIndexOfWord = lastIndexOfWord +1;
        lastIndexOfWord = searchCommand.indexOf(' ', firstIndexOfWord)
        hyperlink += '+';
    }
    hyperlink += searchCommand.substring(firstIndexOfWord, searchCommand.length);

    if (isCorrectLink){
        let search = {
            title: searchTitle,
            link: hyperlink,
            text: searchCommand.substring(2, searchCommand.length)
        };
        global.searchHistory.push(search);
        createCard(search);
        localStorage.setItem("browserHistory", JSON.stringify(global.searchHistory))
        window.open(hyperlink);
    }
}

const  createCard = (searchInfo) => {
    let cardRows = document.getElementById("grid").children;
    let usableRow = -1;
    for (let i=0; i<cardRows.length; ++i){
        if (cardRows[i].children.length < 3){
            usableRow = i;
        }
    }

    if (usableRow === -1){
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        document.getElementById("grid").appendChild(newRow);
        usableRow = document.getElementById("grid").children.length-1;
    }
    let newCard = document.createElement("div");
    newCard.setAttribute("data-history-num", (((usableRow)*3) + (cardRows[usableRow].children.length+1)-1).toString()) //Assigns a number to every card, starting at 0
    newCard.classList.add("col-3");
    newCard.classList.add("card");
    switch (searchInfo.title){
        case "Google":
            newCard.classList.add("google");
            break;
        case "Youtube":
            newCard.classList.add("youtube");
            break;
        case "X":
            newCard.classList.add("twitter");
            break;
        case "Instagram":
            newCard.classList.add("instagram");
            break;
    }
    let title = document.createElement("h3");
    title.textContent = searchInfo.title;
    newCard.appendChild(title);
    let searchText = document.createElement("p");
    searchText.textContent = searchInfo.text;
    newCard.appendChild(searchText);
    let searchButton = document.createElement("input");
    searchButton.setAttribute("type", "button");
    searchButton.setAttribute("value", "GO!")
    searchButton.classList.add("btn");
    searchButton.classList.add("btn-primary");
    searchButton.classList.add("historySearch");
    searchButton.addEventListener("click", () => historySearch(newCard));
    newCard.appendChild(searchButton);
    cardRows[usableRow].appendChild(newCard);
}

const historySearch = (card) =>{
    let cardnum = parseInt(card.getAttribute("data-history-num"))
    let hyperlink = global.searchHistory[cardnum].link
    window.open(hyperlink);
}

const generateCards = () =>{
    global.searchHistory = JSON.parse(localStorage.getItem("browserHistory"));
    let rows = document.getElementById("grid").children;
    let usableRow = 0;
    for (let i=0; i<global.searchHistory.length; ++i){
        if (i%3 === 0){
            let newRow = document.createElement("div");
            newRow.classList.add("row");
            document.getElementById("grid").appendChild(newRow);
            usableRow = document.getElementById("grid").children.length -1;
        }
        let newCard = document.createElement("div");
        newCard.setAttribute("data-history-num", i.toString());
        newCard.classList.add("col-3");
        newCard.classList.add("card");
        switch (global.searchHistory[i].title){
            case "Google":
                newCard.classList.add("google");
                break;
            case "Youtube":
                newCard.classList.add("youtube");
                break;
            case "X":
                newCard.classList.add("twitter");
                break;
            case "Instagram":
                newCard.classList.add("instagram");
                break;
        }
        let cardTitle = document.createElement("h3");
        cardTitle.innerText = global.searchHistory[i].title;
        newCard.appendChild(cardTitle);
        let cardText = document.createElement("p");
        cardText.innerText = global.searchHistory[i].text;
        newCard.appendChild(cardText);
        let searchButton = document.createElement("input");
        searchButton.setAttribute("type", "button");
        searchButton.setAttribute("value", "GO!")
        searchButton.classList.add("btn");
        searchButton.classList.add("btn-primary");
        searchButton.classList.add("historySearch");
        searchButton.addEventListener("click", () => historySearch(newCard));
        newCard.appendChild(searchButton);
        rows[usableRow].appendChild(newCard);
    }
}

window.addEventListener("load", setup);