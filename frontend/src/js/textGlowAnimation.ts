function getDistance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function renderTextShadow(
  e: MouseEvent | null = null,
  heroContentDiv: HTMLDivElement
) {
  const heroRect = heroContentDiv.getBoundingClientRect();
  const heroCenterX = heroRect.left + heroRect.width / 2;
  const heroCenterY = heroRect.top + heroRect.height / 2;

  let glowIntensity;
  if (e) {
    const distance =
      getDistance(e.clientX, e.clientY, heroCenterX, heroCenterY);

    const maxDistance = window.innerWidth / 3; // Can adjust scaling factor
    glowIntensity = Math.max(0, 1 - distance / maxDistance);
  } else {
    glowIntensity = 0;
  }

  const glowBlur = 20 + 140 * glowIntensity;  // Base blur: 20, maximum: 200
  const glowColor = `rgba(126, 96, 191, ${0.4 + 0.6 * glowIntensity})`;

  heroContentDiv.style.textShadow = `0 0 ${glowBlur}px ${glowColor}, 
                                     0 0 ${glowBlur * 1.5}px ${glowColor}, 
                                     0 0 ${glowBlur * 2}px #7e60bf`;
}

export const initializeTextGlowAnimation = () => {
  const heroContentDiv =
    document.querySelector<HTMLDivElement>('.hero-content__title');
  if (!heroContentDiv) return;

  renderTextShadow(null, heroContentDiv);

  setTimeout(() => {
    heroContentDiv.style.transition = "unset";

    window.addEventListener("mousemove", function (e) {
      renderTextShadow(e, heroContentDiv);
    });
  }, 1500);
};
