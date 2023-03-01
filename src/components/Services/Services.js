import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div class="container">
      <div class="services-section">
        <div class="services-heading">
          <h3 class="services-heading-title-h3">Services</h3>
          <h2 class="services-heading-title-h2">What I Do for Clients</h2>
          <p class="services-heading-text">
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div class="services">
          <div class="service">
            <div class="service-details-icon">
              <i class="fa-solid fa-pen fa-4x"></i>
            </div>
            <div class="service-details-body">
              <h2 class="service-details-body-title-h2">Web Design</h2>
              <h3 class="service-details-body-title-h3">
                Starts from <span style={{ color: "#f75023" }}>$299</span>
              </h3>
              <p class="service-details-body-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati sint quidem distinctio vero, animi dicta fugit quaerat
                alias architecto eum.
              </p>
            </div>
          </div>
          <div class="service">
            <div class="service-details-icon">
              <i class="fa-brands fa-chrome fa-4x"></i>
            </div>
            <div class="service-details-body">
              <h2 class="service-details-body-title-h2">
                Front End Development
              </h2>
              <h3 class="service-details-body-title-h3">
                Starts from <span style={{ color: "#f75023" }}>$599</span>
              </h3>
              <p class="service-details-body-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium animi ipsa non nihil officiis, repellendus iste illo
                eos ratione molestiae.
              </p>
            </div>
          </div>
          <div class="service">
            <div class="service-details-icon">
              <i class="fa-solid fa-laptop-code fa-4x"></i>
            </div>
            <div class="service-details-body">
              <h2 class="service-details-body-title-h2">API with Backend</h2>
              <h3 class="service-details-body-title-h3">
                Starts from <span style={{ color: "#f75023" }}>$999</span>
              </h3>
              <p class="service-details-body-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                tempore odio eligendi commodi totam suscipit amet ex obcaecati
                consequatur ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
