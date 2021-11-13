import Phaser from "phaser";

interface BoundingBoxOptions {
  radius?: number;
  height?: number;
  width?: number;
}
export default class ImageBody {
  body: Phaser.Physics.Matter.Image;

  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    this.body = scene.matter.add.image(x, y, key);
    this.body.setName(key);
  }

  setBoundingBox(scale: number = 1, type: string, options: BoundingBoxOptions) {
    this.body.setScale(scale);
    if (type === "circle") {
      this.body.setCircle(options.radius!);
    } else if (type === "rectangle") {
      this.body.setRectangle(options.width!, options.height!);
    } else {
      throw Error("Invalid Bounding Box Type");
    }
  }

  setInfinity() {
    this.body.setBounce(1);
    this.body.setFriction(0, 0, 0);
    this.body.setFixedRotation();
  }
}
