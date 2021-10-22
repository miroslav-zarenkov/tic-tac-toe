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

const playerOne = playerFactory("x");
const playerTwo = playerFactory("o");

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
    let playerTurn = 0;
    let player = "";
    let gameContainerDivs = document.querySelectorAll(".game-field");
    gameContainerDivs.forEach(div => {
        div.addEventListener("click", (e) => {
            if ((div.textContent === "") && (playerTurn === 0)) {
                gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerOne.mark;
                div.textContent = playerOne.mark;
                playerTurn = 1;
                player = playerOne.mark;
                checkWin();
            } else if ((div.textContent === "") && (playerTurn === 1)) {
                gameBoard.gameBoardArray[div.getAttribute("data-number")] = playerTwo.mark;
                div.textContent = playerTwo.mark;
                playerTurn = 0;
                player = playerTwo.mark;
                checkWin();
            } else {
                return;
            }
        });
    });

    const checkWin = () => {
        if ((gameBoard.gameBoardArray[0] !== "") && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[1]) && (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[2])) {
            console.log(`${player} wins!`);
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
        } else if (gameBoard.gameBoardArray.every(elem => elem !== "")) {
            console.log("TIE!");
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
        }
    }

    const resetGame = () => {
        gameContainerDivs.forEach(div => {
            div.textContent = "";
            gameBoard.gameBoardArray[div.getAttribute("data-number")] = "";
            gameContainer.classList.remove("disabled");
        })
    };
    return { resetGame };
})();