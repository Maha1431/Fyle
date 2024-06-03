import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../assests/1@2x.png";
import img1 from "../assests/2.png";
import img2 from "../assests/3.png";
import img3 from"../assests/screenshot.png"
import "./whatwedo.css";

function WhatWeDo() {
  return (
    <div className="what">
      <h6 className="heading">What We Do</h6>
      <div className="data">
        <h3>Services provide <br />for you</h3>
        <p>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque <br />
          vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br />
          feugiat et fermentum
        </p>
      </div>
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="img" src={img} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={img3} alt="Four slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={img2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WhatWeDo;
