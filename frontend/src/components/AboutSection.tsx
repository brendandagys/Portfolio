/* eslint-disable max-len */

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
                <img src={aws} className="icon-aws" alt="AWS icon" />
                <img src={react} className="spin icon-react" alt="React icon" />
                {/* prettier-ignore */}
                <img src={terraform} className="icon-terraform" alt="Terraform icon" />
                <img src={cpp} className="icon-cpp" alt="C++ icon" />
              </div>
              <div className="about-icon-column">
                <img src={python} className="icon-python" alt="Python icon" />
                <img src={vue} className="icon-vue" alt="Vue icon" />
                <img src={docker} className="icon-docker" alt="Docker icon" />
                <img src={redis} className="icon-redis" alt="Redis icon" />
              </div>
              <div className="about-icon-column">
                <img src={rust} className="spin icon-rust" alt="Rust icon" />
                {/* prettier-ignore */}
                <img src={graphql} className="icon-graphql" alt="GraphQL icon" />
                {/* prettier-ignore */}
                <img src={kubernetes} className="spin-reverse icon-k8" alt="Kubernetes icon" />
                {/* prettier-ignore */}
                <img src={bootstrap} className="icon-bootstrap" alt="Bootstrap icon" />
              </div>
              <div className="about-icon-column">
                {/* prettier-ignore */}
                <img src={typescript} className="icon-typescript" alt="TypeScript icon" />
                <img src={django} className="icon-django" alt="Django icon" />
                {/* prettier-ignore */}
                <img src={postgresql} className="icon-postgresql" alt="PostgreSQL icon" />
                <img src={html} className="icon-html" alt="HTML icon" />
              </div>
              <div className="about-icon-column">
                {/* prettier-ignore */}
                <img src={javascript} className="icon-javascript" alt="JavaScript icon" />
                <img src={nodejs} className="icon-nodejs" alt="NodeJS icon" />
                <img src={git} className="icon-git" alt="Git icon" />
                <img src={css} className="icon-css" alt="CSS icon" />
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
