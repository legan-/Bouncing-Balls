import Canvas from './canvas.js';

const canvasWidth = 600;
const canvasHeight = 400;
const canvasClass = 'canvas';

let elem = document.createElement('canvas');
elem.setAttribute('width', canvasWidth);
elem.setAttribute('height', canvasHeight);
elem.setAttribute('class', canvasClass);

describe('Canvas', () => {
  describe('DOM', () => {
    it('should have class "canvas"', () => {
      expect(elem.getAttribute('class')).toBe(canvasClass);
    });

    it('should have width = ' + canvasWidth, () => {
      expect(parseInt(elem.getAttribute('width'))).toBe(canvasWidth);
    });

    it('should have height = ' + canvasHeight, () => {
      expect(parseInt(elem.getAttribute('height'))).toBe(canvasHeight);
    });
  });

  describe('Class', () => {
    const canvas = new Canvas(elem);
    const balls = [
      {
        x: 10,
        y: 20,
        vx: -2,
        vy: -8
      },
      {
        x: 25,
        y: 25,
        vx: -3,
        vy: -7.5
      },
      {
        x: 3,
        y: 197,
        vx: -2,
        vy: -4
      },
      {
        x: 597,
        y: 193,
        vx: 4,
        vy: -5
      },
      {
        x: 380,
        y: 2,
        vx: -1,
        vy: -5
      }
    ]

    it('should receive params', () => {
      expect(canvas.height).toBe(canvasHeight);
      expect(canvas.width).toBe(canvasWidth);
    });

    it('should initialise a ball', () => {
      canvas._initBall(10, 30);

      expect(canvas.balls.length).toBe(1);
      canvas.removeBalls();
    });

    it('should add one ball to store', () => {
      canvas.addBall(balls[0]);
      expect(canvas.balls[0]).toEqual(balls[0]);
      canvas.removeBalls();
    });

    it('should add two balls to store', () => {
      balls.forEach( b => {
        canvas.addBall(b);
      });
      expect(canvas.balls).toEqual(balls);
      canvas.removeBalls();
    });

    it('should calculate and return the next position of the ball', () => {
      canvas.addBall(balls[0]);
      expect(canvas._calc(0)).toEqual({ x: 8, y: 12.4 });
      canvas.removeBalls();
    });

    it('should bounce from the left border', () => {
      const ball = balls[2];
      canvas.addBall(ball);
      canvas._calc(0);
      
      expect(canvas.balls[0]).toEqual({x: 4, y: 193.4, vx: 1, vy: -3.6});
      canvas.removeBalls();

    });

    it('should bounce from the right border', () => {
      const ball = balls[3];
      canvas.addBall(ball);
      canvas._calc(0);

      expect(canvas.balls[0]).toEqual({x: 596, y: 188.4, vx: -2, vy: -4.6});
      canvas.removeBalls();
    });

    it('should bounce from the top border', () => {
      const ball = balls[4];
      canvas.addBall(ball);
      canvas._calc(0);

      expect(canvas.balls[0]).toEqual({x: 379, y: 4, vx: -1, vy: 2.3});
      canvas.removeBalls();
    });

    it('should remove all balls from the array', () => {
      canvas.addBall(balls[0]);
      canvas.addBall(balls[1]);

      canvas.removeBalls();
      expect(canvas.balls).toEqual([]);
    });    

    it('should generate a random number in a specific range', () => {
      const min = -10;
      const max = 5;
      const random = canvas._random(min, max);
      expect(random).toBeGreaterThan(min);
      expect(random).toBeLessThan(max);
    });
  });
});