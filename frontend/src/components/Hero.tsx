import "../css/Hero.css";

import { useScrollTo } from "../hooks/useScrollTo.tsx";
import { useState } from "react";
import { AnimatedButton } from "./AnimatedButton.tsx";

export const Hero: React.FC = () => {
  const [configs] = useState({
    configs: [{ targetId: "work", offset: -100 }],
  });

  const scrollTo = useScrollTo(configs);

  return (
    <>
      <div className="hero-content">
        <h1>{"Hello, I'm Brendan."}</h1>
        <h2 className="text-gray--dark mt-2">
          {"I'm a software engineer and AWS architect."}
        </h2>
        {/* prettier-ignore */}
        <AnimatedButton onClick={() => { scrollTo("work"); }} />
      </div>
    </>
  );
};
