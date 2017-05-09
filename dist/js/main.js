var Wheel = (function () {
    function Wheel() {
        var container = document.getElementById("container");
        var div = document.createElement("wheel");
        container.appendChild(div);
        div.style.transform = "translate(0px, 30px)";
    }
    return Wheel;
}());
var Car = (function () {
    function Car() {
        var container = document.getElementById("container");
        this.div = document.createElement("car");
        container.appendChild(this.div);
        this.speed = 4;
        this.x = 10;
        this.move();
        this.x++;
    }
    Car.prototype.move = function () {
        this.x = this.speed + this.x;
        this.div.style.transform = "translate(" + this.x + "px,220px)";
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.car = new Car();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Rock = (function () {
    function Rock(tag, parent) {
        this.speed = 0;
        this.move();
    }
    Rock.prototype.move = function () {
    };
    return Rock;
}());
//# sourceMappingURL=main.js.map