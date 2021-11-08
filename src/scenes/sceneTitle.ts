import Phaser from "phaser";

class SceneTitle extends Phaser.Scene {
  constructor() {
    super("SceneTitle");
  }
  preload() {}
  create() {
    console.log("scene title created");
    const title = this.add.text(
      window.innerWidth / 2,
      window.innerHeight / 4,
      "Space Bugs!",
      { color: "white", fontSize: "4rem" }
    );
    title.setOrigin(0.5);

    const startButton = this.add.text(
      window.innerWidth / 2,
      window.innerHeight / 1.5,
      "Start Game!",
      { color: "white", fontSize: "2rem" }
    );

    startButton.setOrigin(0.5);
    startButton.setInteractive();
    startButton.on("pointerdown", () => {
      this.startGame();
    });
  }
  startGame() {
    this.scene.start("SceneMain");
  }
  update() {}
}

export default SceneTitle;
