import "../css/App.css";

import { heroAnimation } from "../js/heroCanvas.ts";
import canvasDotsBg from "../js/bgCanvas.ts";
import { ContactForm } from "./ContactForm.tsx";
import { AboutSection } from "./AboutSection.tsx";
import { WorkSection } from "./WorkSection.tsx";
import { Footer } from "./footer/Footer.tsx";
import Navbar from "./NavBar.tsx";

import { useScrollTo } from "../hooks/useScrollTo.tsx";
import { useEffect, useState } from "react";

window.addEventListener("load", function () {
  canvasDotsBg();
});

export const App: React.FC = () => {
  const [configs] = useState({
    configs: [{ targetId: "work", offset: -100 }],
  });

  const scrollTo = useScrollTo(configs);

  useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <>
      <Navbar />

      <div id="home" className="hero">
        <canvas className="canvas-1"></canvas>

        <div className="hero-content">
          <h1>{"Hello, I'm Brendan."}</h1>
          <h2 className="text-gray mt-1">
            {"I'm a software engineer and AWS architect."}
          </h2>
          <button
            onClick={() => {
              scrollTo("work");
            }}
            className="button mt-4"
          >
            See my work
          </button>
        </div>
      </div>

      <div className="main-bg">
        <div>
          <canvas className="canvas-2"></canvas>
        </div>
      </div>

      <div id="about" className="mt-10">
        <AboutSection />
      </div>
      <div id="work" className="mt-10">
        <WorkSection />
      </div>
      <div id="contact" className="mt-10 mb-10">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};