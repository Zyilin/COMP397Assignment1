module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        
        playerMoney:number = 1000;
        winnings:number = 0;
        jackpot:number = 5000;
        turn:number = 0;
        playerBet:number = 0;
        winNumber:number = 0;
        lossNumber:number = 0;
        bet:number = 0;
        
        bug:number = 0;
        door:number = 0;
        dragon:number = 0;
        giant:number = 0;
        reader:number = 0;
        seer:number = 0;
        storm:number = 0;
        sun:number = 0;

        imgBug: string = './Assets/images/Bug.png';
        imgDoor: string = './Assets/images/Door.png';
        imgDragon: string = './Assets/images/Dragon.png';
        imgGiant: string = './Assets/images/Giant.png';
        imgReader: string = './Assets/images/Reader.png';
        imgSeer: string = './Assets/images/Seer.png';
        imgStorm: string = './Assets/images/Storm.png';
        imgSun: string = './Assets/images/Sun.png';


        wheel = [
            ['bug','door','dragon','giant','seer','storm','reader','sun'],
            ['seer','bug','door','reader','dragon','storm','sun','giant'],
            ['storm','seer','reader','dragon','sun','door','giant','bug']];
        
        _wheel_img:any=[];
        result=['','','']

        moneyLabel: objects.Label;
        winNumberLabel: objects.Label;
        lossNumberLabel: objects.Label;
        betLabel: objects.Label;
        turnLabel: objects.Label;
        jackpotLabel: objects.Label;

        spinButton: objects.Button;
        bet100Button: objects.Button;
        bet50Button: objects.Button;
        bet10Button: objects.Button;
        wheel1: objects.Button;
        wheel2: objects.Button;
        wheel3: objects.Button;
        resetButton: objects.Button;
            // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.moneyLabel=new objects.Label();
            this.winNumberLabel=new objects.Label();
            this.lossNumberLabel=new objects.Label();
            this.betLabel=new objects.Label();
            this.turnLabel=new objects.Label();
            this.jackpotLabel=new objects.Label();

            this.spinButton = new objects.Button();
            this.bet100Button=new objects.Button();
            this.bet50Button=new objects.Button();
            this.bet10Button=new objects.Button();
            this.wheel1=new objects.Button();
            this.wheel2=new objects.Button();
            this.wheel3=new objects.Button();
            this.resetButton=new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public ShowPlayerStats():void {

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
        }

        public ResetWheels():void{
            this.bug = 0;
            this.door = 0;
            this.dragon = 0;
            this.reader = 0;
            this.giant = 0;
            this.seer = 0;
            this.sun = 0;
            this.storm = 0;
            this.result=['','','']
        }

        public ResetAll():void{
            this.jackpot = 5000;
            this.playerMoney = 1000;
            this.winNumber = 0;
            this.lossNumber = 0;
            this.bet = 0;
            this.turn = 0;
            this.winnings = 0;
            this.ClearImages();
            this.ResetWheels();
        }

        public ClearImages():void{
            for(let i = 0; i < this._wheel_img.length; i++)
            this.removeChild(this._wheel_img[i]);
        }

        public Spin():void{
            if(this.bet > this.playerMoney)        
                alert("You run out of money.");                                
            else if(!(this.bet > 0))        
                alert("Please select your bet value");        
            else
            {
                this.ClearImages();
                this.ResetWheels(); 
                this.playerMoney -= this.bet;
                this.turn++;

                var spins = [];
                var result = [];

                for(var i = 0; i < 3; i++)
                {
                    spins[i] = Math.floor((Math.random() * 8));                        
                    result[i] = this.wheel[i][spins[i]];   
            
                    if(result[i] == "bug")
                    {
                        this.bug++;
                        this.result[i]=this.imgBug;
                    }
                    else if(result [i] == "door")
                    {
                        this.door++;
                        this.result[i]=this.imgDoor;
                    }
                    else if(result [i] == "dragon")
                    {
                        this.dragon++;
                        this.result[i]=this.imgDragon;
                    }
                    else if(result [i] == "giant")
                    {
                        this.giant++;
                        this.result[i]=this.imgGiant;
                    }
                    else if(result[i] == "sun")
                    {
                        this.sun++; 
                        this.result[i]=this.imgSun;
                    }
                    else if(result[i] == "reader")
                    {
                        this.reader++; 
                        this.result[i]=this.imgReader;
                    }
                    else if(result[i] == "storm")
                    {
                        this.storm++;
                        this.result[i]=this.imgStorm; 
                    }
                    else
                    {
                        this.seer++;
                        this.result[i]=this.imgSeer;
                }
            }

            this.CheckResult();        
            this.DisplayResult(spins);
            this.ShowPlayerStats();
            }
        }
        public Bet(betAmount:number):void
        {
            if(betAmount <= this.playerMoney)
        {
            this.bet = betAmount;
        }
        else
            alert("You are run out of money!");
    
        this.ShowPlayerStats();
        }
        
        public CheckResult():void
        {
            if(this.giant == 0 && this.reader == 0 && this.storm==0)
            {       
                this.winNumber++;
                this.winnings += this.bet;
        
            if(this.sun == 2)
                this.winnings += this.bet * 1.5;
            else if(this.sun == 3)
                this.winnings += this.bet * 2;
            else if(this.door == 2 || this.seer == 2)
                this.winnings += this.bet * 2;
            else if(this.door == 3 || this.seer == 3)
                this.winnings += this.bet * 4;      
            else if(this.dragon == 2)
                this.winnings += this.bet * 3;
            else if(this.dragon == 3)
                this.winnings += this.bet * 6;                      
            else if(this.bug == 2)
                this.winnings += this.bet * 5;
            else if(this.bug == 3)
                this.winnings += this.bet * 10;

                this.playerMoney += this.winnings;
                this.CheckJackpot();
            }
            else
            {
                this.lossNumber++;
            }
        }

        public CheckJackpot():void
        {
            let _jackpotTry = Math.floor(Math.random() * 51 + 1);
            let _jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (_jackpotTry === _jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
                this.ShowPlayerStats();
            }
        }

        
        public DisplayResult(spins:any):void
        {
            this.removeChild(this.wheel1);
            this.removeChild(this.wheel2);
            this.removeChild(this.wheel3);
            this.wheel1 = new objects.Button(this.result[0], 189, 504, true);   
            this.wheel2 = new objects.Button(this.result[1], 363, 504, true);   
            this.wheel3 = new objects.Button(this.result[2], 538, 504, true);               
            this.addChild(this.wheel1);
            this.addChild(this.wheel2);
            this.addChild(this.wheel3);
        }   
        
        public Reset():void
        {
            this.ResetAll();
            this.ResetWheels();
            this.ShowPlayerStats();
        }

        public Start(): void 
        {                     
            this.spinButton = new objects.Button('./Assets/images/spinButton.png', 645,780, true);   
            this.bet10Button = new objects.Button('./Assets/images/bet10.png', 82, 780, true);   
            this.bet50Button = new objects.Button('./Assets/images/bet50.png', 180, 780, true);   
            this.bet100Button = new objects.Button('./Assets/images/bet100.png', 280, 780, true);   
            this.resetButton = new objects.Button('./Assets/images/resetButton.png', 376, 780, true);
            this.ShowPlayerStats(); 
            this.Main();
        }        
        
        public Update(): void 
        {
           
        }
        
        public Main(): void 
        {                   
            
            this.addChild(this.spinButton);
            this.addChild(this.bet10Button);
            this.addChild(this.bet50Button);
            this.addChild(this.bet100Button);
            this.addChild(this.wheel1);
            this.addChild(this.wheel2);
            this.addChild(this.wheel3);
            this.addChild(this.resetButton);


            this.spinButton.on("click", ()=>{this.Spin()});
            this.bet10Button.on("click", ()=>{this.Bet(10)});
            this.bet50Button.on("click", ()=>{this.Bet(50)});
            this.bet100Button.on("click", ()=>{this.Bet(100)});   
            this.resetButton.on("click", ()=>{this.Reset()});
            
        }

        
    }
}
