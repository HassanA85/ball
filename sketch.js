var ball = {
  x: 20,
  y: 200,
  size: 15,
  speedX: 5, //speed for horizontal boune
  speedY: 5, //speed for vertical bounce

  display: function () {
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.speedX;
    this.y += this.speedY;
  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2) this.reverseBounce * this.bounce ();
    if (this.x < 0 + this.size / 2) this.bounce();
    if (this.y > height - this.size / 2) this.reverseBounce();
    if (this.y < 0 + this.size / 2) this.bounce * this.reverseBounce();
   },

  bounce: function () {
    this.speedX *= -1;
  },

  reverseBounce: function () {
    this.speedY *= -1;
  },

};

var setup = function() {
  createCanvas(600, 400);
};

var draw = function() {
  background(100);
  ball.display();
  ball.update();
};
