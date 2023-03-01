import React from "react";
import "./About.css";
import profileImage from '../../images/profile-images/sujon.jpg'

const About = () => {
  return (
    <div class="container">
      <div class="about-me">
        <div class="profile-image">
          <img src={profileImage} alt="Sujon" />
          <div class="social-media">
            <ul class="social-media-icons">
              <li class="social-media-icons-list">
                <a
                  class="social-media-icons-link"
                  href="https://www.facebook.com/sujon1day"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li class="social-media-icons-list">
                <a
                  class="social-media-icons-link"
                  href="https://www.linkedin.com/in/sujonpramanik/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li class="social-media-icons-list">
                <a
                  class="social-media-icons-link"
                  href="https://twitter.com/sujon1day"
                  target="_blank"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <li class="social-media-icons-list">
                  <a
                    class="social-media-icons-link"
                    href="https://github.com/sujon1day"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div class="about">
          <h2 class="about-title-h2">Hello, I'm</h2>
          <h1 class="about-title-h1">Sujon Pramanik</h1>
          <h3 class="about-title-h3">
            A <span style={{color: "#1cba59"}}>MERN Stack Developer</span> From
            <span style={{color: "#8067f0"}}>Bangladesh</span>
          </h3>
          <p class="about-text">
            I'm Web Application Developer based in World, and I'm very
            passionate and dedicated to my work. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Pariatur ratione minus laboriosam
            neque quasi accusamus obcaecati fugit vero non. Minima architecto
            earum totam consequuntur adipisci!
          </p>
          <button class="about-hire-me-button">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
