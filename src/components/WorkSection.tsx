import "../css/WorkSection.css";
import financesScreenshot from "../images/finances-app-screenshot.png";
import serverlessMergeSortScreenshot from "../images/serverless-merge-sort-screenshot.png";
import vacationRentalSiteScreenshot from "../images/vacation-rental-site-screenshot.png";

export const WorkSection: React.FC = () => {
  return (
    <>
      <section className="work-section">
        <h1 className="mb-5">My Work</h1>

        <div className="work-cards">
          <div className="work-card">
            <div className="work-image-card">
              <img src={financesScreenshot} alt="Project 1" />
            </div>
            <div className="work-text-card">
              <h3>C Compiler</h3>
              <p>
                {
                  "A C compiler, written in C. Lexes program tokens, parses them \
                into an Abstract Syntax Tree using Pratt parsing, and generates \
                x64-64 assembly code."
                }
              </p>
              <a
                href="https://github.com/brendandagys/C-compiler"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="work-card">
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
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </div>
            <div className="work-image-card">
              <img src={vacationRentalSiteScreenshot} alt="Project 2" />
            </div>
          </div>

          <div className="work-card">
            <div className="work-image-card">
              <img src={serverlessMergeSortScreenshot} alt="Project 3" />
            </div>
            <div className="work-text-card">
              <h3>Text Editor</h3>
              <p>
                A text editor with syntax highlighting and search capabilities.
              </p>
              <a
                href="https://github.com/brendandagys/Text-Editor"
                target="_blank"
                rel="noopener noreferrer"
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
