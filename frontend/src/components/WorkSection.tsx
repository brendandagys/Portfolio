import "../css/WorkSection.css";
import cCompiler from "../images/c-compiler.png";
// import vacationRentalSiteScreenshot from "../images/vacation-rental-site-screenshot.png"; // eslint-disable-line max-len
import textEditorGif from "../images/text-editor.gif";
import serverlessMergeSortScreenshot from "../images/serverless-merge-sort-screenshot.png"; // eslint-disable-line max-len
import financesScreenshot from "../images/finances-app-screenshot.png";
import { Pills } from "./Pills";

export const WorkSection: React.FC = () => {
  return (
    <>
      <section className="work-section">
        <h1 className="mb-5">My Work</h1>

        <div className="work-cards">
          <div className="work-card">
            <div className="work-image-card">
              <img src={textEditorGif} alt="Text editor" />
            </div>

            <div className="work-text-card">
              <h3>Text Editor</h3>
              <p>
                A fast and lightweight Unix-based text editor built with C, and
                then re-written in Rust with a full suite of unit tests.
              </p>
              <p>
                It was designed for ease-of-use, efficiency, safety, and future
                extensibility.
              </p>
              <p>
                <b>Features</b>: syntax highlighting, search, go-to-line, Vim
                keybindings, line numbers, an informative status bar, and user
                prompts.
              </p>
              <a
                href="https://medium.com/@brendandagys_91079/what-i-learned-from-building-a-text-editor-from-scratch-deea53fffc79"  // eslint-disable-line max-len
                target="_blank"
                rel="noreferrer"
              >
                Read my Medium article about the experience
              </a>
              <a
                href="https://github.com/brendandagys/Text-Editor-Rust"
                target="_blank"
                rel="noreferrer"
              >
                View the Rust code & binary on GitHub
              </a>
              <a
                href="https://github.com/brendandagys/Text-Editor-C"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 3 }}
              >
                View the C code & binary on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills content={["Rust", "C", "Make"]} />
            </div>
          </div>

          {/* <div className="work-card">
            <div className="work-image-card">
              <img
                src={vacationRentalSiteScreenshot}
                alt="Vacation rental site"
              />
            </div>

            <div className="work-text-card">
              <h3>Vacation Rental Website</h3>
              <p>
                A real vacation rental website built for a client who rents out
                their overseas property year-round.
              </p>
              <p>
                Deployed with a serverless Rust backend and using DynamoDB, this
                full-stack application costs less than $1/month to run!
              </p>
              <p>
                <b>Features</b>: booking management, administrator portal,
                custom-built calendar widget detailing current prices &
                availability, full support for 5 languages, contact form, tiled
                image gallery, video tour, and property/amenities information.
              </p>
              <a
                href="https://calaceite.holiday"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/brendandagys/Vacation-Rental-Property-Site"  // eslint-disable-line max-len
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 3 }}
              >
                View code on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills
                content={[
                  "TypeScript",
                  "React",
                  "Rust",
                  "AWS SAM",
                  "AWS Lambda",
                  "Bootstrap",
                  "Google Analytics",
                ]}
              />
            </div>
          </div> */}

          <div className="work-card">
            <div className="work-image-card">
              <img
                src={serverlessMergeSortScreenshot}
                alt="Serverless merge sort application"
              />
            </div>

            <div className="work-text-card">
              <h3>Serverless Merge Sort Application</h3>
              <p>
                A serverless application that performs a merge sort on the
                provided list of numbers. Created as a mini-project for a tech
                talk that I gave to a team of developers on the subject of Rust.
              </p>
              <p>
                Deployed using AWS SAM and with a front-end written in Rust
                (Yew)!
              </p>
              <a
                href={"https://sort.brendandagys.com"}
                target="_blank"
                rel="noreferrer"
              >
                Try the merge sort function!
              </a>
              <a
                href="https://github.com/brendandagys/Serverless-Merge-Sort-Frontend-Yew-App"   // eslint-disable-line max-len
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 22 }}
              >
                View the front-end code on GitHub
              </a>
              <a
                href="https://github.com/brendandagys/Serverless-Merge-Sort-with-AWS-SAM"   // eslint-disable-line max-len
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 3 }}
              >
                View the back-end code on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills
                content={["Rust", "AWS SAM", "AWS CloudFormation", "Yew"]}
              />
            </div>
          </div>

          <div className="work-card">
            <div className="work-image-card">
              <img
                src={cCompiler}
                style={{ maxHeight: 325 }}
                alt="C compiler"
              />
            </div>

            <div className="work-text-card">
              <h3>C Compiler</h3>
              <p>
                {
                  "A C compiler, written in C! It lexes program tokens, parses \
                  them into an Abstract Syntax Tree using Pratt parsing, and \
                  generates x86-64 assembly code."
                }
              </p>
              <a
                href="https://github.com/brendandagys/C-compiler"
                target="_blank"
                rel="noreferrer"
              >
                View code on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills content={["C", "Make", "Assembly"]} />
            </div>
          </div>

          <div className="work-card">
            <div className="work-image-card">
              <img src={financesScreenshot} alt="Finances tracker" />
            </div>

            <div className="work-text-card">
              <h3>Finances Tracker</h3>
              <p>
                One of my first full-stack projects from a few years ago, this
                was a tool I built to visualize, track, and manage my spending
                habits and asset growth.
              </p>
              <p>
                It ran on a Node.js back-end deployed via AWS Fargate, and had a
                React front-end served from CloudFront edge locations.
              </p>
              <a
                href="https://github.com/brendandagys/Finances-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                View code on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills
                content={[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "AWS Fargate",
                  "AWS CloudFront",
                  "AWS S3",
                  "Docker",
                  "Bootstrap",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
