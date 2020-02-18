//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
let game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;

    let currentSceneState:scenes.State;
    let currentScene: objects.Scene;

    /**
     * Perform Initialization in the Start function
     *
     */
    function Start():void
    {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }

    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update():void
    {
        
       if(currentSceneState != config.Game.SCENE)
        {
            Main();
        }
        currentScene.Update();

        stage.update();
    }

    /**
     * This function is the main function of the game
     *
     */
    function Main():void
    {
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        currentScene = new scenes.Start();

        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }

    window.addEventListener("load", Start);

})();