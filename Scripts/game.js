"use strict";
//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
var game = (function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    /**
     * Perform Initialization in the Start function
     *
     */
    function Start() {
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
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This function is the main function of the game
     *
     */
    function Main() {
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        currentScene = new scenes.Start();
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map