import Phaser from "phaser";
import shipImg from "../assets/ship.png";
import orb1Img from "../assets/orb1.png";
import orb2Img from "../assets/orb2.png";
import orb3Img from "../assets/orb3.png";
import Box from "./components/box";
import ImageBody from "./components/image-body";

let boxes: Box[] = [];

class SceneMain extends Phaser.Scene {
  middleW: number;
  middleH: number;

  constructor() {
    super("SceneMain");
    this.middleW = window.innerWidth / 2;
    this.middleH = window.innerHeight / 2;
  }
  preload() {
    this.load.image("ship", shipImg);
    this.load.image("orb1", orb1Img);
    this.load.image("orb2", orb2Img);
    this.load.image("orb3", orb3Img);
  }
  create() {
    const curScene = this.scene.scene;
    this.scene.scene.scale.lockOrientation("landscape");
    console.log("Main Scene created");

    this.matter.world.setBounds(
      0,
      0,
      window.innerWidth,
      window.innerHeight,
      64
    );

    const orb1 = new ImageBody(curScene, this.middleW, this.middleH, "orb1");
    orb1.setBoundingBox(0.2, "circle", { radius: 40 });
    orb1.setInfinity();
    orb1.body.setVelocity(5);

    const orb2 = new ImageBody(curScene, this.middleW, this.middleH, "orb1");
    orb2.setBoundingBox(0.2, "circle", { radius: 40 });
    orb2.setInfinity();
    orb2.body.setVelocity(-5);

    //Create camera
    const camera = curScene.cameras.cameras[0];
    //camera.startFollow(ship);

    //Create Movement
    interface Keys {
      up?: Phaser.Input.Keyboard.Key;
      down?: Phaser.Input.Keyboard.Key;
      left?: Phaser.Input.Keyboard.Key;
      right?: Phaser.Input.Keyboard.Key;
    }
    const movementKeys: Keys = {
      up: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.W,
        true,
        true
      ),
      down: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.S,
        true,
        true
      ),
      left: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.A,
        true,
        true
      ),
      right: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.D,
        true,
        true
      ),
    };

    movementKeys.up?.on("down", () => {});

    movementKeys.right?.on("down", () => {});

    movementKeys.down?.on("down", () => {});

    movementKeys.left?.on("down", () => {});
  }

  toDegrees(angle: number) {
    return angle * (180 / Math.PI);
  }

  update() {}
}

export default SceneMain;
