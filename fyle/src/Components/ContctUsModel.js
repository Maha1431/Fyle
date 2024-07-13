import React, { useState } from "react";
import axios from "axios";
import "./contactUsModal.css"; // Import CSS for styling

function ContactUsModal({ handleClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agree: false, // State for checkbox
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://getform.io/f/bolglqea", formData, {
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        alert("Form submitted successfully!");
        handleClose(); // Close modal on success
      })
      .catch(error => {
        alert("There was an error submitting the form. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="modal show" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Talk to Us</h5>
            <button
              type="button"
              className="close"
              onClick={handleClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Work email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5 formName">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-check mb-3"> {/* Checkboxes are wrapped in a form-check div */}
                <input
                  className="form-check-input checkbox" // Custom class for border-bottom checkbox
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="agree"> {/* Label for the checkbox */}
                  I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsModal;
