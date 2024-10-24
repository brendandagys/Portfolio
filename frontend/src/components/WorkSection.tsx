import "../css/WorkSection.css";
import cCompiler from "../images/c-compiler.png";
import vacationRentalSiteScreenshot from "../images/vacation-rental-site-screenshot.png"; // eslint-disable-line max-len
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
              <img
                src={vacationRentalSiteScreenshot}
                alt="Vacation rental site"
              />
            </div>

            <div className="work-text-card">
              <h3>Vacation Rental Website</h3>
              <p>
                A vacation rental site that details the rental property and
                manages inquiries and calendar updates by an administrator.
                Built with a serverless Rust backend using DynamoDB, this
                full-stack application costs less than $1 to run each month.
              </p>
              <a
                href="https://calaceite.holiday"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>

              <div className="mt-4"></div>
              <Pills
                content={[
                  "TypeScript",
                  "React",
                  "Rust",
                  "AWS SAM",
                  "Bootstrap",
                  "Google Analytics",
                ]}
              />
            </div>
          </div>

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
                provided input array. Deployed using AWS SAM and a front-end
                written in Rust.
              </p>
              <a
                href={"https://sort.brendandagys.com"}
                target="_blank"
                rel="noreferrer"
              >
                Try the merge sort function!
              </a>
              <a
                href={
                  "https://github.com/brendandagys/" +
                  "Serverless-Merge-Sort-Frontend-Yew-App"
                }
                target="_blank"
                rel="noreferrer"
              >
                View the front-end on GitHub
              </a>
              <a
                href={
                  "https://github.com/brendandagys/" +
                  "Serverless-Merge-Sort-with-AWS-SAM"
                }
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 1 }}
              >
                View the back-end on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills
                content={["Rust", "AWS SAM", "AWS CloudFormation", "Yew"]}
              />
            </div>
          </div>

          <div className="work-card">
            <div className="work-image-card">
              <img src={textEditorGif} alt="Text editor" />
            </div>

            <div className="work-text-card">
              <h3>Text Editor</h3>
              <p>
                A text editor with syntax highlighting and search capabilities.
              </p>
              <a
                href="https://github.com/brendandagys/Text-Editor"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills content={["C", "Make"]} />
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
                View on GitHub
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
                A tool to manage, track and visualize spending habits. Built
                with a Node.js back-end deployed on AWS Fargate, and a React
                TypeScript front-end served from CloudFront edge locations.
              </p>
              <a
                href="https://github.com/brendandagys/Text-Editor"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>

              <div className="mt-4"></div>
              <Pills
                content={[
                  "React",
                  "TypeScript",
                  "Bootstrap",
                  "Node.js",
                  "Docker",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
