import "../css/Hero.css";

import { useScrollTo } from "../hooks/useScrollTo.tsx";
import { useState } from "react";
import { AnimatedButton } from "./animated-button/AnimatedButton.tsx";

export const Hero: React.FC = () => {
  const [configs] = useState({
    configs: [{ targetId: "work", offset: -100 }],
  });

  const scrollTo = useScrollTo(configs);

  return (
    <>
      <div className="hero-content">
        <h1 className="hero-content__title">{"Hello, I'm Brendan."}</h1>

        <div className="hero-content__subtitle-container mb-2">
          <h2 className="text-gray--dark mt-2">
            {"I'm a software engineer and AWS architect."}
          </h2>
        </div>
        <div className="mt-5">
          <AnimatedButton
            customStylesContainer={{ width: "8.85rem" }}
            text="See my work"
            onClick={() => {
              scrollTo("work");
            }}
          />
        </div>
      </div>
    </>
  );
};
