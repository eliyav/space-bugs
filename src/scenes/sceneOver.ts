import Phaser from "phaser";

class SceneOver extends Phaser.Scene {
  constructor() {
    super("SceneOver");
  }
  preload() {}
  create() {}
  startGame() {
    this.scene.start("SceneMain");
  }
  update() {}
}

export default SceneOver;
