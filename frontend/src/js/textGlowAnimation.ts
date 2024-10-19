import { mousePosition as mouse } from "./dotsAnimation";

function getDistance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}


let PHASE = 0;
const FREQUENCY = 0.015;


function renderTextShadow(
  heroContentDiv: HTMLDivElement
) {
  const heroRect = heroContentDiv.getBoundingClientRect();
  const heroCenterX = heroRect.left + heroRect.width / 2;
  const heroCenterY = heroRect.top + heroRect.height / 2;

  const distance = getDistance(mouse.x, mouse.y, heroCenterX, heroCenterY);

  const maxDistance = window.innerWidth / 3; // Scaling factor
  const glowIntensity = Math.max(0, 1 - distance / maxDistance);

  const glowIntensityWave = (Math.cos(PHASE) + 1) / 2;

  PHASE += FREQUENCY;

  if (PHASE > Math.PI * 2) {
    PHASE = 0;
  }

  // Base blur: 15, oscillating +/- 10
  const glowBlur = 10 + (10 * glowIntensityWave) + (140 * glowIntensity);
  const glowColor = `rgba(126, 96, 191, ${0.4 + 0.6 * glowIntensity})`;

  heroContentDiv.style.textShadow = `0 0 ${glowBlur}px ${glowColor}, 
                                     0 0 ${glowBlur * 1.5}px ${glowColor}, 
                                     0 0 ${glowBlur * 2}px #7e60bf`;
}


export const initializeTextGlowAnimation = () => {
  const heroContentDiv =
    document.querySelector<HTMLDivElement>('.hero-content__title');
  if (!heroContentDiv) return;

  renderTextShadow(heroContentDiv);

  setTimeout(() => {
    heroContentDiv.style.transition = "unset";

    setInterval(() => { renderTextShadow(heroContentDiv); }, 1000 / 60);
  }, 1500);
};
