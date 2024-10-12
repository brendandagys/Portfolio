export function interpolateColor(
  color1: [number, number, number, number], // [r, g, b, a]
  color2: [number, number, number, number],
  factor: number,
): string {
  const r = Math.round(color1[0] + factor * (color2[0] - color1[0]));
  const g = Math.round(color1[1] + factor * (color2[1] - color1[1]));
  const b = Math.round(color1[2] + factor * (color2[2] - color1[2]));
  const a = color1[3] + factor * (color2[3] - color1[3]);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export type GradientColor = [number, number, number, number];

export function getGradientColor(
  distance: number,
  maxDistance: number,
  colors: [GradientColor, GradientColor, GradientColor]
): string {
  const normalizedDistance = Math.max(0, Math.min(distance / maxDistance, 1));

  let color1, color2, factor;

  if (normalizedDistance < 0.5) {
    factor = normalizedDistance * 2;
    [color1, color2] = [colors[0], colors[1]];
  } else {
    factor = (normalizedDistance - 0.5) * 2;
    [color1, color2] = [colors[1], colors[2]];
  }

  return interpolateColor(color1, color2, factor);
}

