import "../css/App.css";
import "../css/Animations.css";
import { initializeContentAnimations } from "../js/contentAnimations.ts";

import { dotsAnimation } from "../js/dotsAnimation.ts";
import { ContactForm } from "./ContactForm.tsx";
import { AboutSection } from "./AboutSection.tsx";
import { WorkSection } from "./WorkSection.tsx";
import { Footer } from "./footer/Footer.tsx";
import Navbar from "./NavBar.tsx";

import { useScrollTo } from "../hooks/useScrollTo.tsx";
import { useEffect, useState } from "react";

export const App: React.FC = () => {
  const [configs] = useState({
    configs: [{ targetId: "work", offset: -100 }],
  });

  const scrollTo = useScrollTo(configs);

  useEffect(() => {
    dotsAnimation(".canvas-1", true);
    dotsAnimation(".canvas-2", false);
    initializeContentAnimations();
  }, []);

  return (
    <>
      <Navbar />

      <div id="home" className="hero">
        <canvas className="canvas-1"></canvas>

        <div className="hero-content">
          <h1>{"Hello, I'm Brendan."}</h1>
          <h2 className="text-gray--dark mt-2">
            {"I'm a software engineer and AWS architect."}
          </h2>
          <a className="button-container">
            {/* prettier-ignore */}
            <span
              onClick={() => { scrollTo("work"); }}
              className="button-span mt-4"
            >
              <span className="button-span-inner">See my work</span>
            </span>
          </a>
        </div>
      </div>

      <div className="main-bg">
        <div>
          <canvas className="canvas-2"></canvas>
        </div>
      </div>

      <div id="about">
        <AboutSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact" className="mt-15 mb-10">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};
