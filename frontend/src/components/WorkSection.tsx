import "../css/WorkSection.css";
import cCompiler from "../images/c-compiler.png";
import vacationRentalSiteScreenshot from "../images/vacation-rental-site-screenshot.png";
import textEditorScreenshot from "../images/text-editor-screenshot.png";
import serverlessMergeSortScreenshot from "../images/serverless-merge-sort-screenshot.png";
import financesScreenshot from "../images/finances-app-screenshot.png";

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
                View Website
              </a>
            </div>
          </div>

          <div className="work-card">
            <div className="work-image-card">
              <img src={textEditorScreenshot} alt="Text editor" />
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
                  "A C compiler, written in C. Lexes program tokens, parses them \
                into an Abstract Syntax Tree using Pratt parsing, and generates \
                x86-64 assembly code."
                }
              </p>
              <a
                href="https://github.com/brendandagys/C-compiler"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
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
                provided input array. Deployed with AWS SAM and a Rust&nbsp;
                <a
                  href="https://github.com/brendandagys/Serverless-Merge-Sort-Frontend-Yew-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  front-end
                </a>
                &nbsp;using the Yew crate.
              </p>
              <a
                href="https://github.com/brendandagys/Serverless-Merge-Sort-with-AWS-SAM"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
