import Phaser, { Physics } from "phaser";

export default class Box {
  scene: any;
  x: any;
  y: any;
  w: any;
  h: any;
  box: Phaser.GameObjects.Rectangle;
  physics: any;
  constructor(scene, x, y, w, h, fill) {
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

  toDegrees(angle: number) {
    return angle * (180 / Math.PI);
  }
  update() {
    this.box.x = this.physics.position.x;
    this.box.y = this.physics.position.y;
    this.box.rotation = this.physics.angle;
  }
}
