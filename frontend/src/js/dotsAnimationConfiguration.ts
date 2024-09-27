export interface DotsConfiguration {
  nb: number;
  distance: number;
  d_radius: number;
}

const dotsConfiguration: Record<number, DotsConfiguration> = {
  1600: {          // Minimum width
    nb: 600,       // Number of dots
    distance: 70,  // Maximum distance between dots to link them
    d_radius: 300, // Radius from mouse location within which dots will link
  },
  1300: {
    nb: 575,
    distance: 60,
    d_radius: 280,
  },
  1100: {
    nb: 500,
    distance: 55,
    d_radius: 250,
  },
  800: {
    nb: 300,
    distance: 0,
    d_radius: 0,
  },
  600: {
    nb: 200,
    distance: 0,
    d_radius: 0,
  },
  0: {
    nb: 100,
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


// decided to turn off connecting dots under 1100px

// } else if (window.innerWidth > 650) {
//   dots = {
//     nb: 400,
//     distance: 50,
//     d_radius: 185,
//     array: [],
//   };
// } else if (window.innerWidth > 500) {
//   dots = {
//     nb: 325,
//     distance: 45,
//     d_radius: 170,
//     array: [],
//   };
// } else {
//   dots = {
//     nb: 270,
//     distance: 45,
//     d_radius: 140,
//     array: [],
//   };
// }
