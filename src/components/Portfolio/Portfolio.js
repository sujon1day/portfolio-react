import React from "react";
import "./Portfolio.css";
import portfolioProductOne from "../../images/portfolio-products-images/creative.png";
import portfolioProductTwo from "../../images/portfolio-products-images/beauty-salon.png";
import portfolioProductThree from "../../images/portfolio-products-images/online-store.png";

const Portfolio = () => {
  return (
    <div class="container">
      <div class="portfolio-section">
        <div class="portfolio-heading">
          <h3 class="portfolio-heading-title-h3">Portfolio</h3>
          <h2 class="portfolio-heading-title-h2">My Amazing Works</h2>
          <p class="portfolio-heading-text">
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div class="portfolio">
          <div class="portfolio-product">
            <div class="portfolio-product-image">
              <img src={portfolioProductOne} alt="Portfolio Product Image" />
            </div>
            <div class="portfolio-product-details">
              <h3 class="portfolio-product-details-title">Creative Website</h3>
              <p class="portfolio-product-details-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nihil magnam molestias sint?
              </p>
              <button class="portfolio-product-details-button">
                Visit Site
              </button>
            </div>
          </div>
          <div class="portfolio-product">
            <div class="portfolio-product-image">
              <img src={portfolioProductTwo} alt="Portfolio Product Image" />
            </div>
            <div class="portfolio-product-details">
              <h3 class="portfolio-product-details-title">Beauty Salon</h3>
              <p class="portfolio-product-details-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                architecto iure nemo omnis.
              </p>
              <button class="portfolio-product-details-button">
                Visit Site
              </button>
            </div>
          </div>
          <div class="portfolio-product">
            <div class="portfolio-product-image">
              <img src={portfolioProductThree} alt="Portfolio Product Image" />
            </div>
            <div class="portfolio-product-details">
              <h3 class="portfolio-product-details-title">Online Store</h3>
              <p class="portfolio-product-details-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                assumenda labore hic eaque.
              </p>
              <button class="portfolio-product-details-button">
                Visit Site
              </button>
            </div>
          </div>
          <div class="portfolio-product">
            <div class="portfolio-product-image">
              <img src={portfolioProductOne} alt="Portfolio Product Image" />
            </div>
            <div class="portfolio-product-details">
              <h3 class="portfolio-product-details-title">Creative Website</h3>
              <p class="portfolio-product-details-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nihil magnam molestias sint?
              </p>
              <button class="portfolio-product-details-button">
                Visit Site
              </button>
            </div>
          </div>
          <div class="portfolio-product">
            <div class="portfolio-product-image">
              <img src={portfolioProductOne} alt="Portfolio Product Image" />
            </div>
            <div class="portfolio-product-details">
              <h3 class="portfolio-product-details-title">Creative Website</h3>
              <p class="portfolio-product-details-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nihil magnam molestias sint?
              </p>
              <button class="portfolio-product-details-button">
                Visit Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
