import SceneLoad from "./scenes/sceneLoad";
import SceneTitle from "./scenes/sceneTitle";
import SceneMain from "./scenes/sceneMain";
import SceneOver from "./scenes/sceneOver";

let game;

window.onload = function () {
  let config = {
      type: Phaser.AUTO,
      parent: "phaser-game",
      width: window.innerWidth,
      height: window.innerHeight,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
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
