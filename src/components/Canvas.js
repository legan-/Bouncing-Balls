export default class Canvas {
  constructor(elem) {
    this.canvas = elem;
    this.ctx = elem.getContext('2d'); // context
    this.height = elem.height;        // height
    this.width = elem.width;          // width
    this.gravity = 0.4;               // gravity
    this.factor = 0.5;                // velocity reduction
    this.radius = 5;                  // ball radius
    this.color = '#000';              // ball colour
    this.balls = [];                  // array of the balls

    this._initTimer();
    this._clickHandler();
  }

  _initTimer() {
    setInterval(() => this._update(), 1000/60);
  }

  _initBall(x, y) {
    const vx = this._random(-6, 6);
    const vy = this._random(-12, -6);
    const radius = this._random(3, 6);
    const gravity = radius / 10;
    this.addBall({
      x,
      y,
      vx,
      vy,
      radius,
      gravity
    });
  }

  _clickHandler() {
    this.canvas.addEventListener('click', event => {
      this._initBall(event.offsetX, event.offsetY);
    }, false);
  }

  // calculate the next position of the ball
  _calc(i) {
    const ball = this.balls[i];

    let {
      x,
      y,
      vx,
      vy, 
      radius,
      gravity
    } = ball;

    vy += gravity;
    x += vx;
    y += vy;

    // top or bottom border
    if (y < 0 + radius) {
      vy *= -this.factor;
      y = 0 + radius;
    } else if (y > this.height - radius) {
      vy *= -this.factor;
      vx *= this.factor;
      y = this.height - radius;
    }
   
    // left or right border
    if (x < 0 + radius) {
      vx *= -this.factor;
      x = 0 + radius;
    } else if (x > this.width - radius) {
      vx *= -this.factor;
      x = this.width - radius;
    }

    this.balls[i] = {
      x,
      y,
      vx,
      vy,
      radius,
      gravity
    }
    return {
      x,
      y,
      radius
    };
  }

  _update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.balls.forEach((ball, i) => {
      const {
        x,
        y,
        radius
      } = this._calc(i);

      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2*Math.PI, true);
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