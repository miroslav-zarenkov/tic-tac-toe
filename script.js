const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);

const header = document.createElement("div");
header.classList.add("header");
header.textContent = "Tic-Tac-Toe";
mainContainer.appendChild(header);

const scoreBoard = document.createElement("div");
scoreBoard.classList.add("score-board");
scoreBoard.textContent = "";
mainContainer.appendChild(scoreBoard);

const gameContainer = document.createElement("div");
gameContainer.classList.add("game-container", "none");
mainContainer.appendChild(gameContainer);

const resetButtonsDiv = document.createElement("div");
resetButtonsDiv.classList.add("reset-buttons-div");
mainContainer.appendChild(resetButtonsDiv);

const resetBoardButton = document.createElement("button");
resetBoardButton.textContent = "Reset board";
resetBoardButton.classList.add("reset-button", "none");
resetButtonsDiv.appendChild(resetBoardButton);

const resetGameButton = document.createElement("button");
resetGameButton.textContent = "Reset game";
resetGameButton.classList.add("reset-button", "none");
resetButtonsDiv.appendChild(resetGameButton);

const popupWin = document.createElement("div");
popupWin.classList.add("popup", "none", "popup-win");
mainContainer.appendChild(popupWin);

const popupWinResetDiv = document.createElement("div");
popupWinResetDiv.classList.add("popup-win-reset-div");
popupWin.appendChild(popupWinResetDiv);

const popupWinResetButton = document.createElement("button");
popupWinResetButton.textContent = "Play again!";
popupWinResetDiv.appendChild(popupWinResetButton);

const popupGameMode = document.createElement("div");
popupGameMode.classList.add("popup", "popup-game-mode");
mainContainer.appendChild(popupGameMode);

const popupGameModeContainer = document.createElement("div");
popupGameModeContainer.classList.add("popup-game-mode-container");
popupGameMode.appendChild(popupGameModeContainer);

const popupGameModeHead = document.createElement("div");
popupGameModeHead.textContent = "Choose game mode";
popupGameModeContainer.appendChild(popupGameModeHead);

const popupGameModeFriend = document.createElement("button");
popupGameModeFriend.textContent = "Against Friend";
popupGameModeContainer.appendChild(popupGameModeFriend);

const popupGameModeAI = document.createElement("button");
popupGameModeAI.textContent = "Against AI";
popupGameModeContainer.appendChild(popupGameModeAI);

const popupGameModeFriendSetup = document.createElement("div");
popupGameModeFriendSetup.classList.add("popup", "none");
mainContainer.appendChild(popupGameModeFriendSetup);

const popupGameModeFriendSetupHead = document.createElement("div");
popupGameModeFriendSetupHead.classList.add("grid-head");
popupGameModeFriendSetupHead.textContent = "Game against friend setup";
popupGameModeFriendSetup.appendChild(popupGameModeFriendSetupHead);

const popupGameModeFriendSetupMainOne = document.createElement("div");
popupGameModeFriendSetupMainOne.classList.add("grid-main-1");
popupGameModeFriendSetup.appendChild(popupGameModeFriendSetupMainOne);

const popupGameModeFriendSetupMainTwo = document.createElement("div");
popupGameModeFriendSetupMainTwo.classList.add("grid-main-2");
popupGameModeFriendSetup.appendChild(popupGameModeFriendSetupMainTwo);

const popupGameModeFriendSetupFoot = document.createElement("div");
popupGameModeFriendSetupFoot.classList.add("grid-foot");
popupGameModeFriendSetup.appendChild(popupGameModeFriendSetupFoot);

const popupGameModeFriendSetupParagraphPlayerOne = document.createElement("p");
popupGameModeFriendSetupParagraphPlayerOne.textContent = "Player one name";
popupGameModeFriendSetupMainOne.appendChild(popupGameModeFriendSetupParagraphPlayerOne);

const popupGameModeFriendSetupInputPlayerOne = document.createElement("input");
popupGameModeFriendSetupInputPlayerOne.classList.add("player-one-input");
popupGameModeFriendSetupInputPlayerOne.setAttribute("maxlength", 15);
popupGameModeFriendSetupInputPlayerOne.placeholder = "Player 1 name";
popupGameModeFriendSetupMainOne.appendChild(popupGameModeFriendSetupInputPlayerOne);

const popupGameModeFriendMarksButtonsDivPlayerOne = document.createElement("div");
popupGameModeFriendMarksButtonsDivPlayerOne.classList.add("player-one-marks-div");
popupGameModeFriendSetupMainOne.appendChild(popupGameModeFriendMarksButtonsDivPlayerOne);

const popupGameModeFriendButtonXPlayerOne = document.createElement("button");
popupGameModeFriendButtonXPlayerOne.classList.add("player-one-x-button");
popupGameModeFriendButtonXPlayerOne.textContent = "X";
popupGameModeFriendButtonXPlayerOne.value = "X";
popupGameModeFriendMarksButtonsDivPlayerOne.appendChild(popupGameModeFriendButtonXPlayerOne);

const popupGameModeFriendButtonOPlayerOne = document.createElement("button");
popupGameModeFriendButtonOPlayerOne.classList.add("player-one-o-button");
popupGameModeFriendButtonOPlayerOne.textContent = "O";
popupGameModeFriendButtonOPlayerOne.value = "O";
popupGameModeFriendMarksButtonsDivPlayerOne.appendChild(popupGameModeFriendButtonOPlayerOne);

const popupGameModeFriendSetupParagraphPlayerTwo = document.createElement("p");
popupGameModeFriendSetupParagraphPlayerTwo.textContent = "Player two name";
popupGameModeFriendSetupMainTwo.appendChild(popupGameModeFriendSetupParagraphPlayerTwo);

const popupGameModeFriendSetupInputPlayerTwo = document.createElement("input");
popupGameModeFriendSetupInputPlayerTwo.classList.add("player-two-input");
popupGameModeFriendSetupInputPlayerTwo.placeholder = "Player 2 name";
popupGameModeFriendSetupInputPlayerTwo.setAttribute("maxlength", 15);
popupGameModeFriendSetupMainTwo.appendChild(popupGameModeFriendSetupInputPlayerTwo);

const popupGameModeFriendMarksButtonsDivPlayerTwo = document.createElement("div");
popupGameModeFriendMarksButtonsDivPlayerTwo.classList.add("player-two-marks-div");
popupGameModeFriendSetupMainTwo.appendChild(popupGameModeFriendMarksButtonsDivPlayerTwo);

const popupGameModeFriendButtonXPlayerTwo = document.createElement("button");
popupGameModeFriendButtonXPlayerTwo.classList.add("player-two-x-button");
popupGameModeFriendButtonXPlayerTwo.textContent = "X";
popupGameModeFriendButtonXPlayerTwo.value = "X";
popupGameModeFriendMarksButtonsDivPlayerTwo.appendChild(popupGameModeFriendButtonXPlayerTwo);

const popupGameModeFriendButtonOPlayerTwo = document.createElement("button");
popupGameModeFriendButtonOPlayerTwo.classList.add("player-two-o-button");
popupGameModeFriendButtonOPlayerTwo.textContent = "O";
popupGameModeFriendButtonOPlayerTwo.value = "O";
popupGameModeFriendMarksButtonsDivPlayerTwo.appendChild(popupGameModeFriendButtonOPlayerTwo);

const popupGameModeFriendSetupMarkAlert = document.createElement("div");
popupGameModeFriendSetupMarkAlert.classList.add("frien-mark-alert")
popupGameModeFriendSetupFoot.appendChild(popupGameModeFriendSetupMarkAlert);

const popupGameModeFriendSetupButton = document.createElement("button");
popupGameModeFriendSetupButton.classList.add("submit-two-players");
popupGameModeFriendSetupButton.textContent = "Submit";
popupGameModeFriendSetupFoot.appendChild(popupGameModeFriendSetupButton);

const popupGameModeAISetup = document.createElement("div");
popupGameModeAISetup.classList.add("popup", "none");
mainContainer.appendChild(popupGameModeAISetup);

const popupGameModeAISetupHead = document.createElement("div");
popupGameModeAISetupHead.classList.add("grid-head");
popupGameModeAISetupHead.textContent = "Game against AI setup";
popupGameModeAISetup.appendChild(popupGameModeAISetupHead);

const popupGameModeAISetupMainOne = document.createElement("div");
popupGameModeAISetupMainOne.classList.add("grid-main-1");
popupGameModeAISetup.appendChild(popupGameModeAISetupMainOne);

const popupGameModeAISetupFoot = document.createElement("div");
popupGameModeAISetupFoot.classList.add("grid-foot");
popupGameModeAISetup.appendChild(popupGameModeAISetupFoot);

const popupGameModeAISetupParagraphPlayerOne = document.createElement("p");
popupGameModeAISetupParagraphPlayerOne.textContent = "Player name";
popupGameModeAISetupMainOne.appendChild(popupGameModeAISetupParagraphPlayerOne);

const popupGameModeAISetupInputPlayerOne = document.createElement("input");
popupGameModeAISetupInputPlayerOne.classList.add("player-one-input");
popupGameModeAISetupInputPlayerOne.placeholder = "Player name";
popupGameModeAISetupInputPlayerOne.setAttribute("maxlength", 15);
popupGameModeAISetupMainOne.appendChild(popupGameModeAISetupInputPlayerOne);

const popupGameModeAIButtonXPlayerOne = document.createElement("button");
popupGameModeAIButtonXPlayerOne.classList.add("player-one-x-button");
popupGameModeAIButtonXPlayerOne.textContent = "X";
popupGameModeAIButtonXPlayerOne.value = "X";
popupGameModeAISetupMainOne.appendChild(popupGameModeAIButtonXPlayerOne);

const popupGameModeAIButtonOPlayerOne = document.createElement("button");
popupGameModeAIButtonOPlayerOne.classList.add("player-one-o-button");
popupGameModeAIButtonOPlayerOne.textContent = "O";
popupGameModeAIButtonOPlayerOne.value = "O";
popupGameModeAISetupMainOne.appendChild(popupGameModeAIButtonOPlayerOne);

const popupGameModeAISetupMarkAlert = document.createElement("div");
popupGameModeAISetupFoot.appendChild(popupGameModeAISetupMarkAlert);

const popupGameModeAISetupButton = document.createElement("button");
popupGameModeAISetupButton.classList.add("submit-ai-players");
popupGameModeAISetupButton.textContent = "Submit";
popupGameModeAISetupFoot.appendChild(popupGameModeAISetupButton);

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

    const renderGameField = () => {
        for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
            let gameContainerDiv = document.createElement("div");
            gameContainerDiv.classList.add("game-field");
            gameContainerDiv.setAttribute("data-number", i);
            gameContainerDiv.textContent = gameBoard.gameBoardArray[i];
            gameContainer.appendChild(gameContainerDiv);
        }
    };

    const removeGameField = () => {
        let gameContainer = document.querySelector(".game-container");
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.lastChild);
        }
    };

    return { gameBoardArray, renderGameField, removeGameField };
})();

const playerFactory = (name, mark) => {
    name;
    mark;
    return { name, mark };
};

const game = (() => {
    let playerTurn = 0;
    let player = "";
    let playerOneMark;
    let playerTwoMark;
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let playerAIScore = 0;
    let gameModeAI = 0;
    const playerAI = playerFactory("Mr. Robot", "");

    const vsFriend = () => {
        let gameContainerDivs = document.querySelectorAll(".game-field");
        gameContainerDivs.forEach(div => {
            div.addEventListener("click", (e) => {
                if ((div.textContent === "") && (playerTurn === 0)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = game.submitTwoPlayers().playerOne.mark;
                    div.textContent = game.submitTwoPlayers().playerOne.mark;
                    playerTurn = 1;
                    player = game.submitTwoPlayers().playerOne.name;
                    checkWin();
                } else if ((div.textContent === "") && (playerTurn === 1)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = game.submitTwoPlayers().playerTwo.mark;
                    div.textContent = game.submitTwoPlayers().playerTwo.mark;
                    playerTurn = 0;
                    player = game.submitTwoPlayers().playerTwo.name;
                    checkWin();
                } else {
                    return;
                }
            });
        });
    };

    const vsAI = () => {
        let gameContainerDivs = document.querySelectorAll(".game-field");
        gameContainerDivs.forEach(div => {
            div.addEventListener("click", (e) => {
                if ((div.textContent === "") && (playerTurn === 0)) {
                    gameBoard.gameBoardArray[div.getAttribute("data-number")] = game.submitAIPlayers().playerOne.mark;
                    div.textContent = game.submitAIPlayers().playerOne.mark;
                    playerTurn = 1;
                    player = game.submitAIPlayers().playerOne.name;
                    if (!checkWin()) {
                        aiTurn();
                    }
                }
            });
        });
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
            if (playerTurn === 1) {
                playerOneScore = playerOneScore + 1;
            } else {
                playerTwoScore = playerTwoScore + 1;
                playerAIScore = playerAIScore + 1;
            }
            if (gameModeAI === 1) {
                scoreBoard.textContent = `${popupGameModeAISetupInputPlayerOne.value} is ${playerOneMark}: ${playerOneScore} ${playerAI.name} is ${playerAI.mark}: ${playerAIScore}`;
            } else {
                scoreBoard.textContent = `${popupGameModeFriendSetupInputPlayerOne.value} is ${playerOneMark}: ${playerOneScore} ${popupGameModeFriendSetupInputPlayerTwo.value} is ${playerTwoMark}: ${playerTwoScore}`;
            }
            popupWin.textContent = `${player} won!`;
            popupWin.appendChild(popupWinResetButton);
            popupWin.classList.remove("none");
            popupWin.classList.add("popup-win");
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
            return true;
        } else if (gameBoard.gameBoardArray.every(elem => elem !== "")) {
            popupWin.textContent = "TIE!";
            popupWin.appendChild(popupWinResetButton);
            popupWin.classList.remove("none");
            gameContainer.classList.add("disabled");
            playerTurn = 0;
            player = "";
            return true;
        } else {
            return;
        }
    };

    const resetBoard = () => {
        let gameContainerDivs = document.querySelectorAll(".game-field");
        gameContainerDivs.forEach(div => {
            div.textContent = "";
            gameBoard.gameBoardArray[div.getAttribute("data-number")] = "";
            gameContainer.classList.remove("disabled");
        });
        playerTurn = 0;
        popupWin.classList.add("none");
        popupWin.classList.remove("popup-win");
    };

    const randomDiv = (min, max) => {
        min = Math.ceil(0);
        max = Math.floor(8);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const aiTurn = () => {
        let gameContainerDivs = document.querySelectorAll(".game-field");
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
        }
    };

    const chooseGameModeFriendSetup = () => {
        popupWin.classList.remove("popup-win");
        popupGameModeFriendSetup.classList.remove("none");
        popupGameModeContainer.classList.add("none");
        popupGameMode.classList.add("none");
        popupGameModeFriendSetup.classList.add("friend-game-grid");
        gameBoard.renderGameField();
    };

    const setPlayerOneMarkX = () => {
        playerOneMark = "x";
        playerTwoMark = "o";
        return { playerOneMark, playerTwoMark };
    };

    const setPlayerOneMarkO = () => {
        playerOneMark = "o";
        playerTwoMark = "x";
        return { playerOneMark, playerTwoMark };
    };

    const setPlayerTwoMarkX = () => {
        playerOneMark = "o";
        playerTwoMark = "x";
        return { playerOneMark, playerTwoMark };
    };

    const setPlayerTwoMarkO = () => {
        playerOneMark = "x";
        playerTwoMark = "o";
        return { playerOneMark, playerTwoMark };
    };

    const submitTwoPlayers = () => {
        if ((typeof playerOneMark !== "undefined") || (typeof playerTwoMark !== "undefined")) {
            const playerOne = playerFactory(popupGameModeFriendSetupInputPlayerOne.value, playerOneMark);
            const playerTwo = playerFactory(popupGameModeFriendSetupInputPlayerTwo.value, playerTwoMark);
            if (popupGameModeFriendSetupInputPlayerOne.value == "") {
                popupGameModeFriendSetupInputPlayerOne.value = popupGameModeFriendSetupInputPlayerOne.placeholder;
            }
            if (popupGameModeFriendSetupInputPlayerTwo.value == "") {
                popupGameModeFriendSetupInputPlayerTwo.value = popupGameModeFriendSetupInputPlayerTwo.placeholder;
            }
            popupGameModeFriendSetup.classList.add("none");
            popupGameModeFriendSetup.classList.remove("friend-game-grid");
            gameContainer.classList.remove("none");
            resetBoardButton.classList.remove("none");
            resetGameButton.classList.remove("none");
            popupGameModeFriendSetupMarkAlert.textContent = "";
            scoreBoard.textContent = `${popupGameModeFriendSetupInputPlayerOne.value} is ${playerOneMark}: ${playerOneScore} ${popupGameModeFriendSetupInputPlayerTwo.value} is ${playerTwoMark}: ${playerTwoScore}`;
            gameModeAI = 0;
            vsFriend();
            return { playerOne, playerTwo };
        } else {
            popupGameModeFriendSetupMarkAlert.textContent = "Choose players' marks";
            return;
        }
    };

    const chooseGameModeAISetup = () => {
        popupGameMode.classList.add("none");
        popupGameModeAISetup.classList.remove("none");
        popupGameModeContainer.classList.add("none");
        popupGameModeAISetup.classList.add("ai-game-grid");
        gameBoard.renderGameField();
    };

    const submitAIPlayers = () => {
        if (typeof playerOneMark !== "undefined") {
            const playerOne = playerFactory(popupGameModeAISetupInputPlayerOne.value, playerOneMark);
            if (popupGameModeAISetupInputPlayerOne.value == "") {
                popupGameModeAISetupInputPlayerOne.value = popupGameModeAISetupInputPlayerOne.placeholder;
            }
            if (playerOneMark === "x") {
                playerAI.mark = "o";
            } else {
                playerAI.mark = "x";
            }
            popupGameModeAISetup.classList.add("none");
            popupGameModeAISetup.classList.remove("ai-game-grid");
            gameContainer.classList.remove("none");
            resetBoardButton.classList.remove("none");
            resetGameButton.classList.remove("none");
            popupGameModeAISetupMarkAlert.textContent = "";
            scoreBoard.textContent = `${popupGameModeAISetupInputPlayerOne.value} is ${playerOneMark}: ${playerOneScore} ${playerAI.name} is ${playerAI.mark}: ${playerTwoScore}`;
            gameModeAI = 1;
            vsAI();
            return { playerOne };
        } else {
            popupGameModeAISetupMarkAlert.textContent = "Choose player's mark";
            return;
        }
    };

    const resetGame = () => {
        resetBoard();
        playerOneScore = 0;
        playerTwoScore = 0;
        playerAIScore = 0;
        gameModeAI = 0;
        popupGameMode.classList.remove("none");
        scoreBoard.textContent = "";
        popupGameModeFriendSetupInputPlayerOne.value = "";
        popupGameModeFriendSetupInputPlayerOne.placeholder = "Player 1 name";
        popupGameModeFriendSetupInputPlayerTwo.value = "";
        popupGameModeFriendSetupInputPlayerTwo.placeholder = "Player 2 name";
        popupGameModeAISetupInputPlayerOne.value = "";
        popupGameModeAISetupInputPlayerOne.placeholder = "Player name";
        playerOneMark = undefined;
        playerTwoMark = undefined;
        gameBoard.removeGameField();
        popupGameModeContainer.classList.remove("none");
        gameContainer.classList.add("none");
        resetBoardButton.classList.add("none");
        resetGameButton.classList.add("none");
    };

    popupGameModeAIButtonXPlayerOne.addEventListener("click", setPlayerOneMarkX);
    popupGameModeAIButtonOPlayerOne.addEventListener("click", setPlayerOneMarkO);
    popupGameModeAISetupButton.addEventListener("click", submitAIPlayers);
    popupGameModeFriendButtonXPlayerOne.addEventListener("click", setPlayerOneMarkX);
    popupGameModeFriendButtonOPlayerOne.addEventListener("click", setPlayerOneMarkO);
    popupGameModeFriendButtonXPlayerTwo.addEventListener("click", setPlayerTwoMarkX);
    popupGameModeFriendButtonOPlayerTwo.addEventListener("click", setPlayerTwoMarkO);
    popupGameModeFriendSetupButton.addEventListener("click", submitTwoPlayers);
    popupGameModeFriend.addEventListener("click", chooseGameModeFriendSetup);
    popupGameModeAI.addEventListener("click", chooseGameModeAISetup);
    popupGameModeAISetupButton.addEventListener("click", submitAIPlayers);
    resetGameButton.addEventListener("click", resetGame);
    resetBoardButton.addEventListener("click", resetBoard);
    popupWinResetButton.addEventListener("click", resetBoard);
    return { submitTwoPlayers, submitAIPlayers };
})();