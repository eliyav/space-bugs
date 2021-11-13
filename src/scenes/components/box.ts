import Phaser from "phaser";

export default class Box {
  scene: any;
  x: number;
  y: number;
  w: number;
  h: number;
  box: Phaser.GameObjects.Rectangle;
  physics: MatterJS.BodyType;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    w: number,
    h: number,
    fill: number
  ) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.box = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      w,
      h,
      fill
    ).addToDisplayList();
    this.physics = scene.matter.add.rectangle(this.x, this.y, this.w, this.h);
  }

  update() {
    this.box.x = this.physics.position.x;
    this.box.y = this.physics.position.y;
    this.box.rotation = this.physics.angle;
  }
}
