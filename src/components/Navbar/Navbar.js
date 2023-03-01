import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container">
      <i class="fas fa-bars fa-2x" id="menu-icon"></i>
      <nav id="menu" class="hidden">
        <ul class="navbar">
          <li class="nav-list">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-list">
            <Link to="/services" class="nav-link">
              Services
            </Link>
          </li>
          <li class="nav-list">
            <Link to="/portfolio" class="nav-link">
              Portfolio
            </Link>
          </li>
          <li class="nav-list">
            <Link to="/about" class="nav-link">
              About Me
            </Link>
          </li>
          <li class="nav-list">
            <Link to="/contact" class="nav-link">
              Contact
            </Link>
          </li>
          <li class="nav-list">
            <a
              href="./resume/resume.pdf"
              download
              class="nav-link resume-download-button"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
