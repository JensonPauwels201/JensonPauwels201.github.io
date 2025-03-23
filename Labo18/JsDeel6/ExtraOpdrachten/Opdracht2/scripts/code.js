const setup = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i =0; i < listItems.length; ++i){
        listItems[i].classList.add("listItem")
    }

    let newImg = document.createElement("img");
    newImg.setAttribute("src", "Images/CvFoto.jpg");
    newImg.setAttribute("alt", "Image of me");
    document.getElementsByTagName("body")[0].appendChild(newImg);
};

const updatePage = () => {

}

window.addEventListener("load", setup);