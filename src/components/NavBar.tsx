import React, { useState } from "react";
import { useScrollTo } from "../hooks/useScrollTo";
import "../css/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [configs] = useState({
    configs: [
      { targetId: "home", offset: -100 },
      { targetId: "about", offset: -125 },
      { targetId: "work", offset: -100 },
      { targetId: "contact", offset: -100 },
    ],
  });

  const scrollTo = useScrollTo(configs);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <button
            onClick={() => {
              scrollTo("home");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollTo("about");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollTo("work");
            }}
          >
            Work
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
            }}
          >
            Contact
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
