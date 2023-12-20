import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 200,
      },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
}

const VELOCITY = 200;
let bird = null;
let totalDelta = null;

function create() {
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  bird = this.physics.add
    .sprite(config.width * 0.1, config.height / 2, 'bird')
    .setOrigin(0);
  // bird.body.velocity.x = VELOCITY;

  this.input.on('pointerdown', function () {
    console.log('pressing mouse button');
  });

  this.input.keyboard.on('keydown_SPACE', function () {
    console.log('pressing spacedown button');
  });
}

function update(time, delta) {
  totalDelta += delta;
  // if (totalDelta < 1000) {
  //   return;
  // }
  totalDelta = 0;

  // if (bird.x + bird.width >= config.width) {
  //   bird.body.velocity.x = -VELOCITY;
  // } else if (bird.x <= 0) {
  //   bird.body.velocity.x = VELOCITY;
  // }
}

new Phaser.Game(config);
