import Phaser from "phaser";

class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {}
  create() {
    //define our objects
    //set up
    console.log("Main Scene created");
  }
  update() {
    //constant running loop
  }
}

export default SceneMain;
