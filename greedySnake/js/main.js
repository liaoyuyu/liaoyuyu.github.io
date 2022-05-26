import Game from "./game.js"

let g = new Game(".map", ".fraction")

let gamePlay = document.querySelector(".gamePlay");
gamePlay.onclick = function () {
    g.startGame();
}

let gameStop = document.querySelector(".gameStop");
gameStop.onclick = function () {
    g.stop();
}

let gameRefresh = document.querySelector(".gameRefresh");
gameRefresh.onclick = function () {
    g.refresh();
}