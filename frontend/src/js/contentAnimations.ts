function techIconsFadeIn(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      icons.forEach((icon, i) => {
        const iconElement = document.querySelector<HTMLImageElement>(`.${icon}`);

        if (iconElement) {
          if (spinIcons.includes(icon)) {
            iconElement.style.animationName = 'slow-bob-spin, fade-in';
            if (icon === "icon-k8") iconElement.style.animationDirection = "reverse, normal";
            iconElement.style.animationDelay = `0s, ${i * .04}s`;
          } else {
            iconElement.style.animationName = 'slow-bobbing, fade-in';
            iconElement.style.animationDelay = `${Math.random() * 3}s, ${i * .04}s`;
          }
        }
      });

      observer.unobserve(entry.target);
    }
  });
}

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

export const initializeContentAnimations = () => {
  const observer = new IntersectionObserver(techIconsFadeIn, { root: null, rootMargin: '0px', threshold: 0.1 });

  const aboutSection = document.querySelector("#about");
  if (aboutSection) observer.observe(aboutSection);
};
