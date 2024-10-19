/* eslint-disable max-len */
import { getDotsAnimationConfiguration } from "./dotsAnimationConfiguration";
import { getGradientColor, GradientColor } from "./utilities";

export const mousePosition = { x: 0, y: 0 };

window.addEventListener("mousemove", function (e) {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
});

const dotColors = [
  "rgb(255, 77, 90)",
  "rgb(126, 96, 191)",
  "rgb(228, 177, 240)",
  "rgb(255, 225, 255)",
  "rgb(81, 162, 233)",
];

const lineGradient: [GradientColor, GradientColor, GradientColor] = [
  [0, 255, 170, 1],
  [26, 204, 195, 1],
  [52, 152, 219, 1],
];

class Dot {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  canvasWidth: number;
  canvasHeight: number;
  #isStar: boolean;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    isStar = false,
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.max(0.5, Math.random() * 1.75);

    this.color = (
      isStar
        ? "#ffd700"
        : dotColors[Math.floor(Math.random() * dotColors.length)]
    );

    this.#isStar = isStar;
  }

  #paintStar() {
    const spikes = 5;
    const outerRadius = this.radius;
    const innerRadius = this.radius / 2;
    let rotation = Math.PI / 2 * 3;
    const step = Math.PI / spikes;  // Angle between each point

    this.ctx.shadowBlur = 40;
    this.ctx.shadowColor = this.color;
    // this.ctx.shadowOffsetX = 0;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y - outerRadius);

    for (let i = 0; i < spikes; i++) {
      this.ctx.lineTo(  // Outer vertex (point of the star)
        this.x + Math.cos(rotation) * outerRadius,
        this.y + Math.sin(rotation) * outerRadius
      );
      rotation += step;

      this.ctx.lineTo(  // Inner vertex (between the points of the star)
        this.x + Math.cos(rotation) * innerRadius,
        this.y + Math.sin(rotation) * innerRadius
      );
      rotation += step;
    }

    this.ctx.lineTo(this.x, this.y - outerRadius);  // Close the shape
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // Reset shadow settings
    this.ctx.shadowBlur = 0;
    this.ctx.shadowColor = "transparent";
  }

  paint() {
    if (this.#isStar) {
      this.#paintStar();
      return;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

export const dotsAnimation = (selector: string, showLines: boolean) => {
  // Handler returned by `requestAnimationFrame(callback)`
  let animation: number;

  const canvas = document.querySelector<HTMLCanvasElement>(selector);
  if (canvas === null) return;
  const ctx = canvas.getContext('2d');
  if (ctx === null) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  ctx.lineWidth = 0.3;


  class DotsAnimation {
    #ctx;
    #width;
    #height;
    #dotsConfiguration;
    dots: Dot[] = [];
    shootingStar1: Dot | null = null;
    shootingStar2: Dot | null = null;
    shootingStar3: Dot | null = null;
    #STAR_FREQ_ATTENUATOR = 300;
    #STAR_BASE_VELOCITY = 15;
    #STAR_VELOCITY_FACTOR = 40;
    #STAR_RADIUS_FACTOR = 7.5;
    showLines: boolean;
    #lastTimestamp: number;
    #timer: number;
    #interval: number;

    constructor(
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      showLines: boolean,
    ) {
      this.#ctx = ctx;
      this.#width = width;
      this.#height = height;
      this.#dotsConfiguration = getDotsAnimationConfiguration();
      this.showLines = showLines;
      this.#lastTimestamp = 0;
      this.#timer = 0;
      this.#interval = 1000 / 60;

      this.createDots();
    }

    createDots() {
      for (let i = 0; i < this.#dotsConfiguration.nb; i++) {
        this.dots.push(new Dot(this.#ctx, this.#width, this.#height));
      }
    }

    calculateLines() {
      const {
        dotsLinkRadius,
        lineOpacityBoost,
        linkRadiusFromMouse,
      } = this.#dotsConfiguration;

      for (let i = 0; i < this.dots.length; i++) {
        const dot1 = this.dots[i];
        dot1.paint();

        if (dot1.y > this.#height - window.scrollY)
          continue;

        for (let j = i + 1; j < this.dots.length; j++) {
          const dot2 = this.dots[j];

          if (
            dot1.x - dot2.x < dotsLinkRadius &&
            dot1.x - dot2.x > -dotsLinkRadius &&
            dot1.y - dot2.y < dotsLinkRadius &&
            dot1.y - dot2.y > -dotsLinkRadius
          ) {
            if (
              dot1.x - mousePosition.x < linkRadiusFromMouse &&
              dot1.x - mousePosition.x > -linkRadiusFromMouse &&
              dot1.y - mousePosition.y < linkRadiusFromMouse &&
              dot1.y - mousePosition.y > -linkRadiusFromMouse
            ) {
              this.#ctx.beginPath();
              this.#ctx.moveTo(dot1.x, dot1.y);
              this.#ctx.lineTo(dot2.x, dot2.y);

              const distanceFromMouse =
                Math.sqrt(
                  (dot1.x - mousePosition.x) ** 2 +
                  (dot1.y - mousePosition.y) ** 2);

              let distanceRatio = distanceFromMouse / linkRadiusFromMouse;

              distanceRatio = Math.max(0, distanceRatio - 0.25);

              const colorLineFinal = lineGradient.map<GradientColor>((l) => (
                [l[0], l[1], l[2], 1 - lineOpacityBoost - distanceRatio]
              ));

              this.#ctx.strokeStyle = getGradientColor(
                distanceFromMouse,
                linkRadiusFromMouse,
                [colorLineFinal[0], colorLineFinal[1], colorLineFinal[2]],
              );

              this.#ctx.stroke();
              this.#ctx.closePath();
            }
          }
        }
      }
    }

    #setNextStarPositions() {
      for (const [i, star] of [
        this.shootingStar1, this.shootingStar2, this.shootingStar3,
      ].entries()) {
        if (star === null) continue;

        if (
          star.y <= 0 || star.y >= this.#height ||
          star.x <= 0 || star.x >= this.#width
        ) {
          // @ts-expect-error ts(7053)...
          this[`shootingStar${i + 1}`] = null;
        } else {
          star.x += star.vx;
          star.y += star.vy;
        }
      }
    }

    #setNextDotPositions() {
      // Don't animate the first dot; it will follow mouse
      for (const dot of this.dots.slice(Number(window.innerWidth >= 1100))) {
        if (dot.y <= 0 || dot.y >= this.#height) dot.vy *= -1;
        if (dot.x <= 0 || dot.x >= this.#width) dot.vx *= -1;

        dot.x += 2 * dot.vx;
        dot.y += dot.vy;
      }
    }

    #animateStars() {
      for (const [i, star] of [
        this.shootingStar1, this.shootingStar2, this.shootingStar3
      ].entries()) {
        if (star) star.paint();
        else if (Math.floor(Math.random() * this.#STAR_FREQ_ATTENUATOR) === 1) {
          // @ts-expect-error ts(7053)...
          const star = this[`shootingStar${i + 1}`] =
            new Dot(this.#ctx, this.#width, this.#height, true);

          star.vy += (11.5 * Math.random());

          const fromLeft = Math.random() >= 0.5;

          star.x = fromLeft ? 1 : this.#width - 1;

          star.vx = (
            this.#STAR_BASE_VELOCITY + (this.#STAR_VELOCITY_FACTOR * Math.random())
          ) * (fromLeft ? 1 : -1);

          star.radius = Math.max(0.5, Math.random() * this.#STAR_RADIUS_FACTOR);
        }
      }
    }

    animate(timestamp: number) {
      const deltaTime = timestamp - this.#lastTimestamp;
      this.#lastTimestamp = timestamp;

      if (this.#timer > this.#interval) {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);

        if (this.showLines) this.calculateLines();
        else this.dots.forEach((d) => { d.paint(); });

        this.#animateStars();

        this.#setNextDotPositions();
        this.#setNextStarPositions();
        this.#timer = 0;
      } else {
        this.#timer += deltaTime;
      }

      animation = requestAnimationFrame(this.animate.bind(this));
    }
  };


  let dotsAnimation = new DotsAnimation(ctx, canvas.width, canvas.height, showLines);

  window.addEventListener("mousemove", function (e) {
    if (window.innerWidth >= 1100) {  // Under this, there are no lines to connect
      dotsAnimation.dots[0].x = e.clientX;
      dotsAnimation.dots[0].y = e.clientY;
    }
  });

  dotsAnimation.animate(0);

  let previousHeight = window.innerHeight;
  let resizeTimeout: number;

  // Debounce window resizes so dots don't flicker due to random x/y position
  window.addEventListener("resize", function () {
    if (window.innerWidth < 500 && window.innerHeight !== previousHeight) return;
    previousHeight = window.innerHeight;

    this.clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      cancelAnimationFrame(animation);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      (dotsAnimation = (
        new DotsAnimation(ctx, canvas.width, canvas.height, showLines)
      )).animate(0);
    }, 250);
  });
};


