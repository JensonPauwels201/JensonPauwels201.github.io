let global ={
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 3000,

    score: 0,
    timeoutId: 0
}

const setup = () => {
    document.getElementById("target").addEventListener("click", moveImage);
    document.getElementById("btnStart").addEventListener("click", startGame);
};

const startGame = () => {
    timeoutId = setInterval(updateImage, global.MOVE_DELAY);
    document.getElementById("btnStart").classList.toggle("hidden");

    let sprite = document.getElementById("target");
    let playField = document.getElementById("playField");
    let borderLeft = playField.clientWidth - sprite.offsetWidth;
    let borderTop = playField.clientHeight - sprite.offsetHeight;

    sprite.style.left = Math.floor(Math.random()*borderLeft).toString() + "px";
    sprite.style.top = Math.floor(Math.random()*borderTop).toString() + "px";
    updateImage();
}

const updateImage = () =>{
    let sprite = document.getElementById("target");
    sprite.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4).toString() + global.IMAGE_PATH_SUFFIX;
}

const moveImage = () => {
    let sprite = document.getElementById("target");
    let playField = document.getElementById("playField");
    let borderLeft = playField.clientWidth - sprite.offsetWidth;
    let borderTop = playField.clientHeight - sprite.offsetHeight;

    sprite.style.left = Math.floor(Math.random()*borderLeft).toString() + "px";
    sprite.style.top = Math.floor(Math.random()*borderTop).toString() + "px";

    let path = sprite.src.slice(-12)
    if (path !== global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX){
        ++global.score;
    }
    else {
        window.alert("GAME OVER");
        document.getElementById("score").textContent = "score: 0";
        global.score = 0;
        clearInterval(timeoutId);
        document.getElementById("btnStart").classList.toggle("hidden");
    }
    document.getElementById("score").textContent = "score: " + global.score.toString();
}

window.addEventListener("load", setup);


