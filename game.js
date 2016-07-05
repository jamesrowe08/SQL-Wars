/**
 * Created by James on 7/1/2016.
 */


function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    grid.start();
}

var grid = function() {
    canvas = document.createElement("canvas"),
        mainLoop = function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
    },
    clear = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}