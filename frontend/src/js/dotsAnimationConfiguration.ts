export interface DotsConfiguration {
  nb: number;
  dotsLinkRadius: number;
  linkRadiusFromMouse: number;
}

const dotsConfiguration: Record<number, DotsConfiguration> = {
  1600: {                     // Minimum width
    nb: 400,                  // Number of dots
    dotsLinkRadius: 85,       // Maximum distance between dots to link them
    linkRadiusFromMouse: 270, // Radius from mouse within which dots will link
  },
  1300: {
    nb: 300,
    dotsLinkRadius: 85,
    linkRadiusFromMouse: 260,
  },
  1100: {
    nb: 250,
    dotsLinkRadius: 75,
    linkRadiusFromMouse: 250,
  },
  800: {
    nb: 175,
    dotsLinkRadius: 0,
    linkRadiusFromMouse: 0,
  },
  600: {
    nb: 150,
    dotsLinkRadius: 0,
    linkRadiusFromMouse: 0,
  },
  0: {
    nb: 80,
    dotsLinkRadius: 0,
    linkRadiusFromMouse: 0,
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
