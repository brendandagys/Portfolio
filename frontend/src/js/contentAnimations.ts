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

let aboutSectionTopAnimationsRan = false;

function aboutSectionTopAnimations(
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
      if (aboutCard) aboutCard.style.animationName = "slide-from-left";

      observer.unobserve(entry.target);

      setTimeout(() => { aboutSectionTopAnimationsRan = true; }, 1000);
    }
  });
}

function aboutSectionAwsAnimations(
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

          const bounceDuration = (
            (aboutSectionTopAnimationsRan || window.innerWidth < 769) ? 0 : 1
          ) + i * 0.04;

          iconElement.style.animationDelay =
            `${bounceDuration + 0.2 + Math.random() * 3}s, ${bounceDuration}s`;
        }
      });

      const awsTitleElement =
        document.querySelector<HTMLDivElement>(".aws-icons-title-container");

      if (awsTitleElement) {
        awsTitleElement.style.animationName = "fade-in";

        if (window.innerWidth < 769) {
          awsTitleElement.style.animationDelay = '0';
        } else if (aboutSectionTopAnimationsRan) {
          awsTitleElement.style.animationDelay = '1.5s';
        } else {
          awsTitleElement.style.animationDelay = '2.5s';
        }
      }

      observer.unobserve(entry.target);
    }
  });
}

function contactSectionAnimations(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && window.innerWidth > 635) {
      const contactElement = document.querySelector<HTMLDivElement>("#contact");
      if (contactElement) {
        contactElement.style.animationName = "bounce";
        contactElement.style.animationDelay = "0.4s";
      }

      observer.unobserve(entry.target);
    }
  });
}

function navButtonHighlight(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navButtons =
        document.querySelectorAll<HTMLButtonElement>(".nav-button");

      navButtons.forEach((button) => {
        button.classList.remove("nav-button--active");
      });

      const activeButton = document.querySelector(`#${entry.target.id}-button`);
      if (activeButton) activeButton.classList.add("nav-button--active");
    }
  });
}

export function initializeContentAnimations() {
  const config = { root: null, rootMargin: "0px", threshold: 1 };

  const aboutTopSection = document.querySelector(".about-top-section");
  if (aboutTopSection) {
    (new IntersectionObserver(
      aboutSectionTopAnimations,
      { ...config, threshold: window.innerWidth < 769 ? 0.6 : 0.75 })
    ).observe(aboutTopSection);
  }

  const awsSection = document.querySelector(".about-icon-cluster-aws");
  if (awsSection) {
    (new IntersectionObserver(
      aboutSectionAwsAnimations,
      { ...config, threshold: window.innerWidth < 769 ? 0.1 : 0.75 }
    )).observe(awsSection);
  }

  const contactSection = document.querySelector("#contact");

  if (contactSection) {
    (new IntersectionObserver(
      contactSectionAnimations, { ...config, threshold: 1 })
    ).observe(contactSection);
  }

  // Highlight appropriate NavBar link
  const observerNav =
    new IntersectionObserver(
      navButtonHighlight,
      { ...config, threshold: window.innerWidth < 769 ? 0.3 : 0.6 }
    );

  const homeSection = document.querySelector("#home");
  const aboutSection = document.querySelector("#about");

  if (homeSection) observerNav.observe(homeSection);
  if (aboutSection) observerNav.observe(aboutSection);
  if (contactSection) observerNav.observe(contactSection);

  const observerNavProjects =
    new IntersectionObserver(
      navButtonHighlight,
      { ...config, threshold: window.innerWidth < 769 ? 0.15 : 0.2 }
    );

  const workSection = document.querySelector("#work");

  if (workSection) observerNavProjects.observe(workSection);
};
