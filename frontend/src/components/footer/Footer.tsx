import "../../css/Footer.css";
import { footerLinks } from "./footerLinks";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        {footerLinks.map(({ href, src, style }, index) => {
          return (
            <a key={index} href={href} target="_blank" rel="noreferrer">
              <div className="footer-hover-grow">
                <img src={src} style={style} />
              </div>
            </a>
          );
        })}
      </div>

      <div className="footer-row">
        <p className="text-gray mt-2">Brendan Dagys &copy; 2024</p>
      </div>
    </footer>
  );
};
