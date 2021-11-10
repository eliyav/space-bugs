import Phaser from "phaser";
import shipImg from "../assets/ship.png";
import orb1 from "../assets/orb1.png";
import orb2 from "../assets/orb2.png";
import orb3 from "../assets/orb3.png";
import Box from "./components/box";

let boxes: Box[] = [];

class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.image("ship", shipImg);
    this.load.image("orb1", orb1);
    this.load.image("orb2", orb2);
    this.load.image("orb3", orb3);
  }
  create() {
    console.log("Main Scene created");
    const middleW = window.innerWidth / 2;
    const middleH = window.innerHeight / 2;

    // var r2 = this.matter.add.image(middleW, middleH, "orb1");

    //Create camera
    const camera = this.scene.scene.cameras.cameras[0];
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

  update() {
    if (this.input.activePointer.isDown) {
      const worldX = this.input.activePointer.worldX;
      const worldY = this.input.activePointer.worldY;
      boxes.push(new Box(this.scene.scene, worldX, worldY, 100, 100, 0x6666ff));
    }
    boxes.forEach((box) => box.update());
  }
}

export default SceneMain;
