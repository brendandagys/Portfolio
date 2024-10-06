import "../css/App.css";
import "../css/Animations.css";
import { dotsAnimation } from "../js/dotsAnimation.ts";
import { initializeContentAnimations } from "../js/contentAnimations.ts";

import { AboutSection } from "./AboutSection.tsx";
import { ContactForm } from "./ContactForm.tsx";
import { Footer } from "./footer/Footer.tsx";
import { Hero } from "./Hero.tsx";
import { Navbar } from "./NavBar.tsx";
import { WorkSection } from "./WorkSection.tsx";

import { useEffect } from "react";
import { initializeTextGlowAnimation } from "../js/textGlowAnimation.ts";

export const App: React.FC = () => {
  useEffect(() => {
    dotsAnimation(".canvas", true);
    initializeContentAnimations();
    setTimeout(() => {
      initializeTextGlowAnimation();
    }, 1100);
  }, []);

  return (
    <>
      <Navbar />

      <div id="home" className="hero">
        <Hero />
      </div>

      <div className="main-bg">
        <div>
          <canvas className="canvas">
            Your browser does not support the canvas element.
          </canvas>
        </div>
      </div>

      <div id="about" className="mt-9">
        <AboutSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact" className="mt-15 mb-8">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};
