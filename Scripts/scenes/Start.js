"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            // PRIVATE INSTANCE MEMBERS
            _this.playerMoney = 1000;
            _this.winnings = 0;
            _this.jackpot = 5000;
            _this.turn = 0;
            _this.playerBet = 0;
            _this.winNumber = 0;
            _this.lossNumber = 0;
            _this.bet = 0;
            _this.bug = 0;
            _this.door = 0;
            _this.dragon = 0;
            _this.giant = 0;
            _this.reader = 0;
            _this.seer = 0;
            _this.storm = 0;
            _this.sun = 0;
            _this.imgBug = './Assets/images/Bug.png';
            _this.imgDoor = './Assets/images/Door.png';
            _this.imgDragon = './Assets/images/Dragon.png';
            _this.imgGiant = './Assets/images/Giant.png';
            _this.imgReader = './Assets/images/Reader.png';
            _this.imgSeer = './Assets/images/Seer.png';
            _this.imgStorm = './Assets/images/Storm.png';
            _this.imgSun = './Assets/images/Sun.png';
            _this.wheel = [
                ['bug', 'door', 'dragon', 'giant', 'seer', 'storm', 'reader', 'sun'],
                ['seer', 'bug', 'door', 'reader', 'dragon', 'storm', 'sun', 'giant'],
                ['storm', 'seer', 'reader', 'dragon', 'sun', 'door', 'giant', 'bug']
            ];
            _this._wheel_img = [];
            _this.result = ['', '', ''];
            // initialization
            _this.moneyLabel = new objects.Label();
            _this.winNumberLabel = new objects.Label();
            _this.lossNumberLabel = new objects.Label();
            _this.betLabel = new objects.Label();
            _this.turnLabel = new objects.Label();
            _this.jackpotLabel = new objects.Label();
            _this.spinButton = new objects.Button();
            _this.bet100Button = new objects.Button();
            _this.bet50Button = new objects.Button();
            _this.bet10Button = new objects.Button();
            _this.wheel1 = new objects.Button();
            _this.wheel2 = new objects.Button();
            _this.wheel3 = new objects.Button();
            _this.resetButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Start.prototype.ShowPlayerStats = function () {
            this.removeChild(this.moneyLabel);
            this.removeChild(this.winNumberLabel);
            this.removeChild(this.lossNumberLabel);
            this.removeChild(this.betLabel);
            this.removeChild(this.turnLabel);
            this.removeChild(this.jackpotLabel);
            this.moneyLabel = new objects.Label("Money: $" + this.playerMoney, "20px", "Consolas", "#000000", 92, 900, true);
            this.betLabel = new objects.Label("Bet: " + this.bet, "20px", "Consolas", "#000000", 250, 900, true);
            this.winNumberLabel = new objects.Label("Wins: " + this.winNumber, "20px", "Consolas", "#000000", 63, 930, true);
            this.lossNumberLabel = new objects.Label("Loss Number: " + this.lossNumber, "20px", "Consolas", "#000000", 293, 930, true);
            this.turnLabel = new objects.Label("Turn: " + this.turn, "20px", "Consolas", "#000000", 65, 960, true);
            this.jackpotLabel = new objects.Label("Current Jackpot: " + this.jackpot, "20px", "Consolas", "#ff0000", 331, 960, true);
            this.addChild(this.moneyLabel);
            this.addChild(this.winNumberLabel);
            this.addChild(this.lossNumberLabel);
            this.addChild(this.betLabel);
            this.addChild(this.turnLabel);
            this.addChild(this.jackpotLabel);
        };
        Start.prototype.ResetWheels = function () {
            this.bug = 0;
            this.door = 0;
            this.dragon = 0;
            this.reader = 0;
            this.giant = 0;
            this.seer = 0;
            this.sun = 0;
            this.storm = 0;
            this.result = ['', '', ''];
        };
        Start.prototype.ResetAll = function () {
            this.jackpot = 5000;
            this.playerMoney = 1000;
            this.winNumber = 0;
            this.lossNumber = 0;
            this.bet = 0;
            this.turn = 0;
            this.winnings = 0;
            this.ClearImages();
            this.ResetWheels();
        };
        Start.prototype.ClearImages = function () {
            for (var i = 0; i < this._wheel_img.length; i++)
                this.removeChild(this._wheel_img[i]);
        };
        Start.prototype.Spin = function () {
            if (this.bet > this.playerMoney)
                alert("You run out of money.");
            else if (!(this.bet > 0))
                alert("Please select your bet value");
            else {
                this.ClearImages();
                this.ResetWheels();
                this.playerMoney -= this.bet;
                this.turn++;
                var spins = [];
                var result = [];
                for (var i = 0; i < 3; i++) {
                    spins[i] = Math.floor((Math.random() * 8));
                    result[i] = this.wheel[i][spins[i]];
                    if (result[i] == "bug") {
                        this.bug++;
                        this.result[i] = this.imgBug;
                    }
                    else if (result[i] == "door") {
                        this.door++;
                        this.result[i] = this.imgDoor;
                    }
                    else if (result[i] == "dragon") {
                        this.dragon++;
                        this.result[i] = this.imgDragon;
                    }
                    else if (result[i] == "giant") {
                        this.giant++;
                        this.result[i] = this.imgGiant;
                    }
                    else if (result[i] == "sun") {
                        this.sun++;
                        this.result[i] = this.imgSun;
                    }
                    else if (result[i] == "reader") {
                        this.reader++;
                        this.result[i] = this.imgReader;
                    }
                    else if (result[i] == "storm") {
                        this.storm++;
                        this.result[i] = this.imgStorm;
                    }
                    else {
                        this.seer++;
                        this.result[i] = this.imgSeer;
                    }
                }
                this.CheckResult();
                this.DisplayResult(spins);
                this.ShowPlayerStats();
            }
        };
        Start.prototype.Bet = function (betAmount) {
            if (betAmount <= this.playerMoney) {
                this.bet = betAmount;
            }
            else
                alert("You are run out of money!");
            this.ShowPlayerStats();
        };
        Start.prototype.CheckResult = function () {
            if (this.giant == 0 && this.reader == 0 && this.storm == 0) {
                this.winNumber++;
                this.winnings += this.bet;
                if (this.sun == 2)
                    this.winnings += this.bet * 1, 2;
                else if (this.sun == 3)
                    this.winnings += this.bet * 1, 5;
                else if (this.door == 2 || this.seer == 2)
                    this.winnings += this.bet * 2;
                else if (this.door == 3 || this.seer == 3)
                    this.winnings += this.bet * 2, 5;
                else if (this.dragon == 2)
                    this.winnings += this.bet * 3;
                else if (this.dragon == 3)
                    this.winnings += this.bet * 5;
                else if (this.bug == 2)
                    this.winnings += this.bet * 7.5;
                else if (this.bug == 3)
                    this.winnings += this.bet * 10;
                this.playerMoney += this.winnings;
                this.CheckJackpot();
            }
            else {
                this.lossNumber++;
            }
        };
        Start.prototype.CheckJackpot = function () {
            var _jackpotTry = Math.floor(Math.random() * 51 + 1);
            var _jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (_jackpotTry === _jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
                this.ShowPlayerStats();
            }
        };
        Start.prototype.DisplayResult = function (spins) {
            this.removeChild(this.wheel1);
            this.removeChild(this.wheel2);
            this.removeChild(this.wheel3);
            this.wheel1 = new objects.Button(this.result[0], 189, 504, true);
            this.wheel2 = new objects.Button(this.result[1], 363, 504, true);
            this.wheel3 = new objects.Button(this.result[2], 538, 504, true);
            this.addChild(this.wheel1);
            this.addChild(this.wheel2);
            this.addChild(this.wheel3);
        };
        Start.prototype.Reset = function () {
            this.ResetAll();
            this.ResetWheels();
            this.ShowPlayerStats();
        };
        Start.prototype.Start = function () {
            this.spinButton = new objects.Button('./Assets/images/spinButton.png', 645, 780, true);
            this.bet10Button = new objects.Button('./Assets/images/bet10.png', 82, 780, true);
            this.bet50Button = new objects.Button('./Assets/images/bet50.png', 180, 780, true);
            this.bet100Button = new objects.Button('./Assets/images/bet100.png', 280, 780, true);
            this.resetButton = new objects.Button('./Assets/images/resetButton.png', 376, 780, true);
            this.ShowPlayerStats();
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            var _this = this;
            this.addChild(this.spinButton);
            this.addChild(this.bet10Button);
            this.addChild(this.bet50Button);
            this.addChild(this.bet100Button);
            this.addChild(this.wheel1);
            this.addChild(this.wheel2);
            this.addChild(this.wheel3);
            this.addChild(this.resetButton);
            this.spinButton.on("click", function () { _this.Spin(); });
            this.bet10Button.on("click", function () { _this.Bet(10); });
            this.bet50Button.on("click", function () { _this.Bet(50); });
            this.bet100Button.on("click", function () { _this.Bet(100); });
            this.resetButton.on("click", function () { _this.Reset(); });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map