export default class Canvas {
  constructor(elem) {
    this.canvas = elem;
    this.ctx = elem.getContext('2d'); // context
    this.height = elem.height;        // height
    this.width = elem.width;          // width
    this.gravity = 0.4;               // gravity
    this.factor = 0.5;                // velocity reduction
    this.radius = 4;                  // ball radius
    this.color = "#000";              // ball colour
    this.balls = [];                  // array of the balls

    this._initTimer();
    this._clickHandler();
  }

  _initTimer() {
    setInterval(() => this._update(), 1000/60);
  }

  _initBall(x, y) {
    this.addBall({
      x,
      y,
      vx: this._random(-4, 4),
      vy: this._random(-10, -4)
    });
  }

  _clickHandler() {
    this.canvas.addEventListener('click', event => {
      this._initBall(event.offsetX, event.offsetY);
    }, false);
  }

  // calculate the next position of the ball
  _calc(i) {
    let { x, y, vx, vy } = this.balls[i];

    vy += this.gravity;
    x  += vx;
    y  += vy;

    // top or bottom border
    if (y < 0 + this.radius) {
      vy *= -this.factor;
      y   = 0 + this.radius;
    } else if (y > this.height - this.radius) {
      vy *= -this.factor;
      vx *= this.factor;
      y   = this.height - this.radius;
    }
   
    // left or right border
    if (x < 0 + this.radius) {
      vx *= -this.factor;
      x   = 0 + this.radius;
    } else if (x > this.width - this.radius) {
      vx *= -this.factor;
      x   = this.width - this.radius;
    }

    this.balls[i] = { x, y, vx, vy }
    return { x, y };
  }

  _update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.balls.forEach( (ball, i) => {
      const { x, y } = this._calc(i);
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.radius, 0, 2*Math.PI, true);
      this.ctx.fill();
    });
  }

  // generate a random number
  _random(min, max) {
    return (Math.random() * (max - min + 1)) + min;
  }

  // clear balls array
  removeBalls() {
    this.balls = [];
  }

  // add a new ball
  addBall(data) {
    this.balls.push(data);
  }
}