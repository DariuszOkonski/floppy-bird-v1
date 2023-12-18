import Phaser from 'phaser';

const config = {
  // WebGL (web graphics library) JS Api for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // arcade physics plugin, manages physics simulation
    default: 'arcade',
  },
  scene: {
    preload,
    create,
    update,
  },
};

// loading assets, such as images, music, animations
function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
}

let bird = null;

// initializing
function create() {
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  bird = this.physics.add
    .sprite(config.width * 0.1, config.height / 2, 'bird')
    .setOrigin(0);
  bird.body.gravity.y = 200; // 200px / 1sec

  console.log(bird.body);
}

// 60fpx
// 60 times per second
// 60 * 16ms = 1000ms
function update(time, delta) {
  console.log(bird.body.velocity.y);
}

new Phaser.Game(config);
