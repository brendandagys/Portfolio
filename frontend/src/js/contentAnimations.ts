const icons = [
  "icon-git",
  "icon-javascript",
  "icon-terraform",
  "icon-docker",
  "icon-aws",
  "icon-python",
  "icon-css",
  "icon-bootstrap",
  "icon-graphql",
  "icon-redis",
  "icon-postgresql",
  "icon-vue",
  "icon-k8",
  "icon-cpp",
  "icon-react",
  "icon-typescript",
  "icon-rust",
  "icon-django",
  "icon-nodejs",
  "icon-html"
];

const spinIcons = ["icon-k8", "icon-react", "icon-rust"];

function techIconsFadeIn(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      icons.forEach((icon, i) => {
        const iconElement =
          document.querySelector<HTMLImageElement>(`.${icon}`);

        if (iconElement) {
          if (spinIcons.includes(icon)) {
            iconElement.style.animationName = 'slow-bob-spin, fade-in';
            if (icon === "icon-k8")
              iconElement.style.animationDirection = "reverse, normal";
            iconElement.style.animationDelay = `0s, ${0.7 + i * .04}s`;
          } else {
            iconElement.style.animationName = 'slow-bobbing, fade-in';
            iconElement.style.animationDelay =
              `${Math.random() * 3}s, ${0.7 + i * .04}s`;
          }
        }
      });

      observer.unobserve(entry.target);
    }
  });
}

function aboutMeTextSlideInFromLeft(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const aboutCard = document.querySelector<HTMLDivElement>('.about-card');
      if (aboutCard) {
        aboutCard.style.animationName = 'slide-from-left';
        aboutCard.style.animationDelay = '0s';
      }

      observer.unobserve(entry.target);
    }
  });
}

export const initializeContentAnimations = () => {
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    (new IntersectionObserver(
      aboutMeTextSlideInFromLeft,
      { root: null, rootMargin: '0px', threshold: 0.5 })
    ).observe(aboutSection);

    (new IntersectionObserver(
      techIconsFadeIn, { root: null, rootMargin: '0px', threshold: 0.5 })
    ).observe(aboutSection);
  }
};
