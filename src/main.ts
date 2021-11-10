import SceneLoad from "./scenes/sceneLoad";
import SceneTitle from "./scenes/sceneTitle";
import SceneMain from "./scenes/sceneMain";
import SceneOver from "./scenes/sceneOver";

let game;

window.onload = function () {
  let config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: "phaser-game",
      physics: {
        default: "matter",
        matter: {
          // enableSleeping: true,
          gravity: {
            y: 0.1,
          },
          debug: true,
        },
      },
      scene: [SceneMain, SceneOver],
    },
    // scene: [SceneLoad, SceneTitle, SceneMain, SceneOver],
    game = new Phaser.Game(config);
};
