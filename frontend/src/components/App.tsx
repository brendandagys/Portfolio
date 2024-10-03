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

export const App: React.FC = () => {
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
        <Hero />
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
      <div id="contact" className="mt-15 mb-8">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};
