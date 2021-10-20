const gameBoard = (() => {
    const gameBoardArray = [
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
    return { gameBoardArray };
})();

const playerFactory = (mark) => {
    mark;
    return { mark };
};

const playerOne = playerFactory("x");
const playerTwo = playerFactory("o");