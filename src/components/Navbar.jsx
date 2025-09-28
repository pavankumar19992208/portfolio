import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // Close menu on route change
  }, [location]);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            J PAVANKUMAR
          </Link>
        </div>
        <div className={`nav-menu${open ? " active" : ""}`} id="nav-menu">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Experience
          </a>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
        <div
          className="nav-toggle"
          id="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
