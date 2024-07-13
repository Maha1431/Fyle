import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import heroImg from "../assests/hero@2x.png"; // Ensure the correct path
import "./navbar.css";
import ContactUsModal from "./ContctUsModel"; // Import the ContactUsModal component

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleContactUs = () => {
    // // Navigate to the ContactUsModal component
    // navigate("/contact-us");
    setShowModal(true); // Open the modal
  };

  return (
    <div className="container">
      <div className="first">
        <h6 className="heading">Award winning</h6>
        <h2 className="heading1">Digital Marketing Agency</h2>
        <p className="contents">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque <br/>vitae ante at elit fringilla ac at purus,
          Morbi sed lacus nec risus finibus <br />
          feugiat et fermentum
        </p>
        <button className="btn" onClick={handleContactUs}>Contact Us</button>
      </div>
      <div className="secondimg">
        <img src={heroImg} className="image" alt="heroImage" />
      </div>
      {showModal && <ContactUsModal handleClose={handleClose} />}
    </div>
  );
}

export default Navbar;
