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

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add("reset-button");
mainContainer.appendChild(resetButton);

const popupWin = document.createElement("div");
popupWin.classList.add("popup", "red", "none");
mainContainer.appendChild(popupWin);

//game
const gameBoard = (() => {
    let gameBoardArray = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
    return { gameBoardArray };
})();

const playerFactory = (name, mark) => {
    name;
    mark;
    return { name, mark };
};

const playerOne = playerFactory("Vasya", "x");
const playerTwo = playerFactory("Petya", "o");
const playerAI = playerFactory("Mr. Robot", "o");

const renderGameField = (() => {
    for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
        let gameContainerDiv = document.createElement("div");
        gameContainerDiv.classList.add("game-field");
        gameContainerDiv.setAttribute("data-number", i);
        gameContainerDiv.textContent = gameBoard.gameBoardArray[i];
        gameContainer.appendChild(gameContainerDiv);
    }
})();

const game = (() => {
    let gameModeAI;
    let playerTurn = 0;
    let player = "";
    let gameContainerDivs = document.querySelectorAll(".game-field");

    const vsFriend = () => {
        gameContainerDivs.forEach(div => {
            div.addEventListener("click", (e) => {
                if ((div.textContent === "") && (playerTurn === 0)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerOne.mark;
                    div.textContent = playerOne.mark;
                    playerTurn = 1;
                    player = playerOne.name;
                    checkWin();
                } else if ((div.textContent === "") && (playerTurn === 1)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerTwo.mark;
                    div.textContent = playerTwo.mark;
                    playerTurn = 0;
                    player = playerTwo.name;
                    checkWin();
                } else {
                    return;
                }
            });
        })
    };

    const vsAI = () => {
        gameContainerDivs.forEach(div => {
            div.addEventListener("click", (e) => {
                if ((div.textContent === "") && (playerTurn === 0)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerOne.mark;
                    div.textContent = playerOne.mark;
                    playerTurn = 1;
                    player = playerOne.name;
                    if (!checkWin()) {
                        aiTurn();
                    }
                }
            })
        })
    };

    const checkWin = () => {
        if (((gameBoard.gameBoardArray[0] !== "") && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[1]) && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[2])) ||
            ((gameBoard.gameBoardArray[0] !== "") && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[3]) && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[6])) ||
            ((gameBoard.gameBoardArray[0] !== "") && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[4]) && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[8])) ||
            ((gameBoard.gameBoardArray[1] !== "") && (gameBoard.gameBoardArray[1] === gameBoard.gameBoardArray[4]) && (gameBoard.gameBoardArray[1] === gameBoard.gameBoardArray[7])) ||
            ((gameBoard.gameBoardArray[2] !== "") && (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[5]) && (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[8])) ||
            ((gameBoard.gameBoardArray[3] !== "") && (gameBoard.gameBoardArray[3] === gameBoard.gameBoardArray[4]) && (gameBoard.gameBoardArray[3] === gameBoard.gameBoardArray[5])) ||
            ((gameBoard.gameBoardArray[6] !== "") && (gameBoard.gameBoardArray[6] === gameBoard.gameBoardArray[7]) && (gameBoard.gameBoardArray[6] === gameBoard.gameBoardArray[8])) ||
            ((gameBoard.gameBoardArray[2] !== "") && (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[4]) && (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[6]))) {
            console.log(`${player} wins!`);
            popupWin.textContent = `${player} wins!`;
            popupWin.classList.remove("none");
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
            return true;
        } else if (gameBoard.gameBoardArray.every(elem => elem !== "")) {
            console.log("TIE!");
            popupWin.textContent = "TIE!";
            popupWin.classList.remove("none");
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
            return true;
        } else {
            return;
        }
    }

    const resetGame = () => {
        gameContainerDivs.forEach(div => {
            div.textContent = "";
            gameBoard.gameBoardArray[div.getAttribute("data-number")] = "";
            gameContainer.classList.remove("disabled");
        })
        playerTurn = 0;
        popupWin.classList.add("none");
    };

    const randomDiv = (min, max) => {
        min = Math.ceil(0);
        max = Math.floor(8);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const aiTurn = () => {
        let randomNumber = randomDiv();
        if (gameContainerDivs[randomNumber].textContent !== "") {
            aiTurn();
        } else if ((gameContainerDivs[randomNumber].textContent === "") && (playerTurn === 1)) {
            gameBoard.gameBoardArray[randomNumber] = playerAI.mark;
            gameContainerDivs[randomNumber].textContent = playerAI.mark;
            playerTurn = 0;
            player = playerAI.name;
            checkWin();
        } else {
            return;
        };
    };

    const chooseGameMode = () => {
        if (gameModeAI === 1) {
            vsAI();
        } else {
            vsFriend();
        }
    };
    chooseGameMode();
    return { resetGame };
})();

resetButton.addEventListener("click", game.resetGame);