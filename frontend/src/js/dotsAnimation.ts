import { getDotsAnimationConfiguration } from "./dotsAnimationConfiguration";

const mousePosition = { x: 0, y: 0 };

window.addEventListener("mousemove", function (e) {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
});

const colorDot = [
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(255, 77, 90)',
];

class Dot {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
  canvasWidth: number;
  canvasHeight: number;
  appearOnlyNearMouse: boolean;

  constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, appearOnlyNearMouse: boolean) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.appearOnlyNearMouse = appearOnlyNearMouse;

    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.random() * 1.5;

    // this.colour = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  paint() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);

    if (this.appearOnlyNearMouse) {
      // make the dot colour fade out the further they are from the mouse
      const dotDistance = (
        ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y + window.scrollY) ** 2) ** 0.5
      );
      const distanceRatio = dotDistance / (window.innerWidth / 1.7);

      // this chops the bracket off the rgb colour and ads an opacity
      this.ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;  // eslint-disable-line @typescript-eslint/restrict-template-expressions
    } else {
      this.ctx.fillStyle = this.colour;
    }

    this.ctx.fill();
  }
}

export const dotsAnimation = (selector: string, showLines: boolean) => {
  let animation: number;  // Handler returned by `requestAnimationFrame(callback)`

  const canvas = document.querySelector<HTMLCanvasElement>(selector);
  if (canvas === null) return;
  const ctx = canvas.getContext('2d');
  if (ctx === null) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  ctx.lineWidth = 0.3;
  ctx.strokeStyle = 'rgb(81, 162, 233)';


  class DotsAnimation {
    #ctx;
    #width;
    #height;
    #dotsConfiguration;
    dots: Dot[] = [];
    #showLines: boolean;
    #lastTimestamp: number;
    #timer: number;
    #interval: number;

    constructor(
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      showLines: boolean
    ) {
      this.#ctx = ctx;
      this.#width = width;
      this.#height = height;
      this.#dotsConfiguration = getDotsAnimationConfiguration();
      this.#showLines = showLines;
      this.#lastTimestamp = 0;
      this.#timer = 0;
      this.#interval = 1000 / 60;

      this.createDots();
    }

    createDots() {
      for (let i = 0; i < this.#dotsConfiguration.nb; i++) {
        this.dots.push((new Dot(this.#ctx, this.#width, this.#height, this.#showLines)));
      }
    }

    calculateLines() {
      for (let i = 0; i < this.dots.length; i++) {
        const dot1 = this.dots[i];
        dot1.paint();

        for (let j = i + 1; j < this.dots.length; j++) {
          const dot2 = this.dots[j];

          if (
            dot1.x - dot2.x < this.#dotsConfiguration.distance &&
            dot1.y - dot2.y < this.#dotsConfiguration.distance &&
            dot1.x - dot2.x > -this.#dotsConfiguration.distance &&
            dot1.y - dot2.y > -this.#dotsConfiguration.distance
          ) {
            if (
              dot1.x - mousePosition.x < this.#dotsConfiguration.d_radius &&
              dot1.y - mousePosition.y < this.#dotsConfiguration.d_radius &&
              dot1.x - mousePosition.x > -this.#dotsConfiguration.d_radius &&
              dot1.y - mousePosition.y > -this.#dotsConfiguration.d_radius
            ) {
              this.#ctx.beginPath();
              this.#ctx.moveTo(dot1.x, dot1.y);
              this.#ctx.lineTo(dot2.x, dot2.y);

              // Increase fill color fade the further you are from the mouse
              const mp = mousePosition;

              let distanceRatio = (
                (((dot1.x - mp.x) ** 2 + (dot1.y - mp.y) ** 2) ** 0.5)  // Dot distance from mouse
                /
                this.#dotsConfiguration.d_radius
              );

              // Prevent it from fading out completely
              distanceRatio = Math.max(distanceRatio - 0.3, 0);

              this.#ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;  // eslint-disable-line @typescript-eslint/restrict-template-expressions

              this.#ctx.stroke();
              this.#ctx.closePath();
            }
          }
        }
      }
    }

    setNextDotPositions() {
      // Don't animate the first dot; it will follow mouse
      for (const dot of this.dots.slice(1)) {
        if (dot.y < 0 || dot.y > this.#height) dot.vy *= -1;
        else if (dot.x < 0 || dot.x > this.#width) dot.vx *= -1;

        dot.x += 2 * dot.vx;
        dot.y += dot.vy;
      }
    }

    animate(timestamp: number) {
      const deltaTime = timestamp - this.#lastTimestamp;
      this.#lastTimestamp = timestamp;
      if (this.#timer > this.#interval) {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);

        if (this.#showLines) this.calculateLines();

        else this.dots.forEach((d, i) => {
          if (d.y >= window.innerHeight - window.scrollY || i > this.dots.length * .7) d.paint();
        });

        this.setNextDotPositions();

        this.#timer = 0;
      } else {
        this.#timer += deltaTime;
      }

      animation = requestAnimationFrame(this.animate.bind(this));
    }
  }


  let dotsAnimation = new DotsAnimation(ctx, canvas.width, canvas.height, showLines);

  window.addEventListener("mousemove", function (e) {
    dotsAnimation.dots[0].x = e.clientX;
    dotsAnimation.dots[0].y = e.clientY + window.scrollY;
  });

  dotsAnimation.animate(0);

  window.addEventListener("resize", function () {
    cancelAnimationFrame(animation);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    dotsAnimation = new DotsAnimation(ctx, canvas.width, canvas.height, showLines);
    dotsAnimation.animate(0);
  });
};


