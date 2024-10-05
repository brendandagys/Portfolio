export interface DotsConfiguration {
  nb: number;
  distance: number;
  d_radius: number;
}

const dotsConfiguration: Record<number, DotsConfiguration> = {
  1600: {          // Minimum width
    nb: 400,       // Number of dots
    distance: 70,  // Maximum distance between dots to link them
    d_radius: 300, // Radius from mouse location within which dots will link
  },
  1300: {
    nb: 300,
    distance: 60,
    d_radius: 280,
  },
  1100: {
    nb: 250,
    distance: 55,
    d_radius: 250,
  },
  800: {
    nb: 200,
    distance: 0,
    d_radius: 0,
  },
  600: {
    nb: 175,
    distance: 0,
    d_radius: 0,
  },
  0: {
    nb: 125,
    distance: 0,
    d_radius: 0,
  }
};

export const getDotsAnimationConfiguration = (): DotsConfiguration => ({
  ...dotsConfiguration[
  Object.keys(dotsConfiguration) // Returns keys as strings, in increasing order
    .map(Number)
    .sort((a, b) => b - a) // Sort descending
    .find((width) => window.innerWidth >= width) ?? 0
  ]
});
