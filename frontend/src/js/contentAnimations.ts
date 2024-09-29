const techIcons = [
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
  "icon-html",
];

const spinIcons = ["icon-k8", "icon-react", "icon-rust"];

const awsIcons = [
  "icon-sap",
  "icon-dop",
  "icon-scs",
  "icon-saa",
  "icon-dva",
  "icon-soa",
  "icon-ccp",
];

function aboutSectionAnimations(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      techIcons.forEach((icon, i) => {
        const iconElement =
          document.querySelector<HTMLImageElement>(`.${icon}`);

        if (iconElement) {
          if (spinIcons.includes(icon)) {
            iconElement.style.animationName = "slow-bob-spin, fade-in";
            if (icon === "icon-k8")
              iconElement.style.animationDirection = "reverse, normal";
            iconElement.style.animationDelay = `0s, ${0.7 + i * 0.04}s`;
          } else {
            iconElement.style.animationName = "slow-bobbing, fade-in";
            iconElement.style.animationDelay =
              `${Math.random() * 3}s, ${0.7 + i * 0.04}s`;
          }
        }
      });

      const aboutCard = document.querySelector<HTMLDivElement>(".about-card");
      if (aboutCard) {
        aboutCard.style.animationName = "slide-from-left";
        aboutCard.style.animationDelay = "0s";
      }

      observer.unobserve(entry.target);
    }
  });
}

function awsAnimations(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      awsIcons.forEach((icon, i) => {
        const iconElement =
          document.querySelector<HTMLImageElement>('.' + icon);

        if (iconElement) {
          iconElement.style.animationName =
            "subtle-wobble, bounce-in-from-right";

          const bounceDuration = 1 + i * 0.04;
          iconElement.style.animationDelay =
            `${bounceDuration + 0.2 + Math.random() * 3}s, ${bounceDuration}s`;
        }
      });

      const awsTitleElement =
        document.querySelector<HTMLDivElement>(".aws-icons-title-container");

      if (awsTitleElement) {
        awsTitleElement.style.animationName = "fade-in";
        awsTitleElement.style.animationDelay = "2.5s";
      }

      observer.unobserve(entry.target);
    }
  });
}

export const initializeContentAnimations = () => {
  const config = { root: null, rootMargin: "0px", threshold: 0.5 };

  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    (new IntersectionObserver(aboutSectionAnimations, config))
      .observe(aboutSection);
  }

  const awsSection = document.querySelector(".aws-icons-title-container");
  if (awsSection) {
    (new IntersectionObserver(awsAnimations, { ...config, threshold: 0.8 }))
      .observe(awsSection);
  }
};
