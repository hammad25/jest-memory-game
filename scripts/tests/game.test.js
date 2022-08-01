/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    showScore,
} = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame array key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves array key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices array key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices array contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        playerMoves = ["button1", "button2"]
        currentGame = ["button1", "button2", "button3"]
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should display 0  for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});