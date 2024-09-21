import "../css/AboutSection.css";

import dopBadge from "../images/dop.png";
import ccpBadge from "../images/ccp.png";
import dvaBadge from "../images/dva.png";
import saaBadge from "../images/saa.png";
import sapBadge from "../images/sap.png";
import scsBadge from "../images/scs.png";
import soaBadge from "../images/soa.png";
import aws from "../images/aws-icon.png";
import bootstrap from "../images/bootstrap5-icon.png";
import cpp from "../images/cplusplus-icon.svg";
import css from "../images/css-icon.svg";
import django from "../images/django-icon.svg";
import docker from "../images/docker-icon.svg";
import git from "../images/git-icon.svg";
import graphql from "../images/graphql-icon.svg";
import html from "../images/html5-icon.svg";
import javascript from "../images/javascript-icon.svg";
import kubernetes from "../images/kubernetes-icon.svg";
import nodejs from "../images/node-js-icon.svg";
import postgresql from "../images/postgresql-icon.svg";
import python from "../images/python-icon.svg";
import react from "../images/react-icon.png";
import redis from "../images/redis-icon.svg";
import rust from "../images/rust-icon.png";
import terraform from "../images/terraform-icon.svg";
import typescript from "../images/typescript-icon.svg";
import vue from "../images/vue-icon.svg";

import { useEffect } from "react";

export const AboutSection: React.FC = () => {
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement>(".about-section-container img")
      .forEach((icon) => {
        icon.style.animationDelay = `${Math.random() * 3}s`; // eslint-disable-line @typescript-eslint/restrict-template-expressions
      });
  }, []);

  return (
    <>
      <section className="about-section-container">
        <div className="about-section">
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              {
                "I'm a passionate developer with a love for creating dynamic and innovative web applications. Let's build something amazing together!"
              }
            </p>
          </div>

          <div className="about-icon-clusters">
            <div className="about-icon-cluster-tech">
              <div className="about-icon-column">
                <img src={aws} alt="AWS icon" />
                <img src={bootstrap} alt="" />
                <img src={cpp} alt="" />
                <img src={django} alt="" />
              </div>
              <div className="about-icon-column">
                <img src={docker} alt="" />
                <img src={git} alt="" />
                <img src={graphql} alt="" />
                <img src={html} alt="" />
              </div>
              <div className="about-icon-column">
                <img src={css} alt="" />
                <img src={javascript} alt="" />
                <img src={kubernetes} className="spin-reverse" alt="" />
                <img src={react} className="spin" alt="" />
              </div>
              <div className="about-icon-column">
                <img src={nodejs} alt="" />
                <img src={postgresql} alt="" />
                <img src={python} alt="" />
                <img src={redis} alt="" />
              </div>
              <div className="about-icon-column">
                <img src={vue} alt="" />
                <img src={rust} className="spin" alt="" />
                <img src={terraform} alt="" />
                <img src={typescript} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="aws-section">
          <div>
            {/* <h2>AWS</h2> */}
            <p>
              {
                "I'm a huge AWS fan and use their services to build my projects. I hold the following certifications:"
              }
            </p>
          </div>
        </div>

        <div className="about-icon-cluster-aws">
          <div className="about-icon-row">
            <img src={sapBadge} alt="Solutions Architect - Professional" />
            <img src={dopBadge} alt="DevOps Engineer - Professional" />
            <img src={scsBadge} alt="Security - Specialty" />
            <img src={saaBadge} alt="Solutions Architect - Associate" />
            <img src={dvaBadge} alt="Developer - Associate" />
            <img src={soaBadge} alt="SysOps Administrator - Associate" />
            <img src={ccpBadge} alt="Cloud Practitioner - Foundational" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
