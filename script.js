//UI
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);

const header = document.createElement("div");
header.classList.add("header");
header.textContent = "Tic-Tac-Toe"
mainContainer.appendChild(header);

const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container");
gameContainer.textContent = "game here";
mainContainer.appendChild(gameContainer);


//game
const gameBoard = (() => {
    let gameBoardArray = [
        "x",
        "o",
        "x",
        "o",
        "x",
        "o",
        "1",
        "2",
        "3"
    ];
    test = () => console.log("HELLO");
    let xyz = 3;
    return { gameBoardArray, test, xyz };
})();

const playerFactory = (mark) => {
    mark;
    return { mark };
};

const playerOne = playerFactory("x");
const playerTwo = playerFactory("o");