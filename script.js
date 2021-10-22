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
mainContainer.appendChild(gameContainer);


//game
const gameBoard = (() => {
    let gameBoardArray = [
        "o",
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

const renderGameField = (() => {
    for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
        let gameContainerDiv = document.createElement("div");
        gameContainerDiv.classList.add("game-container-div");
        gameContainerDiv.setAttribute("data-number", i);
        gameContainerDiv.textContent = gameBoard.gameBoardArray[i];
        gameContainer.appendChild(gameContainerDiv);
    }
})();

const playerOne = playerFactory("x");
const playerTwo = playerFactory("o");

const game = (() => {
    let gameContainerDivs = document.querySelectorAll(".game-container-div");
    gameContainerDivs.forEach(div => {
        div.addEventListener("click", (e) => {
            div.classList.toggle("red");
            div.textContent = playerOne.mark;
            gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerOne.mark;
        });
    });
    const resetGame = () => {
        gameContainerDivs.forEach(div => {
            div.textContent = "";
            gameBoard.gameBoardArray[div.getAttribute("data-number")] = "";
        })
    };
    return { resetGame };
})();