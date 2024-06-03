import React from "react";
import heart from "../assests/heart.png";
import clock from "../assests/clock.png";
import path from "../assests/Path.png";
import "./our.css"; // Ensure you import the CSS file

function Ourproject() {
  return (
    <div className="our">
      <p>Experts growts</p>
      <h3>Our Company Growth</h3>
      <div className="box">
        <div className="card">
          <img src={heart} alt="..."  className="cardimg"/>
          <p className="number">199 +</p>
          <p className="description">Satisfied Customers</p>
        </div>
        <div className="card">
          <img src={clock} alt="..." className="cardimg"/>
          <p className="number">1569 +</p>
          <p className="description">Projects Completed</p>
        </div>
        <div className="card">
          <img src={path} alt="..." className="cardimg"/>
          <p className="number">283 +</p>
          <p className="description">Awards Won</p>
        </div>
        <div className="card">
          <img src={path} alt="..." className="cardimg"/>
          <p className="number">75 +</p>
          <p className="description">New Clients</p>
        </div>
      </div>
    </div>
  );
}

export default Ourproject;
