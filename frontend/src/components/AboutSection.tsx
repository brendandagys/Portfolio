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

export const AboutSection: React.FC = () => {
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
                <img src={aws} alt="AWS icon" className="icon-aws" />
                <img src={react} className="spin icon-react" alt="" />
                <img src={terraform} alt="" className="icon-terraform" />
                <img src={cpp} alt="" className="icon-cpp" />
              </div>
              <div className="about-icon-column">
                <img src={python} alt="" className="icon-python" />
                <img src={vue} alt="" className="icon-vue" />
                <img src={docker} alt="" className="icon-docker" />
                <img src={redis} alt="" className="icon-redis" />
              </div>
              <div className="about-icon-column">
                <img src={rust} className="spin icon-rust" alt="" />
                <img src={graphql} alt="" className="icon-graphql" />
                <img src={kubernetes} className="spin-reverse icon-k8" alt="" />
                <img src={bootstrap} alt="" className="icon-bootstrap" />
              </div>
              <div className="about-icon-column">
                <img src={typescript} alt="" className="icon-typescript" />
                <img src={django} alt="" className="icon-django" />
                <img src={postgresql} alt="" className="icon-postgresql" />
                <img src={html} alt="" className="icon-html" />
              </div>
              <div className="about-icon-column">
                <img src={javascript} alt="" className="icon-javascript" />
                <img src={nodejs} alt="" className="icon-nodejs" />
                <img src={git} alt="" className="icon-git" />
                <img src={css} alt="" className="icon-css" />
              </div>
            </div>
          </div>
        </div>

        <div className="aws-section">
          <div>
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
