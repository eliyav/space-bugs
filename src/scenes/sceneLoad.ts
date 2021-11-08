import Phaser from "phaser";

class SceneLoad extends Phaser.Scene {
  constructor() {
    super("SceneLoad");
  }
  preload() {}
  onProgress(value) {
    this.bar.setPercent(value);
    var per = Math.floor(value * 100);
    this.progText.setText(per + "%");
  }
  create() {
    console.log("Loading!");
    this.scene.start("SceneTitle");
  }
}

export default SceneLoad;
