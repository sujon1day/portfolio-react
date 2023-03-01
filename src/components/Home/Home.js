import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="banner">
        <h2 class="banner-title-h2">Hello, I'm</h2>
        <h1 class="banner-title-h1">Sujon Pramanik</h1>
        <h3 class="banner-title-h3">
          A <span style={{ color: "#1cba59" }}>MERN Stack Developer</span> From
          <span style={{ color: "#8067f0" }}>Bangladesh</span>
        </h3>
        <p class="banner-text">
          I'm Web Application Developer based in World, and I'm very passionate
          and dedicated to my work. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur ratione minus laboriosam neque quasi
          accusamus obcaecati fugit vero non. Minima architecto earum totam
          consequuntur adipisci!
        </p>
        <button class="hire-me-button">Hire Me</button>
      </div>
    </div>
  );
};

export default Home;
