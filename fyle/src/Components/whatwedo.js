import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../assests/1@2x.png";
import img1 from "../assests/2.png";
import img2 from "../assests/3.png";
import img3 from "../assests/screenshot.png";
import "./whatwedo.css";

function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="what">
      <h6 className="heading">What We Do</h6>
      <div className="data">
        <h3>Services provided <br />for you</h3>
        <p>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque <br />
          vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br />
          feugiat et fermentum
        </p>
      </div>
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <div
            className="carousel-item-container"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="img" src={hoveredIndex === 0 ? img3 : img} alt="First slide" />
            {hoveredIndex === 0 && (
              <div className="hover-content">
                <button onClick={() => window.open('https://fylehq.com', '_blank')}>Read more</button>
              </div>
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-item-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="img" src={hoveredIndex === 1 ? img3 : img1} alt="Second slide" />
            {hoveredIndex === 1 && (
              <div className="hover-content">
                <button onClick={() => window.open('https://fylehq.com', '_blank')}>Read more</button>
              </div>
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-item-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="img" src={hoveredIndex === 2 ? img3 : img2} alt="Third slide" />
            {hoveredIndex === 2 && (
              <div className="hover-content">
                <button onClick={() => window.open('https://fylehq.com', '_blank')}>Read more</button>
              </div>
            )}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WhatWeDo;
